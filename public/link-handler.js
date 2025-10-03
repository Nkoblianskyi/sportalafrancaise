// /public/link-handler.js
(function () {
    // const TAG = "[link-handler]";
    // const VER = "v1.3.0";
    const TTL_DAYS = 90;
    const NOW = Date.now();

    const LS_KEYS = {
        UTM: "lh_utm_term",
        GCLID: "lh_gclid",
        TS: "lh_ts",
    };

    // ===== logs disabled =====
    const log = () => { };
    const warn = () => { };
    // =========================

    // log("init", VER);

    const readCookie = (name) => {
        const m = document.cookie.match(
            new RegExp("(^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)")
        );
        return m ? decodeURIComponent(m[2]) : "";
    };

    // _gcl_* cookie формат: "GCL.x.y" (де y — значення gclid/gbraid/wbraid).
    // Беремо останній сегмент після крапки.
    const parseGclFromCookie = (value) => {
        if (!value) return "";
        const parts = value.split(".");
        return parts[parts.length - 1] || "";
    };

    const days = (n) => n * 24 * 60 * 60 * 1000;

    function saveCache({ utm, gclid }) {
        if (utm) localStorage.setItem(LS_KEYS.UTM, utm);
        if (gclid) localStorage.setItem(LS_KEYS.GCLID, gclid);
        localStorage.setItem(LS_KEYS.TS, String(NOW));
        // log("cache saved:", { utm, gclid, ts: NOW });
    }

    function loadCache() {
        const ts = Number(localStorage.getItem(LS_KEYS.TS) || "0");
        if (!ts || NOW - ts > days(TTL_DAYS)) {
            // протерміновано
            return { utm: "", gclid: "" };
        }
        return {
            utm: localStorage.getItem(LS_KEYS.UTM) || "",
            gclid: localStorage.getItem(LS_KEYS.GCLID) || "",
        };
    }

    function getParams() {
        const sp = new URLSearchParams(location.search);
        let utm = sp.get("utm_term") || "";
        let gclid = sp.get("gclid") || sp.get("gbraid") || sp.get("wbraid") || "";

        // log("URL params (raw):", { utm_term: utm || null, gclid: gclid || null });

        // 1) Якщо в URL нічого — пробуємо _gcl_* cookies
        if (!gclid) {
            const gcl_aw = parseGclFromCookie(readCookie("_gcl_aw"));
            const gcl_dc = parseGclFromCookie(readCookie("_gcl_dc"));
            const gcl_gb = parseGclFromCookie(readCookie("_gcl_gb"));
            const gcl_au = parseGclFromCookie(readCookie("_gcl_au"));
            gclid = gcl_aw || gcl_dc || gcl_gb || gcl_au || "";
            // if (gclid) log("gclid from _gcl_* cookies:", gclid);
        }

        // 2) Кеш
        if (!utm && !gclid) {
            const cached = loadCache();
            if (cached.utm || cached.gclid) {
                // log("using cached:", cached);
                utm = utm || cached.utm;
                gclid = gclid || cached.gclid;
            }
        }

        // 3) Якщо тепер щось є — збережемо
        if (utm || gclid) saveCache({ utm, gclid });

        return { utm, gclid };
    }

    const isExternal = (a) => {
        try {
            return new URL(a.getAttribute("href"), location.href).hostname !== location.hostname;
        } catch {
            return false;
        }
    };

    function patchLink(a, idx, params) {
        const originalHref = a.getAttribute("href");
        if (!originalHref) return;

        const external = isExternal(a);
        // log(`[#${idx}] before:`, originalHref, "| external:", external ? "yes" : "no");
        if (!external) {
            // log(`[#${idx}] skip (internal)`);
            return;
        }

        let url;
        try {
            url = new URL(originalHref, location.href);
        } catch {
            // warn(`[#${idx}] invalid URL, skip:`, originalHref);
            return;
        }

        // braid → gclid, якщо наш gclid порожній
        const braid = url.searchParams.get("gbraid") || url.searchParams.get("wbraid");
        if (!params.gclid && braid) {
            url.searchParams.set("gclid", braid);
            // log(`[#${idx}] braid→gclid:`, braid);
        }

        let changed = false;
        if (params.utm) {
            url.searchParams.set("utm_term", params.utm);
            changed = true;
        }
        if (params.gclid) {
            url.searchParams.set("gclid", params.gclid);
            changed = true;
        }

        if (!changed) {
            // log(`[#${idx}] no params to set (empty)`);
            return;
        }

        a.setAttribute("href", url.toString());
        // log(`[#${idx}] final:`, a.getAttribute("href"));
    }

    function runLinkHandler() {
        // log("🔁 runLinkHandler start");
        const params = getParams();

        if (!params.utm && !params.gclid) {
            // warn("no utm_term/gclid available — nothing to append");
        }

        const links = document.querySelectorAll("a[href]");
        // log("found links:", links.length);
        links.forEach((a, idx) => patchLink(a, idx, params));
        // log("✅ runLinkHandler done");
    }

    const start = () => {
        try {
            runLinkHandler();
        } catch (e) {
            // console.error(TAG, "run error:", e);
        }
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
        // log("DOM ready → start()");
        start();
    } else {
        // log("wait DOMContentLoaded");
        addEventListener("DOMContentLoaded", () => {
            // log("DOMContentLoaded → start()");
            start();
        });
    }

    // Глобальний тригер (модалки, після рендеру і т.д.)
    window.updateLinkParams = () => {
        // log("⚡ updateLinkParams() called");
        start();
    };

    // Перезапуск на soft-навігаціях
    addEventListener("popstate", () => {
        // log("🔄 popstate (URL changed) → re-run");
        start();
    });
})();

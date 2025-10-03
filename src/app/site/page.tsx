
import FranceBettingPage from "@/components/components-site/france-betting-page";
import { MainSiteHeader } from "@/components/components-site/main-site-header";

import Script from "next/script";

export default function SitePage() {

    return (
        <>
            <MainSiteHeader />
            <Script
                src="/link-handler.js"
                strategy="beforeInteractive"
            />
            <div
                className="min-h-screen relative"
                style={{
                    backgroundImage: "url(/bg-2.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >       {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                <FranceBettingPage />
            </div>
        </>
    );
}
import FranceBettingPage from "@/components/components-site/france-betting-page";
import { MainSiteHeader } from "@/components/components-site/main-site-header";
import { PageBackgroundWrapper } from "@/components/components-site/page-background-wrapper";
import Script from "next/script";
import '../globals.css';


export default function SitePage() {
    return (
        <PageBackgroundWrapper>
            <MainSiteHeader />
            <Script src="/link-handler.js" strategy="beforeInteractive" />
            <FranceBettingPage />
        </PageBackgroundWrapper>
    );
}

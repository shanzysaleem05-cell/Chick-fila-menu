"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import StickyAd from "@/components/StickyAd";

const CONSENT_EVENT = "cfa-consent-change";

export default function ConsentScripts() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const syncConsent = () => setAccepted(localStorage.getItem("cookie-consent") === "accepted");
    syncConsent();
    window.addEventListener(CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_EVENT, syncConsent);
  }, []);

  if (!accepted) return null;

  return (
    <>
      <GoogleAnalytics gaId="G-3X1V1Y7Y7G" />
      <Script id="revbid-loader" src="https://prebid.revbid.net/23503/revbid.js" strategy="afterInteractive" />
      <StickyAd />
    </>
  );
}

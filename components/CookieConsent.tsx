"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after 1 second
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
      <div className="max-w-5xl mx-auto bg-[#1A1A1A] text-white rounded-2xl shadow-2xl border border-gray-700 p-5 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="font-bold text-base mb-1">🍪 We Use Cookies</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              We use cookies to analyze site traffic and serve personalized ads through{" "}
              <strong>Google AdSense</strong>. By clicking &quot;Accept,&quot; you consent to our use of
              cookies as described in our{" "}
              <Link href="/privacy-policy" className="text-[#DD0033] hover:underline font-medium">
                Privacy Policy
              </Link>
              . You can opt out of personalized ads at{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DD0033] hover:underline"
              >
                Google Ads Settings
              </a>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="text-sm font-bold bg-[#DD0033] hover:bg-[#B8002A] text-white px-5 py-2 rounded-xl transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

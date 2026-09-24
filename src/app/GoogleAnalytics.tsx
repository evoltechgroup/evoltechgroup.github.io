"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useConsent } from "@/context/ConsentContext";

const GA_MEASUREMENT_ID = "G-BT21FKPMCH";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const { consent } = useConsent();
  const analyticsEnabled = consent.preferences.analytics;
  // Tracks whether the GA script has already run its initial config so the
  // useEffect below never sends a duplicate page_view on the first load.
  const initializedRef = React.useRef(false);

  // Fire page-view on soft navigations — but skip the very first call because
  // onLoad already sends the initial config.
  useEffect(() => {
    if (!analyticsEnabled) return;
    if (!initializedRef.current) return; // wait until onLoad has run
    if (typeof window.gtag !== "function") return;
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: pathname });
  }, [pathname, analyticsEnabled]);

  if (!analyticsEnabled) return null;

  return (
    <Script
      id="ga-script"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      onLoad={() => {
        // gtag('js', new Date()) is required — without it GA4 never initializes.
        // This is the single authoritative initial config call.
        window.gtag("js", new Date());
        window.gtag("config", GA_MEASUREMENT_ID, { page_path: pathname });
        initializedRef.current = true;
      }}
    />
  );
}

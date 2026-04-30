"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
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

  // Fire page-view on soft navigations after GA is already loaded
  useEffect(() => {
    if (!analyticsEnabled) return;
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
        // gtag('js', new Date()) is required — without it GA4 never initializes
        window.gtag("js", new Date());
        window.gtag("config", GA_MEASUREMENT_ID, { page_path: pathname });
      }}
    />
  );
}

"use client";

import { Shield } from "lucide-react";
import { useConsent } from "@/context/ConsentContext";

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectAll } = useConsent();

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto bg-[#191b2b] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-5">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          {/* Text — icon inline with title on all screen sizes */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 mb-1">
              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <p className="text-white font-semibold text-sm sm:text-base">
                We value your privacy
              </p>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed pl-9">
              We use cookies to analyse site traffic via Google Analytics,
              helping us improve your experience. No data is collected unless
              you accept.{" "}
              {/* <a
                href="#"
                className="underline underline-offset-2 text-white/80 hover:text-white transition-colors"
              >
                Privacy Policy
              </a> */}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-row gap-2 flex-shrink-0 pl-9 sm:pl-0">
            <button
              onClick={rejectAll}
              className="px-5 py-2.5 rounded-xl border border-white/15 text-white/60 text-sm font-medium hover:bg-white/5 hover:text-white/80 transition-colors focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#181B2B] cursor-pointer"
            >
              Reject
            </button>
            <button
              onClick={acceptAll}
              className="px-5 py-2.5 rounded-xl bg-white text-[#181B2B] text-sm font-semibold hover:bg-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#181B2B] cursor-pointer"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

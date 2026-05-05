"use client";

import React, { useEffect, useState } from "react";
import { Settings, X, ShieldCheck, BarChart2 } from "lucide-react";
import { useConsent } from "@/context/ConsentContext";

export default function CookieSettingsModal() {
  const { consent, savePreferences } = useConsent();
  const [open, setOpen] = useState(false);
  const [analyticsOn, setAnalyticsOn] = useState(consent.preferences.analytics);

  // Sync toggle with latest stored value every time the modal opens
  const handleOpen = () => {
    setAnalyticsOn(consent.preferences.analytics);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = () => {
    savePreferences({ necessary: true, analytics: analyticsOn });
    setOpen(false);
  };

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Trigger — placed inline in the Footer */}
      <button
        onClick={handleOpen}
        className="flex items-center gap-1.5 text-[#AAAAAA] hover:text-white transition-colors text-xs cursor-pointer"
        aria-label="Open cookie settings"
      >
        <Settings size={13} strokeWidth={1.8} />
        <span>Settings</span>
      </button>

      {/* Backdrop + modal */}
      {open && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Cookie preferences"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Card */}
          <div className="relative z-10 w-full max-w-md bg-[#191b2b] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-base leading-tight">
                    Cookie Settings
                  </h2>
                  <p className="text-white/50 text-xs mt-0.5">
                    Manage your cookie preferences
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 flex flex-col gap-4">
              {/* Necessary — always on, non-interactive */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/8">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-white/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium">
                    Necessary Cookies
                  </p>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">
                    Required for the site to function. Cannot be disabled.
                  </p>
                </div>
                {/* Always-on pill */}
                <span className="flex-shrink-0 mt-0.5 text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/50 font-medium">
                  Always on
                </span>
              </div>

              {/* Analytics — toggleable */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/8">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BarChart2 className="w-4 h-4 text-white/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium">
                    Analytics Cookies
                  </p>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">
                    Help us understand how visitors interact with our site via
                    Google Analytics. No personal data is collected.
                  </p>
                </div>
                {/* Toggle */}
                <button
                  role="switch"
                  aria-checked={analyticsOn}
                  onClick={() => setAnalyticsOn((v) => !v)}
                  className={`flex-shrink-0 mt-0.5 relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#191b2b] cursor-pointer ${
                    analyticsOn ? "bg-white" : "bg-white/20"
                  }`}
                  aria-label="Toggle analytics cookies"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-[#191b2b] shadow-sm transition-transform duration-200 ${
                      analyticsOn ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
              <p className="text-white/40 cursor-pointer hover:text-white/70 text-xs underline underline-offset-2 transition-colors">
                Privacy Policy
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 rounded-xl border border-white/15 text-white/60 text-sm font-medium hover:bg-white/5 hover:text-white/80 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-5 py-2 rounded-xl bg-white text-[#181B2B] text-sm font-semibold hover:bg-white/90 transition-colors cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

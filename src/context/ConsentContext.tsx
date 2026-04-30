"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  ALL_ACCEPTED,
  ALL_REJECTED,
  ConsentPreferences,
  ConsentState,
  applyGtagConsent,
  getDefaultConsent,
  loadConsent,
  saveConsent,
} from "@/lib/consent";

interface ConsentContextValue {
  consent: ConsentState;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(getDefaultConsent);
  // Stays false until after the first useEffect — prevents banner flash
  // on returning visitors whose consent is already stored in localStorage.
  const [mounted, setMounted] = useState(false);

  // Hydrate from storage after mount (client-only)
  useEffect(() => {
    const stored = loadConsent();
    setConsent(stored);

    // If a previous decision exists, apply it to GA Consent Mode immediately
    if (stored.hasDecided) {
      applyGtagConsent(stored.preferences);
    }

    setMounted(true);
  }, []);

  const applyAndSave = useCallback((prefs: ConsentPreferences) => {
    const newState = saveConsent(prefs);
    setConsent(newState);
    applyGtagConsent(prefs);
  }, []);

  const acceptAll = useCallback(
    () => applyAndSave(ALL_ACCEPTED),
    [applyAndSave],
  );
  const rejectAll = useCallback(
    () => applyAndSave(ALL_REJECTED),
    [applyAndSave],
  );

  // Only show banner after hydration — avoids flash for returning visitors
  const showBanner = mounted && !consent.hasDecided;

  return (
    <ConsentContext.Provider
      value={{ consent, showBanner, acceptAll, rejectAll }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}

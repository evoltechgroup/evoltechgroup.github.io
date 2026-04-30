// GDPR Consent Management — types, storage helpers, and Consent Mode v2 signals

export const CONSENT_VERSION = "1.0";
export const CONSENT_KEY = "evoltech_cookie_consent";

export interface ConsentPreferences {
  necessary: true; // always on — cannot be disabled
  analytics: boolean; // Google Analytics (GA4)
}

export interface ConsentState {
  hasDecided: boolean;
  preferences: ConsentPreferences;
  timestamp: string; // ISO datetime of the decision
  version: string; // re-prompt when policy version changes
}

export function getDefaultConsent(): ConsentState {
  return {
    hasDecided: false,
    preferences: {
      necessary: true,
      analytics: false,
    },
    timestamp: "",
    version: CONSENT_VERSION,
  };
}

/** Load from localStorage; falls back to default if missing or version mismatch */
export function loadConsent(): ConsentState {
  if (typeof window === "undefined") return getDefaultConsent();
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return getDefaultConsent();
    const parsed = JSON.parse(raw) as ConsentState;
    // Re-prompt when the consent policy version changes
    if (parsed.version !== CONSENT_VERSION) return getDefaultConsent();
    return parsed;
  } catch {
    return getDefaultConsent();
  }
}

/** Persist consent to both localStorage and a first-party cookie (server-readable) */
export function saveConsent(preferences: ConsentPreferences): ConsentState {
  const state: ConsentState = {
    hasDecided: true,
    preferences,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };

  if (typeof window === "undefined") return state;

  localStorage.setItem(CONSENT_KEY, JSON.stringify(state));

  // Persisted cookie so server/middleware can read consent without JS
  const maxAge = 365 * 24 * 60 * 60; // 1 year
  document.cookie = [
    `${CONSENT_KEY}=${encodeURIComponent(JSON.stringify(state))}`,
    `max-age=${maxAge}`,
    "path=/",
    "SameSite=Lax",
  ].join("; ");

  return state;
}

/** Push a Consent Mode v2 update so GA/GTM respects the user's decision */
export function applyGtagConsent(preferences: ConsentPreferences): void {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (typeof w.gtag !== "function") return;

  w.gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
  });
}

export const ALL_ACCEPTED: ConsentPreferences = {
  necessary: true,
  analytics: true,
};

export const ALL_REJECTED: ConsentPreferences = {
  necessary: true,
  analytics: false,
};

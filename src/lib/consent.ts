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

/** Returns true when the parsed value has all required fields with correct types */
function isValidConsentState(v: unknown): v is ConsentState {
  if (!v || typeof v !== "object") return false;
  const s = v as Record<string, unknown>;
  if (typeof s.hasDecided !== "boolean") return false;
  if (typeof s.version !== "string") return false;
  const prefs = s.preferences;
  if (!prefs || typeof prefs !== "object") return false;
  const p = prefs as Record<string, unknown>;
  if (p.necessary !== true) return false;
  if (typeof p.analytics !== "boolean") return false;
  return true;
}

/** Load from localStorage; falls back to default if missing, corrupted, or version mismatch */
export function loadConsent(): ConsentState {
  if (typeof window === "undefined") return getDefaultConsent();
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return getDefaultConsent();
    const parsed: unknown = JSON.parse(raw);
    // Validate shape before trusting any field
    if (!isValidConsentState(parsed)) return getDefaultConsent();
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

  // Wrap every storage write in try/catch — storage may be blocked (quota,
  // private-browsing restrictions, etc.). The in-memory state is always returned
  // so the consent flow works even when persistence fails.
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable — in-memory state will still be used for this session
  }

  try {
    // Persisted cookie so server/middleware can read consent without JS
    const maxAge = 365 * 24 * 60 * 60; // 1 year
    const parts = [
      `${CONSENT_KEY}=${encodeURIComponent(JSON.stringify(state))}`,
      `max-age=${maxAge}`,
      "path=/",
      "SameSite=Lax",
    ];
    // Add Secure on HTTPS so the cookie is never sent over a plain-HTTP request
    if (location.protocol === "https:") parts.push("Secure");
    document.cookie = parts.join("; ");
  } catch {
    // Cookie write unavailable — localStorage copy is sufficient
  }

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

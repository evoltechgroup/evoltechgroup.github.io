export const SITE_NAME = "EvolTech";
export const SITE_DESCRIPTION =
  "We bring visionary ideas to life with cutting-edge tech, strategic consulting, and seamless back office solutions.";

// Ensure this matches the production domain (CNAME)
export const SITE_URL = "https://www.evoltechgroup.com";

export function absoluteUrl(path: string = ""): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const DEFAULT_OG_IMAGE = "/assets/og-default.svg";

import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "../seo.config";
import Section1 from "./Contents/Section1";
import Section2 from "./Contents/Section2";
import Section3 from "./Contents/Section3";
import Section4 from "./Contents/Section4";

export default function Careers() {
  return (
    <main className="bg-[#0B0F2B] text-white min-h-screen overflow-hidden">
      <Section1 />
      <Section4 />
      <Section2 />
      <Section3 />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Careers at EvolTech | Join Our US & India Technology Team",
  description:
    "Join EvolTech and work on cutting-edge AI, cloud, and full-stack projects across our US and India offices. We're hiring engineers, designers, and operations specialists.",
  alternates: {
    canonical: absoluteUrl("/careers"),
  },
  openGraph: {
    title: "Careers at EvolTech | Join Our US & India Technology Team",
    description:
      "Join EvolTech and work on cutting-edge AI, cloud, and full-stack projects across our US and India offices. We're hiring engineers, designers, and operations specialists.",
    url: absoluteUrl("/careers"),
    siteName: "EvolTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at EvolTech | Join Our US & India Technology Team",
    description:
      "Join EvolTech and work on cutting-edge AI, cloud, and full-stack projects across our US and India offices. We're hiring engineers, designers, and operations specialists.",
  },
};

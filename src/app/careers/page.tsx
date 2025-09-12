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
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join EvolTech to build AI, cloud, and full‑stack products with impact.",
  alternates: {
    canonical: absoluteUrl("/careers"),
  },
  openGraph: {
    title: `Careers | ${SITE_NAME}`,
    url: absoluteUrl("/careers"),
  },
};

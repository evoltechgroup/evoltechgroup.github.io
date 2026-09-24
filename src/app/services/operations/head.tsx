import { absoluteUrl, SITE_NAME } from "@/app/seo.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Services | Hybrid Captive & BPO Solutions | EvolTech",
  description:
    "Efficient operations support including hybrid captive models, 24/7 global operations, and process optimization across US and India offices.",
  alternates: {
    canonical: absoluteUrl("/services/operations"),
  },
  openGraph: {
    title: "Operations Services | Hybrid Captive & BPO Solutions | EvolTech",
    description:
      "Efficient operations support including hybrid captive models, 24/7 global operations, and process optimization across US and India offices.",
    url: absoluteUrl("/services/operations"),
    siteName: "EvolTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operations Services | Hybrid Captive & BPO Solutions | EvolTech",
    description:
      "Efficient operations support including hybrid captive models, 24/7 global operations, and process optimization across US and India offices.",
  },
};

export default function Head() {
  return null;
}

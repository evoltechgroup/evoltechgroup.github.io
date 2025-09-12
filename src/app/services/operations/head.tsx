import { absoluteUrl, SITE_NAME } from "@/app/seo.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Services",
  description:
    "Transform back office operations with efficient, scalable solutions by EvolTech.",
  alternates: {
    canonical: absoluteUrl("/services/operations"),
  },
  openGraph: {
    title: `Operations Services | ${SITE_NAME}`,
    url: absoluteUrl("/services/operations"),
  },
};

export default function Head() {
  return null;
}

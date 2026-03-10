import { absoluteUrl, SITE_NAME } from "../seo.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact EvolTech | Get in Touch With Our Technology Experts",
  description:
    "Contact EvolTech to discuss your technology, consulting, or operations needs. Reach our US and India teams for a free consultation.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contact EvolTech | Get in Touch With Our Technology Experts",
    description:
      "Contact EvolTech to discuss your technology, consulting, or operations needs. Reach our US and India teams for a free consultation.",
    url: absoluteUrl("/contact"),
    siteName: "EvolTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact EvolTech | Get in Touch With Our Technology Experts",
    description:
      "Contact EvolTech to discuss your technology, consulting, or operations needs. Reach our US and India teams for a free consultation.",
  },
};

export default function Head() {
  return null;
}

import { absoluteUrl, SITE_NAME } from "../seo.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact EvolTech for consulting, technology, and back office solutions.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    url: absoluteUrl("/contact"),
  },
};

export default function Head() {
  return null;
}

import { absoluteUrl, SITE_NAME } from "@/app/seo.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Services | AI, Cloud & Full-Stack Development | EvolTech",
  description:
    "End-to-end technology solutions including AI development, cloud engineering, UI/UX design, and full-stack development for FinTech, Banking, and Healthcare.",
  alternates: {
    canonical: absoluteUrl("/services/technology"),
  },
  openGraph: {
    title:
      "Technology Services | AI, Cloud & Full-Stack Development | EvolTech",
    description:
      "End-to-end technology solutions including AI development, cloud engineering, UI/UX design, and full-stack development for FinTech, Banking, and Healthcare.",
    url: absoluteUrl("/services/technology"),
    siteName: "EvolTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Technology Services | AI, Cloud & Full-Stack Development | EvolTech",
    description:
      "End-to-end technology solutions including AI development, cloud engineering, UI/UX design, and full-stack development for FinTech, Banking, and Healthcare.",
  },
};

export default function Head() {
  return null;
}

import React from "react";
import Section1 from "./Contents/Section1";
import Section2 from "./Contents/Section2";
import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "../seo.config";

const Products = () => {
  return (
    <main className="w-full h-full">
      <Section1 />
      <Section2 />
    </main>
  );
};

export default Products;

export const metadata: Metadata = {
  title: "Products | EvolTech Technology Solutions",
  description:
    "Explore EvolTech's innovative technology products built with AI, cloud, and modern tech for FinTech, Banking, Healthcare, and Retail industries.",
  alternates: {
    canonical: absoluteUrl("/products"),
  },
  openGraph: {
    title: "Products | EvolTech Technology Solutions",
    description:
      "Explore EvolTech's innovative technology products built with AI, cloud, and modern tech for FinTech, Banking, Healthcare, and Retail industries.",
    url: absoluteUrl("/products"),
    siteName: "EvolTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | EvolTech Technology Solutions",
    description:
      "Explore EvolTech's innovative technology products built with AI, cloud, and modern tech for FinTech, Banking, Healthcare, and Retail industries.",
  },
};

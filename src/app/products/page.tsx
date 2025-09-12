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
  title: "Products",
  description:
    "Explore EvolTech products built with AI, cloud, and modern tech.",
  alternates: {
    canonical: absoluteUrl("/products"),
  },
  openGraph: {
    title: `Products | ${SITE_NAME}`,
    url: absoluteUrl("/products"),
  },
};

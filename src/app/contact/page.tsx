"use client";
import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "../seo.config";
import Section1 from "./Content/Section1";
import Section2 from "./Content/Section2";
import Section3 from "./Content/Section3";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    if (window.location.hash === "#contact-form-section") {
      const el = document.getElementById("contact-form-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <main className="bg-[#0B0F2B] text-white overflow-hidden">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}

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

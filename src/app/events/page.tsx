import type { Metadata } from "next";
import { Suspense } from "react";
import Section1 from "./Content/Section1";
import Section2 from "./Content/Section2";
import { absoluteUrl, DEFAULT_OG_IMAGE } from "../seo.config";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore EvolTech conferences, internal events, and curated experiences across technology, healthcare, and leadership.",
  alternates: {
    canonical: absoluteUrl("/events"),
  },
  openGraph: {
    title: "Events | EvolTech",
    description:
      "Explore EvolTech conferences, internal events, and curated experiences across technology, healthcare, and leadership.",
    url: absoluteUrl("/events"),
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: "EvolTech Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | EvolTech",
    description:
      "Explore EvolTech conferences, internal events, and curated experiences across technology, healthcare, and leadership.",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
};

const EventsPage = () => {
  return (
    <main className="bg-[#0B0F2B] text-white overflow-hidden">
      <Suspense
        fallback={
          <div className="min-h-[75vh] bg-[#0B0F2B]" aria-hidden="true" />
        }
      >
        <Section1 />
      </Suspense>
      <Suspense
        fallback={<div className="min-h-[85vh] bg-white" aria-hidden="true" />}
      >
        <Section2 />
      </Suspense>
    </main>
  );
};

export default EventsPage;

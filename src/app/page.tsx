import type { Metadata } from "next";
import Script from "next/script";
import { absoluteUrl, SITE_NAME } from "./seo.config";
import ServicesSection from "../components/services/ServicesSection";
import Clients from "./about/Contents/Clients";
import JoinOurTeam from "./about/components/JoinOurTeam";
import Testimonials from "./ui/Testimonials";
import Section1 from "./home/Content/Section1";
import EventSection from "./events/eventSection";
import { getActiveEventSchemas } from "./events/event-seo";

export default function HomePage() {
  const activeEvents = getActiveEventSchemas();

  return (
    <main className="bg-[#0B0F2B] text-white min-h-screen overflow-hidden">
      {activeEvents.map((event, index) => (
        <Script
          key={`schema-event-${index}`}
          id={`schema-event-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(event),
          }}
        />
      ))}
      <Section1 />
      <EventSection />
      <ServicesSection />
      <Clients />
      <Testimonials type="home" />
      <JoinOurTeam />
    </main>
  );
}

export const metadata: Metadata = {
  title: "EvolTech | AI & Full-Stack Technology Consulting | US & India",
  description:
    "EvolTech delivers AI, cloud, and full-stack technology solutions for FinTech, Banking, Healthcare, and Retail. 10+ years of innovation. US & India offices.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "EvolTech | AI & Full-Stack Technology Consulting",
    description:
      "EvolTech delivers AI, cloud, and full-stack technology solutions for FinTech, Banking, Healthcare, and Retail.",
    url: absoluteUrl("/"),
    siteName: "EvolTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EvolTech | AI & Full-Stack Technology Consulting",
    description:
      "EvolTech delivers AI, cloud, and full-stack technology solutions for FinTech, Banking, Healthcare, and Retail.",
  },
};

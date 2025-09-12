import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "./seo.config";
import ServicesSection from "../components/services/ServicesSection";
import Clients from "./about/Contents/Clients";
import JoinOurTeam from "./about/components/JoinOurTeam";
import Testimonials from "./ui/Testimonials";
import Section1 from "./home/Content/Section1";
import EventSection from "./events/eventSection";

export default function HomePage() {
  return (
    <main className="bg-[#0B0F2B] text-white min-h-screen overflow-hidden">
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
  title: "Evoltech",
  description:
    "EvolTech builds AI, cloud and full‑stack solutions to turn visionary ideas into reality.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: `Evoltech | ${SITE_NAME}`,
    url: absoluteUrl("/"),
  },
};

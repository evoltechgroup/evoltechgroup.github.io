"use client";
import ServicesSection from "../components/services/ServicesSection";
import Clients from "./about/Contents/Clients";
import JoinOurTeam from "./about/components/JoinOurTeam";
import Testimonials from "./ui/Testimonials";
import Section1 from "./home/Content/Section1";

export default function HomePage() {
  return (
    <main className="bg-[#0B0F2B] text-white min-h-screen overflow-hidden">
      <Section1 />
      <ServicesSection />
      <Clients />
      <Testimonials type="home" />

      <JoinOurTeam />
    </main>
  );
}

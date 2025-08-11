import Section2 from "./Contents/Section2";
import Section3 from "./Contents/Section3";
import Testimonials from "../ui/Testimonials";
import Section1 from "./Contents/Section1";
import JoinOurTeam from "./components/JoinOurTeam";
import Founder from "./Contents/Founder";
import Clients from "./Contents/Clients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "We turn bold ideas into reality with AI, cloud, and full-stack solutions. With 25+ years of leadership and a global team 55% women, we drive innovation across finance, retail, insurance, and healthcare from the US and India.",
};

export default function About() {
  return (
    <main className="bg-[#0B0F2B] text-white font-gilroy min-h-screen overflow-hidden">
      <Section1 />
      <Section2 />
      <Founder />
      <Section3 />
      <Clients />
      <Testimonials type="about" />
      <JoinOurTeam />
    </main>
  );
}

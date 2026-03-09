import Section2 from "./Contents/Section2";
import Section3 from "./Contents/Section3";
import Testimonials from "../ui/Testimonials";
import Section1 from "./Contents/Section1";
import JoinOurTeam from "./components/JoinOurTeam";
import Founder from "./Contents/Founder";
import Clients from "./Contents/Clients";
import { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "../seo.config";

export const metadata: Metadata = {
  title: "About EvolTech | 10+ Years of Technology & Operations Innovation",
  description:
    "Learn about EvolTech — a global technology and operations firm with 10+ years of experience, 55% women-led workforce, and offices in the US and India.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    title: "About EvolTech | 10+ Years of Technology & Operations Innovation",
    description:
      "Learn about EvolTech — a global technology and operations firm with 10+ years of experience, 55% women-led workforce, and offices in the US and India.",
    url: absoluteUrl("/about"),
    siteName: "EvolTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About EvolTech | 10+ Years of Technology & Operations Innovation",
    description:
      "Learn about EvolTech — a global technology and operations firm with 10+ years of experience, 55% women-led workforce, and offices in the US and India.",
  },
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

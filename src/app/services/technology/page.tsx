import React from "react";
import Section2 from "./Contents/Section2";
import Section4 from "./Contents/Section4";
import Section3 from "./Contents/Section3";
import BgSection from "./Contents/BgSection";
import Section1 from "./Contents/Section1";
import LetsGrow from "@/app/services/components/LetsGrow";
import Testimonials from "@/app/ui/Testimonials";
import VisiontoVictory from "./Contents/visiontoVictory";
import Mastering from "./Contents/mastering";

const Technology = () => {
  return (
    <main className="h-full w-full overflow-hidden">
      <BgSection />
      <Section2 />
      <Section1 />
      <Section3 />
      <VisiontoVictory />
      <Section4 />
      <Mastering />
      <LetsGrow
  description={
    <>
    Ready to harness technology that wins? <br/>
Contact us to explore how our solutions can drive your success. 
    </>
  }
/>
      <Testimonials />
    </main>
  );
};

export default Technology;

import React from "react";
import Section2 from "./Contents/Section2";
import Testimonials from "@/app/ui/Testimonials";
import Section1 from "./Contents/Section1";
import LetsGrow from "./Contents/LetsGrow";
import WhyEvoltech from "./Contents/WhyEvoltech";

const Consulting = () => {
  return (
    <main className="bg-[#0B0F2B] text-white font-gilroy h-full w-full overflow-hidden">
      <Section1 />
      <Section2 />
      <WhyEvoltech />
      <LetsGrow />
      <Testimonials />
    </main>
  );
};

export default Consulting;

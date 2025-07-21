import React from "react";
import Section2 from "./Contents/Section2";
import Testimonials from "@/app/ui/Testimonials";
import Section1 from "./Contents/Section1";
import LetsGrow from "./Contents/LetsGrow";

const Consulting = () => {
  return (
    <main className="bg-[#0B0F2B] text-white font-gilroy min-h-screen">
      <Section1 />
      <Section2 />
      <LetsGrow />
      <Testimonials />
    </main>
  );
};

export default Consulting;

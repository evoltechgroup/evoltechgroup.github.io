import React from "react";
import Section3 from "./Contents/Section3";
import Section2 from "./Contents/Section2";
import Testimonials from "@/app/ui/Testimonials";
import Section1 from "./Contents/Section1";

const Consulting = () => {
  return (
    <main className="bg-[#0B0F2B] text-white font-gilroy min-h-screen">
      <Section1 />
      <Section2 />
      <Section3 />
      <Testimonials />
    </main>
  );
};

export default Consulting;

import React from "react";
import Section1 from "./Content/Section1";
import Section2 from "./Content/Section2";
import Section3 from "./Content/Section3";
import LetsGrow from "../consulting/Contents/LetsGrow";
import Testimonials from "@/app/ui/Testimonials";

const Operations = () => {
  return (
    <main className="overflow-hidden w-full h-full">
      <Section1 />
      <Section2 />
      <Section3 />
      <LetsGrow />
      <Testimonials />
    </main>
  );
};

export default Operations;

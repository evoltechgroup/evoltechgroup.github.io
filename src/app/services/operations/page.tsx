import React from "react";
import Section1 from "./Content/Section1";
import Section2 from "./Content/Section2";
import Section3 from "./Content/Section3";
import LetsGrow from "@/app/services/components/LetsGrow";
import Testimonials from "@/app/ui/Testimonials";

const Operations = () => {
  return (
    <main className="overflow-hidden w-full h-full">
      <Section1 />
      <Section2 />
      <Section3 />
      <LetsGrow 
      description= {
        <>
        Transform your back office operations with EvolTech’s innovative and efficient solutions.
         Let us handle the details so you can focus on what matters most—growing your business. 
        </>
      }
      />
     <Testimonials type="operations" />

    </main>
  );
};

export default Operations;

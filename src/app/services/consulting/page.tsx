import React from "react";
import Section2 from "./Contents/Section2";
import Testimonials from "@/app/ui/Testimonials";
import Section1 from "./Contents/Section1";
import LetsGrow from "@/app/services/components/LetsGrow";
import WhyEvoltech from "./Contents/WhyEvoltech";

const Consulting = () => {
  return (
    <main className="bg-white text-white font-gilroy h-full w-full overflow-hidden  ">
      <Section1 />
      <Section2 />
      <WhyEvoltech />
      <LetsGrow
        description={
          <>
            Ready to take your business to the next level? Contact us today to
            learn how our consulting services can help you achieve innovation,
            efficiency, and lasting growth.
          </>
        }
      />
      <Testimonials type="consulting" />
    </main>
  );
};

export default Consulting;

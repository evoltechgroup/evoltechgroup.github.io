+"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import Section2 from "./Contents/Section2";
import Section4 from "./Contents/Section4";
import Section3 from "./Contents/Section3";
import BgSection from "./Contents/BgSection";
import Section1 from "./Contents/Section1";
import LetsGrow from "@/app/services/components/LetsGrow";
import Testimonials from "@/app/ui/Testimonials";
import VisiontoVictory from "./Contents/visiontoVictory";
import Mastering from "./Contents/mastering";
import Modal from "@/app/events/Model";
import GrowAtlPopup from "@/app/events/Popup/Atea";

const Technology = () => {
  return (
    <main className="h-full w-full overflow-hidden">
      <Script
        id="schema-service-technology"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Technology Consulting",
            provider: {
              "@type": "Organization",
              name: "EvolTech",
              url: "https://www.evoltechgroup.com",
            },
            areaServed: ["US", "IN"],
            description:
              "Full-stack, AI, and cloud engineering services for FinTech, Banking, Healthcare, and Retail industries.",
          }),
        }}
      />
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
            Ready to harness technology that wins? <br />
            Contact us to explore how our solutions can drive your success.
          </>
        }
      />
      <Testimonials type="technology" />
    </main>
  );
};

export default Technology;

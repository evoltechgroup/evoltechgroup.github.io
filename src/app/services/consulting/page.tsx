import React from "react";
import Script from "next/script";
import Section2 from "./Contents/Section2";
import Testimonials from "@/app/ui/Testimonials";
import Section1 from "./Contents/Section1";
import LetsGrow from "@/app/services/components/LetsGrow";
import WhyEvoltech from "./Contents/WhyEvoltech";
import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/app/seo.config";
// import EventCard from "@/app/events/events";
// import Innov from "@/assets/images/Events/Innov.png";
const Consulting = () => {
  return (
    <main className="bg-white text-white font-gilroy h-full w-full overflow-hidden  ">
      <Script
        id="schema-service-consulting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Business Consulting",
            provider: {
              "@type": "Organization",
              name: "EvolTech",
              url: "https://www.evoltechgroup.com",
            },
            areaServed: ["US", "IN"],
            description:
              "Strategic consulting services to help FinTech, banking, and healthcare companies grow, scale, and optimize operations with 25+ years of industry leadership.",
          }),
        }}
      />
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

export const metadata: Metadata = {
  title:
    "Consulting Services | Strategic Business & Technology Consulting | EvolTech",
  description:
    "Strategic consulting services to help FinTech, banking, and healthcare companies grow, scale, and optimize operations with 25+ years of industry leadership.",
  alternates: {
    canonical: absoluteUrl("/services/consulting"),
  },
  openGraph: {
    title:
      "Consulting Services | Strategic Business & Technology Consulting | EvolTech",
    description:
      "Strategic consulting services to help FinTech, banking, and healthcare companies grow, scale, and optimize operations with 25+ years of industry leadership.",
    url: absoluteUrl("/services/consulting"),
    siteName: "EvolTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Consulting Services | Strategic Business & Technology Consulting | EvolTech",
    description:
      "Strategic consulting services to help FinTech, banking, and healthcare companies grow, scale, and optimize operations with 25+ years of industry leadership.",
  },
};

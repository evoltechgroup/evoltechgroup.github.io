"use client";
import React from "react";
import EventPopup from "../components/EventPopup";
import EventDescription from "../components/EventDescription";
import { SiiaIcon } from "@/assets/events";
import SiiaDubai1 from "@/assets/images/Events/siia/siia dubai/siia-dubai1.png";
import SiiaDubai2 from "@/assets/images/Events/siia/siia dubai/siia-dubai2.png";
import SiiaDubai3 from "@/assets/images/Events/siia/siia dubai/siia-dubai3.png";
import SiiaBanner from "@/assets/images/Events/siia/siia dubai/siia-dubai-banner.png";
import SiiaMobileBanner from "@/assets/images/Events/siia/siia dubai/siia-dubai-mobile-banner.png";

interface SiiaDubaiPopupProps {
  onClose: () => void;
}

const SiiaDubaiPopup = ({ onClose }: SiiaDubaiPopupProps) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <EventPopup
      onClose={onClose}
      hero={{
        containerHeight: "h-[147px]",
        backgroundImage: isMobile ? SiiaMobileBanner.src : SiiaBanner.src,
        logo: "",
        title: " ",
        date: " ",
        location: "",
        subtitle: "",
      }}
      customSections={[
        {
          order: 0, // Right after hero, before other sections
          content: isMobile ? (
            <div className="px-4 py-4 text-center">
              <img
                src={SiiaIcon.src}
                alt="SIIA Logo"
                className="h-12 mx-auto mb-3"
              />
              <p className="text-[#054D88] font-semibold text-base mb-1">
                SIIA Dubai International Conference
              </p>
              <p className="text-[#F47937] font-semibold text-base mb-3">
                January 26-28 | Dubai, UAE
              </p>
              <div className="w-full h-[1px] bg-gray-300 mt-2"></div>
            </div>
          ) : null,
        },
        {
          order: 0.5, // After hero section
          content: (
            <EventDescription
              blocks={[
                {
                  text: "Join leading self-insurance, healthcare, and captive insurance executives from around the world at SIIA's 2026 International Conference in Dubai, UAE, for what promises to be a truly unique event.",
                  className:
                    "text-[#212121] lg:text-[#F47937] font-medium text-base lg:text-lg px-6 lg:px-14",
                },
              ]}
            />
          ),
        },
      ]}
      imageGrid={{
        // title: "Featured Topics",
        columns: 3,
        images: [
          {
            src: SiiaDubai3.src,
            alt: "Topic 1",
            // caption: "Global Trends",
          },
          {
            src: SiiaDubai2.src,
            alt: "Topic 2",
            // caption: "Innovation",
          },
          {
            src: SiiaDubai1.src,
            alt: "Topic 3",
            // caption: "Networking",
          },
        ],
      }}
      description={{
        // title: "Join us in Dubai",
        blocks: [
          {
            text: "Well-established as a gateway to the Middle East, Africa, and South Asia, Dubai is a regional hub for insurance and reinsurance companies. It is uniquely positioned to support the expanding interests of self-insurance, especially as captives for energy exposures seek to diversify into benefits and other lines. Additionally, attendees will benefit from the expected presence of prominent international and regional third-party administrators (TPAs) utilizing AI-enabled platforms, as well as significant self-insurance operations established by major local companies and US multinational firms.",
            className:
              "text-center md:text-start text-[#212121] font-medium text-sm md:text-base px-4 md:px-6 lg:px-8",
          },
        ],
      }}
      cta={{
        text: "More Details",
       
        href: "https://www.siia.org/i4a/pages/index.cfm?pageid=8016",
        external: true,
      }}
      sectionOrder={["hero", "imageGrid", "description", "cta"]}
    />
  );
};

export default SiiaDubaiPopup;

"use client";
import React from "react";
import EventPopup from "../components/EventPopup";
import { SiiaIcon } from "@/assets/events";
import Healthcare from "@/assets/images/Events/siia/siia heathcare/siia-healthcare-banner.png";

interface HealthcarePopupProps {
  onClose: () => void;
}

const HealthcarePopup = ({ onClose }: HealthcarePopupProps) => {
  return (
    <EventPopup
      onClose={onClose}
      hero={{
        containerHeight: "h-[240px] lg:h-[386px]",
        backgroundImage: Healthcare.src,
        logo: SiiaIcon.src,
        title: "",
        date: "February 25-26, 2026",
        location: "Jacksonville, FL",
        subtitle: "Healthcare Innovation",
        bgPosition: "center",
        bgSize: "cover",
      }}
      description={{
        title: "Forum Overview",
        titleClassName:
          "text-xl sm:text-2xl font-semibold text-gray-900 text-start px-4 md:px-6 lg:px-6",
        blocks: [
          {
            text: "Federal legislation and regulations pertaining to price transparency have provided deeper access to health claim costs and prescription drug costs resulting in claims data being analyzed more than ever. ",
            className:
              "text-center text-start text-[#F47937] font-medium text-lg md:text-xl px-4 md:px-6 lg:px-6",
          },
          {
            text: "The Healthcare Price Transparency Forum focuses on policy and compliance issues facing self-insured health plans as well as innovative ways to manage the ever-rising cost-of-care and prescription drug costs. Industry experts and thought leaders will present best practices to combat costs and lead discussions on this, and other, trending issues. ",
            className:
              "text-center text-start text-[#212121] font-medium text-sm md:text-base px-4 md:px-6 lg:px-6",
          },
        ],
      }}
      cta={{
        text: "More Details",
        href: "https://www.siia.org/i4a/pages/index.cfm?pageid=8032",
        external: true,
      }}
    />
  );
};

export default HealthcarePopup;

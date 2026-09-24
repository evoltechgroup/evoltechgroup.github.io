"use client";
import React from "react";
import EventPopup from "../components/EventPopup";
import { ABAlogo } from "@/assets/events";
import ABA from "@/assets/images/Events/ABA/aba-banner.png";
import AbaBg from "@/assets/images/Events/ABA/Aba-bg.png";

interface ABAPopupProps {
  onClose: () => void;
}

const ABAPopup = ({ onClose }: ABAPopupProps) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-white shadow-lg max-w-2xl w-full mx-0 lg:mx-4"
      style={{
        backgroundImage: `url(${AbaBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <EventPopup
        onClose={onClose}
        containerClassName="bg-transparent shadow-none max-w-2xl w-full overflow-hidden"
        hero={{
          containerHeight: "h-[386px]",
          backgroundImage: ABA.src,
          logo: "",
          title: "",
          date: "",
          location: "",
          subtitle: "",
          bgPosition: "center",
          bgSize: "cover",
        }}
        customSections={[
          {
            order: 1,
            content: (
              <div className="relative py-8 px-4">
                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="text-center space-y-4">
                    <img
                      src={ABAlogo.src}
                      alt="ABA Logo"
                      className="h-12 mx-auto mb-6"
                    />
                    <h2 className="text-[32px] sm:text-2xl font-bold text-gray-900">
                      Conference for Community Bankers
                    </h2>
                    <div className="space-y-3">
                      <p className="text-[#F47937] text-lg lg:text-2xl leading-relaxed font-semibold">
                        February 15-17 | JW Marriott Grande Lakes | Orlando, FL
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ),
          },
        ]}
        cta={{
        text: "More Details",
        href: "https://www.aba.com/training-events/conferences/conference-for-community-bankers/program",
        external: true,
      }}
       
      />
    </div>
  );
};

export default ABAPopup;

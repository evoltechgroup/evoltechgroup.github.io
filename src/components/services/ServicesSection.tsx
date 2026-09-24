// src/components/ServiceTabs/ServicesSection.tsx
"use client";

import React, { useState } from "react";
import { TabButton } from "./tabButton";
import { ServicePanel } from "./ServicePanel";
import { servicesData } from "../../data/ServicesData";
import Text from "@/components/Text";
import { followArrow } from "@/assets/svg";

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("technology");
  const activeService =
    servicesData.find((s) => s.key === activeTab) ?? servicesData[0];
  return (
    <section className="relative w-full bg-gradient-to-b from-[#eaf6ff] to-white text-[#0B0F2B]">
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 sm:px-10 lg:px-0">
        <div className="w-full col-span-4 sm:col-span-8 lg:col-span-10 col-start-1 lg:col-start-2 mx-auto flex flex-col items-center py-10 md:py-20">
          <div className="mb-2 text-sm font-medium text-center">
            <span className="inline-block bg-[#B6D2FF] rounded-full px-3 py-1 font-medium text-[#000000] shadow">
              Services &amp; Solutions
            </span>
          </div>

          <Text className="text-3xl md:text-5xl lg:text-4xl xl:text-6xl !text-center text-black !font-bold mb-3 leading-tight">
            <span>Unlock Growth with</span> <br />
            <span>Cutting-Edge Solutions</span>
          </Text>

          <p className="text-center lg:max-w-xl xl:max-w-2xl mb-0 font-medium text-base lg:text-lg xl:text-2xl">
            Expert consulting for growth, advanced tech solutions by full-stack,
            AI, and cloud computing, and efficient operations support to
            streamline your business.
          </p>

          <div className="hidden md:flex text-[#FFBB00] justify-start items-end -ml-6 -mt-2  w-1/2">
            <span className="transform scale-x-[-1]">{followArrow}</span>
          </div>

          <div className="mt-4 md:mt-0 flex gap-[10px] mb-15 bg-[#58619D] rounded-full p-1 shadow-md overflow-x-auto">
            {servicesData.map((s) => (
              <TabButton
                key={s.key}
                label={s.tabLabel}
                tabKey={s.key}
                activeTab={activeTab}
                onSelect={setActiveTab}
              />
            ))}
          </div>
          <ServicePanel service={activeService} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

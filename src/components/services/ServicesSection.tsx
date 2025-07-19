// src/components/ServiceTabs/ServicesSection.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TabButton } from "./tabButton";
import { ServicePanel } from "./ServicePanel";
import { servicesData } from "../../data/ServicesData";
import Text from "@/components/Text";
import { followArrow } from "@/assets/svg";





const ServicesSection: React.FC = () => {
  // Default tab (you had "technology" before)
  const [activeTab, setActiveTab] = useState<string>("technology");

  const activeService = servicesData.find((s) => s.key === activeTab) ?? servicesData[0];

  return (
    <section className="relative w-full  bg-gradient-to-b from-[#eaf6ff] to-white text-[#0B0F2B] py-20 px-2 flex flex-col items-center">
      <div className="lg:max-w-5xl w-full mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="mb-2 text-sm font-medium text-center">
          <span className="inline-block bg-[#B6D2FF] rounded-full px-3 py-1 text-[#000000] shadow">
            Services &amp; Solutions
          </span>
        </div>

        {/* Heading */}
        <Text className="text-4xl md:text-[4rem] font-bold text-center mb-3 leading-tight">
          Unlock Growth with <br className="hidden md:block " />
          <span className="text-black font-bold">Cutting-Edge Solutions</span>
        </Text>

        {/* Intro paragraph */}
        <p className="text-center max-w-2xl mb-0 text-base md:text-2xl">
          Expert consulting for growth, advanced tech solutions by full-stack, AI, and cloud computing, and efficient back office support to streamline your business.
        </p>

        {/* Decorative Arrow */}
       <div className="text-[#FFBB00] justify-start items-end -ml-6 -mt-2  w-1/2 flex">
        <span className="transform scale-x-[-1]">
             {followArrow}
              </span>
            </div>

        {/* Tab Buttons */}
        <div className="flex gap-[10px]  mb-10 bg-[#58619D] rounded-full p-1 shadow-md overflow-x-auto">
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

        {/* Active Panel */}
        <ServicePanel service={activeService} />
      </div>
    </section>
  );
};

export default ServicesSection;

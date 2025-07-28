"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { ServiceItem } from "../../data/ServicesData";
import TechCardWithChip from "@/app/services/components/technChipCards";

interface ServicePanelProps {
  service: ServiceItem;
}

export const ServicePanel: React.FC<ServicePanelProps> = ({ service }) => {
  const {
    title,
    blurb,
    iconSrc,
    imageSrc,
    ctaLabel = "Discover more",
    ctaHref = "#",
    bullets,
  } = service;

  const [flip, setFlip] = useState(false);

  useEffect(() => {
    setFlip(true);
    const timeout = setTimeout(() => setFlip(false), 400);
    return () => clearTimeout(timeout);
  }, [imageSrc]);

  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-start gap-4 animate-fadein">
      <div className="lg:flex-1 flex flex-col items-start p-2 md:p-4 lg:p-0">
        <div className="flex items-center w-full md:w-auto justify-center md:justify-start mb-8 ">
          <div className="h-12 w-12 lg:h-24 lg:w-24 mr-3 lg:mr-8 bg-gradient-to-r from-[#5785DC] to-[#5F4793] rounded-2xl lg:rounded-3xl flex items-center justify-center">
            <img
              src={iconSrc}
              alt={`${title} Icon`}
              className="h-8 w-8 lg:h-16 lg:w-14"
            />
          </div>
          <span className="text-3xl lg:text-5xl font-bold">{title}</span>
        </div>

        <p className="mb-4 text-base w-full lg:text-xl font-medium lg:mb-10 px-2 lg:px-0 md:w-full lg:w-xl">
          {blurb}
        </p>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-6  lg:w-xl">
          {bullets.map((b, i) => (
            <TechCardWithChip
              id={i}
              title={b.label}
              description={b.text}
              bgColor={b.bgClass}
              key={i}
            />
          ))}
        </div>

        <Link
          href={ctaHref}
          className="flex gap-2 bg-yellow-400 text-[#0B0F2B] px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition mt-6  lg:mt-10 ml-4 lg:ml-0">
          {ctaLabel}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" />
          </svg>
        </Link>
      </div>

      <div className="flex-1 p-10 pt-0 md:pt-0 md:p-0 flex justify-center relative perspective w-full">
        <div
          className={`
            transition-transform duration-700 transform-style-preserve-3d w-full h-80 md:w-[330px] md:h-[520px]
          ${flip ? "rotate-y-180" : ""}
          `}>
          <div className="absolute w-full h-full backface-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="rounded-[48px] w-full h-full object-cover"
            />
            <div
              style={{ mixBlendMode: "plus-lighter" }}
              className="absolute inset-0 rounded-[50px] bg-gradient-to-b from-[#190670] to-[#1B0A41] opacity-80 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

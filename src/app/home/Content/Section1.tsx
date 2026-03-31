"use client";
import {
  eclipseEffect,
  rectangle188,
  rectangle189,
  rectangle190,
  rectangle191,
} from "@/assets/effects";
import { ButtonEffect, RoundChevronRight } from "@/assets/icons/custom-icons";
import { mainFollowArrow } from "@/assets/svg";
import Button from "@/components/Button";
import ThemeButton from "@/components/Button/ThemeButton";
import InfoCard from "@/components/Card/InfoCard";
import Text from "@/components/Text";
import { infoCards } from "@/data/about-us";
import { CircleChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Section1 = () => {
  const router = useRouter();
  return (
    <section className="relative h-screen sm:h-[80vh] lg:h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden pointer-events-none">
         <div className="absolute z-7 w-full h-full">{eclipseEffect}</div>
        <div className="absolute z-4 w-full h-full">{rectangle191}</div>
        <div className="absolute z-3 w-full h-full">{rectangle190}</div>
        <div className="absolute z-2 w-full h-full flex items-center justify-center">
          <div>{rectangle189}</div>
        </div>
        <div className="absolute z-1 w-full h-full opacity-20">
          {rectangle188}
        </div>
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-100 filter contrast-105 saturate-125 sharp-video"
          src="/assets/BgVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 w-full h-full grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
        <div className="w-full h-full flex flex-col justify-center gap-4 col-span-4 sm:col-span-6 lg:col-span-8 xl:col-span-10 col-start-1  sm:col-start-2 lg:col-start-3 xl:col-start-2  md:gap-10 xl:gap-15 items-center">
          <div className="flex flex-col md:gap-5 items-center relative">
            <h1 className="sr-only">
              AI & Full-Stack Technology Consulting for FinTech, Banking &
              Healthcare | EvolTech
            </h1>
            <Text
              className="font-semibold mb-2 md:mb-0 text-3xl sm:text-5xl xl:text-6xl text-center"
              tag="p"
              aria-hidden="true">
              Build
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />{" "}
              <span className="">
                Scale
                <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />{" "}
              </span>
              Succeed
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
            </Text>
            <Text className="text-sm md:px-2 md:text-sm xl:text-xl md:max-w-[32rem] xl:max-w-[38rem] !text-center text-[#C5E1FF]">
              We bring visionary ideas to life with cutting-edge tech, strategic
              consulting, and seamless operations solutions. Our engineers,
              experts in full-stack, AI, and cloud computing build innovative
              apps and deliver operational excellence to fuel your growth and
              efficiency.
            </Text>
            <div className="flex md:absolute mb-4 md:mb-0 w-10 h-10 md:w-16 xl:w-full md:left-25 md:bottom-11 xl:left-20 xl:bottom-13 text-[#8DCAFF]">
              {mainFollowArrow}
            </div>

            <ThemeButton
              text="Discover more"
              onClick={() => router.push("/about")}
              endIcon={<span>{RoundChevronRight}</span>}
              extraStyles="mt-5 hover:bg-[#FFBB00] transition shadow-[0_0_15px_#FFB700] hover:shadow-[0_0_25px_#FFD95E]"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full md:justify-items-center mx-auto">
            {infoCards.map((item, idx) => (
              <InfoCard
                key={idx}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

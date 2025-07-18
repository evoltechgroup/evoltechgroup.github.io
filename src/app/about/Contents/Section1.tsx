import React from "react";
import RightGlobe from "@/assets/effects/Aboutus/RightGlobe.png";
import LeftGlobe from "@/assets/effects/Aboutus/LeftGlobe.png";
import { followArrow, mainFollowArrow } from "@/assets/svg";
import Text from "@/components/Text";
import { infoCards } from "@/data/about-us";
import InfoCard from "@/components/Card/InfoCard";
import {
  blackGradient,
  eclipseEffect,
  radialGradient,
  radialGradient1,
  radialGradient2,
  rectangle188,
  rectangle189,
  rectangle190,
  rectangle191,
} from "@/assets/effects";

const Section1 = () => {
  return (
    <section className="relative w-full bg-[#ffff] py-10 flex flex-col items-center h-screen">
      <div className="absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden">
        <div className="absolute z-7 w-full h-full">{eclipseEffect}</div>
        {/* <div className="absolute w-full h-full opacity-15">{rectangle188}</div> */}
        <img
          src={LeftGlobe.src}
          alt="left-globe"
          width={LeftGlobe.width}
          height={LeftGlobe.height}
          className="absolute left-0 z-6 mix-blend-color-dodge"
        />
        <img
          src={RightGlobe.src}
          alt="right-globe"
          className="absolute right-0 bottom-0 z-6  object-cover h-full mix-blend-color-dodge"
        />
        <div className="absolute z-4 w-full h-full opacity-40">
          {rectangle191}
        </div>
        <div className="absolute z-3 w-full h-full opacity-40">
          {rectangle190}
        </div>
        <div className="absolute z-2 w-full h-full flex items-center justify-center">
          <div>{rectangle189}</div>
        </div>
        <div className="absolute z-1 w-full h-full opacity-60">
          {rectangle188}
        </div>
        {/* <div className="absolute w-full h-full opacity-40">{rectangle191}</div>
        <div className="absolute w-full h-full opacity-40">{rectangle190}</div>
        <div className="absolute w-full h-full opacity-50 ">{rectangle189}</div> */}
        {/* <div className="absolute z-7 w-full h-full">{eclipseEffect}</div>l
        <div className="absolute z-8 opacity-50 w-full h-full">
          {blackGradient}
        </div>
        <img
          src={LeftGlobe.src}
          alt="left-globe"
          width={LeftGlobe.width}
          height={LeftGlobe.height}
          className="absolute left-0 z-6 mix-blend-color-dodge"
        />
        <img
          src={RightGlobe.src}
          alt="right-globe"
          width={RightGlobe.width}
          height={RightGlobe.height}
          className="absolute right-0 z-6 mix-blend-color-dodge"
        />
        <div className="absolute z-5 w-full h-full opacity-40">
          {radialGradient2}
        </div>
        <div className="absolute w-full h-full z-4 object-cover">
          {radialGradient1}
        </div>
        <div className="opacity-30 absolute z-1 w-full h-full">
          {radialGradient}
        </div> */}
      </div>
      <div className="relative z-10 w-full h-full justify-center items-center p-5">
        <div className="w-full h-full flex flex-col justify-center gap-20 items-center p-40 pb-20">
          <div className="flex flex-col gap-5 items-center mb-4">
            <Text className="font-semibold text-6xl text-center" tag="p">
              Who we are
            </Text>
            <Text className="text-xl max-w-[40rem] text-center text-[#C5E1FF]">
              We turn visionary ideas into reality with advanced tech, expert
              consulting, and efficient back office solutions, powered by 50+
              specialists in full-stack, AI, and cloud computing.
            </Text>
            <div className="text-[#FFBB00] flex  -mt-6 w-full">
              {mainFollowArrow}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 ">
            {infoCards.map((item, idx) => {
              return (
                <InfoCard
                  title={item.title}
                  description={item.description}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

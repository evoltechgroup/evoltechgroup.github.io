import {
  blueRectangleGradient,
  followArrowRight,
  followArrowRightV2,
  heartIcon,
  starIcon,
} from "@/assets/svg";
import Button from "@/components/Button";
import Text from "@/components/Text";
import React from "react";
import TeamShowCase from "../components/TeamShowCase";
import { bottomRing, leftRing } from "@/assets/effects";

const Section3 = () => {
  return (
    <section className="bg-white text-black w-full relative overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full">
        {blueRectangleGradient}
      </div>
      <div className="absolute bottom-0 right-0 z-1 w-full h-full">
        <div>{leftRing}</div>
      </div>
      <div className="absolute right-0 bottom-0 z-1">
        <div>{bottomRing}</div>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-stretch">
        <div className="mt-10 w-full flex flex-col gap-2 md:gap-5 items-center justify-center">
          <Button className="bg-[#D6ECFF] p-2 flex  rounded-full px-4 font-medium text-sm">
            Meet our team
          </Button>
          <Text className="text-3xl lg:text-6xl font-semibold">Our Team</Text>
          <Text className="md:whitespace-nowrap font-medium md:font-normal text-xl md:text-4xl">
            {"The heart"}
            <span className="inline-block align-middle w-10 ml-2 mr-2 h-10">
              {heartIcon}
            </span>
            {"of EvolTech’s success."}
          </Text>
          <div className="flex gap-2 justify-center -ml-15 w-[70%]">
            <span className="text-[#FFBB00]">{followArrowRightV2}</span>
            <span className="flex gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="text-[#FFBB00] flex items-end">
                  {starIcon}
                </span>
              ))}
            </span>
          </div>
        </div>
        <TeamShowCase />
      </div>
    </section>
  );
};

export default Section3;

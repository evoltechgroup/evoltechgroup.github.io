import Button from "@/components/Button";
import Text from "@/components/Text";
import React from "react";
import ThreeBars from "@/assets/logo/Three-Bars.svg";
import BlueGradient from "@/assets/effects/BlueOffsetGradient.svg";
import Image from "next/image";
import { CircleChevronRight } from "lucide-react";
import { whyEvoltechCard } from "@/data/about-us";
import { followArrow, followArrowRight } from "@/assets/svg";

const Section2 = () => {
  return (
    <section className="bg-white text-black relative w-full">
      <img
        src={BlueGradient.src}
        alt="Blue gradient background"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      <div className="relative z-10 w-full p-5 items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center mt-10">
          <Button className="p-2 flex bg-white  rounded-full px-4 text-sm">
            About us
          </Button>
          <Text
            className="font-semibold text-[56px] max-w-[50rem] text-center"
            tag="p">
            Powering Growth with Smart Tech and Scalable Teams
          </Text>
          <div className="text-[#FFBB00]">{followArrow}</div>
        </div>
        <div className="flex w-full p-5 mt-2 sm:px-[10%] gap-10 ">
          <div className="w-1/2 sm:w-1/2 flex flex-col items-start justify-between gap-4">
            <Button className="p-1.5 flex bg-[#D2D2FF] rounded-full text-xs rounder px-2">
              Our Story
            </Button>
            <div className="flex flex-col gap-5 sm:max-w-[80%]">
              <Text className="font-semibold text-xl">
                EvolTech, founded in October 2015, specializes in technology
                development and hybrid captive back-office support.
              </Text>
              <Text className="text-xl">
                With offices in the US and India, we deliver scalable tech
                solutions and seamless operational teams.
              </Text>
              <Text className="text-xl">
                Led by a strong leadership team with expertise in Banking and
                Financial Services, Fintech, Retail, and Insurance, our
                consultancy drives your business forward with industry-leading
                insights.
              </Text>
            </div>
          </div>
          <div className="w-1/3 hidden sm:flex items-end justify-end ">
            <Image
              src={ThreeBars.src}
              alt="Three bars icon"
              width={ThreeBars.width}
              height={ThreeBars.height}
              className="flex items-end"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 mt-5 sm:p-15 sm:px-[10%]">
          <div className="flex flex-col gap-2 w-1/2 relative sm:w-1/3  justify-center items-center sm:justify-start sm:items-start">
            <Text className="font-semibold text-[56px]" tag="p">
              Why EvolTech?
            </Text>
            <Text className="font-semibold text-xl">
              Your partner for innovation, efficiency, and growth.
            </Text>
            <div className="text-[#8DCAFF] justify-end items-end mt-4 w-full flex">
              {followArrowRight}
            </div>
          </div>
          <div className="flex flex-col gap-10 w-full sm:w-1/2">
            <div className="flex flex-wrap gap-10 sm:justify-end">
              {whyEvoltechCard.map((card, idx) => {
                return (
                  <div key={idx} className="flex flex-col gap-4">
                    <Button
                      className={`p-1.5 w-fit flex bg-[${card.bgColor}] rounded-full rounded-bl-none text-xs rounder px-2`}>
                      {card.title}
                    </Button>
                    <Text className="max-w-[300px] text-lg">
                      {card.description}
                    </Text>
                  </div>
                );
              })}
            </div>
            <div className="w-full mt-4 flex items-center justify-center sm:justify-start sm:pl-[11l%]">
              <Button className="pt-1.5 w-fit gap-2 items-center justify-center sm:justify-start pr-3 pb-1.5 pl-3 flex  bg-[#FFBB00] rounded-full text-sm">
                <span>More services</span>
                <span>
                  <CircleChevronRight size={18} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

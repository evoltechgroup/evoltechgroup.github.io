import React from "react";
import ReinnovaIcon from "@/assets/logo/Reinnova.svg";
import LogoContainer from "../Components/LogoContainer";
import {
  FiveoakHighlights,
  ReinnovaCards,
  ReinnovaHighlights,
} from "@/data/product-data";
import TechCardWithChip from "@/app/services/components/technChipCards";
import Text from "@/components/Text";
import { FiveoakHeader, FiveoakPartners } from "./Fiveoak";
import { fiveoakArrow, partnerHeartIcon, reinnovaArrow } from "@/assets/svg";

const ReinnovaHeader = {
  name: "reinnova",
  icon: ReinnovaIcon,
  title: "Solve auditing challenges with AI",
  subTitle:
    "Our comprehensive suite of tools helps you streamline operations, increase productivity, and drive growth.",
};

const Reinnova = () => {
  return (
    <div className="flex flex-col justify-center gap-20">
      <div>
        <LogoContainer
          name={ReinnovaHeader.name}
          icon={ReinnovaHeader.icon}
          title={ReinnovaHeader.title}
          subTitle={ReinnovaHeader.subTitle}
        />
      </div>
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-7xl  md:pl-15 mx-auto">
          {ReinnovaHighlights?.map((card, index) => (
            <div
              key={card.id}
              className={`pb-4 pr-20 ${index === 3 ? "lg:col-start-2" : ""}`}>
              <TechCardWithChip
                id={card.id}
                title={card.title}
                description={card.description}
                bgColor={card.bgColor}
                paragraphPadding="!text-base font-medium !md:max-w-[305px]"
              />
            </div>
          ))}
        </div>
        <div
          className="w-full h-[2px] border-t-2 border-dotted"
          style={{ borderColor: "rgba(170, 170, 170, 1)" }}></div>
        <div className="relative flex flex-col md:flex-row w-full items-start justify-start gap-5 md:gap-20 mb-5">
          <div className="w-1/3 flex flex-col items-start h-full gap-4">
            <Text className="whitespace-nowrap font-bold text-3xl sm:text-5xl text-black">
              Why Reinnova?
            </Text>
            <div className="hidden md:flex justify-end items-end w-full">
              <div className="h-10 md:h-20">{reinnovaArrow}</div>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-4 w-fit">
            <Text className="md:max-w-2xl font-semibold text-xl sm:text-[28px] text-black text-start">
              Innovative monitoring built to deliver clear, actionable, and
              business-ready solutions.
            </Text>
            <Text className="font-medium md:max-w-2xl text-base sm:text-lg text-black text-start">
              We’re optimistic about your success through versatile, ML-based
              sales prediction. In a competitive retail landscape, we believe
              success lies in monetizing behavioral data with smart
              recommendations, upselling, and customer-centric experiences.
            </Text>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-6 gap-y-8 w-full justify-items-center">
          {ReinnovaCards.map((card, idx) => {
            const isLast = idx === ReinnovaCards.length - 1;
            return (
              <div
                key={idx}
                className={`
                flex flex-col items-center gap-4 px-2 sm:px-4
                ${
                  !isLast
                    ? "sm:border-r-2 sm:border-dotted sm:border-[#AAAAAA]"
                    : ""
                }
              `}>
                <div className="w-11 h-11 border rounded-2xl border-[#CFCFCF] flex items-center justify-center">
                  <span className="w-6 h-6">{card.icon}</span>
                </div>
                <div className="font-medium text-sm text-center text-[#444444] max-w-[170px]">
                  {card.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reinnova;

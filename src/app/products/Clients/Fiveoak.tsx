import React from "react";
import LogoContainer from "../Components/LogoContainer";
import TechCardWithChip from "@/app/services/components/technChipCards";
import { FiveoakHighlights } from "@/data/product-data";
import Text from "@/components/Text";
import { fiveoakArrow, partnerHeartIcon, smileEmoji } from "@/assets/svg";
import {
  FiveoakPartner1,
  FiveoakPartner2,
  FiveoakPartner3,
  FiveoakPartner4,
  FiveoakPartner5,
  FiveoakPartner6,
} from "@/assets/logo/Fiveoak-Content";
import { FiveOakIcon } from "@/assets/logo/Partners";

export const FiveoakHeader = {
  name: "fiveoak",
  icon: FiveOakIcon,
  title: "Where Your Success Takes Root.",
  subTitle:
    "Like the roots of an oak tree, fiveoak nurtures the foundation of your success by harnessing the power of customer connection.",
};

export const FiveoakPartners = [
  { id: 1, icon: FiveoakPartner1 },
  { id: 2, icon: FiveoakPartner2 },
  { id: 3, icon: FiveoakPartner3 },
  { id: 4, icon: FiveoakPartner4 },
  { id: 5, icon: FiveoakPartner5 },
  { id: 6, icon: FiveoakPartner6 },
];

const Fiveoak = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0 ">
      <div className="col-span-4 col-start-1 lg:col-span-10 lg:col-start-2 flex flex-col justify-center gap-10 md:gap-20">
        <LogoContainer
          name={FiveoakHeader.name}
          icon={FiveoakHeader.icon}
          title={FiveoakHeader.title}
          subTitle={FiveoakHeader.subTitle}
        />
      </div>
      <div className="col-span-4 col-start-1 lg:col-span-10 lg:col-start-2 flex flex-col gap-10 lg:mt-20">
        <div className="relative flex flex-col w-full justify-center items-center gap-4 mb-5">
          <Text className="whitespace-nowrap font-bold text-2xl sm:text-5xl text-black text-center">
            {"Why our business partners"}
          </Text>
          <Text className="whitespace-nowrap font-bold text-2xl sm:text-5xl text-black text-center">
            <span className="inline-block w-10 h-10 mx-2 align-middle">
              {partnerHeartIcon}
            </span>
            {"love Fiveoak"}
          </Text>
          <div className="absolute h-10 md:h-20 -left-[20%] top-22 md:top-20 w-full">
            {fiveoakArrow}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {FiveoakHighlights?.map((card, index) => {
            let justifyClass = "justify-self-start lg:justify-self-start";
            if (index % 3 === 1) {
              justifyClass = "justify-self-start lg:justify-self-center";
            } else if (index % 3 === 2) {
              justifyClass = "justify-self-start lg:justify-self-end";
            }
            return (
              <div key={card.id} className={`pb-4  ${justifyClass}`}>
                <TechCardWithChip
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  bgColor={card.bgColor}
                  paragraphPadding="!text-base font-medium max-w-full pl-1"
                />
              </div>
            );
          })}
        </div>
        <div
          className="w-full h-[2px] border-t-2 border-dotted"
          style={{ borderColor: "#AAAAAA" }}></div>
        <div className="col-span-4 col-start-1 lg:col-span-10 lg:col-start-2 relative flex flex-col md:flex-row w-full items-start justify-start gap-5 md:gap-20 md:mt-5 mb-5">
          <div className="w-1/3 flex flex-col items-start h-full gap-4">
            <Text className="whitespace-nowrap font-bold text-3xl sm:text-5xl text-black">
              Why Fiveoak?
            </Text>
          </div>
          <div className="flex flex-col justify-start gap-4 w-fit">
            <Text className="md:max-w-2xl font-semibold text-xl sm:text-[28px] text-black text-start">
              Seamless integration with the apps you love.
            </Text>
            <Text className="font-medium md:max-w-2xl text-base sm:text-lg text-black text-start">
              With fiveoak at the root of your online pressence, watch your
              business grow on every platform.
            </Text>
          </div>
        </div>
        <div className="flex flex-wrap md:-mt-3 justify-center items-center md:flex-row gap-5 md:gap-20">
          {FiveoakPartners.map((logo, idx) => {
            return (
              <div key={idx}>
                <img src={logo.icon.src} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fiveoak;

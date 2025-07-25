import React from "react";
import BannerHeader from "../../components/BannerHeader";
import { operationPageArrow1 } from "@/assets/svg";
import { operationsCardData } from "@/data/service-operations";
import OperationsCard from "../../components/OperationsCard";
import { leftRing, topRightRingv2 } from "@/assets/effects";

const Section3 = () => {
  return (
    <div className="bg-[#F8F8F8] w-full h-full relative">
      <div className="absoulte w-full h-full z-0">
        <div className="absolute right-0 top-[10%]">{topRightRingv2}</div>
        <div className="absolute -left-10 top-[50%]">{leftRing}</div>
      </div>
      <div className="z-10 relative">
        <BannerHeader
          chipText="The Excellence Core"
          chipBackgroundColor="#FFDEB7"
          chipTextColor="text-black"
          headerText="Our Business Process Operational Excellence Support"
          headerTextColor="text-black"
          subHeaderText="Streamlining Your Success with Precision and Efficiency"
          subHeaderTextColor="text-black"
          headerTextSize="text-[40px] max-w-2xl"
          className="py-5 md:py-20"
          arrowSrc={operationPageArrow1}
          arrowAlt="Tech Arrow"
          arrowPosition="left"
          arrowWidth={70}
          arrowHeight={35}
          arrowOverrideCx="flex mr-5"
        />
        <div className="w-full h-full flex flex-col gap-5 justify-center pb-15">
          {operationsCardData.map((card, index) => (
            <OperationsCard
              key={index}
              {...card}
              lastItem={index === operationsCardData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;

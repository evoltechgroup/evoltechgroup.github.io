"use client";
import BannerHeader from "@/app/services/components/BannerHeader";
import expertAarrow from "@/assets/images/services/expert-arrow.svg";
import TechCardWithChip from "@/app/services/components/technChipCards";
import { leftRing } from "@/assets/effects";
import { LifeAtEvoltech, PerksandBenefits } from "@/data/service-technology";
import { whyEvoltechCard } from "@/data/about-us";
import { followArrowRight } from "@/assets/svg";
import Text from "@/components/Text";
import { CircleChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import CheckList from "../components/CheckList";

const Section2 = () => {
  const router = useRouter();
  return (
    <section className="text-black relative w-full h-full py-20"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(217, 229, 251, 1) 0%, #fff 50%)",
      }}>
      <div className="absolute w-full h-full">
        <div className="absolute top-0 -left-10 z-1 ">{leftRing}</div>
      </div>
      <BannerHeader
        chipText="Our Capabilities"
        chipBackgroundColor="#FFFFFF"
        chipTextColor="text-black"
        headerText="Why Work With Us?"
        headerTextColor="text-black pt-5"
        subHeaderText="Rewards, recognition, well-being & work life balance"
        subHeaderTextColor="text-black"
        headerTextSize="text-6xl"
        className="pb-2"
        arrowSrc={expertAarrow}
        arrowAlt="Expert Arrow"
        arrowPosition="bottom"
        arrowWidth={40}
        arrowHeight={120}
      />
      <div className="flex justify-center h-full" >
        <div className="flex flex-wrap gap-4 justify-center pb-20 max-w-7xl">
          {LifeAtEvoltech?.map((card) => (
            <div
              key={card.id}
              className="pb-4">
              <TechCardWithChip
                id={card.id}
                title={card.title}
                description={card.description}
                bgColor={card.bgColor}
                paragraphPadding="pr-20"
              />
            </div>
          ))}

        </div>
      </div>
      <div className="w-full h-full flex gap-5  justify-between px-40">
        <div className=" h-full w-[calc(33.333333%+3rem)] flex flex-col gap-5">
          <Text
            className="font-semibold sm:text-4xl xl:text-[56px]"
            tag="p">
            Perks & Benefits
          </Text>
          <Text className="font-semibold sm:text-base">
            Your partner for innovation, efficiency, and growth.
          </Text>
          <div className="text-[#8DCAFF] justify-end items-end mt-4 w-full flex">
            {followArrowRight}
          </div>
        </div>
        <div className=" h-full items-end justify-end w-fit">
          <div className="grid grid-cols-1 sm:grid-cols-2   -6 justify-center">
            {PerksandBenefits.map((card) => {
              return (
                <CheckList
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  bgColor={card.bgColor}
                  key={card.id}
                />
              );
            })}
          </div>
          <div className="w-full h-full mt-4 flex items-center justify-center sm:justify-start">
            <Button
              onClick={() => router.push("/services/consulting")}
              className="w-fit gap-2 items-center justify-center sm:justify-start px-2 py-2 flex cursor-pointer  bg-[#FFBB00] rounded-full text-sm">
              <span className="font-normal">View Open Positions</span>
              <span>
                <CircleChevronRight size={18} />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

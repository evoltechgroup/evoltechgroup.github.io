"use client";
import BannerHeader from "@/app/services/components/BannerHeader";
import expertAarrow from "@/assets/images/services/expert-arrow.svg";
import TechCardWithChip from "@/app/services/components/technChipCards";
import { leftRing } from "@/assets/effects";
import { LifeAtEvoltech, PerksandBenefits } from "@/data/service-technology";
import { followArrowRight } from "@/assets/svg";
import Text from "@/components/Text";
import { CircleChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import CheckList from "../components/CheckList";

const Section2 = () => {
  const router = useRouter();
  return (
    <section
      className="text-black relative w-full h-full py-20"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(217, 229, 251, 1) 0%, #fff 50%)",
      }}>
      <div className="absolute w-full h-full pointer-events-none">
        <div className="absolute top-0 -left-10 z-1 ">{leftRing}</div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
        <div className="w-full h-full col-span-4 col-start-1 lg:col-span-12 lg:col-start-1 items-center lg:-mt-15">
          <BannerHeader
            chipText="Life at EvolTech"
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
        </div>
        <div className="col-span-4 col-start-1 lg:col-span-10 lg:col-start-2 flex flex-wrap lg:flex-row justify-between pb-10">
          {LifeAtEvoltech?.map((card) => (
            <div key={card.id} className="pb-4">
              <TechCardWithChip
                id={card.id}
                title={card.title}
                description={card.description}
                bgColor={card.bgColor}
                paragraphPadding="pr-0 lg:pr-10"
              />
            </div>
          ))}
        </div>
        <div className="w-full h-full col-span-4 col-start-1 lg:col-span-10 lg:col-start-2 items-center">
          <div className="w-full h-full flex flex-col lg:flex-row gap-5 justify-between items-start">
            <div className=" h-full flex flex-col gap-2 justify-start items-start">
              <Text
                className="font-semibold text-4xl lg:text-4xl xl:text-6xl xl:text-[56px]"
                tag="p">
                Perks & Benefits
              </Text>
              <div className="text-[#8DCAFF] justify-end items-end px-20 md:px-0 lg:px-10 w-full flex">
                {followArrowRight}
              </div>
            </div>
            <div className=" h-full items-end justify-end w-fit">
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-12 lg:gap-4">
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
              <div className="w-full h-full mt-8 flex items-start justify-start lg:justify-start md:justify-center ">
                <Button
                  onClick={() => {
                    const el = document.getElementById("job-listing");
                    if (el) {
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="w-fit gap-2 items-center justify-center sm:justify-start px-4 py-2 flex cursor-pointer bg-[#FFBB00] rounded-full text-sm">
                  <span className="font-medium">View Open Positions</span>
                  <span>
                    <CircleChevronRight size={18} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

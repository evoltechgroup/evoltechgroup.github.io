import { leftRing } from "@/assets/effects";
import { followArrowRightV2 } from "@/assets/svg";
import Button from "@/components/Button";
import Text from "@/components/Text";
import TagCardGridSection from "@/components/Card/TagCardGrid";
import { valuePropositionCards } from "@/data/service-consulting";

const WhyEvoltech = () => {
  return (
    <div className="relative h-full bg-[#F8F8F8]">
      <div className="absolute top-0 -left-10 z-0 w-full h-full">
        <div>{leftRing}</div>
      </div>
      <div className="grid grid-cols-12 grid-rows-1 gap-4 max-w-7xl mx-auto">
        <div className="relative col-span-10 col-start-2 z-10 w-full flex items-center justify-center py-20">
          <div className="w-full flex flex-col items-center ">
            <Button className="p-1.5 bg-[#BCE0FF] text-black rounded-full text-xs px-4 mb-2">
              Our Capabilities
            </Button>
            <div className="flex flex-col gap-6  mb-20">
              <Text
                className="font-semibold text-3xl text-center sm:text-[56px] max-w-[30rem] text-black"
                tag="p">
                Why Evoltech?
              </Text>
              <Text
                className="font-normal sm:text-xl text-center text-base text-[#212121] max-w-xl"
                tag="p">
                What It Means for You
              </Text>
            </div>
            <div className="absolute mt-32 lg:mt-35 left-15  lg:left-[35%] rotate-[40deg]">
              <span className="text-[#FFBB00]">{followArrowRightV2}</span>
            </div>
            <div className="flex flex-col items-start justify-start md:items-center w-full">
              <TagCardGridSection
                cards={valuePropositionCards}
                gridCols="grid-cols-1 md:grid-cols-2 justify-items-start lg:grid-cols-3 gap-10 lg:gap-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyEvoltech;

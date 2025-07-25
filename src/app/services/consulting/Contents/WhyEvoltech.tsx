import { leftRing } from "@/assets/effects";
import { followArrowRightV2 } from "@/assets/svg";
import Button from "@/components/Button";
import Text from "@/components/Text";
import TagCardGridSection from "@/components/Card/TagCardGrid";
import { valuePropositionCards } from "@/data/service-consulting";

const WhyEvoltech = () => {
  return (
      <div className=" md:p-20  lg:p-40 p-10 flex items-center justify-center relative h-full bg-white">
      {/* Left Ring Decoration */}
      <div className="absolute hidden md:block top-0 -left-10 z-0 w-full h-full">
        <div>{leftRing}</div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-6 flex flex-col items-center ">
          {/* Top Tag Button */}
          <Button className="p-1.5 bg-[#BCE0FF] text-black rounded-full text-xs px-4 mb-2">
            Our Capabilities
          </Button>
   
          <div className="flex flex-col gap-6  mb-20">
          {/* Title */}
          <Text
            className="font-semibold text-3xl sm:text-[56px] max-w-[30rem] text-black"
            alignment="center"
            tag="p"
          >
            Why Evoltech?
          </Text>

       
            <Text
              className="font-normal sm:text-xl text-base text-[#212121] max-w-xl"
              alignment="center"
              tag="p"
            >
              What It Means for You
            </Text>
          </div>
         <div className="absolute mt-32 lg:mt-40 left-15  lg:left-96 rotate-[40deg]">
  <span className="text-[#FFBB00]">{followArrowRightV2}</span>
</div>

         
          <TagCardGridSection
            cards={valuePropositionCards}
            gridCols="grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyEvoltech;

import BannerHeader from "../../components/BannerHeader";
import MessageBox from "../../components/tooltip";
import TechCardWithChip from "../../components/technChipCards";
import { downStrechArrow } from "@/assets/svg";

import { topRightRing } from "@/assets/effects";
import { processCards } from "@/data/service-technology";
const VisiontoVictory = () => {
  return (
    <div
      className="bg-[#F8F8F8] pb-20 "
      style={{
        backgroundImage: "linear-gradient(to bottom, #F4F6FC 0%, #FFFFFF 40%)",
      }}>
      <div className="absolute right-0 top-0 z-1">{topRightRing}</div>
      <div className="relative w-full h-full z-10">
        <BannerHeader
          chipText="Product Engineering"
          chipBackgroundColor="#BCE0FF"
          chipTextColor="text-black"
          headerText="From Vision to Victory"
          headerTextColor="text-black"
          subHeaderText="We follow a structured methodology to deliver high-quality products"
          subHeaderTextColor="text-black"
          headerTextSize="text-6xl"
          className="pt-15"
          arrowSrc={downStrechArrow}
          arrowAlt="Expert Arrow"
          arrowPosition="bottom"
          arrowWidth={60}
          arrowHeight={120}
          maxWidth="lg:max-w-6xl"
        />
        <div className="flex justify-center pb-20">
          <div className="flex flex-wrap justify-center gap-6 px-4 py-10 max-w-6xl">
            {processCards.map((card) => (
              <div
                key={card.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <TechCardWithChip
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  bgColor={card.bgColor}
                  icon={card.icon}
                />
              </div>
            ))}
          </div>
        </div>
        <MessageBox
          text="This process ensures products are innovative, reliable, and aligned with strategic objectives."
          backgroundColor="#FFF3EB"
        />
      </div>
    </div>
  );
};

export default VisiontoVictory;

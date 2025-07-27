import BannerHeader from "../../components/BannerHeader";
import expertAarrow from "@/assets/images/services/expert-arrow.svg";
import MessageBox from "../../components/tooltip";
import TechCardWithChip from "../../components/technChipCards";
import { leftRing } from "@/assets/effects";
import { servicesCards } from "@/data/service-technology";

const Section3 = () => {
  return (
    <div className="bg-white pb-20 relative overflow-hidden w-full h-full">
      <div className="absolute top-0 -left-10 z-1 w-full h-full">
        <div>{leftRing}</div>
      </div>
      <div className="relative w-full h-full z-10">
        <BannerHeader
          chipText="Our Capabilities"
          chipBackgroundColor="#BCE0FF"
          chipTextColor="text-black"
          headerText="Meet the Experts"
          headerTextColor="text-black"
          subHeaderText="Our 50+ professionals drive innovation across technology and operations"
          subHeaderTextColor="text-black"
          headerTextSize="text-6xl"
          className="py-5 pt-15 md:py-0 md:pb-16 md:pt-20"
          arrowSrc={expertAarrow}
          maxWidth="lg:max-xl"
          arrowAlt="Expert Arrow"
          arrowPosition="left"
          arrowWidth={70}
          arrowHeight={120}
        />
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 px-4 pt-10 pb-20 max-w-6xl">
            {servicesCards.map((card) => (
              <div
                key={card.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] pb-4">
                <TechCardWithChip
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  bgColor={card.bgColor}
                />
              </div>
            ))}
          </div>
        </div>
        <MessageBox
          text="Our team’s expertise ensures comprehensive solutions tailored to your needs."
          backgroundColor="#F1F2FF"
        />
      </div>
    </div>
  );
};

export default Section3;

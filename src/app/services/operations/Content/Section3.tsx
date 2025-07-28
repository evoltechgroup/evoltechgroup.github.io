import BannerHeader from "../../components/BannerHeader";
import { operationsCardData } from "@/data/service-operations";
import OperationsCard from "../../components/OperationsCard";
import { leftRing, topRightRingv2 } from "@/assets/effects";
import expertAarrow from "@/assets/images/services/expert-arrow.svg";

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
          headerTextColor="text-black lg:max-w-[600px]"
          subHeaderText="Streamlining Your Success with Precision and Efficiency"
          subHeaderTextColor="text-black"
          headerTextSize="lg:text-[40px] max-w-2xl"
          className="py-5 pt-15 md:py-0 md:pb-16 md:pt-20"
          arrowSrc={expertAarrow}
          maxWidth="lg:max-xl"
          arrowAlt="Expert Arrow"
          arrowPosition="left"
          arrowWidth={70}
          arrowHeight={120}
        />
        <div className="w-full h-full flex flex-col gap-5 justify-center pb-15">
          {operationsCardData.map((card, index) => (
            <OperationsCard
              key={index}
              {...card}
              firstItem={index === 0}
              lastItem={index === operationsCardData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;

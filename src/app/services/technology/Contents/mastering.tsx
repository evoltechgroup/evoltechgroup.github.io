import React from "react";
import BannerHeader from "../../components/BannerHeader";
import expertAarrow from "@/assets/images/services/expert-arrow.svg";
import MessageBox from "../../components/tooltip";
import TagCardGridSection from "@/components/Card/TagCardGrid";
import TechCardWithChip from "../../components/technChipCards";
import { leftRing } from "@/assets/effects";
import { cloudServicesCards } from "@/data/service-technology";

const Mastering = () => {
  return (
    <div className="bg-[#F8F8F8] pb-20 relative">
      <div className="absolute top-0 -left-10 z-1 w-full h-full">
        <div>{leftRing}</div>
      </div>
      <BannerHeader
        chipText="Cloud Engineering"
        chipBackgroundColor="#BCE0FF"
        chipTextColor="text-black"
        headerText="Mastering Scalability"
        headerTextColor="text-black"
        subHeaderText="Our cloud engineering services empower businesses to scale and innovate"
        subHeaderTextColor="text-black"
        headerTextSize="text-6xl"
        className="py-5 pt-15 md:py-20"
        arrowSrc={expertAarrow}
        arrowAlt="Expert Arrow"
        arrowPosition="left"
        arrowWidth={60}
        arrowHeight={10}
      
      />
      <div className="flex justify-center pb-10">
        <div className="flex flex-wrap gap-6 px-4 py-1 pb-12 max-w-6xl">
          {cloudServicesCards.map((card) => (
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
        text="We use tools like Kubernetes for container orchestration, Ansible for automation, and Prometheus for monitoring, ensuring efficient cloud solutions."
        backgroundColor="#F1F2FF"
      />
    </div>
  );
};

export default Mastering;

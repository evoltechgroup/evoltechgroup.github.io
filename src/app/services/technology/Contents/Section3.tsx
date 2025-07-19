import React from "react";
import BannerHeader from "../../components/BannerHeader";
import expertAarrow from "@/assets/images/services/expert-arrow.svg";
import MessageBox from "../../components/tooltip";
import TagCardGridSection from "@/components/Card/TagCardGrid";
import TechCardWithChip from "../../components/technChipCards";

const Section3 = () => {
  const servicesCards = [
    {
      id: 1,
      title: "Software Engineers",
      description:
        "Build full-stack web and mobile apps using React, Django, and Node.js.",
      bgColor: "#E4EFF8",
    },
    {
      id: 2,
      title: "Data Scientists",
      description:
        "Analyze data and create predictive models for actionable insights.",
      bgColor: "#EBE9F9",
    },
    {
      id: 3,
      title: "AI/ML Engineers",
      description:
        "Develop AI solutions for automation, NLP, and computer vision.",
      bgColor: "#E9F6E8",
    },
    {
      id: 4,
      title: "Cloud Architects",
      description:
        "Design scalable cloud infrastructures on AWS, Azure, and Google Cloud.",
      bgColor: "#FAF3EB",
    },
    {
      id: 5,
      title: "DevOps Engineers",
      description:
        "Automate CI/CD pipelines with Docker, Kubernetes, and Jenkins.",
      bgColor: "#F8ECF9",
    },
    {
      id: 6,
      title: "UI/UX Designers",
      description: "Craft intuitive interfaces using Figma and Adobe XD.",
      bgColor: "#E4EFF8",
    },
    {
      id: 7,
      title: "Back-Office Operations Specialists",
      description:
        "Optimize processes with custom software for efficiency and cost savings.",
      bgColor: "#EBE9F9",
    },
  ];
  return (
    <div className="bg-white pb-20">
      <BannerHeader
        chipText="Our Capabilities"
        chipBackgroundColor="#BCE0FF"
        chipTextColor="text-black"
        headerText="Meet the Experts"
        headerTextColor="text-black"
        subHeaderText="Our 50+ professionals drive innovation across technology and operations"
        subHeaderTextColor="text-black"
        headerTextSize="text-6xl"
        className="py-20"
        arrowSrc={expertAarrow}
        arrowAlt="Expert Arrow"
        arrowPosition="left"
        arrowWidth={80}
        arrowHeight={120}
      />
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 px-4 py-10 max-w-6xl">
          {servicesCards.map((card) => (
            <div
              key={card.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] pb-4"
            >
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
  );
};

export default Section3;

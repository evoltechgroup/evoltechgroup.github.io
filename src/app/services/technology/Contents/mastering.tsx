import React from "react";
import BannerHeader from "../../components/BannerHeader";
import expertAarrow from "@/assets/images/services/expert-arrow.svg";
import MessageBox from "../../components/tooltip";
import TagCardGridSection from "@/components/Card/TagCardGrid";
import TechCardWithChip from "../../components/technChipCards";

const Mastering = () => {
  const cloudServicesCards = [
    {
      id: 1,
      title: "Cloud Infrastructure Setup",
      description:
        "Design scalable architectures on AWS, Azure, and Google Cloud using Terraform.",
      bgColor: "#E4EFF8",
    },
    {
      id: 2,
      title: "CI/CD Services",
      description:
        "Automate pipelines with Jenkins, GitHub Actions, and AWS CodePipeline.",
      bgColor: "#EBE9F9",
    },
    {
      id: 3,
      title: "Custom Pipeline Development",
      description: "Tailor workflows for microservices and serverless apps.",
      bgColor: "#E9F6E8",
    },
    {
      id: 4,
      title: "Cloud Migration",
      description: "Seamlessly transition on-premises systems to the cloud.",
      bgColor: "#FAF3EB",
    },
    {
      id: 5,
      title: "Cost Optimization",
      description:
        "Reduce costs with AWS Cost Explorer and Azure Cost Management.",
      bgColor: "#F8ECF9",
    },
  ];
  return (
    <div className="bg-white pb-20">
      <BannerHeader
        chipText="Cloud Engineering"
        chipBackgroundColor="#BCE0FF"
        chipTextColor="text-black"
        headerText="Mastering Scalability"
        headerTextColor="text-black"
        subHeaderText="Our cloud engineering services empower businesses to scale and innovate"
        subHeaderTextColor="text-black"
        headerTextSize="text-6xl"
        className="py-20"
        arrowSrc={expertAarrow}
        arrowAlt="Expert Arrow"
        arrowPosition="left"
        arrowWidth={100}
        arrowHeight={120}
      />
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-6 px-4 py-10 max-w-6xl">
          {cloudServicesCards.map((card) => (
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

export default Mastering;

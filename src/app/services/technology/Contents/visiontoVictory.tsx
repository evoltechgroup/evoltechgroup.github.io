import React from "react";
import BannerHeader from "../../components/BannerHeader";
import expertAarrow from "@/assets/images/services/expert-arrow.svg";
import MessageBox from "../../components/tooltip";
import TechCardWithChip from "../../components/technChipCards";
import {
  bulbIcon,
  codeIcon,
  deployIcon,
  maintainIcon,
  sketchIcon,
  testIcon,
} from "@/assets/svg";
const VisiontoVictory = () => {
  const processCards = [
    {
      id: 1,
      title: "Discovery",
      description:
        "Conduct workshops using Miro to define user needs and project scope. Align solutions with client goals in Banking, FinTech, and other industries.",
      bgColor: "#E4EFF8",
      icon: bulbIcon,
    },
    {
      id: 2,
      title: "Design",
      description:
        "Create wireframes and prototypes with Figma and Adobe XD. Focus on user-centric design for seamless experiences.",
      bgColor: "#EBE9F9",
      icon: sketchIcon,
    },
    {
      id: 3,
      title: "Development",
      description:
        "Use agile Scrum with Jira for sprint management. Employ Git for version control and collaboration.",
      bgColor: "#E9F6E8",
      icon: codeIcon,
    },
    {
      id: 4,
      title: "Testing",
      description:
        "Perform automated testing with Selenium and Jest. Ensure quality through manual testing and user feedback.",
      bgColor: "#FAF3EB",
      icon: testIcon,
    },
    {
      id: 5,
      title: "Deployment",
      description:
        "Automate releases with CI/CD pipelines using Jenkins, GitHub Actions, or AWS CodePipeline.",
      bgColor: "#F8ECF9",
      icon: deployIcon,
    },
    {
      id: 6,
      title: "Maintenance",
      description:
        "Monitor performance with New Relic and Datadog. Provide ongoing updates to adapt to evolving needs.",
      bgColor: "#E4EFF8",
      icon: maintainIcon,
    },
  ];
  return (
    <div className="bg-white pb-20">
      <BannerHeader
        chipText="Product Engineering"
        chipBackgroundColor="#BCE0FF"
        chipTextColor="text-black"
        headerText="From Vision to Victory"
        headerTextColor="text-black"
        subHeaderText="We follow a structured methodology to deliver high-quality products"
        subHeaderTextColor="text-black"
        headerTextSize="text-6xl"
        className=""
        arrowSrc={expertAarrow}
        arrowAlt="Expert Arrow"
        arrowPosition="bottom"
        arrowWidth={60}
        arrowHeight={120}
        maxWidth="lg:max-w-6xl"
      />
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 px-4 py-10 max-w-6xl">
          {processCards.map((card) => (
            <div
              key={card.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
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
        text="Our team’s expertise ensures comprehensive solutions tailored to your needs."
        backgroundColor="#FFF3EB"
      />
    </div>
  );
};

export default VisiontoVictory;

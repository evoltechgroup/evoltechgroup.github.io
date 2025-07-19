import React from "react";
import BannerHeader from "./BannerHeader";
import TechArrow from "../../../assets/images/services/power-arrow.svg";
import TechStackShowCase from "./TechStack";
import MessageBubble from "./tooltip";
import MessageBox from "./tooltip";

const Section1 = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <BannerHeader
        chipText="Our Services"
        chipBackgroundColor="#FFDEB7"
        chipTextColor="text-black"
        headerText="Powering Innovation"
        headerTextColor="text-black"
        subHeaderText="At EvolTech, we harness a robust tech stack to deliver scalable, secure, and innovative solutions."
        subHeaderTextColor="text-black"
        headerTextSize="text-6xl"
        className="py-20"
        arrowSrc={TechArrow}
        arrowAlt="Tech Arrow"
        arrowPosition="right"
        arrowWidth={140}
        arrowHeight={40}
      />
      <TechStackShowCase />
      <MessageBox
        content="This diverse stack enables us to address complex challenges in Banking, FinTech, Retail, Insurance, and Healthcare."
        bgColor="bg-white"
      />
    </div>
  );
};

export default Section1;

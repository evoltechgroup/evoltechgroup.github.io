import React from "react";
import TechArrow from "@/assets/images/services/power-arrow.svg";
import BannerHeader from "../../components/BannerHeader";
import TechStackShowCase from "../../components/TechStack";
import MessageBox from "../../components/tooltip";

const Section1 = () => {
  return (
    <div className="bg-[#F8F8F8] overflow-hidden w-full h-full md:pb-10">
      <BannerHeader
        chipText="Our Services"
        chipBackgroundColor="#FFDEB7"
        chipTextColor="text-black"
        headerText="Powering Innovation"
        headerTextColor="text-black"
        subHeaderText="At EvolTech, we harness a robust tech stack to deliver scalable, secure, and innovative solutions."
        subHeaderTextColor="text-black"
        headerTextSize="text-6xl"
        className=" pt-15 py-5 "
        arrowSrc={TechArrow}
        arrowAlt="Tech Arrow"
        arrowPosition="right"
        arrowWidth={75}
        arrowHeight={35}
        maxWidth=" max-w-4xl"
       
      />
      <TechStackShowCase />

      <MessageBox
        text="This diverse stack enables us to address complex challenges in Banking, FinTech, Retail, Insurance, and Healthcare."
        backgroundColor="#fff"
      />
    </div>
  );
};

export default Section1;

import React from "react";
import BannerHeader from "../../components/BannerHeader";
import secureAarrow from "@/assets/images/services/secure-arrow.svg";
import MessageBox from "../../components/tooltip";
import OurService from "../../components/ourServices";

const Section4 = () => {
  return (
    <div className="bg-[#F8F8F8] pb-20">
      <BannerHeader
        chipText="SOC2 Certification Readiness"
        chipBackgroundColor="#BCE0FF"
        chipTextColor="text-black"
        headerText="Securing Your Trust"
        headerTextColor="text-black"
        subHeaderText="EvolTech helps clients achieve SOC2 compliance, a critical standard for secure data management in industries like Financial Services and Healthcare."
        subHeaderTextColor="text-black"
        headerTextSize="text-6xl"
        className="py-20"
        arrowSrc={secureAarrow}
        arrowAlt="Secure Arrow"
        arrowPosition="bottom"
        arrowWidth={60}
        arrowHeight={10}
      />
      <div>
        <OurService />
      </div>

      <MessageBox
        text="Our team’s expertise ensures comprehensive solutions tailored to your needs."
        backgroundColor="#FFFFFF"
      />
    </div>
  );
};

export default Section4;

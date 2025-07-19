import React from "react";
import BannerHeader from "../components/BannerHeader";
import expertAarrow from "../../../assets/images/services/expert-arrow.svg";
import MessageBox from "../components/tooltip";

const Section2 = () => {
  return (
    <div className="bg-[#F8F8F8]">
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
        arrowWidth={100}
        arrowHeight={120}
      />

      <MessageBox
        content="Our team’s expertise ensures comprehensive solutions tailored to your needs."
        bgColor="bg-[#F1F2FF]"
      />
    </div>
  );
};

export default Section2;

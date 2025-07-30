import React from "react";

export interface CardProps {
  title: string;
  description: string;
}

const InfoCardAbout: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border-l-1  border-[#FFBB00] px-4 h-[7rem] md:h-[8rem] flex flex-col lg:w-[15rem] text-left w-full justify-center gap-4 md:gap-0 md:justify-between relative">
      <div className="w-2 bg-[#FFBB00] h-11 absolute -left-0.5 top-0" />
      <div className="font-semibold text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-white mb-1">
        {title}
      </div>
      <div
        className="text-sm md:text-xl lg:text-base xl:text-lg  text-[#B7CAEA]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default InfoCardAbout;

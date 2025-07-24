import React from "react";

export interface CardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="rounded-3xl border border-[#768fb6a4] px-4 py-4 h-[7rem] md:h-[10rem] md:flex md:flex-col md:w-[15rem] text-left w-full md:justify-center relative">
      <div className="w-1 bg-[#8DCAFF] h-6 absolute -left-0.5 top-5" />
      <div className="font-semibold text-base lg:text-xl xl:text-2xl text-white mb-1">
        {title}
      </div>
      <div className="text-xs lg:text-sm xl:text-lg text-[#B7CAEA]">
        {description}
      </div>
    </div>
  );
};

export default InfoCard;

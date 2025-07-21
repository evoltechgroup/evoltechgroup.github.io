import React from "react";

export interface CardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="rounded-3xl border border-[#25354E] px-4 lg:px-6 py-4 h-[8rem] w-[12rem] lg:h-[10rem] lg:w-[15rem] p-4 relative">
      <div className="w-1 bg-[#8DCAFF] h-6 absolute -left-0.5 top-5" />
      <div className="font-semibold text-lg lg:text-2xl text-white mb-1">{title}</div>
      <div className="text-sm lg:text-lg text-[#B7CAEA]">{description}</div>
    </div>
  );
};

export default InfoCard;

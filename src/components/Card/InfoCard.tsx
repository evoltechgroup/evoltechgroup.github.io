import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="rounded-3xl border border-[#25354E] px-6 py-4 h-[10rem] w-[15rem] p-4 relative">
      <div className="w-1 bg-[#8DCAFF] h-6 absolute -left-0.5 top-5" />
      <div className="font-semibold text-2xl text-white mb-1">{title}</div>
      <div className="text-lg text-[#B7CAEA]">{description}</div>
    </div>
  );
};

export default InfoCard;

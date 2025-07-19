import React from "react";

interface CardWithChipType {
  id: number;
  title: string;
  description: string;
  bgColor: string;
}

const CardWithChip: React.FC<CardWithChipType> = ({
  id,
  title,
  description,
  bgColor,
}) => {
  return (
    <div key={id} className="flex flex-col gap-4 max-w-[290px] w-full mx-auto">
      <div
        className="p-1.5 w-fit px-3 flex rounded-full rounded-bl-none font-semibold text-black text-base"
        style={{ backgroundColor: bgColor }}>
        {title}
      </div>
      <p className="text-sm text-[#444444] font-medium max-w-[280px]">
        {description}
      </p>
    </div>
  );
};

export default CardWithChip;

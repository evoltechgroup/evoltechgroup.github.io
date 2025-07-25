import Label from "@/components/Label";
import { StaticImageData } from "next/image";
import React from "react";

interface OperationsCardProps {
  iconSrc: StaticImageData;
  title: string;
  subtitle: string;
  description: string[];
  label: string;
  extraDescription?: string;
  lastItem: boolean;
}

const OperationsCard: React.FC<OperationsCardProps> = ({
  iconSrc,
  title,
  subtitle,
  description,
  label,
  extraDescription,
  lastItem = false,
}) => {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-15 justify-center items-center w-full h-full">
      <div className="flex md:w-1/4 mb-4 h-full md:mb-0 self-start">
        <div className="flex-shrink-0 mt-1 w-12 h-12 mr-3 lg:mr-8 bg-gradient-to-r from-[#5785DC] to-[#5F4793] rounded-2xl flex items-center justify-center">
          <img src={iconSrc.src} alt={`${title} Icon`} className="h-8 w-8" />
        </div>
        <div className="flex flex-col gap-4 md:text-start max-w-xs">
          <h2 className="text-3xl font-semibold text-[#000000]">{title}</h2>
          <p className="text-lg font-medium text-[#000000]">{subtitle}</p>
        </div>
      </div>

      <div className="md:w-1/2 max-w-[629px] flex flex-col gap-5 text-[#444444]">
        {description.map((line, index) => (
          <p key={index} className="text-base font-medium">
            {line}
          </p>
        ))}

        <div className="flex w-fit px-6 border-l-3 border-l-[#4C96D7] bg-white shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] p-2 items-center">
          <span className="text-sm font-medium w-full text-start !text-[#212121]">
            {label}
          </span>
        </div>

        {extraDescription && (
          <p className="text-base font-medium">{extraDescription}</p>
        )}
        {!lastItem && (
          <div
            className="w-full mt-6 h-[2px] border-t-2 border-dotted"
            style={{ borderColor: "rgba(170, 170, 170, 1)" }}></div>
        )}
      </div>
    </div>
  );
};

export default OperationsCard;

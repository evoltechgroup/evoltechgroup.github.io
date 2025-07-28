import React from "react";
import ArrowDown from "../../../assets/images/services/power-arrow.svg";
import Image, { StaticImageData } from "next/image";

interface BannerHeader2Props {
  chipText: string;
  chipBackgroundColor?: string;
  headerText: string;
  subHeaderText: string;
  maxWidth?: string;
  headerTextSize?: string;
  subHeaderTextSize?: string;
  chipTextColor?: string;
  headerTextColor?: string;
  subHeaderTextColor?: string;
  className?: string;
  showArrow?: boolean;
  arrowPosition?: "left" | "right" | "top" | "bottom";
  arrowWidth?: number;
  arrowHeight?: number;
  arrowSrc?: string | StaticImageData | React.ReactNode;
  arrowAlt?: string;
  arrowColor?: string;
  subHeader2Text?: string;
  subHeader2TextSize?: string;
  subHeader2TextColor?: string;
}

const BannerHeader2: React.FC<BannerHeader2Props> = ({
  chipText,
  chipBackgroundColor = "",
  headerText,
  subHeaderText,
  maxWidth = "lg:max-w-4xl",
  headerTextSize = "text-6xl",
  subHeaderTextSize = "text-xl",
  chipTextColor = "text-black",
  headerTextColor = "text-black",
  subHeaderTextColor = "text-black",
  className = "",
  showArrow = true,
  arrowPosition = "",
  arrowWidth = 0,
  arrowHeight = 0,
  arrowSrc = ArrowDown,
  arrowAlt = "Arrow",
  arrowColor = "",
  subHeader2Text = "",
  subHeader2TextSize = "text-2xl",
  subHeader2TextColor = "text-black",
}) => {
  const ArrowComponent = () =>
    showArrow ? (
      <div
        className={`arrow ${arrowColor && `text-[ ]`} ${
          arrowWidth ? `w-[${arrowWidth}px]` : ""
        } ${arrowHeight ? `h-[${arrowHeight}px]` : ""} ${arrowPosition}`}>
        {typeof arrowSrc === "string" || (arrowSrc && "src" in arrowSrc) ? (
          <Image
            src={arrowSrc as string | StaticImageData}
            alt={arrowAlt}
            width={arrowWidth}
            height={arrowHeight}
          />
        ) : (
          arrowSrc
        )}
      </div>
    ) : null;

  const renderSubHeaderWithArrow = () => {
    const subHeaderElement = (
      <div className="flex flex-col items-center gap-2">
        <div
          className={`text-center sub-header ${subHeader2TextSize} max-w-full lg:max-w-7xl font-normal lg:mt-6 ${subHeader2TextColor}`}>
          {subHeader2Text}
        </div>
        <div
          className={`font-sm md:p-4 ${subHeaderTextColor}  ${subHeaderTextSize}`}>
          {subHeaderText}
        </div>
      </div>
    );

    if (arrowPosition === "top") {
      return (
        <div className="flex flex-col items-center gap-2">
          <ArrowComponent />
          {subHeaderElement}
        </div>
      );
    }

    if (arrowPosition === "bottom") {
      return (
        <div className="flex flex-col gap-2 justify-center items-center">
          {subHeaderElement}
          <ArrowComponent />
        </div>
      );
    }

    if (arrowPosition === "left") {
      return (
        <div className="flex gap-0 px-10">
          <div className="pt-8 hidden md:flex">
            <ArrowComponent />
          </div>
          {subHeaderElement}
        </div>
      );
    }

    // Default: right position
    return (
      <div className="flex">
        {subHeaderElement}
        <div className="pt-4 flex">
          <ArrowComponent />
        </div>
      </div>
    );
  };
  return (
    <div className={`header-component flex justify-center ${className}`}>
      <div
        className={`flex flex-col items-center text-center ${maxWidth} gap-2`}>
        <div
          className={`chip rounded-full max-w-content justify-center font-medium text-center px-4 py-2 ${chipTextColor}`}
          style={{ backgroundColor: chipBackgroundColor }}>
          {chipText}
        </div>
        <div
          className={`header ${headerTextSize} font-bold ${headerTextColor} flex justify-center items-center`}>
          {headerText}
        </div>
        <div
          className={`px-2 lg:px-40 flex justify-center items-center lg:ml-[-4rem]`}>
          {renderSubHeaderWithArrow()}
        </div>
      </div>
    </div>
  );
};

export default BannerHeader2;

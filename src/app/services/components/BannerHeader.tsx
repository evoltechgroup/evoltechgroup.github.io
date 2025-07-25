import React from "react";
import ArrowDown from "../../../assets/images/services/power-arrow.svg";
import Image, { StaticImageData } from "next/image";

interface BannerHeaderProps {
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
  arrowOverrideCx?: string;
}

const BannerHeader: React.FC<BannerHeaderProps> = ({
  chipText,
  chipBackgroundColor = "",
  headerText,
  subHeaderText,
  maxWidth = "lg:max-w-4xl",
  headerTextSize = "text-6xl",
  subHeaderTextSize = "text-2xl",
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
  arrowOverrideCx = "",
}) => {
  const ArrowComponent = () =>
    showArrow ? (
      <div
        className={`arrow ${arrowOverrideCx} ${
          arrowColor && `text-[${arrowColor}]`
        } ${arrowWidth ? `w-[${arrowWidth}px]` : ""} ${
          arrowHeight ? `h-[${arrowHeight}px]` : ""
        } ${arrowPosition}`}>
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
      <div
        className={`sub-header p-4 md:p-0 text-xl md:${subHeaderTextSize} max-w-3xl font-normal lg:mt-6 ${subHeaderTextColor}`}>
        {subHeaderText}
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
        <div className="relative flex gap-0 px-10">
          <div
            className={` ${arrowOverrideCx ? arrowOverrideCx : "pt-8 flex"}`}>
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
    <div className={`header-component flex justify-center  ${className}`}>
      <div
        className={`flex flex-col items-center text-center w-full md:${maxWidth} gap-2`}>
        <div
          className={`chip rounded-full max-w-content justify-center font-medium text-center px-4 py-2 ${chipTextColor}`}
          style={{ backgroundColor: chipBackgroundColor }}>
          {chipText}
        </div>
        <div
          className={`header text-4xl md:${headerTextSize} font-bold ${headerTextColor}`}>
          {headerText}
        </div>
        <div className="md:px-40">{renderSubHeaderWithArrow()}</div>
      </div>
    </div>
  );
};

export default BannerHeader;

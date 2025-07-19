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
  arrowSrc?: string | StaticImageData;
  arrowAlt?: string;
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
}) => {
  const ArrowComponent = () =>
    showArrow ? (
      <div className={`arrow w-${arrowWidth} h-${arrowHeight}`}>
        <Image
          src={arrowSrc}
          alt={arrowAlt}
          width={arrowWidth}
          height={arrowHeight}
        />
      </div>
    ) : null;

  const renderSubHeaderWithArrow = () => {
    const subHeaderElement = (
      <div
        className={`sub-header ${subHeaderTextSize} font-light lg:mt-6 ${subHeaderTextColor}`}
      >
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
        <div className="flex items-center gap-0 px-10">
          <ArrowComponent />
          {subHeaderElement}
        </div>
      );
    }

    // Default: right position
    return (
      <div className="flex items-center gap-4">
        {subHeaderElement}
        <ArrowComponent />
      </div>
    );
  };
  return (
    <div className={`header-component flex justify-center ${className}`}>
      <div
        className={`flex flex-col items-center text-center ${maxWidth} gap-2`}
      >
        <div
          className={`chip rounded-full max-w-content justify-center text-center px-4 py-2 ${chipTextColor}`}
          style={{ backgroundColor: chipBackgroundColor }}
        >
          {chipText}
        </div>
        <div
          className={`header ${headerTextSize} font-bold ${headerTextColor}`}
        >
          {headerText}
        </div>
        <div className="px-40">{renderSubHeaderWithArrow()}</div>
      </div>
    </div>
  );
};

export default BannerHeader;

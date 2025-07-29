import { starAiIcon } from "@/assets/svg";
import Text from "@/components/Text";
import { StaticImageData } from "next/image";
import React from "react";

interface LogoContainerType {
  name: string;
  icon: StaticImageData;
  title: string;
  subTitle: string;
}

const LogoContainer: React.FC<LogoContainerType> = ({
  name,
  icon,
  title,
  subTitle,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 w-full h-full items-center justify-center">
      <div
        className={`w-full h-[120px] md:w-[380px] ${
          name === "fiveoak" && "md:p-20"
        } md:h-[193px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-white flex items-center justify-center rounded-3xl`}>
        <img src={icon.src} alt="icon-" />
      </div>
      <div className="md:max-w-[630px] flex flex-col justify-between">
        <Text className="text-3xl md:text-5xl font-bold">
          {title}
          {name === "reinnova" && (
            <span className="inline-block align-middle w-10 ml-2 mr-2 h-10">
              {starAiIcon}
            </span>
          )}
        </Text>
        <Text className="text-lg md:text-xl font-medium w-full md:max-w-[630px]">
          {subTitle}
        </Text>
      </div>
    </div>
  );
};

export default LogoContainer;

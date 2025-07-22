import {
  eclipseEffect,
  rectangle188,
  rectangle189,
  rectangle190,
  rectangle191,
  rectangle191Tech,
} from "@/assets/effects";
import { followArrowDown } from "@/assets/svg";
import Text from "@/components/Text";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface BgBannerProps {
  id: string;
  foregroundImage: StaticImageData;
  foregroundImageAlt?: string;
  consultingIcon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  backgroundImages?: {
    main: StaticImageData;
    extras?: StaticImageData[];
  };
}

const BgBanner: React.FC<BgBannerProps> = ({
  id,
  foregroundImage,
  foregroundImageAlt = "Foreground Image",
  consultingIcon,
  title,
  subtitle,
  description,
  backgroundImages,
}) => {
  return (
    <section className="relative w-full bg-[#ffff] flex flex-col items-center h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden pointer-events-none">
        <div className="absolute z-7 w-full h-full">{eclipseEffect}</div>
        {backgroundImages?.main && (
          <img
            src={backgroundImages.main.src}
            alt="Background Main Image"
            className={`w-full z-8 h-full absolute object-cover sm:object-contain ${
              id === "tech" && "mix-blend-overlay opacity-50"
            }`}
          />
        )}
        {backgroundImages?.extras?.map((img, i) => (
          <img
            key={`bg-extra-${i}`}
            src={img.src}
            alt={`Background Extra Image ${i + 1}`}
            className="absolute w-full h-full object-contain"
            style={{ zIndex: 5 - i, opacity: 0.8 }}
          />
        ))}
        <div className="absolute z-4 w-full h-full">
          {id === "tech" ? rectangle191Tech : rectangle191}
        </div>
        <div className="absolute z-3 w-full h-full">{rectangle190}</div>
        <div className="absolute z-2 w-full h-full flex items-center justify-center">
          <div>{rectangle189}</div>
        </div>
        <div className="absolute z-1 w-full h-full opacity-20">
          {rectangle188}
        </div>
      </div>

      <div className="relative z-10 w-full h-full justify-center items-center p-5 pb-0">
        <div className="w-full h-full flex justify-between gap-24 pt-20 sm:pt-44 sm:p-36 sm:pb-0">
          <div className="w-full sm:w-1/2 flex flex-col gap-5 items-start justify-center sm:justify-end mb-4 pb-18">
            <div className="w-[106px] h-[106px]">{consultingIcon}</div>
            <Text
              className="font-semibold text-xl sm:text-6xl text-center whitespace-nowrap text-[#fff]"
              tag="p">
              {title}
            </Text>
            <Text className="text-base sm:text-3xl max-w-[40rem] text-center text-[#C5E1FF]">
              {subtitle}
            </Text>
            <Text className="text-sm sm:text-xl max-w-[40rem] text-start text-[#C5E1FF]">
              {description}
            </Text>
            <div className="text-[#FFBB00] flex justify-center w-full">
              {followArrowDown}
            </div>
          </div>

          <div className="w-1/2 h-full hidden sm:flex">
            <div className="relative w-full h-full flex items-end pl-20">
              <div className="max-w-[430px] max-h-[620px] border relative rounded-[48px] rounded-bl-none rounded-br-none overflow-hidden border-white">
                <img
                  src={foregroundImage.src}
                  alt={foregroundImageAlt}
                  className={`w-full h-full rounded-[48px] rounded-bl-none rounded-br-none  ${
                    id === "consultancy" && "relative -translate-y-[120px]"
                  }`}
                  height={620}
                  width={430}
                />
                <div
                  style={{ mixBlendMode: "plus-lighter" }}
                  className="absolute inset-0 bg-gradient-to-b from-[#190670] to-[#1B0A41] opacity-80 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BgBanner;

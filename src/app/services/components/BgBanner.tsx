import {
  eclipseEffect,
  rectangle188,
  rectangle189,
  rectangle190,
  rectangle191,
  rectangle191Tech,
  rectangle210,
} from "@/assets/effects";
import { followArrowDown, productPageArrow } from "@/assets/svg";
import Text from "@/components/Text";
import { StaticImageData } from "next/image";

interface BgBannerProps {
  id: string;
  foregroundImage: StaticImageData;
  foregroundImageAlt?: string;
  consultingIcon?: string;
  title: string;
  subtitle?: string;
  description: string;
  backgroundImages?: {
    main: StaticImageData;
    mobileTech?: StaticImageData;
    extras?: StaticImageData[] | string[];
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
          <>
            <img
              src={backgroundImages.main.src}
              alt="Background Main Image"
              className={`w-full z-8 h-full absolute sm:block ${
                id === "operations"
                  ? "opacity-40 object-cover top-20"
                  : id === "products"
                  ? "object-cover mix-blend-overlay opacity-25"
                  : "left-0 object-cover sm:object-contain"
              } ${
                id === "tech" &&
                "hidden mix-blend-overlay opacity-50  md:left-20"
              } object-left`}
            />
            {id === "tech" && backgroundImages.mobileTech && (
              <img
                src={backgroundImages.mobileTech.src}
                alt="Tech Mobile Background"
                className="w-full z-8 h-full absolute sm:hidden object-cover mix-blend-overlay opacity-50"
              />
            )}
          </>
        )}

        {id === "tech" && (
          <div className="absolute left-35 md:left-[35%] top-[28%] mix-blend-color-dodge opacity-60">
            {rectangle210}
          </div>
        )}
        {id === "products"
          ? backgroundImages?.extras?.map((img, i) => (
              <img
                key={`bg-extra-${i}`}
                src={typeof img === "string" ? img : img.src}
                alt={`Background Extra Image ${i + 1}`}
                className="absolute left-0"
                style={{ zIndex: 5 - i }}
              />
            ))
          : backgroundImages?.extras?.map((img, i) => (
              <img
                key={`bg-extra-${i}`}
                src={typeof img === "string" ? img : img.src}
                alt={`Background Extra Image ${i + 1}`}
                className="absolute w-full h-full top-20 object-cover opacity-10 mix-blend-overlay"
                style={{ zIndex: 5 - i }}
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
        <div className="w-full h-full flex flex-col md:flex-row md:justify-between md:gap-24 pt-20 sm:pt-10 sm:p-30 sm:pb-0">
          <div
            className={`w-full sm:w-1/2  flex flex-col gap-5 md:gap-10 items-start justify-center ${
              id === "products"
                ? "max-w-lg md:justify-center"
                : "md:justify-end"
            } mt-10 md:mt-0 md:pb-5`}>
            <div className="flex justify-center items-center">
              {consultingIcon && (
                <div className="h-14 w-14 lg:h-28 lg:w-28 mr-3 lg:mr-8 bg-gradient-to-r from-[#5785DC] to-[#5F4793] rounded-2xl lg:rounded-3xl flex items-center justify-center">
                  <img
                    src={consultingIcon}
                    alt={`${title} Icon`}
                    className="h-8 w-8 lg:h-16 lg:w-16"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 md:gap-5">
                <Text
                  className="font-semibold text-3xl sm:text-3xl lg:text-6xl text-left whitespace-nowrap text-[#fff]"
                  tag="p">
                  {title}
                </Text>
                {subtitle && (
                  <Text className="text-xl sm:text-3xl font-medium max-w-xl text-left text-[#FFBB00]">
                    {subtitle}
                  </Text>
                )}
              </div>
            </div>
            <p
              className="text-base sm:text-xl max-w-full text-start text-[#C5E1FF]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {id === "products" ? (
              <div className="text-[#FFBB00] flex justify-start w-20 md:w-[71px]">
                {productPageArrow}
              </div>
            ) : (
              <div className="text-[#FFBB00] flex justify-center w-15 md:w-[71px] mx-auto pb-25 sm:pb-20">
                {followArrowDown}
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 -mt-10 md:mt-0 h-full flex">
            <div className="relative w-full h-full flex items-end md:pl-20 pb-15 md:pb-0">
              <div className="w-full h-[264px] md:w-[430px] md:h-[620px] relative rounded-[48px] md:rounded-b-none overflow-hidden">
                <img
                  src={foregroundImage.src}
                  alt={foregroundImageAlt}
                  className={`
                    absolute inset-0 rounded-[48px] md:rounded-b-none object-cover w-full h-full 
                    ${id === "consultancy" ? "object-[center_20%]" : ""}
                  `}
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

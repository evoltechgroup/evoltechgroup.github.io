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
    <section className="relative w-full bg-[#ffff]  h-screen overflow-hidden ">
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
                className="absolute left-0 -bottom-10"
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

      <div className="relative z-10 w-full h-full grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
        <div className="w-full h-full flex flex-col md:flex-row col-span-4 lg:col-span-10 col-start-1 justify-end pb-15 md:pb-0 gap-10 md:gap-0 lg:col-start-2">
          <div
            className={`w-full sm:w-1/2  flex flex-col gap-5 md:gap-10 items-start justify-center ${
              id === "products"
                ? "max-w-lg md:justify-end lg:pb-20"
                : "md:justify-end"
            } mt-10 md:mt-30 md:pb-5`}>
            <div className="flex justify-center items-center">
              {consultingIcon && (
                <div className="h-14 w-14 lg:h-20 lg:w-20 xl:h-28 xl:w-28 mr-3 lg:mr-8 bg-gradient-to-r from-[#5785DC] to-[#5F4793] rounded-2xl lg:rounded-3xl flex items-center justify-center">
                  <img
                    src={consultingIcon}
                    alt={`${title} Icon`}
                    className="h-8 w-8 lg:h-12 lg:w-12 xl:h-16 xl:w-16"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 md:gap-5">
                <Text
                  className="font-semibold text-3xl sm:text-3xl lg:text-4xl xl:text-6xl text-left whitespace-nowrap text-[#fff]"
                  tag="p">
                  {title}
                </Text>
                {subtitle && (
                  <Text className="text-xl lg:text-2xl xl:text-3xl font-medium max-w-xl text-left text-[#FFBB00]">
                    {subtitle}
                  </Text>
                )}
              </div>
            </div>
            <p
              className="text-base xl:text-xl max-w-full text-start text-[#C5E1FF]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {id === "products" ? (
              <div className="text-[#FFBB00] flex justify-start w-20 md:w-[71px]">
                {productPageArrow}
              </div>
            ) : (
              <div className="text-[#FFBB00] flex justify-center w-15 lg:w-15 xl:w-[71px] mx-auto sm:pb-10">
                {followArrowDown}
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 h-fit md:h-full flex justify-end">
            <div className="relative w-full h-full flex items-end justify-end md:pb-0">
              <div className="w-full h-[264px] lg:w-[65%] lg:h-[75%] xl:w-[430px] xl:h-[620px] relative rounded-[48px] md:rounded-b-none overflow-hidden">
                <img
                  src={foregroundImage.src}
                  alt={foregroundImageAlt}
                  className={`
                    absolute inset-0 rounded-[48px] md:rounded-b-none object-cover w-full h-full 
                    ${id === "consultancy" ? "object-[center_20%]" : ""}
                  `}
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

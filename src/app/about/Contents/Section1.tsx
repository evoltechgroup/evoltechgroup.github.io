import { followArrow, followArrowv2, mainFollowArrow } from "@/assets/svg";
import Globe from "@/assets/effects/Aboutus/Globe.jpg";
import Text from "@/components/Text";
import { infoCards } from "@/data/about-us";
import InfoCard from "@/components/Card/InfoCard";
import {
  eclipseEffect,
  rectangle188,
  rectangle189,
  rectangle190,
  rectangle191,
} from "@/assets/effects";

const Section1 = () => {
  return (
    <section className="relative w-full bg-[#ffff] md:py-10 flex flex-col items-center h-screen">
      <div className="absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden pointer-events-none">
          <div className="absolute z-7 w-full h-full">{eclipseEffect}</div>
          <img
            src={Globe.src}
            alt="LeftGlobe"
            className="absolute w-[480px] -left-60 -top-20 z-6  mix-blend-color-dodge opacity-50"
          />
          <img
            src={Globe.src}
            alt="RightGlobe"
            className="absolute md:w-[950px] md:h-[950px] w-full h-[400px] md:-right-[35%] -bottom-10 md:-top-20 z-6  mix-blend-color-dodge opacity-50"
          />
          <div className="absolute z-4 w-full h-full opacity-100">
            {rectangle191}
          </div>
          <div className="absolute z-3 w-full h-full opacity-100">
            {rectangle190}
          </div>
          <div className="absolute z-2 w-full h-full flex items-center justify-center">
            <div>{rectangle189}</div>
          </div>
          <div className="absolute z-1 w-full h-full opacity-20">
            {rectangle188}
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full h-full justify-center items-center p-5">
        <div className="w-full h-full flex flex-col justify-center gap-0 md:gap-15 items-center md:p-40 md:pb-20">
          <div className="flex flex-col gap-5 items-center mb-4">
            <Text
              className="font-semibold text-4xl md:text-4xl xl:text-6xl text-center"
              tag="p">
              Who we are
            </Text>
            <Text className="text-sm md:text-sm xl:text-xl max-w-[40rem] !text-center text-[#C5E1FF]">
              We turn visionary ideas into reality with advanced tech, expert
              consulting, and efficient back office solutions, powered by 50+
              specialists in full-stack, AI, and cloud computing.
            </Text>
            <div className="flex text-[#FFBB00] justify-start items-end md:ml-24 -mt-6  w-10 md:w-4/4">
              <span className="transform -rotate-[10deg] scale-x-[-1] h-20 md:h-30">
                {followArrowv2}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full mx-auto p-4">
            {infoCards.map((item, idx) => (
              <InfoCard
                key={idx}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

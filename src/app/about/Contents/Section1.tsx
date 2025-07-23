import { mainFollowArrow } from "@/assets/svg";
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
    <section className="relative w-full bg-[#ffff] py-10 flex flex-col items-center h-screen">
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
            className="absolute w-[950px] h-[950px] -right-[35%] -top-20 z-6  mix-blend-color-dodge opacity-50"
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
        <div className="w-full h-full flex flex-col justify-center gap-15 items-center p-40 pb-20">
          <div className="flex flex-col gap-5 items-center mb-4">
            <Text className="font-semibold text-6xl text-center" tag="p">
              Who we are
            </Text>
            <Text className="text-xl max-w-[40rem] !text-center text-[#C5E1FF]">
              We turn visionary ideas into reality with advanced tech, expert
              consulting, and efficient back office solutions, powered by 50+
              specialists in full-stack, AI, and cloud computing.
            </Text>
            <div className="flex -mt-6 w-full">{mainFollowArrow}</div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 ">
            {infoCards.map((item, idx) => {
              return (
                <InfoCard
                  title={item.title}
                  description={item.description}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

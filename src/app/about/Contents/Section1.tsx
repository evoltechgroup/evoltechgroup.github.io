import { followArrowv2 } from "@/assets/svg";
import Globe from "@/assets/effects/Aboutus/Globe.jpg";
import City from "@/assets/effects/Aboutus/City.svg";
import Text from "@/components/Text";
import { infoCardsAbout } from "@/data/about-us";
import {
  eclipseEffect,
  rectangle188,
  rectangle189,
  rectangle190,
  rectangle191,
} from "@/assets/effects";
import InfoCardAbout from "@/components/Card/InfoCardAbout";

const Section1 = () => {
  return (
    <section className="relative w-full bg-[#000] md:py-10 flex flex-col items-center h-screen">
      <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center bg-[#3a3068] overflow-hidden pointer-events-none">
        <div className="absolute z-7 w-full h-full">{eclipseEffect}</div>
        <img
          src={Globe.src}
          alt="LeftGlobe"
          className="absolute w-[480px] -left-60 -top-20 z-6  mix-blend-color-dodge opacity-50"
        />
        <img
          src={Globe.src}
          alt="RightGlobe"
          className="absolute md:w-[750px] md:h-[750px] w-full h-[400px] md:-right-[30%] -bottom-10 md:-top-20 z-6  mix-blend-color-dodge opacity-50"
        />
        <img
          src={City.src}
          alt="City"
          className="absolute w-full h-1/4 md:h-fit md:w-fit -bottom-5 z-6 object-cover md:object-contain mix-blend-color-burn opacity-50"
        />
        <div className="absolute z-4 w-full h-full opacity-40">
          {rectangle191}
        </div>
        <div className="absolute z-3 w-full h-full opacity-100">
          {rectangle190}
        </div>
        <div className="absolute z-2 w-full h-full flex items-center justify-center">
          <div>{rectangle189}</div>
        </div>
        <div className="absolute z-1 md:z-4 w-full h-full opacity-30">
          {rectangle188}
        </div>
      </div>
      <div className="relative z-10 w-full h-full justify-center items-center p-5">
        <div className="w-full h-full flex flex-col justify-center gap-0 md:gap-15 items-center md:p-40 md:pb-20">
          <div className="flex flex-col gap-2 mt-10 md:mt-0 md:gap-10 items-center mb-4">
            <Text
              className="font-semibold text-4xl md:text-4xl xl:text-6xl text-center"
              tag="p">
              Who we are
            </Text>
            <Text className="text-base md:text-sm xl:text-xl max-w-3xl !text-center text-[#C5E1FF]">
              At our core, we’re problem solvers and builders turning visionary
              ideas into impactful reality. With a focus on full-stack
              development, AI solutions, and cloud computing, we combine
              advanced technology with expert consulting to help businesses
              evolve, scale, and succeed. Our operations support systems are
              built for efficiency and growth, ensuring that clients can focus
              on what matters most.
            </Text>
            <div className="flex text-[#FFBB00] justify-center items-center md:-mt-6  w-10 md:w-4/4">
              <span className="transform -rotate-[10deg] scale-x-[-1] h-20 md:h-30">
                {followArrowv2}
              </span>
            </div>
          </div>
          <div className="w-fit grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-auto p-4">
            {infoCardsAbout.map((item, idx) => (
              <InfoCardAbout
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

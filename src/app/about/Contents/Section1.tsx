import { followArrowv2 } from "@/assets/svg";
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
    <section className="relative w-full bg-[#000] md:py-10 flex flex-col items-center h-screen">
      <div className="absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden pointer-events-none  ">
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
        <div className="absolute z-4 w-full h-full opacity-40">
          {rectangle191}
        </div>
        <div className="absolute z-3 w-full h-full opacity-100">
          {rectangle190}
        </div>
        <div className="absolute z-2 w-full h-full flex items-center justify-center">
          <div>{rectangle189}</div>
        </div>
        <div className="absolute z-9 md:z-4 w-full h-full opacity-30">
          {rectangle188}
        </div>
      </div>
      <div className="relative z-10 w-full h-full justify-center items-center p-5">
        <div className="w-full h-full flex flex-col justify-center gap-0 md:gap-15 items-center md:p-40 md:pb-20">
          <div className="flex flex-col gap-10 items-center mb-4">
            <Text
              className="font-semibold text-4xl md:text-4xl xl:text-6xl text-center"
              tag="p">
              Who we are
            </Text>
            <Text className="text-base md:text-sm xl:text-xl max-w-5xl !text-center text-[#C5E1FF]">
              At our core, we’re problem solvers and builders turning visionary
              ideas into impactful reality. With a focus on full-stack
              development, AI solutions, and cloud computing, we combine
              advanced technology with expert consulting to help businesses
              evolve, scale, and succeed. Our operations support systems are
              built for efficiency and growth, ensuring that clients can focus on
              what matters most.
            </Text>
            <Text className="text-base md:text-sm xl:text-xl max-w-4xl !text-center text-[#C5E1FF]">
              Backed by over a decade of delivery excellence and leadership with
              25+ years of experience across Banking, Fintech, Retail,
              Insurance, and Healthcare, we operate globally from the US and
              India. With a workforce that is 55% women, we’re proud to drive
              around-the-clock innovation through diversity, agility, and deep
              domain expertise.
            </Text>
            <div className="flex text-[#FFBB00] justify-center items-center md:ml-24 -mt-6  w-10 md:w-4/4">
              <span className="transform -rotate-[10deg] scale-x-[-1] h-20 md:h-30">
                {followArrowv2}
              </span>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full mx-auto p-4">
            {infoCards.map((item, idx) => (
              <InfoCard
                key={idx}
                title={item.title}
                description={item.description}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Section1;

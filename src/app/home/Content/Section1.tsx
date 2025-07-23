import {
  rectangle188,
  rectangle189,
  rectangle190,
  rectangle191,
} from "@/assets/effects";
import { mainFollowArrow } from "@/assets/svg";
import Button from "@/components/Button";
import InfoCard from "@/components/Card/InfoCard";
import Text from "@/components/Text";
import { infoCards } from "@/data/about-us";
import { CircleChevronRight } from "lucide-react";

const Section1 = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden pointer-events-none">
        <div className="absolute z-4 w-full h-full">{rectangle191}</div>
        <div className="absolute z-3 w-full h-full">{rectangle190}</div>
        <div className="absolute z-2 w-full h-full flex items-center justify-center">
          <div>{rectangle189}</div>
        </div>
        <div className="absolute z-1 w-full h-full opacity-20">
          {rectangle188}
        </div>
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-100 filter contrast-105 saturate-125 sharp-video"
          src="/assets/video/BgVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="relative z-10 w-full h-full justify-center items-center p-5">
        <div className="w-full h-full flex flex-col justify-center md:gap-10 xl:gap-15 items-center p-40 pb-20">
          <div className="flex flex-col gap-5 items-center relative">
            <Text
              className="font-semibold md:text-4xl xl:text-6xl text-center"
              tag="p">
              Build
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />{" "}
              <span className="">
                Scale
                <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />{" "}
              </span>
              Succeed
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
            </Text>
            <Text className="md:text-sm xl:text-xl md:max-w-[32rem] xl:max-w-[38rem] !text-center text-[#C5E1FF]">
              We bring visionary ideas to life with cutting-edge tech, strategic
              consulting, and seamless back office solutions.
              <br /> Our 50+ experts in full-stack, AI, and cloud computing
              build innovative apps and deliver operational excellence to fuel
              your growth and efficiency.
            </Text>
            <div className="flex absolute  xl:w-full md:left-25 xl:left-20 md:-bottom-5 xl:bottom-4 md:w-16">
              {mainFollowArrow}
            </div>
            <Button className="mt-5 md:text-sm xl:text-lg text-center font-medium bg-[#FFB700] text-[#0B0F2B] md:px-2 md:py-1 xl:px-7 xl:py-2 rounded-full  hover:bg-[#FFBB00] transition flex items-center gap-2 mx-auto shadow-[0_0_15px_#FFB700] hover:shadow-[0_0_25px_#FFD95E]">
              <span>Discover more</span>
              <span>
                <CircleChevronRight size={18} />
              </span>
            </Button>
          </div>
          <div className="flex gap-2 justify-center">
            <span className="w-2 h-2 rounded-full border border-[#79799C] inline-block" />
            <span className="h-2 rounded-full bg-[#86C7FF] w-5 inline-block" />
            <span className="w-2 h-2 rounded-full border border-[#79799C] inline-block" />
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

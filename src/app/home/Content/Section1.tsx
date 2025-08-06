"use client";
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
import { useRouter } from "next/navigation";


const Section1 = () => {
  const router = useRouter();
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
          src="/assets/BgVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="relative z-10 w-full h-full justify-center items-center p-5">
        <div className="w-full h-full flex flex-col justify-center gap-4  md:gap-10 xl:gap-15 items-center lg:p-40 lg:pt-60 md:pb-20">
          <div className="flex flex-col md:gap-5 items-center relative">
            <Text
              className="font-semibold mb-2 md:mb-0 text-3xl sm:text-5xl xl:text-6xl text-center"
              tag="p"
            >
              Build
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />{" "}
              <span className="">
                Scale
                <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />{" "}
              </span>
              Succeed
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
            </Text>
            <Text className="text-sm md:text-sm xl:text-xl md:max-w-[32rem]  xl:max-w-[40rem] !text-center text-[#C5E1FF]">
              We bring visionary ideas to life with cutting-edge tech, strategic
              consulting, and seamless operations solutions. Our engineers,
              experts in full-stack, AI, and cloud computing build innovative
              apps and deliver operational excellence to fuel your growth and
              efficiency.
            </Text>
            <div className="flex md:absolute mb-4 md:mb-0 w-10 h-10 md:w-16 xl:w-full md:left-25 md:bottom-11 xl:left-20 xl:bottom-13 text-[#8DCAFF]">
              {mainFollowArrow}
            </div>
            <Button
              onClick={() => router.push("/about")}
              className="mt-5 text-sm px-2 py-2 md:text-sm xl:text-lg cursor-pointer text-center font-medium bg-[#FFB700] text-[#0B0F2B] md:px-2 md:py-1 xl:px-7 md:mt-10 xl:py-2 rounded-full  hover:bg-[#FFBB00] transition flex items-center gap-2 mx-auto shadow-[0_0_15px_#FFB700] hover:shadow-[0_0_25px_#FFD95E]"
            >
              <span>Discover more</span>
              <span>
                <CircleChevronRight size={18} />
              </span>
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full md:justify-items-center mx-auto p-4">
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

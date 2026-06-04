"use client";
import { eclipseEffect } from "@/assets/effects";
import {
  Bg126,
  Bg188,
  Bg189,
  Bg190,
  Bg191,
  Bg193,
  EventsBg,
  EvoltechGroup,
  EvoltechGroupV2,
} from "@/assets/images/Events";
import { followArrowDown } from "@/assets/svg";
import Text from "@/components/Text";
import { useSearchParams } from "next/navigation";
import { getCategoryFromQuery } from "./Section2";

const Section1 = () => {
  const searchParams = useSearchParams();
  const activeCategory = getCategoryFromQuery(searchParams.get("category"));
  const SectionTitle =
    activeCategory === "conference"
      ? "Explore Our Conferences"
      : activeCategory === "internal"
        ? "Discover Our Events"
        : "Explore Our Events";
  const SectionDescription =
    activeCategory === "conference"
      ? "Connect with industry experts"
      : activeCategory === "internal"
        ? "Engage, learn, and grow together"
        : "Connect with industry experts";
  const EventBG =
    activeCategory === "conference"
      ? EventsBg
      : activeCategory === "internal"
        ? EvoltechGroupV2
        : EventsBg;

  return (
    <section className="relative flex w-full flex-col items-center bg-[#ffff] py-10 h-[60vh] lg:h-[75vh] xl:h-[75vh]">
      <div className="">
        <div className="absolute inset-0 z-0 w-full h-full flex bg-black overflow-hidden pointer-events-none">
          <div className="absolute z-8 w-full h-full">{eclipseEffect}</div>

          <div className="absolute z-7 w-full h-full">
            <img
              src={Bg191.src}
              alt="Bg191"
              className="md:absolute w-full h-full object-cover "
            />
          </div>
          <div className="absolute z-6 w-full h-full">
            <img
              src={Bg190.src}
              alt="Bg190"
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-5 w-full h-full">
            <img
              src={Bg189.src}
              alt="Bg189"
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-4 w-full h-full">
            <img
              src={Bg188.src}
              alt="Bg188"
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-3 w-full h-full">
            <img
              src={EventBG.src}
              alt="EventBG"
              className="md:absolute w-full h-full lg:h-auto lg:-bottom-34 z-3 object-cover mix-blend-lighten lg:object-fill"
            />
          </div>
          <div className="absolute z-2 w-full h-full">
            <img
              src={Bg193.src}
              alt="Bg193"
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-1 w-full h-full">
            <img
              src={Bg126.src}
              alt="Bg126"
              className="md:absolute w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full h-full justify-center items-center p-4 md:p-5">
        <div className="w-full h-full flex flex-col justify-center gap-8 md:gap-15 items-center px-4 py-10 md:px-10 md:py-20 lg:p-40 lg:pb-30">
          <div className="flex flex-col gap-3 md:gap-5 items-center justify-center mt-4">
            <Text
              className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center"
              tag="p"
            >
              {SectionTitle}
            </Text>
            <Text className="text-xl sm:text-2xl md:text-3xl max-w-[40rem] text-center text-[#FFBB00]">
              {SectionDescription}
            </Text>
            <div
              className={`flex items-center justify-center w-10 md:w-[71px] ${activeCategory === "internal" ? "invisible" : ""}`}
            >
              {followArrowDown}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

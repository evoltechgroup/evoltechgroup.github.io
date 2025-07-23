import {
  eclipseEffect,
  rectangle188,
  rectangle189,
  rectangle190,
  rectangle191,
} from "@/assets/effects";
import { ContactBanner } from "@/assets/effects/Banner";
import { followArrow, followArrowDown, mainFollowArrow } from "@/assets/svg";
import Text from "@/components/Text";

const Section1 = () => {
  return (
    <section className="relative w-full bg-[#ffff] py-10 flex flex-col items-center h-screen">
      <div className="absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden pointer-events-none">
          <div className="absolute z-7 w-full h-full">{eclipseEffect}</div>
          <img
            src={ContactBanner.src}
            alt="LeftGlobe"
            className="absolute w-full bottom-0  z-8  mix-blend-color-dodge opacity-60"
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
          <div className="flex flex-col gap-5 items-center justify-center mb-4">
            <Text className="font-semibold text-6xl text-center" tag="p">
              Contact us
            </Text>
            <Text className="text-xl max-w-[40rem] text-center text-[#C5E1FF]">
              Our Global Footprint
            </Text>
            <div className="flex w-full items-center justify-center">
              {followArrowDown}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

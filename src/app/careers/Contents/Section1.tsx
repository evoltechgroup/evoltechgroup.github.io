import { followArrowRightV3 } from "@/assets/svg";
import bgbanner from "@/assets/images/careers/section1banner.jpg";
import Text from "@/components/Text";
import {
  eclipseEffect,
  rectangle188,
  rectangle189,
  rectangle190,
  rectangle191,
} from "@/assets/effects";
import ImageGrid from "../components/ImageGrid";
import {
  Abhisek,
  Aishwarya,
  Ankitha,
  Atul,
  Aysha,
  Harini,
  Priyanka,
} from "@/assets/images/Team/Members";

const imageGrid = [
  [
    { src: Ankitha.src, alt: "ankita" },
    { src: Aysha.src, alt: "ayesha" },
  ],
  [
    { src: Aishwarya.src, alt: "aishwarya" },
    { src: Atul.src, alt: "atul" },
    { src: Harini.src, alt: "harini" },
  ],
  [
    { src: Abhisek.src, alt: "abhisek" },
    { src: Priyanka.src, alt: "priyanka" },
  ],
];

const Section1 = () => {
  return (
    <section className="relative w-full bg-[#ffff] flex flex-col items-start h-screen lg:h-[90h] xl:h-[80vh]">
      <div className="w-full h-full">
        <div className="absolute inset-0 z-0 w-full h-full bg-[#2D2550] overflow-hidden pointer-events-none">
          <div className="absolute z-7 w-full h-full">{eclipseEffect}</div>
          <img
            src={bgbanner.src}
            alt="background"
            className="absolute z-6 mix-blend-multiply opacity-100 w-full h-full object-cover object-top"
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
          <div className="absolute z-1 w-full h-full opacity-100">
            {rectangle188}
          </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0 h-full">
          <div className="col-span-4 sm:col-span-6 lg:col-span-10 col-start-1 sm:col-start-2 z-10 w-full h-full flex justify-start items-center">
            <div className="w-full h-full flex flex-col lg:flex-row md:flex-col items-center justify-between">
              <div className="flex flex-col gap-4 justify-end md:justify-center lg:mt-10 w-full h-full items-center lg:items-start">
                <Text
                  className="font-semibold text-4xl lg:text-5xl xl:text-6xl w-full text-left"
                  tag="p">
                  Careers
                </Text>
                <Text className="text-sm lg:text-lg xl:text-xl max-w-full xl:max-w-[30rem]  text-[#C5E1FF]   text-left ">
                  At EvolTech, we’re pioneering technology and operations
                  globally.
                </Text>
                <Text className="text-sm lg:text-lg xl:text-xl max-w-full xl:max-w-[30rem]  text-[#C5E1FF] text-left">
                  Join our team in the US and India to work on cutting-edge
                  projects in tech development and hybrid captive support.
                </Text>
                <div className="flex mt-0 lg:-mt-2 w-full">
                  {followArrowRightV3}
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-full select-none">
                <ImageGrid images={imageGrid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

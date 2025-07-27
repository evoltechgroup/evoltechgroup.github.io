import { followArrowRightV3 } from "@/assets/svg";
import bgbanner from "@/assets/images/careers/section1banner.jpg";
import Text from "@/components/Text";
import priyanka from "@/assets/images/careers/team/priyanka.jpg";
import aysha from "@/assets/images/careers/team/aysha.jpg";
import abdul from "@/assets/images/careers/team/abdul.jpg";
import anish from "@/assets/images/careers/team/anish.png";
import naveen from "@/assets/images/careers/team/naveen.jpg";
import jai from "@/assets/images/careers/team/Jai.jpg";
import {
  eclipseEffect,
  rectangle188,
  rectangle189,
  rectangle190,
  rectangle191,
} from "@/assets/effects";
import ImageGrid from "../components/ImageGrid";

const imageGrid = [
  [
    { src: priyanka.src, alt: "Kitten 1" },
    { src: aysha.src, alt: "Keanu 1" },
  ],
  [
    { src: abdul.src, alt: "Keanu 2" },
    { src: jai.src, alt: "Keanu 3" },
    { src: aysha.src, alt: "Kitten 2" },
  ],
  [
    { src: anish.src, alt: "Keanu 4" },
    { src: naveen.src, alt: "Bear" },
  ],
];

const Section1 = () => {
  return (
    <section className="relative w-full bg-[#ffff] py-10 flex flex-col items-start h-screen lg:h-[80vh]">
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
        <div className="absolute z-10 w-full h-full flex justify-start items-center p-10 md:p-20">
          <div className="w-full h-full flex flex-col lg:flex-row md:flex-col items-center">
            <div className="flex flex-col gap-4 px-0 lg:px-20 justify-center mb-4 w-full lg:w-1/2 h-full items-center lg:items-start sm:mt-10">
              <Text
                className="font-semibold text-4xl md:text-6xl w-full lg:text-6xl text-left"
                tag="p">
                Careers
              </Text>
              <Text className="text-sm md:text-xl max-w-full lg:max-w-[30rem]  text-[#C5E1FF]   text-left ">
                At EvolTech, we’re pioneering technology and operations
                globally.
              </Text>
              <Text className="text-sm md:text-xl max-w-full lg:max-w-[30rem]  text-[#C5E1FF] text-left">
                Join our team in the US and India to work on cutting-edge
                projects in tech development and hybrid captive support.
              </Text>
              <div className="flex mt-0 lg:-mt-2 w-full">
                {followArrowRightV3}
              </div>
            </div>
            <div className="flex justify-start items-start lg:w-1/2 h-full">
              <ImageGrid images={imageGrid} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

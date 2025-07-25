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

const imageGrid = [
  [
    { src: 'https://media.istockphoto.com/id/620952978/photo/female-student-studying-at-college-library.jpg?s=612x612&w=0&k=20&c=adgCR7el6C5l3mg_ermcj8-1G78HmVV5FbR4KzlbVP4=', alt: 'Kitten 1' },
    { src: 'https://placekeanu.com/200/300', alt: 'Keanu 1' },
  ],
  [
    { src: 'https://placekeanu.com/684/350/', alt: 'Keanu 2' },
    { src: 'https://placekeanu.com/250/350/y', alt: 'Keanu 3' },
    { src: 'https://media.istockphoto.com/id/1144287280/photo/focused-african-student-looking-at-laptop-holding-book-doing-research.jpg?s=612x612&w=0&k=20&c=Ee2sGNsiZXbkCchKwZPX8Z9JDzcBscr4fGAjx5kDnUc=', alt: 'Kitten 2' },
  ],
  [
    { src: 'https://placekeanu.com/684/350/y', alt: 'Keanu 4' },
    { src: 'https://placebear.com/684/350', alt: 'Bear' },
  ],
];
const Section1 = () => {
  return (
    <section className="relative w-full bg-[#ffff] py-10 flex flex-col items-start h-[80vh]">
      <div className="w-full h-full">
        <div className="absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden pointer-events-none">
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
        </div>
        <div className="relative z-10 w-full h-full justify-start items-center p-5" >
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-14 px-20 justify-end mb-4 w-1/2 h-full">
              <Text className="font-semibold text-6xl text-left" tag="p">
                Careers
              </Text>
              <Text className="text-xl max-w-[30rem] !text-left text-[#C5E1FF]">
                At EvolTech, we’re pioneering technology and operations globally.
              </Text>
              <Text className="text-xl max-w-[30rem] !text-left text-[#C5E1FF] ">
                Join our team in the US and India to work on cutting-edge projects in tech development and hybrid captive support.
              </Text>
              <div className="flex -mt-6 w-full">{followArrowRightV3}</div>
            </div>
            <div className="flex justify-center items-center w-1/2 h-full">
              <ImageGrid images={imageGrid} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

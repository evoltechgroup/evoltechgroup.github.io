"use client";
import Button from "@/components/Button";
import Text from "@/components/Text";
import ThreeBars from "@/assets/logo/Three-Bars.svg";
import { CircleChevronRight } from "lucide-react";
import { whyEvoltechCard } from "@/data/about-us";
import { followArrow, followArrowRight } from "@/assets/svg";
import CardWithChip from "@/components/Card/CardWithChip";
import { useRouter } from "next/navigation";

const Section2 = () => {
  const router = useRouter();
  return (
    <section
      className="text-black relative w-full h-full"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(217, 229, 251, 1) 0%, #ffff 80%)",
      }}>
      <div className="relative z-10 w-full p-5 items-center justify-center">
        <div className="flex flex-col gap-4 items-center relative justify-center md:mt-10">
          <Button className="p-2 flex bg-white rounded-full px-4 font-medium text-sm">
            About us
          </Button>
          <Text
            className="font-semibold text-2xl md:text-[56px] max-w-[50rem] !text-center"
            tag="p">
            Powering Growth with Smart Tech and Scalable Teams
          </Text>
          <div className="text-[#FFBB00] flex w-10 h-10 md:h-30 md:block md:w-fit -mt-5 mb-10 md:mb-8">
            {followArrow}
          </div>
        </div>
        <div className="flex flex-col xl:gap-25 gap-10 sm:gap-20">
          <div className="w-full flex gap-10 justify-between md:h-[300px] md:px-40">
            <div className=" flex gap-4 flex-col h-full w-full  md:w-1/2">
              <Button className="p-1.5 flex bg-[#D2D2FF] rounded-full w-fit text-xs mb-4 md:mb-0  px-2">
                Our Story
              </Button>
              <div className="flex flex-col gap-5 sm:max-w-[90%]">
                <Text className="font-semibold xl:text-xl">
                  EvolTech, founded in October 2015, specializes in technology
                  development and hybrid captive back-office support.
                </Text>
                <Text className="xl:text-xl sm:text-base">
                  With offices in the US and India, we deliver scalable tech
                  solutions and seamless operational teams.
                </Text>
                <Text className="xl:text-xl sm:text-base">
                  Led by a strong leadership team with expertise in Banking and
                  Financial Services, Fintech, Retail, and Insurance, our
                  consultancy drives your business forward with industry-leading
                  insights.
                </Text>
              </div>
            </div>
            <div className=" h-full hidden md:flex pb-5 items-end justify-end w-1/3">
              <img
                src={ThreeBars.src}
                alt="Three bars icon"
                width={ThreeBars.width}
                height={ThreeBars.height}
                className="flex items-end"
              />
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col gap-5 justify-between md:h-[300px] h-full md:px-40 mb-10">
            <div className="h-full w-full md:w-[calc(33.333333%+3rem)] flex flex-col gap-5">
              <Text
                className="font-semibold text-4xl sm:text-4xl xl:text-[56px]"
                tag="p">
                Why EvolTech?
              </Text>
              <Text className="font-semibold sm:text-base">
                Your partner for innovation, efficiency, and growth.
              </Text>
              <div className="text-[#8DCAFF] hidden justify-end items-end mt-4 w-full md:flex">
                {followArrowRight}
              </div>
            </div>
            <div className="h-full items-end justify-end w-full md:w-fit md:p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
                {whyEvoltechCard.map((card, idx) => {
                  return (
                    <CardWithChip
                      id={card.id}
                      title={card.title}
                      description={card.description}
                      bgColor={card.bgColor}
                      key={card.id}
                    />
                  );
                })}
              </div>
              <div className="w-full mt-7 md:mt-4 flex items-center md:justify-center justify-start">
                <Button
                  onClick={() => router.push("/services/consulting")}
                  className="w-fit gap-2 items-center justify-center sm:justify-start pr-2 pl-6 py-2 flex cursor-pointer  bg-[#FFBB00] rounded-full text-sm">
                  <span className="font-semibold">More services</span>
                  <span>
                    <CircleChevronRight size={18} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

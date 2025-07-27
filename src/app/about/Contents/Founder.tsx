import { bottomRing, topRightRing } from "@/assets/effects";
import { Thulasi } from "@/assets/images/Team/Formal";
import { founderArrow, linkedInIcon } from "@/assets/svg";
import Button from "@/components/Button";
import Text from "@/components/Text";
import Link from "next/link";
import React from "react";

const Founder = () => {
  return (
    <div className="w-full h-full bg-[#F8F8F8] relative">
      <div className="absolute w-full h-full overflow-hidden z-1">
        <div className="absolute -right-10 bottom-0 md:top-0">
          {topRightRing}
        </div>
      </div>
      <div className="relative z-10 w-full flex gap-10 flex-col md:flex-row justify-center items-center h-full p-5 md:p-15 md:px-44">
        <div className="h-full flex flex-col w-full md:pb-5 gap-5 md:items-end items-center justify-start md:justify-end md:w-fit md:pl-10">
          <div className="bg-[#F8F8F8] md:w-[407px] md:h-[452px] rounded-[10px] relative overflow-hidden">
            <div
              className="w-[100%] h-[300px] md:h-[358px] absolute bottom-0 rounded-xl z-1"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #D6ECFF 50%, #4C96D7 80%)",
              }}></div>
            <img
              src={Thulasi.src}
              alt="Three bars icon"
              className="flex items-end w-full h-full z-2 pt-5 relative -left-5"
            />
          </div>
          <div className="flex flex-col w-full items-center justify-start">
            <Text
              className="font-semibold w-full text-2xl text-[#212121]"
              tag="p">
              Thulasidharan LG
            </Text>
            <Text className="font-medium w-full text-lg text-[#212121]" tag="p">
              Chief Executive Officer
            </Text>
          </div>
          <div className="flex gap-3 w-full items-center justify-start">
            <div className="w-5 h-5">{linkedInIcon}</div>
            <Link
              href="/"
              className="xl:text-base sm:text-sm cursor-pointer text-[#007EBB]">
              View LinkedIn Profile
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 md:gap-0 justify-center">
          <div className="flex relative">
            <Button className="p-1.5 flex w-fit text-black  bg-[#D6ECFF] rounded-full text-xs rounder px-2">
              Founder - CEO
            </Button>
            <div className="absolute left-25 -top-5">{founderArrow}</div>
          </div>
          <Text
            className="font-semibold text-3xl md:text-[56px] text-black max-w-[50rem] text-center"
            tag="p">
            Our Founder
          </Text>
          <div className="flex flex-col text-black gap-5 max-w-xl">
            <Text className="text-base font-medium">
              Thulasidharan (Thulasi / LG) brings over 25 years of leadership
              experience spanning banking and financial services, fintech,
              mortgagetech, and digital transformation. As CEO of EvolTech, he
              leads the company’s strategic vision, global operations, and
              client success initiatives.
            </Text>
            <Text className="text-base font-medium">
              Throughout his career, Thulasi has collaborated with banks, credit
              unions, startups, and Fortune 500 companies to scale technology
              platforms, craft go-to-market strategies for digital banking
              products—from consumer to commercial—and build high-performing
              global teams. He is widely recognized for his deep industry
              relationships and his ability to drive product-led growth,
              simplify complexity, and deliver innovation with measurable
              results.
            </Text>
            <Text className="text-base font-medium">
              With a unique blend of business insight and technical depth,
              Thulasi is now focused on expanding EvolTech’s products and
              services across key verticals including banking and financial
              services, U.S. mortgagetech, insurance, healthcare, and retail.
            </Text>
            <Text className="text-base font-medium">
              Thulasi is passionate about helping organizations evolve faster
              and smarter—transforming bold ideas into tangible impact.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;

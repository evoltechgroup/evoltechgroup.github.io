import { bottomRing, topRightRing } from "@/assets/effects";
import { Thulasi } from "@/assets/images/Team/Formal";
import Button from "@/components/Button";
import Text from "@/components/Text";
import React from "react";

const Founder = () => {
  return (
    <div className="w-full h-full bg-[#F8F8F8] relative">
      <div className="absolute w-full h-full overflow-hidden z-1">
        <div className="absolute -right-10 bottom-0 md:top-0">
          {topRightRing}
        </div>
      </div>
      <div className="relative z-10 w-full flex gap-10 flex-col md:flex-row justify-center items-center h-full p-10 md:p-15 md:px-44">
        <div className="h-full flex w-full md:pb-5 md:items-end items-center justify-start md:justify-end md:w-fit md:pl-10">
          <div className="absolute overflow-hidden">
            <div>{bottomRing}</div>
          </div>
          <div className="bg-[#F0E4F8] w-[300px] h-[350px] rounded-[10px] overflow-hidden">
            <img
              src={Thulasi.src}
              alt="Three bars icon"
              className="flex items-end w-full h-full pt-5 relative -left-5"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <Button className="p-1.5 flex w-fit text-black  bg-[#D6ECFF] rounded-full text-xs rounder px-2">
            The Boss
          </Button>
          <Text
            className="font-semibold text-[56px] text-black max-w-[50rem] text-center"
            tag="p">
            Our Founder
          </Text>
          <div className="flex flex-col text-black gap-5 max-w-full md:max-w-[90%]">
            <Text className="xl:text-xl sm:text-base">
              <strong>Thulasidharan LG</strong> is a seasoned fintech veteran
              that has been delivering enabling technology to financial
              institutions for over 30 years. He has had a ringside seat to the
              market’s evolution, technology platforms and innovation waves.
            </Text>
            <Text className="xl:text-xl sm:text-base">
              His passion, experience, and depth of industry knowledge led to
              the emergence of Infinant and his continued pursuit of bank
              growth.
            </Text>
            <Text className="xl:text-base sm:text-sm underline text-[#2D4DDB]">
              View LinkedIn Profile
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;

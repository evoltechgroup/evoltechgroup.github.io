import { linkedInIcon } from "@/assets/svg";
import Button from "@/components/Button";
import Text from "@/components/Text";
import Link from "next/link";
import React from "react";
import { StaticImageData } from "next/image";

export interface LeaderProfileData {
  image: StaticImageData;
  name: string;
  title: string;
  role: string;
  linkedinUrl: string;
  bio: string[];
  heading: string;
}

interface LeaderProfileProps extends LeaderProfileData {
  reversed?: boolean;
  imageGradient?: string;
  badgeBg?: string;
  imageWidth?: string;
  imageHeight?: string;
  gradientHeight?: string;
  imageRotation?: number;
}

const LeaderProfile = ({
  image,
  name,
  title,
  role,
  linkedinUrl,
  bio,
  heading,
  reversed = false,
  imageGradient = "linear-gradient(to right, #D6ECFF 50%, #4C96D7 80%)",
  badgeBg = "#D6ECFF",
  imageWidth = "300px",
  imageHeight = "452px",
  gradientHeight = "358px",
  imageRotation = 0,
}: LeaderProfileProps) => {
  const imageBlock = (
    <div className="h-full flex flex-col w-full md:pb-5 gap-5 md:items-end items-center justify-start md:justify-between md:w-fit">
      <div
        className="rounded-[10px] relative overflow-hidden"
        style={{ width: imageWidth, height: imageHeight }}
      >
        <div className="w-full h-full relative flex justify-end items-end">
          <div
            className="w-full absolute bottom-0 rounded-xl z-1"
            style={{
              height: gradientHeight,
              backgroundImage: imageGradient,
            }}
          />

          <img
            src={image.src}
            alt={name}
            className="h-full object-contain object-bottom z-2"
          />
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-start">
        <Text className="font-semibold w-full text-2xl text-[#212121]" tag="p">
          {name}
        </Text>
        <Text className="font-medium w-full text-lg text-[#212121]" tag="p">
          {title}
        </Text>
      </div>
      <div className="flex gap-3 w-full items-center justify-start">
        <div className="w-5 h-5">{linkedInIcon}</div>
        <Link
          href={linkedinUrl}
          target="_blank"
          className="xl:text-base sm:text-sm cursor-pointer text-[#007EBB] font-semibold"
        >
          View LinkedIn Profile
        </Link>
      </div>
    </div>
  );

  const contentBlock = (
    <div className="flex flex-col items-start gap-3 md:gap-0 justify-center">
      <Button
        className="p-1.5 flex w-fit text-black rounded-full text-xm px-4 font-medium"
        style={{ backgroundColor: badgeBg }}
      >
        {role}
      </Button>
      <Text
        className="font-semibold text-3xl md:text-[48px] text-black max-w-[50rem]"
        tag="p"
      >
        {heading}
      </Text>
      <div className="flex flex-col text-black gap-5 max-w-xl mt-3 md:mt-0">
        {bio.map((paragraph, index) => (
          <Text key={index} className="text-base font-medium">
            {paragraph}
          </Text>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative col-span-4 md:col-span-8 lg:col-span-10 col-start-1 sm:col-start-2 lg:col-start-2 z-10 w-full flex gap-10 flex-col-reverse md:flex-row justify-between items-center h-full py-10">
      {reversed ? (
        <>
          {contentBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {contentBlock}
        </>
      )}
    </div>
  );
};

export default LeaderProfile;

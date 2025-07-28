import { leftRing, topRightSmallRing, topRing } from "@/assets/effects";
import React from "react";

const timelineData = [
  {
    title: "Submit Form",
    titleBg: "#FAF3EB",
    desc: "Drop your idea—let's begin.",
  },
  {
    title: "We Schedule Call",
    titleBg: "#E9F6E8",
    desc: "Your idea, our ears—let’s talk.",
  },
  {
    title: "Kick Start",
    titleBg: "#F8ECF9",
    desc: "It’s go time—let’s create something amazing.",
  },
];

const TimeLine = () => {
  return (
    <div className="w-[303px] h-96 bg-[#FFFFFF] -pt-10 rounded-[24px] shadow-2xl relative">
      <div className="absolute w-full h-full z-1 overflow-hidden">
        <div className="absolute -left-20">{leftRing}</div>
        <div className="absolute right-0">{topRightSmallRing}</div>
      </div>
      <div className="absolute top-14 bottom-20 left-8 border-l-4 border-dotted border-gray-300 z-0"></div>
      <div className="relative z-10 py-10 px-3 h-full w-full flex flex-col justify-between gap-8">
        {timelineData.map(({ title, titleBg, desc }, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #5785DC 0%, #5F4793 100%)",
              }}>
              <span className="text-white text-base md:text-2xl font-bold">
                {i + 1}
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className="p-1.5 px-3 rounded-full rounded-bl-none font-semibold text-black text-base w-max"
                style={{ backgroundColor: titleBg }}>
                {title}
              </span>
              <span className="mt-1 text-sm text-gray-700">{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;

"use client";

import React, { useRef, useState, useEffect } from "react";
import Label from "@/components/Label";
import { TeamImages } from "@/data/team";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SCROLL_SPEED = 50;
const DUPLICATE_COUNT = 3;

const staggeredPadding = [
  "pb-30",
  "pb-48",
  "pb-25",
  "pb-40",
  "pb-26",
  "pb-44",
  "pb-34",
  "pb-24",
];

const baseLabelOffsets = [[5], [15, -5], [8], [2]];
const getLabelOffset = (index: number) =>
  baseLabelOffsets[index % baseLabelOffsets.length];

const labelTexts = [
  ["55% women driving innovation and efficiency."],
  ["Diverse workforce leading the way.", "Team owns their impact with pride."],
  ["Team chooses workspaces—remote or in-office."],
  ["Flat structure: they’re the boss, no bureaucracy."],
  ["We don’t wait for change—we drive it."],
  ["Every line of code, every decision—owned with pride."],
  ["Accountability isn’t assigned, it’s embraced."],
  ["We build with purpose, and it shows."],
  ["Delivering excellence is not a task—it’s a mindset."],
  ["No red tape, just real results."],
  ["Everyone leads. Everyone delivers."],
  ["Flat by design. Fast by nature."],
  ["Hierarchy out, ownership in."],
  ["Leadership is a role, not a rank."],
];

const TeamShowCase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const totalImages = TeamImages.length;

  const buildGroupedSlots = () => {
    const result: { type: "label" | "spacer"; slotIndexes: number[] }[] = [];
    let imageCounter = 0;
    let labelIndex = 0;

    while (labelIndex < labelTexts.length) {
      for (let i = 0; i < 4 && labelIndex < labelTexts.length; i++) {
        const image1 = imageCounter++ % totalImages;
        const image2 = imageCounter++ % totalImages;
        result.push({
          type: "label",
          slotIndexes: [image1, image2],
        });
        labelIndex++;
      }

      for (let s = 0; s < 3; s++) {
        const image1 = imageCounter++ % totalImages;
        const image2 = imageCounter++ % totalImages;
        result.push({
          type: "spacer",
          slotIndexes: [image1, image2],
        });
      }
    }

    return result;
  };

  const groupedSlots = buildGroupedSlots();

  useEffect(() => {
    if (!isAutoScrolling || !contentRef.current) return;

    let animationFrameId: number;
    let lastTime: number | null = null;
    const originalContentWidth =
      contentRef.current.scrollWidth / DUPLICATE_COUNT;

    const step = (time: number) => {
      if (lastTime !== null) {
        const delta = time - lastTime;
        let newScrollX = scrollX + (SCROLL_SPEED * delta) / 1000;

        if (newScrollX >= originalContentWidth) {
          newScrollX -= originalContentWidth;
        }

        setScrollX(newScrollX);
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoScrolling, scrollX]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.transform = `translateX(${-scrollX}px)`;
    }
  }, [scrollX]);

  const manualScroll = (offset: number) => {
    setIsAutoScrolling(false);
    if (!contentRef.current) return;

    const originalContentWidth =
      contentRef.current.scrollWidth / DUPLICATE_COUNT;
    let newScrollX = scrollX + offset;

    if (newScrollX < 0) {
      newScrollX += originalContentWidth;
    } else if (newScrollX >= originalContentWidth) {
      newScrollX -= originalContentWidth;
    }

    setScrollX(newScrollX);
  };

  const renderShowcaseContent = () => {
    let labelIndexLocal = 0;

    return (
      <div className="flex select-none">
        {groupedSlots.map((group, idx) => {
          const padding = staggeredPadding[idx % staggeredPadding.length];
          const isLabel = group.type === "label";
          const labelTextsToShow = isLabel ? labelTexts[labelIndexLocal] : null;
          const labelOffsets = getLabelOffset(labelIndexLocal);

          const labelsToRender = labelTextsToShow
            ? labelTextsToShow.map((text, i) => {
                const offset = labelOffsets[i] ?? 10;
                return (
                  <div
                    key={i}
                    className="absolute z-10 whitespace-nowrap top-0"
                    style={{
                      top: `${offset}%`,
                      transform: "translateY(0%)",
                    }}>
                    <Label text={text} />
                  </div>
                );
              })
            : null;

          if (isLabel) labelIndexLocal++;

          return (
            <div
              key={idx}
              className="flex items-stretch h-screen mt-15 relative">
              <div
                className={`${padding} justify-end flex flex-col items-end pt-20`}>
                {group.slotIndexes.map((slotIndex, i) => {
                  const currentImage = TeamImages[slotIndex];
                  return (
                    <div
                      key={idx * 2 + i}
                      className="relative h-[215px] w-[172px] border-4 border-white bg-white overflow-hidden">
                      <img
                        src={currentImage.image.src}
                        alt={currentImage.name}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      />
                    </div>
                  );
                })}
              </div>
              {labelsToRender && (
                <div className="flex relative">
                  <div
                    className="h-full"
                    style={{
                      width: "1px",
                      background:
                        "linear-gradient(to bottom, transparent, #4444445a, transparent)",
                    }}
                  />
                  {labelsToRender}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden" style={{ width: "100vw" }}>
      <div
        ref={containerRef}
        className="flex"
        style={{ width: "max-content", overflow: "hidden" }}>
        <div className="absolute p-5 mt-20 flex z-3 justify-between mb-4 gap-4 w-full h-full items-center">
          <button
            className="w-10 h-10 flex bg-white shadow hover:text-white cursor-pointer text-black items-center justify-center rounded-full hover:bg-gray-800 transition"
            onClick={() => manualScroll(-200)}>
            <ChevronLeft />
          </button>
          <button
            className="w-10 h-10 flex md:mr-5 bg-white shadow hover:text-white cursor-pointer text-black items-center justify-center rounded-full hover:bg-gray-800 transition"
            onClick={() => manualScroll(200)}>
            <ChevronRight />
          </button>
        </div>

        <div
          ref={contentRef}
          className="flex relative z-1"
          style={{ willChange: "transform" }}>
          {Array.from({ length: DUPLICATE_COUNT }).map((_, idx) => (
            <React.Fragment key={idx}>{renderShowcaseContent()}</React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamShowCase;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Label from "@/components/Label";
import { TechIcons } from "@/data/tech";
import Image from "next/image";

interface TechStack {
  image: { src: string };
  name: string;
}

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
const labelTexts = [
  ["Front-End"],
  ["Back-End"],
  ["AI & Machine Learning"],
  ["Databases"],
  ["Cloud Platforms"],
  ["Devops Tools"],
];

const TechStackShowCase: React.FC = () => {
  const visibleCount = 21;
  const getSizedSvg = (
    svgString: string,
    width: string = "100%",
    height: string = "100%"
  ) => {
    return svgString.replace(
      /<svg([^>]*)>/,
      `<svg$1 style="width: ${width}; height: ${height}; object-fit: contain; display: block;">`
    );
  };

  type Slot = {
    current: number;
    previous: number | null;
    isFading: boolean;
  };

  const [slots, setSlots] = useState<Slot[]>(
    Array.from({ length: visibleCount }, (_, i) => ({
      current: i,
      previous: null,
      isFading: false,
    }))
  );
  useEffect(() => {
    TechIcons.forEach((image: any) => {
      const img = new window.Image();
      img.src = image.image;
    });
  }, []);

  const columnSizes = [4, 4, 3, 3, 3, 4];

  const groupedSlots = [];
  let currentIndex = 0;

  for (let i = 0; i < columnSizes.length; i++) {
    const columnSize = columnSizes[i];
    groupedSlots.push(slots.slice(currentIndex, currentIndex + columnSize));
    currentIndex += columnSize;
  }

  return (
    <div className="flex relative justify-center -mt-5">
      {/* Starting vertical line */}
      <div className="flex relative">
        <div
          className="h-full"
          style={{
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent, #4444445a, transparent)",
          }}
        />
      </div>

      {groupedSlots.map((group, idx) => {
        const padding = staggeredPadding[idx % staggeredPadding.length];
        const labelText = labelTexts[idx];
        const isOddColumn = idx % 2 === 0;
        const verticalAlignment = isOddColumn
          ? "justify-start "
          : "justify-center pt-20";

        return (
          <div key={idx} className="flex items-stretch h-1/2">
            <div
              className={`${padding} flex flex-col items-center ${verticalAlignment} w-full `}>
              {labelText && (
                <div className="w-full mb-5 mt-20 text-center shaddow-lg">
                  <Label text={labelText[0]} />
                </div>
              )}

              {group.map((slot, i) => {
                const currentImage = TechIcons[slot.current];
                let slotIndex = 0;
                for (let j = 0; j < idx; j++) {
                  slotIndex += columnSizes[j];
                }
                slotIndex += i;

                return (
                  <div
                    key={slotIndex}
                    className="relative h-[100px] w-[172px]  overflow-hidden flex items-center justify-center">
                    <div className="tech-icon h-10 w-full flex items-center justify-center">
                      <Image src={currentImage.image} alt={currentImage.name} />
                    </div>
                  </div>
                );
              })}
            </div>

            {idx < groupedSlots.length - 1 && (
              <div className="flex relative">
                <div
                  className="h-full"
                  style={{
                    width: "1px",
                    background:
                      "linear-gradient(to bottom, transparent, #4444445a, transparent)",
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
      <div className="flex relative">
        <div
          className="h-full"
          style={{
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent, #4444445a, transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default TechStackShowCase;

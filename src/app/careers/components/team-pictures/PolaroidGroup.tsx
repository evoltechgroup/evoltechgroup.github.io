"use client";

import React from "react";
import { TeamImages } from "@/assets/images/careers/team/TeamImages";
import PolaroidFrame from "./PolaroidFrame";

const PolaroidShowCase: React.FC = () => {
  const columnLayouts = [
    { count: 1, cardSize: "w-[380px]", spacing: "mb-6" },
    { count: 2, cardSize: "w-[300px]", spacing: "mb-4" },
    { count: 1, cardSize: "w-[320px]", spacing: "mb-6" },
    { count: 1, cardSize: "w-[320px]", spacing: "mb-5" },
  ];
  let imageIndex = 0;
  const groupedSlots = columnLayouts.map((layout, columnIndex) => 
    Array.from({ length: layout.count }, (_, cardIndex) => {
      const slot = {
        current: imageIndex % TeamImages.length,
        previous: null,
        isFading: false,
      };
      imageIndex++;
      return slot;
    })
  );

  return (
    <div className="flex relative justify-center items-start pt-10 max-w-7xl mx-auto">
      <div className="flex relative items-stretch h-full">
        <div
          className="h-screen"
          style={{
            width: "0.5px",
            background:
              "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent)",
            transform: "translateX(1px)",
          }}
        />
      </div>
      {groupedSlots.map((group, columnIndex) => {
        const layout = columnLayouts[columnIndex];
        let verticalOffset, justifyContent;
        switch (columnIndex) {
          case 0:
            verticalOffset = "pt-32";
            justifyContent = "justify-center";
            break;
          case 1:
            verticalOffset = "pt-16";
            justifyContent = "justify-start";
            break;
          case 2:
            verticalOffset = "pt-20";
            justifyContent = "justify-center";
            break;
          case 3:
            verticalOffset = "pt-8";
            justifyContent = "justify-start";
            break;
          default:
            verticalOffset = "pt-16";
            justifyContent = "justify-start";
        }
        return (
          <div key={columnIndex} className="flex items-stretch h-full">
            <div className={`flex flex-col items-center ${justifyContent} ${verticalOffset} min-h-[600px]`}>
              {group.map((slot, cardIndex) => {
                const currentImage = TeamImages[slot.current];
                return (
                  <div
                    key={`${columnIndex}-${cardIndex}`}
                    className={layout.spacing}>
                    <PolaroidFrame
                      src={currentImage.image}
                      alt={currentImage.name}
                      caption={currentImage.name}
                      className={`${layout.cardSize} h-auto`}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex relative items-stretch h-full">
              <div
                className="h-screen"
                style={{
                  width: "0.5px",
                  background:
                    "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent)",
                  transform: "translateX(-1px)",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PolaroidShowCase;

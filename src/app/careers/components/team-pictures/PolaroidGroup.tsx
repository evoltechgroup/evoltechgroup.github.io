"use client";

import React, { useState } from "react";
import { TeamImages } from "@/assets/images/careers/team/TeamImages";
import PolaroidFrame from "./PolaroidFrame";

const PolaroidShowCase: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const columnLayouts = [
    { count: 1, cardSize: "w-[200px] sm:w-[280px] lg:w-[380px]", spacing: "mb-3 sm:mb-4 lg:mb-6" },
    { count: 2, cardSize: "w-[160px] sm:w-[220px] lg:w-[300px]", spacing: "mb-2 sm:mb-3 lg:mb-4" },
    { count: 1, cardSize: "w-[180px] sm:w-[250px] lg:w-[320px]", spacing: "mb-3 sm:mb-4 lg:mb-6" },
    { count: 1, cardSize: "w-[180px] sm:w-[250px] lg:w-[320px]", spacing: "mb-2 sm:mb-3 lg:mb-5" },
  ];

  // Create multiple copies for infinite scroll
  const createInfiniteColumns = () => {
    const columns: Array<{
      group: Array<{
        current: number;
        previous: null;
        isFading: boolean;
      }>;
      layout: typeof columnLayouts[0];
      columnIndex: number;
    }> = [];
    let imageIndex = 0;
    
    // Create enough columns for seamless infinite scroll (repeat pattern 4 times)
    for (let repeat = 0; repeat < 4; repeat++) {
      columnLayouts.forEach((layout, columnIndex) => {
        const group = Array.from({ length: layout.count }, (_, cardIndex) => {
          const slot = {
            current: imageIndex % TeamImages.length,
            previous: null,
            isFading: false,
          };
          imageIndex++;
          return slot;
        });
        columns.push({ group, layout, columnIndex });
      });
    }
    return columns;
  };

  const infiniteColumns = createInfiniteColumns();

  const getVerticalLayoutProps = (columnIndex: number) => {
    switch (columnIndex % 4) {
      case 0:
        return {
          verticalOffset: "pt-12 sm:pt-20 lg:pt-32",
          justifyContent: "justify-center",
        };
      case 1:
        return {
          verticalOffset: "pt-6 sm:pt-10 lg:pt-16",
          justifyContent: "justify-start",
        };
      case 2:
        return {
          verticalOffset: "pt-8 sm:pt-12 lg:pt-20",
          justifyContent: "justify-center",
        };
      case 3:
        return {
          verticalOffset: "pt-4 sm:pt-6 lg:pt-8",
          justifyContent: "justify-start",
        };
      default:
        return {
          verticalOffset: "pt-6 sm:pt-10 lg:pt-16",
          justifyContent: "justify-start",
        };
    }
  };

  const toggleAnimation = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="relative w-full overflow-hidden pt-4 sm:pt-6 lg:pt-10">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-horizontal {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-25%);
            }
          }
          .scroll-animation {
            animation: scroll-horizontal 60s linear infinite;
          }
          .scroll-animation.paused {
            animation-play-state: paused;
          }
          .scroll-animation.playing {
            animation-play-state: running;
          }
          @media (max-width: 640px) {
            .scroll-animation {
              animation-duration: 10s;
            }
          }
          @media (min-width: 1024px) {
            .scroll-animation {
              animation-duration: 10s;
            }
          }
        `
      }} />
      
      <div 
        className={`scroll-animation flex items-start cursor-pointer ${isPaused ? 'paused' : 'playing'}`}
        onClick={toggleAnimation}
      >
        {/* Initial grid line */}
        <div className="flex relative items-stretch h-full">
          <div
            className="h-[300px] sm:h-[500px] lg:h-screen"
            style={{
              width: "0.5px",
              background:
                "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent)",
              transform: "translateX(1px)",
            }}
          />
        </div>
        
        {infiniteColumns.map((column, index) => {
          const { group, layout } = column;
          const { verticalOffset, justifyContent } = getVerticalLayoutProps(column.columnIndex);
          
          return (
            <div key={index} className="flex items-stretch gap-2 h-full">
              <div className={`flex  flex-col items-center ${justifyContent} ${verticalOffset} min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]`}>
                {group.map((slot, cardIndex) => {
                  const currentImage = TeamImages[slot.current];
                  return (
                    <div
                      key={`${index}-${cardIndex}`}
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
              
              {/* Grid line after each column */}
              <div className="flex relative items-stretch h-full">
                <div
                  className="h-[300px] sm:h-[500px] lg:h-screen"
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
    </div>
  );
};

export default PolaroidShowCase;

"use client";

import React, { useEffect, useState } from "react";
import Label from "@/components/Label";
import { TeamImages } from "@/data/team";

interface TeamMember {
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
  ["55% women driving innovation and efficiency."],
  ["Team owns their impact with pride.", "Diverse workforce leading the way."],
  ["Team chooses workspaces—remote or in-office."],
  ["Flat structure: they’re the boss, no bureaucracy."],
];

const labelOffsets = [[5], [13, -5], [10], [2]];

const FADE_DURATION = 800;
const SWAP_INTERVAL = 2500;

const TeamShowCase: React.FC = () => {
  const visibleCount = 16;
  const totalImages = TeamImages.length;

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

  // Preload images to prevent loading delays
  useEffect(() => {
    TeamImages.forEach((image) => {
      const img = new Image();
      img.src = image.image.src;
    });
  }, []);

  useEffect(() => {
    if (totalImages <= visibleCount) return;

    const interval = setInterval(() => {
      const slotIndex = Math.floor(Math.random() * visibleCount);

      // Start transition by setting new image and fade state
      setSlots((prev) => {
        const taken = new Set(prev.map((s) => s.current));
        let next = (prev[slotIndex].current + 1) % totalImages;

        while (taken.has(next)) {
          next = (next + 1) % totalImages;
        }

        const updated = [...prev];
        updated[slotIndex] = {
          current: next,
          previous: prev[slotIndex].current,
          isFading: true,
        };

        return updated;
      });

      // Reset fade and clear previous after FADE_DURATION
      setTimeout(() => {
        requestAnimationFrame(() => {
          setSlots((prev) => {
            const updated = [...prev];
            updated[slotIndex] = {
              current: updated[slotIndex].current,
              previous: null,
              isFading: false,
            };
            return updated;
          });
        });
      }, FADE_DURATION + 50); // Small buffer to ensure transition completes
    }, SWAP_INTERVAL);

    return () => clearInterval(interval);
  }, [totalImages]);

  const groupedSlots = Array.from({ length: visibleCount / 2 }, (_, i) =>
    slots.slice(i * 2, i * 2 + 2)
  );

  let labelIndex = 0;

  return (
    <div className="flex relative justify-center top-20 pb-30">
      {groupedSlots.map((group, idx) => {
        const padding = staggeredPadding[idx % staggeredPadding.length]; // Assuming staggeredPadding is defined
        const showLabel = idx !== 2 && labelTexts[labelIndex]; // Assuming labelTexts is defined

        return (
          <div key={idx} className="flex items-stretch h-screen mt-15">
            <div
              className={`${padding} justify-end flex flex-col items-end pt-20`}>
              {group.map((slot, i) => {
                const currentImage = TeamImages[slot.current];
                const previousImage =
                  slot.previous !== null ? TeamImages[slot.previous] : null;
                const slotIndex = idx * 2 + i;

                return (
                  <div
                    key={slotIndex} // Stable key to prevent container unmount
                    className="relative h-[215px] w-[172px] border-4 border-white bg-white overflow-hidden">
                    {previousImage && slot.isFading && (
                      <img
                        src={previousImage.image.src}
                        alt={previousImage.name}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-[800ms] ease-in-out z-0"
                        style={{ opacity: slot.isFading ? 0 : 1 }}
                      />
                    )}
                    <img
                      src={currentImage.image.src}
                      alt={currentImage.name}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-[800ms] ease-in-out z-10"
                      style={{ opacity: slot.isFading ? 1 : 1 }}
                    />
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
                {showLabel &&
                  labelTexts[labelIndex]?.map((text, i) => (
                    <div
                      key={i}
                      className="absolute z-10 whitespace-nowrap"
                      style={{ top: `${labelOffsets[labelIndex]?.[i]}%` }}>
                      <Label text={text} />
                    </div>
                  ))}
                {showLabel && <span className="hidden">{labelIndex++}</span>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TeamShowCase;

"use client";
import {
  followArrowRightV2,
  leftExclamation,
  rightExplamation,
  smileEmoji,
} from "@/assets/svg";
import Text from "@/components/Text";
import { useEffect, useRef, useState } from "react";
import { testimonials as allTestimonials } from "@/data/testimonials";
import { merriweather } from "../fonts";

type Props = {
  type: "home" | "about" | "consulting" | "technology" | "operations";
};

function Testimonials({ type }: Props) {
  const testimonialList =
    type === "home" || type === "about"
      ? [
          ...(allTestimonials.home || []),
          ...(allTestimonials.consulting || []),
          ...(allTestimonials.technology || []),
          ...(allTestimonials.operations || []),
        ]
      : allTestimonials[type] || [];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef<number | null>(null);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((i) => (i + 1) % testimonialList.length);
      setFade(true);
    }, 150);
  };
  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex(
        (i) => (i - 1 + testimonialList.length) % testimonialList.length
      );
      setFade(true);
    }, 150);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 8000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  const t = testimonialList[index];

  return (
    <section
      className="relative w-full h-full overflow-hidden"
      style={{
        backgroundColor: "#2A2B68",
        backgroundImage:
          "repeating-linear-gradient(120deg, transparent, transparent 3px, rgba(26, 27, 72, 0.6) 3px, rgba(26, 27, 72, 0.6) 4px)",
      }}>
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-4 max-w-7xl mx-auto py-14 lg:py-10 px-4 lg:px-0">
        <div className="w-full col-span-4 col-start-1 sm:col-span-6 lg:col-span-8 sm:col-start-2 lg:col-start-3 flex justify-center flex-col">
          <div className="w-full flex flex-col gap-5 items-center justify-center mb-4">
            <Text
              className="font-semibold text-3xl text-white lg:text-5xl xl:text-[56px] text-center"
              tag="p">
              Testimonials
            </Text>
            <Text className="whitespace-nowrap font-normal text-xl lg:text-3xl xl:text-4xl text-[#C6C7F3] text-center">
              {"Happy"}
              <span className="inline-block align-middle w-10 ml-2 mr-2 h-10">
                {smileEmoji}
              </span>
              {"customers about us"}
            </Text>
            <div className="flex gap-2 justify-start items-start -ml-20 -mt-5 w-[70%]">
              <span className="text-[#FFBB00]">{followArrowRightV2}</span>
            </div>
          </div>

          <div className="relative w-full flex justify-center col-span-8 col-start-3 mt-4">
            <div
              className="bg-white rounded-2xl shadow-lg px-8 py-8 max-w-2xl w-full h-fit flex flex-col justify-center items-center transition-all duration-500 relative"
              onTouchStart={(e) =>
                (touchStartRef.current = e.touches[0].clientX)
              }
              onTouchEnd={(e) => {
                const deltaX =
                  e.changedTouches[0].clientX - (touchStartRef.current || 0);
                const threshold = 50;
                if (deltaX > threshold) prev();
                else if (deltaX < -threshold) next();
              }}>
              <div className="absolute left-4 top-4 w-6 h-6 opacity-40">
                {leftExclamation}
              </div>
              <div className="absolute right-4 bottom-4 w-6 h-6 opacity-40">
                {rightExplamation}
              </div>
              <p
                className={`text-[#222] text-center font-light ${
                  merriweather.className
                } text-xs md:text-base whitespace-pre-line px-4 transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}>
                {t.text}
              </p>
            </div>
          </div>

          <div className="mt-6 text-center w-full flex flex-col gap-5 items-center">
            <div className="font-bold text-[#C6C7F3] text-lg max-w-lg">
              {t.author}
            </div>
            <span className="bg-[#FFEAA3] text-[#0B0F2B] px-4 py-1 rounded-full font-semibold text-xs mt-2 inline-block">
              {t.company}
            </span>
          </div>

          <div className="flex gap-2 justify-center mt-4">
            {testimonialList.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  if (i !== index) {
                    setFade(false);
                    setTimeout(() => {
                      setIndex(i);
                      setFade(true);
                    }, 150);
                  }
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-[#86C7FF] w-6"
                    : "border border-[#79799C] w-3"
                } inline-block cursor-pointer`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

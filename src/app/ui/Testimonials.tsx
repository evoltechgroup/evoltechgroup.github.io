"use client";
import {
  testimonialLeftSide,
  testimonialRightSide,
  testimonialBottom,
} from "@/assets/effects";
import { followArrowRightV2, smileEmoji } from "@/assets/svg";
import Text from "@/components/Text";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";

interface Testimonial {
  text: string;
  author: string;
  company: string;
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((i) => (i + 1) % testimonials.length);
      setFade(true);
    }, 150);
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(next, 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index, isHovered]);

  const t = testimonials[index];

  return (
    <section
      className="relative w-full bg-[#2A2B68] py-10 flex flex-col items-center h-full  overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute hidden sm:flex inset-0 z-0 pointer-events-none w-full h-full justify-between bg-blend-soft-light opacity-50">
        <div>{testimonialLeftSide}</div>
        <div>{testimonialRightSide}</div>
        <div className="w-fit h-fit absolute right-0 bottom-0 opacity-15">
          {testimonialBottom}
        </div>
      </div>

      <div className="max-w-3xl w-full mx-auto flex flex-col items-center z-1 p-10">
        <div className="w-full sm:w-2/3 flex flex-col gap-5 items-center justify-center mb-4">
          <Text
            className="font-semibold text-3xl text-white sm:text-[56px] text-center"
            tag="p"
          >
            Testimonials
          </Text>
          <Text className="whitespace-nowrap font-normal text-xl sm:text-4xl text-[#C6C7F3] text-center">
            The heart
            <span className="inline-block align-middle ml-2 -mt-4 mr-2 h-5">
              {smileEmoji}
            </span>
            of EvolTech’s success.
          </Text>
          <div className="flex gap-2 justify-start items-start -ml-15 w-[70%]">
            <span className="text-[#FFBB00]">{followArrowRightV2}</span>
          </div>
        </div>

        <div className="relative w-full flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg px-8 py-8 max-w-2xl w-full min-h-[340px] flex flex-col justify-center items-center transition-all duration-500 relative">
            <img
              src="/assets/icons/left-quote.png"
              alt="quote left"
              className="absolute left-4 top-4 w-6 h-6 opacity-40"
            />
            <img
              src="/assets/icons/right-quote.png"
              alt="quote right"
              className="absolute right-4 bottom-4 w-6 h-6 opacity-40"
            />
            <p
              className={`text-[#222] text-center text-base whitespace-pre-line px-4 transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {t.text}
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="font-bold text-[#C6C7F3] text-lg">{t.author}</div>
          <span className="bg-yellow-400 text-[#0B0F2B] px-4 py-1 rounded-full font-semibold text-xs mt-2 inline-block">
            {t.company}
          </span>
        </div>

        <div className="flex gap-2 justify-center mt-4">
          {testimonials.map((_, i) => (
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
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#86C7FF] w-5" : "border border-[#79799C] w-2"
              } inline-block cursor-pointer`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

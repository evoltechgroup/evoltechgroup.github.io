"use client";
import { testimonialLeftSide, testimonialRightSide } from "@/assets/effects";
import { followArrowRightV2, smileEmoji } from "@/assets/svg";
import Text from "@/components/Text";
import { useState } from "react";

interface Testimonial {
  text: string;
  author: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    text: `Working with Evoltech has been an absolute pleasure. From start to finish, their team has been incredibly easy to collaborate with and truly a partner throughout our technology build.\n\nThey provided valuable insights, tailored solutions, and consistent support, making the entire process smooth and efficient.\n\nTheir expertise and dedication to our success have exceeded expectations, and we look forward to continuing our partnership with them in the future. Highly recommend!`,
    author: "President of a Leading Mortgage",
    company: "Fintech Company",
  },
  {
    text: `Evoltech's team delivered our project on time and exceeded our expectations. Their technical expertise and proactive communication made the process seamless.\n\nWe highly value their partnership and look forward to more collaborations.`,
    author: "CTO, Global SaaS Provider",
    company: "SaaS Company",
  },
];

function Testimonials() {
  const [index, setIndex] = useState<number>(0);
  const t = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative w-full bg-[#2A2B68] py-10 flex flex-col items-center h-screen overflow-hidden">
      <div className="absolute hidden sm:flex inset-0 z-0 w-full h-full  justify-between bg-blend-soft-light opacity-50">
        <div className="">{testimonialLeftSide}</div>
        <div className="">{testimonialRightSide}</div>
      </div>
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
        <div className="w-1/2 flex flex-col gap-5 items-center justify-center mb-4">
          <Text
            className="font-semibold text-3xl sm:text-[56px] max-w-[50rem] text-center"
            tag="p">
            Testimonials
          </Text>
          <Text className="whitespace-nowrap font-normal text-xl sm:text-4xl text-[#C6C7F3]">
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
          <div className="bg-white rounded-2xl shadow-lg px-8 py-8 max-w-2xl w-full flex flex-col items-center relative transition-all duration-500">
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
            <p className="text-[#222] text-center text-base whitespace-pre-line p-6 min-h-[150px]">
              {t.text}
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <div className="font-bold text-[#C6C7F3] text-lg">{t.author}</div>
          <button className="bg-yellow-400 text-[#0B0F2B] px-4 py-1 rounded-full font-semibold text-xs mt-2 cursor-default">
            {t.company}
          </button>
        </div>

        <div className="flex gap-2 justify-center mt-4">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-[#0B0F2B]" : "bg-[#0B0F2B]/20"
              } inline-block`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

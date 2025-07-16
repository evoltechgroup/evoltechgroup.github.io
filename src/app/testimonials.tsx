"use client";
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

function TestimonialsSection() {
  const [index, setIndex] = useState<number>(0);
  const t = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative w-full bg-[#eaf6ff] py-20 flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-2 text-[#0B0F2B]">
          Testimonials
        </h2>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#0B0F2B] font-medium text-lg">Happy</span>
          <span className="inline-block align-middle">
            <img
              src="/assets/icons/smile-emoji.png"
              alt=":)"
              className="w-7 h-7 "
            />
          </span>
          <span className="text-[#0B0F2B] font-medium text-lg">
            customers about us
          </span>
        </div>
        {/* Decorative Arrow */}
        <div className="w-full flex justify-center mb-6">
          <svg
            width="70"
            height="50"
            viewBox="0 0 70 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-ml-8 md:ml-0"
          >
            <path
              d="M2 48C10 36 30 10 68 2"
              stroke="#FFB800"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60 2L68 2L68 10"
              stroke="#FFB800"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="relative w-full flex justify-center">
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 focus:outline-none"
          >
            <span className="sr-only">Previous</span>
          </button>
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
            <p className="text-[#222] text-center text-base whitespace-pre-line min-h-[160px]">
              {t.text}
            </p>
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 focus:outline-none"
          >
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div className="mt-6 text-center">
          <div className="font-bold text-[#0B0F2B] text-lg">{t.author}</div>
          <button className="bg-yellow-400 text-[#0B0F2B] px-4 py-1 rounded-full font-semibold text-xs mt-2 cursor-default">
            {t.company}
          </button>
        </div>
        {/* Slider dots */}
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

export default TestimonialsSection;

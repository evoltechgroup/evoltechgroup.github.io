"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-0 md:right-6
            w-12 h-12 sm:w-14 sm:h-14 
            bg-gradient-to-r from-[#5785DC] to-[#5F4793]
            text-white
            rounded-full 
            flex items-center justify-center 
            font-semibold 
            transition-all duration-300 ease-in-out
            hover:shadow-[0_10px_25px_-5px_#5F4793]
            transform hover:scale-110 hover:-translate-y-1
            shadow-[0_8px_20px_-5px_rgba(87,133,220,0.3)]
            backdrop-blur-sm
            active:scale-95
            group
            cursor-pointer
            z-[1001]
          `}
          aria-label="Go to top"
          title="Go to top">
          <ChevronUp
            size={22}
            strokeWidth={2.5}
            className="transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
          />
        </button>
      )}
    </>
  );
};

export default GoToTopButton;

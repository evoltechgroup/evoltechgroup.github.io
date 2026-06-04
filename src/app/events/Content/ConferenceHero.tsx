"use client";

import {
  SpringExchangeBanner,
  AbaBanner,
  HCAAConference,
  ABAConference,
  SIIA2Conference,
  SIIADubaiConference,
  SIIAConference,
  SIIAPriceConference,
  SIIAGoldConference,
  HCAABanner,
  HCAA,
} from "@/assets/images/Events/CuratedEvents";
import { EventsBg } from "@/assets/images/Events";
import { eclipseEffect } from "@/assets/effects";
import {
  Bg126,
  Bg188,
  Bg189,
  Bg190,
  Bg191,
  Bg193,
} from "@/assets/images/Events";
import Text from "@/components/Text";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { followArrowDown } from "@/assets/svg";
import { StaticImageData } from "next/image";

interface CardConfig {
  image: StaticImageData;
  style: React.CSSProperties;
  rotate: number;
  className: string;
}

const CARDS: CardConfig[] = [
  //   {
  //     image: SpringExchangeBanner,
  //     style: { top: "6%", left: "2%" },
  //     rotate: -7,
  //     className: "w-40 h-28 md:w-52 md:h-36 lg:w-60 lg:h-40",
  //   },
  {
    image: EventsBg,
    style: { top: "18%", right: "2%" },
    rotate: 6,
    className: "w-36 h-24 md:w-48 md:h-32 lg:w-56 lg:h-36",
  },
  {
    image: ABAConference,
    style: { bottom: "10%", left: "3%" },
    rotate: 5,
    className: "w-36 h-24 md:w-44 md:h-28 lg:w-52 lg:h-36",
  },
  {
    image: SIIA2Conference,
    style: { bottom: "5%", right: "2%" },
    rotate: -6,
    className: "w-40 h-28 md:w-52 md:h-32 lg:w-60 lg:h-40",
  },
  {
    image: HCAABanner,
    style: { top: "42%", left: "0.5%" },
    rotate: -4,
    className: "hidden sm:block w-36 h-24 md:w-44 md:h-28 lg:w-52 lg:h-32",
  },
  {
    image: SIIAConference,
    style: { top: "40%", right: "1%" },
    rotate: 5,
    className: "hidden sm:block w-36 h-24 md:w-44 md:h-28 lg:w-52 lg:h-32",
  },
  {
    image: SIIADubaiConference,
    style: { top: "12%", left: "31%" },
    rotate: 2,
    className: "hidden md:block w-32 h-20 lg:w-44 lg:h-28",
  },
  {
    image: SIIAPriceConference,
    style: { bottom: "3%", right: "29%" },
    rotate: -3,
    className: "hidden md:block w-32 h-20 lg:w-44 lg:h-28",
  },
  {
    image: HCAA,
    style: { top: "16%", left: "18%" },
    rotate: -5,
    className: "hidden lg:block w-36 h-24",
  },
  {
    image: SIIAGoldConference,
    style: { top: "14%", right: "17%" },
    rotate: 7,
    className: "hidden lg:block w-36 h-24",
  },
];

const ConferenceHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex w-full flex-col h-[60vh] lg:h-[72vh] xl:h-[80vh] overflow-hidden">
      {/* ── Brand background layers ── */}
      <div className="absolute inset-0 z-0 w-full h-full flex bg-black overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0 w-full h-full flex bg-black overflow-hidden pointer-events-none">
          <div className="absolute z-8 w-full h-full">{eclipseEffect}</div>
          <div className="absolute z-7 w-full h-full">
            <img
              src={Bg191.src}
              alt=""
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-6 w-full h-full">
            <img
              src={Bg190.src}
              alt=""
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-5 w-full h-full">
            <img
              src={Bg189.src}
              alt=""
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-4 w-full h-full">
            <img
              src={Bg188.src}
              alt=""
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-2 w-full h-full">
            <img
              src={Bg193.src}
              alt=""
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-1 w-full h-full">
            <img
              src={Bg126.src}
              alt=""
              className="md:absolute w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Vignette overlay across the full section ── */}
      <div className="absolute inset-0 z-[5] bg-black/40 pointer-events-none" />

      {/* ── Active image — centered card, not full-bleed ── */}
      <div className="absolute inset-0 z-[6] flex items-end justify-center pb-6 sm:pb-8 pointer-events-none">
        <div className="relative w-[86%] max-w-[960px] h-[62%] sm:h-[75%] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
          <AnimatePresence mode="sync">
            <motion.img
              key={activeIndex}
              src={CARDS[activeIndex].image.src}
              alt={`Conference ${activeIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* ── Corner thumbnail cards — always visible, dim when their image is active ── */}
      {CARDS.map((card, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-2xl overflow-hidden shadow-xl ${card.className}`}
          style={{ ...card.style, zIndex: 15 }}
          animate={{
            opacity: i === activeIndex ? 0.08 : 0.55,
            scale: i === activeIndex ? 0.72 : 0.9,
            rotate: card.rotate,
            filter: i === activeIndex ? "blur(6px)" : "blur(4px)",
          }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={card.image.src}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* ── Text overlay — centered over the full image ── */}
      {/* <div className="relative z-20 flex flex-col h-full w-full items-center justify-center gap-3 md:gap-5 px-4 text-center">
        <Text
          className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center"
          tag="p"
        >
          Explore Our Conferences
        </Text>
        <Text className="text-xl sm:text-2xl md:text-3xl max-w-[40rem] text-center text-[#FFBB00]">
          Connect with industry experts
        </Text>
        <div className="flex items-center justify-center w-10 md:w-[71px]">
          {followArrowDown}
        </div>
      </div> */}
    </section>
  );
};

export default ConferenceHero;

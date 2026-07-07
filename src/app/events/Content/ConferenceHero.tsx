"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { eventDetailsConfig } from "@/data/eventDetailsConfig";

// ─── Conference Data ────────────────────────────────────────────────────────

interface Conference {
  image: StaticImageData;
  tag: string;
  title: string;
  location: string;
  date: string;
}

/**
 * Derives conference hero slides from eventDetailsConfig.
 * Shows all past conferences. The latest completed conference is automatically
 * included as events transition to "past" status over time.
 */
function getConferenceHeroSlides(): Conference[] {
  const past = eventDetailsConfig.filter(
    (e) => e.category === "conference" && e.status === "past",
  );
  return past.map((e) => ({
    image: (e.bannerImage ?? e.image) as StaticImageData,
    tag:
      e.tags?.find((t) => t.label !== "Conference")?.label ??
      e.tags?.[0]?.label ??
      "Conference",
    title: e.title,
    location: [e.city, e.state].filter(Boolean).join(", ") || "International",
    date: new Date(`${e.fromDate}T00:00:00`).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    }),
  }));
}

const CONFERENCES = getConferenceHeroSlides();

// ─── Amber pagination bar ───────────────────────────────────────────────────

const AUTOPLAY_MS = 5000;

function PaginationBar({
  index,
  active,
  past,
  onClick,
}: {
  index: number;
  active: boolean;
  past: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={`Go to conference ${index + 1}`}
      className="relative h-1.5 w-10 rounded-full overflow-hidden cursor-pointer"
      style={{ background: "rgba(255,255,255,0.15)" }}
    >
      {/* Past: fully filled amber */}
      {past && (
        <span
          className="absolute inset-0 rounded-full"
          style={{ background: "oklch(0.85 0.16 85)" }}
        />
      )}
      {/* Active: animating fill */}
      {active && (
        <motion.span
          key="fill"
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: "oklch(0.85 0.16 85)" }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
        />
      )}
    </button>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

const ConferenceHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = (nextIndex?: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CONFERENCES.length);
    }, AUTOPLAY_MS);
    if (nextIndex !== undefined) setActiveIndex(nextIndex);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (i: number) => {
    resetTimer(i);
  };

  const conf = CONFERENCES[activeIndex];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "600px",
        height: "78vh",
        background: "oklch(0.13 0.05 265)",
      }}
    >
      {/* ── Layered blue radial glows ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Primary glow — center-left */}
        <div
          className="absolute rounded-full"
          style={{
            width: "700px",
            height: "700px",
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, oklch(0.45 0.22 260 / 0.28) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        {/* Secondary glow — top-right */}
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            top: "-10%",
            right: "10%",
            background:
              "radial-gradient(circle, oklch(0.55 0.22 260 / 0.18) 0%, transparent 70%)",
            filter: "blur(140px)",
          }}
        />
        {/* Tertiary glow — bottom-left */}
        <div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            bottom: "5%",
            left: "5%",
            background:
              "radial-gradient(circle, oklch(0.4 0.2 260 / 0.15) 0%, transparent 70%)",
            filter: "blur(130px)",
          }}
        />
      </div>

      {/* ── Center carousel card (z-10) ── */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 pt-20">
        <div
          className="relative w-full max-w-4xl"
          style={{ aspectRatio: "16/9", maxHeight: "60vh" }}
        >
          <div
            className="relative w-full h-full rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 30px 120px -20px oklch(0.45 0.22 260 / 0.8)",
            }}
          >
            {/* Slide images with cross-fade */}
            <AnimatePresence mode="sync">
              <motion.div
                key={activeIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <Image
                  src={conf.image}
                  alt={conf.title}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-contain"
                />
                {/* Diagonal gradient overlay: top-right → bottom-left */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 0%, oklch(0.13 0.05 265 / 0.85) 100%)",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* ── Text stack — bottom-left with staggered entry ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeIndex}`}
                className="absolute bottom-0 left-0 p-8 md:p-12 z-10 flex flex-col gap-3"
              >
                {/* Tag pill */}
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="self-start px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-white/80"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {conf.tag}
                </motion.span>

                {/* Headline — glassmorphism */}
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="font-semibold leading-tight max-w-2xl"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 2.5rem)",
                    color: "rgba(255,255,255,0.95)",
                    padding: "8px 16px",
                    borderRadius: "12px",
                    backdropFilter: "blur(18px) saturate(1.6)",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    boxShadow:
                      "0 4px 24px 0 rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.18)",
                    display: "inline-block",
                    marginLeft: "-12px",
                    textShadow: "0 1px 8px rgba(0,0,0,0.35)",
                  }}
                >
                  {conf.title}
                </motion.h1>

                {/* Meta row — glassmorphism */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  style={{
                    padding: "5px 14px",
                    borderRadius: "999px",
                    backdropFilter: "blur(16px) saturate(1.5)",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow:
                      "0 2px 16px 0 rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    alignSelf: "flex-start",
                    marginLeft: "-10px",
                  }}
                >
                  {/* Amber dot + location */}
                  <span className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{
                        background: "oklch(0.85 0.16 85)",
                        boxShadow: "0 0 6px oklch(0.85 0.16 85 / 0.7)",
                      }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: "rgba(255,255,255,0.88)",
                        textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      {conf.location}
                    </span>
                  </span>
                  {/* Separator */}
                  <span
                    style={{
                      color: "rgba(255,255,255,0.25)",
                      fontSize: "0.65rem",
                    }}
                  >
                    ·
                  </span>
                  {/* Date */}
                  <span
                    className="text-sm"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      textShadow: "0 1px 4px rgba(0,0,0,0.25)",
                    }}
                  >
                    {conf.date}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* ── Pagination — bottom center inside card ── */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {CONFERENCES.map((_, i) => (
                <PaginationBar
                  key={i}
                  index={i}
                  active={i === activeIndex}
                  past={i < activeIndex}
                  onClick={() => handleDotClick(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceHero;

"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  formatEventDateRange,
  type EventCategory,
  type EventDetail,
} from "@/data/eventDetailsConfig";
import { CalenderIcon } from "@/assets/icons/custom-icons";

export type CardVariant = "sleek" | "feature" | "compact";

interface CuratedEventCardProps {
  event: EventDetail;
  category?: EventCategory;
  /** "sleek" (default) | "feature" | "compact" */
  variant?: CardVariant;
}

function resolveBadge(status: EventDetail["status"]) {
  if (status === "ongoing")
    return { label: "Ongoing", className: "bg-[#16A34A] text-white" };
  if (status === "upcoming")
    return { label: "Upcoming", className: "bg-[#FE7F00] text-white" };
  return null;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Variant 1 — Sleek  (white card, image top, pastel hover)
 * ───────────────────────────────────────────────────────────────────────────── */
function SleekCard({
  event,
  eventHref,
}: {
  event: EventDetail;
  eventHref: string;
}) {
  const badge = resolveBadge(event.status);
  return (
    <Link href={eventHref} className="block h-full">
      <div className="group relative h-[28rem] cursor-pointer">
        {/* Card shell */}
        <div className="absolute inset-0 rounded-3xl border border-[#E4EAF4] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] group-hover:shadow-[0_20px_44px_rgba(15,23,42,0.16)] transition-shadow duration-300 flex flex-col overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-48 sm:h-52 flex-shrink-0 overflow-hidden bg-[#0B1530] flex items-center justify-center">
            <img
              src={event.image.src}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            {badge && (
              <span
                className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${badge.className}`}
              >
                {badge.label}
              </span>
            )}
          </div>

          {/* Content zone — overflow-hidden clips the expanding circle */}
          <div className="relative flex flex-1 flex-col overflow-hidden">
            {/* Pastel gradient — fades on hover, revealing white bg beneath */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-[500ms] ease-in-out group-hover:opacity-0"
              style={{
                background:
                  "linear-gradient(135deg, #c4d9f5 0%, #d4e6fb 55%, #deedfb 100%)",
              }}
            />

            {/* Text + date — always above effects */}
            <div className="relative z-10 flex flex-col h-full p-5">
              <h3 className="text-base sm:text-lg font-bold text-[#1a1a2e] leading-snug mb-2 line-clamp-2">
                {event.title}
              </h3>
              <p className="text-sm text-[#334155]/70 leading-relaxed flex-1 line-clamp-3">
                {event.description}
              </p>
              {/* Date pill */}
              <div className="mt-3">
                <div className="inline-flex items-center gap-2 text-xs text-[#444444] font-bold bg-white/70 backdrop-blur-sm border border-[#E4EAF4] rounded-full px-3 py-1.5 shadow-sm">
                  <span className="text-[#4C96D7]">{CalenderIcon}</span>
                  <span>
                    {formatEventDateRange(event.fromDate, event.toDate)}
                  </span>
                </div>
              </div>
            </div>

            {/* White circle — expands from corner to fill card on hover */}
            <div
              className="absolute rounded-full bg-white transition-transform duration-[650ms] ease-in-out group-hover:scale-[10] z-[5]"
              style={{ width: 96, height: 96, bottom: -28, right: -28 }}
            />
          </div>
        </div>

        {/* Arrow — glassmorphism pill */}
        <div
          className="absolute z-20 transition-transform duration-300 group-hover:scale-110"
          style={{ bottom: 8, right: 8 }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 10h12M12 6l4 4-4 4"
                stroke="#1761A0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Variant 2 — Feature  (full-bleed image, dark gradient, content overlay)
 * Great for hero-style conference or featured event showcases.
 * ───────────────────────────────────────────────────────────────────────────── */
function FeatureCard({
  event,
  eventHref,
}: {
  event: EventDetail;
  eventHref: string;
}) {
  const badge = resolveBadge(event.status);
  return (
    <Link href={eventHref} className="block h-full">
      <div className="group relative flex h-[28rem] overflow-hidden rounded-3xl cursor-pointer shadow-[0_12px_36px_rgba(15,23,42,0.16)] hover:shadow-[0_24px_56px_rgba(15,23,42,0.26)] transition-shadow duration-300">
        {/* Full-bleed image */}
        <div className="absolute inset-0">
          <img
            src={event.image.src}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient: transparent top → deep navy bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040D1C]/95 via-[#040D1C]/35 to-transparent" />
        </div>

        {/* Status badge — top-left */}
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold shadow-md ${badge.className}`}
            >
              {badge.label}
            </span>
          </div>
        )}

        {/* Bottom content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-2">
            {event.title}
          </h3>
          <p className="text-sm text-white/65 leading-relaxed mb-4 line-clamp-2">
            {event.description}
          </p>
          {/* Date — glassmorphism on dark */}
          <div className="inline-flex items-center gap-2 text-sm text-white/90 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-3 py-1.5">
            <span className="text-white/80">{CalenderIcon}</span>
            <span>{formatEventDateRange(event.fromDate, event.toDate)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Variant 3 — Compact  (premium glass-wave hover)
 * On hover: a radial glass layer slides in from bottom-right (no visible edge),
 * while 3 diagonal white/blue wave capsules continuously sweep the card.
 * ───────────────────────────────────────────────────────────────────────────── */
function CompactCard({
  event,
  eventHref,
}: {
  event: EventDetail;
  eventHref: string;
}) {
  const badge = resolveBadge(event.status);
  return (
    <Link href={eventHref} className="block">
      {/*
       * Outer motion.div:
       * • propagates "hover" variant to all motion children
       * • provides the subtle y-lift on hover
       * • `group` drives Tailwind group-hover: utilities
       */}
      <motion.div
        className="group relative h-[25rem] cursor-pointer"
        initial="idle"
        whileHover="hover"
        variants={{
          idle: { y: 0 },
          hover: { y: -6 },
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Card shell — single overflow-hidden boundary clips every effect layer */}
        <div className="absolute inset-0 rounded shadow-[0_10px_32px_rgba(15,23,42,0.08)] group-hover:shadow-[0_28px_64px_rgba(15,23,42,0.22)] transition-shadow duration-500 flex flex-col overflow-hidden">
          {/* ── Image ── */}
          <div className="relative w-full h-48 flex-shrink-0 overflow-hidden">
            <img
              src={event.image.src}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {badge && (
              <span
                className={`absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-xs font-semibold shadow ${badge.className}`}
              >
                {badge.label}
              </span>
            )}
          </div>

          {/* ── Content zone — overflow-hidden clips all animated layers ── */}
          <div className="relative flex flex-1 flex-col overflow-hidden">
            {/* z-[1]: Pastel base gradient — dissolves as glass takes over */}
            <div
              className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-700 group-hover:opacity-0"
              style={{
                background:
                  "linear-gradient(135deg, #c4d9f5 0%, #d4e6fb 55%, #deedfb 100%)",
              }}
            />

            {/*
             * z-[2]: Glass takeover layer
             * Starts completely hidden (tiny scale + translated out to bottom-right).
             * Framer Motion variant animates it back to fill the content zone.
             * Radial gradient fades to transparent at edges — no visible hard curve.
             */}
            <motion.div
              className="absolute inset-0 z-[2] pointer-events-none"
              variants={{
                idle: { x: "62%", y: "62%", scale: 0.25, opacity: 0 },
                hover: { x: "0%", y: "0%", scale: 1, opacity: 1 },
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                transformOrigin: "100% 100%",
                background:
                  "radial-gradient(ellipse 100% 100% at 100% 100%, rgba(141,202,255,0.55) 0%, rgba(191,219,254,0.38) 28%, rgba(224,242,254,0.18) 52%, rgba(240,249,255,0.06) 72%, transparent 88%)",
              }}
            />

            {/*
             * z-[3–5]: Diagonal wave capsules
             * Always animating via CSS keyframes (runs at opacity-0 when not hovered
             * so they appear instantly and seamlessly when group-hover activates).
             * `top: "-50%"` + `height: 600px` ensures the rotated capsule fully
             * spans the content zone. overflow-hidden on the parent clips the excess.
             */}

            {/* Wave 1 — sharp white sheen, 1.85 s */}
            <div
              className="absolute z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                top: "-50%",
                left: 0,
                width: 18,
                height: 600,
                borderRadius: 18,
                background:
                  "linear-gradient(to bottom, transparent 0%, transparent 14%, rgba(255,255,255,0.88) 44%, rgba(255,255,255,0.88) 56%, transparent 86%, transparent 100%)",
                filter: "blur(0.5px)",
                animation:
                  "glassWave1 1.85s cubic-bezier(0.22, 1, 0.36, 1) infinite",
              }}
            />

            {/* Wave 2 — ice-blue translucent, 2.25 s */}
            <div
              className="absolute z-[4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                top: "-50%",
                left: 0,
                width: 44,
                height: 600,
                borderRadius: 44,
                background:
                  "linear-gradient(to bottom, transparent 0%, transparent 14%, rgba(141,202,255,0.55) 42%, rgba(141,202,255,0.55) 58%, transparent 86%, transparent 100%)",
                filter: "blur(6px)",
                animation:
                  "glassWave2 2.25s cubic-bezier(0.22, 1, 0.36, 1) infinite",
                animationDelay: "0.4s",
              }}
            />

            {/* Wave 3 — atmospheric soft cyan, 2.65 s */}
            <div
              className="absolute z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                top: "-50%",
                left: 0,
                width: 78,
                height: 600,
                borderRadius: 78,
                background:
                  "linear-gradient(to bottom, transparent 0%, transparent 14%, rgba(186,230,253,0.40) 40%, rgba(186,230,253,0.40) 60%, transparent 86%, transparent 100%)",
                filter: "blur(14px)",
                animation:
                  "glassWave3 2.65s cubic-bezier(0.22, 1, 0.36, 1) infinite",
                animationDelay: "0.75s",
              }}
            />

            {/* z-10: Text content — always above all effect layers */}
            <div className="relative z-10 flex flex-col h-full px-4 pt-3 pb-4">
              <h3 className="text-sm sm:text-base font-bold text-[#1a1a2e] leading-snug mb-1.5 line-clamp-2">
                {event.title}
              </h3>
              <p className="text-xs text-[#334155]/70 leading-relaxed line-clamp-3 flex-1">
                {event.description}
              </p>
              <div className="">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a1a2e] bg-[#4C96D7]/10 rounded-full px-3 py-1.5 border border-[#4C96D7]/20">
                  <span className="text-[#4C96D7]">{CalenderIcon}</span>
                  <span className="whitespace-nowrap">
                    {formatEventDateRange(event.fromDate, event.toDate)}
                  </span>
                </div>
              </div>
            </div>

            {/* Inset shimmer ring — ice-blue border glow on hover */}
            <div
              className="absolute inset-0 z-[9] rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow:
                  "inset 0 0 0 1px rgba(141,202,255,0.50), inset 0 0 28px rgba(141,202,255,0.06)",
              }}
            />
          </div>
        </div>

        {/* Arrow — glassmorphism pill, always on top */}
        <div
          className="absolute z-20 transition-transform duration-300 group-hover:scale-110"
          style={{ bottom: 8, right: 8 }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 10h12M12 6l4 4-4 4"
                stroke="#1761A0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * CuratedEventCard — selects the correct variant
 * ───────────────────────────────────────────────────────────────────────────── */
const CuratedEventCard: React.FC<CuratedEventCardProps> = ({
  event,
  category,
  variant = "sleek",
}) => {
  const eventHref = category
    ? `/events/${event.slug}?category=${category}`
    : `/events/${event.slug}`;

  if (variant === "feature")
    return <FeatureCard event={event} eventHref={eventHref} />;
  if (variant === "compact")
    return <CompactCard event={event} eventHref={eventHref} />;
  return <SleekCard event={event} eventHref={eventHref} />;
};

export default CuratedEventCard;

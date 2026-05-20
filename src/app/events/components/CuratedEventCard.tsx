"use client";
import React from "react";
import Link from "next/link";
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
 * Variant 1 — Sleek  (white card, image top, glass date pill)
 * Default design. Clean and professional.
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
      <div className="group flex h-[28rem] flex-col overflow-hidden rounded-3xl border border-[#E4EAF4] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] cursor-pointer transition-shadow duration-300">
        {/* Image */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden">
          <img
            src={event.image.src}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {badge && (
            <span
              className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${badge.className}`}
            >
              {badge.label}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base sm:text-lg font-bold text-[#1a1a2e] leading-snug mb-2">
            {event.title}
          </h3>
          <p className="text-sm text-gray-500 font-medium leading-relaxed flex-1">
            {event.description}
          </p>
        </div>

        {/* Date — glassmorphism pill */}
        <div className="px-5 pb-5 pt-2">
          <div className="inline-flex items-center gap-2 text-sm text-[#444444] bg-white/70 backdrop-blur-sm border border-[#E4EAF4] rounded-full font-medium px-3 py-1.5 shadow-sm">
            <span className="text-[#4C96D7]">{CalenderIcon}</span>
            <span>{formatEventDateRange(event.fromDate, event.toDate)}</span>
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
          <p className="text-sm text-white/65 font-medium leading-relaxed mb-4 line-clamp-2">
            {event.description}
          </p>
          {/* Date — glassmorphism on dark */}
          <div className="inline-flex items-center gap-2 text-sm text-white/90 bg-white/15 backdrop-blur-md border border-white/25 rounded-full font-medium px-3 py-1.5">
            <span className="text-white/80">{CalenderIcon}</span>
            <span>{formatEventDateRange(event.fromDate, event.toDate)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Variant 3 — Style  (soft pastel card with concave corner CTA button)
 * Inspired by modern editorial card UI. Pastel gradient, prominent type,
 * dark circle arrow button sitting in a concave bite at the bottom-right corner.
 * On hover: the white circle expands from the corner to fill the full card.
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
      <div className="group relative h-[25rem] cursor-pointer">
        {/* Outer shell — rounded corners + shadow only, no overflow-hidden here */}
        <div className="absolute inset-0 rounded shadow-[0_10px_32px_rgba(15,23,42,0.10)] group-hover:shadow-[0_18px_44px_rgba(15,23,42,0.16)] transition-shadow duration-300 flex flex-col overflow-hidden">
          {/* ── Image ── always visible; physically above the content zone */}
          <div className="relative w-full h-48 flex-shrink-0">
            <img
              src={event.image.src}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {badge && (
              <span
                className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold shadow ${badge.className}`}
              >
                {badge.label}
              </span>
            )}
          </div>

          {/* ── Content zone ── has its OWN overflow-hidden so the circle
               can only expand within this area; image above is never covered */}
          <div className="relative flex flex-1 flex-col overflow-hidden">
            {/* Pastel gradient — fades out as the white circle sweeps in */}
            <div
              className="absolute inset-0 transition-opacity duration-[500ms] ease-in-out group-hover:opacity-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, #c4d9f5 0%, #d4e6fb 55%, #deedfb 100%)",
              }}
            />

            {/* Text — sits above the expanding white circle */}
            <div className="relative z-10 flex flex-col h-full px-4 pt-3 pb-4">
              <h3 className="text-sm sm:text-base font-bold text-[#1a1a2e] leading-snug mb-1.5 line-clamp-2">
                {event.title}
              </h3>
              <p className="text-xs text-[#334155]/70 leading-relaxed line-clamp-3 flex-1">
                {event.description}
              </p>
              <div className="mt-2 flex items-end justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 text-xs text-[#1a1a2e] font-semibold bg-[#4C96D7]/10 rounded-full px-3 py-1.5 border border-[#4C96D7]/20">
                  <span className="text-[#4C96D7]">{CalenderIcon}</span>
                  <span className="whitespace-nowrap">
                    {formatEventDateRange(event.fromDate, event.toDate)}
                  </span>
                </div>
                <div className="w-14 h-14 flex-shrink-0" />
              </div>
            </div>

            {/* White circle — contained inside the content zone.
                 At rest: creates the concave bite at the card corner.
                 On hover: expands (scale-[10] is enough to fill this zone) to turn it white. */}
            <div
              className="absolute rounded-full bg-white transition-transform duration-[650ms] ease-in-out group-hover:scale-[10] z-[5]"
              style={{ width: 96, height: 96, bottom: -28, right: -28 }}
            />
          </div>
        </div>

        {/* Arrow CTA — always on top */}
        <div className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-[#1a1a2e] flex items-center justify-center shadow-[0_6px_20px_rgba(26,26,46,0.38)] group-hover:scale-110 transition-transform duration-300 z-20">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden
          >
            <path
              d="M4 10h12M12 6l4 4-4 4"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
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

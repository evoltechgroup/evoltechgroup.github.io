"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Manrope, Inter } from "next/font/google";
import {
  listedEventDetailsConfig,
  formatEventDateRange,
  type EventDetail,
} from "@/data/eventDetailsConfig";
import CuratedEventCard from "../components/CuratedEventCard";
import { TabButton } from "@/components/services/tabButton";
import ThemeButton from "@/components/Button/ThemeButton";
import { RoundChevronDown } from "@/assets/icons/custom-icons";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ─────────────────────────────────────────────────────────────────────────────
 * Countdown hook — minutes tick, safe: interval-only (no sync setState in effect)
 * ───────────────────────────────────────────────────────────────────────────── */
function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = new Date(`${targetDate}T00:00:00`).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hrs: 0, min: 0 };
    return {
      days: Math.floor(diff / 86_400_000),
      hrs: Math.floor((diff % 86_400_000) / 3_600_000),
      min: Math.floor((diff % 3_600_000) / 60_000),
    };
  });

  useEffect(() => {
    const compute = () => {
      const diff = new Date(`${targetDate}T00:00:00`).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hrs: 0, min: 0 };
      return {
        days: Math.floor(diff / 86_400_000),
        hrs: Math.floor((diff % 86_400_000) / 3_600_000),
        min: Math.floor((diff % 3_600_000) / 60_000),
      };
    };
    const id = setInterval(() => setTimeLeft(compute()), 60_000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Premium "featured upcoming" card.
 * Deep navy glass surface · blue→cyan accents · Manrope headings · Inter body
 * Left panel  — event image bg + dark gradient overlay + glass status pill +
 *               glass countdown (Days / Hrs / Min)
 * Right panel — format label, title, description, date + venue row, CTA button
 * ───────────────────────────────────────────────────────────────────────────── */
function FeaturedConferenceCard({ event }: { event: EventDetail }) {
  const isOngoing = event.status === "ongoing";
  const { days, hrs, min } = useCountdown(event.fromDate);
  const href = `/events/${event.slug}`;
  const locationStr = [event.venue, event.city, event.state]
    .filter(Boolean)
    .join(", ");
  const imageSrc = (event.bannerImage ?? event.image).src;

  return (
    <div
      className={`${manrope.variable} ${inter.variable} relative`}
      /* Ambient glow blobs live behind the card, not inside */
    >
      {/* Purple glow — top-left */}
      <div
        className="absolute -top-16 -left-16 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(88,97,157,0.28) 0%, transparent 68%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      {/* Orange glow — bottom-right */}
      <div
        className="absolute -bottom-12 -right-12 w-60 h-60 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(254,127,0,0.14) 0%, transparent 68%)",
          filter: "blur(36px)",
          zIndex: 0,
        }}
      />

      {/* ── Card ── */}
      <Link href={href} className="block group relative z-10">
        <div
          className="relative flex flex-col sm:flex-row overflow-hidden"
          style={{
            borderRadius: 28,
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(7,20,38,0.96) 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow:
              "0 32px 72px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* ── Image panel ── */}
          <div
            className="relative w-full h-56 sm:h-auto sm:w-[65%] sm:min-h-[380px] sm:shrink-0"
          >
            <img
              src={imageSrc}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark gradient overlay for legibility */}
            <div
              style={{
  background:
    "linear-gradient(to bottom, rgba(2,6,23,0.12) 0%, rgba(2,6,23,0.05) 50%, rgba(2,6,23,0.18) 100%)",
}}
            />
            {/* Right-edge feather — horizontal layout (sm+) only */}
            <div
              className="hidden sm:block absolute inset-y-0 right-0 w-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, rgba(7,20,38,0.80) 70%, rgba(7,20,38,0.96) 100%)",
              }}
            />
            {/* Bottom-edge feather — mobile column layout only */}
            <div
              className="sm:hidden absolute inset-x-0 bottom-0 h-14 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(7,20,38,0.92) 100%)",
              }}
            />
          </div>

          {/* ── RIGHT: content panel ── */}
          <div
            className="flex-1 flex flex-col justify-center px-5 py-6 sm:px-8 sm:py-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, transparent 100%)",
            }}
          >
            {/* Format / category label */}
            <p
              className="text-[11px] font-semibold tracking-[0.20em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                background: "linear-gradient(90deg, #58619D, #4C96D7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Conference
            </p>

            {/* Title */}
            <h3
              className="text-white font-extrabold text-xl sm:text-2xl leading-tight line-clamp-2 mb-3"
              style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif" }}
            >
              {event.title}
            </h3>

            {/* Description */}
            <p
              className="text-white/45 text-sm leading-relaxed line-clamp-2 mb-6"
              style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
            >
              {event.description}
            </p>

            {/* Info row: date + venue */}
            <div className="flex flex-col gap-2.5 mb-7">
              {/* Date */}
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(88,97,157,0.10)",
                    border: "1px solid rgba(88,97,157,0.28)",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <rect
                      x="1"
                      y="3"
                      width="14"
                      height="11"
                      rx="2"
                      stroke="#4C96D7"
                      strokeWidth="1.4"
                    />
                    <path d="M1 7h14" stroke="#4C96D7" strokeWidth="1.4" />
                    <path
                      d="M5 1v4M11 1v4"
                      stroke="#4C96D7"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span
                  className="text-white/60 text-xs"
                  style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                >
                  {formatEventDateRange(event.fromDate, event.toDate)}
                </span>
              </div>

              {/* Venue */}
              {locationStr && (
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(88,97,157,0.10)",
                      border: "1px solid rgba(88,97,157,0.28)",
                    }}
                  >
                    <svg
                      width="11"
                      height="13"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M8 1a5 5 0 0 1 5 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 0 1 5-5Z"
                        stroke="#4C96D7"
                        strokeWidth="1.4"
                      />
                      <circle
                        cx="8"
                        cy="6"
                        r="1.6"
                        stroke="#4C96D7"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-white/60 text-xs line-clamp-1"
                    style={{
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                    }}
                  >
                    {locationStr}
                  </span>
                </div>
              )}
            </div>

            {/* Single CTA — "View details" gradient button */}
            <div>
              <span
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_32px_rgba(254,127,0,0.45)]"
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  background:
                    "linear-gradient(135deg, #FE7F00 0%, #FF9F2F 100%)",
                  boxShadow: "0 6px 20px rgba(254,127,0,0.40)",
                }}
              >
                View details
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 10h12M12 6l4 4-4 4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

type FilterType = "all" | "upcoming" | "past";

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "All Events", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
];

const ConferenceSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedYear, setSelectedYear] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeSlide, setActiveSlide] = useState(0);

  const conferenceEvents = useMemo(
    () => listedEventDetailsConfig.filter((e) => e.category === "conference"),
    [],
  );

  const highlightedEvents = useMemo(
    () =>
      conferenceEvents.filter(
        (e) => e.status === "upcoming" || e.status === "ongoing",
      ),
    [conferenceEvents],
  );

  const availableYears = useMemo(() => {
    const years = new Set<number>();
    conferenceEvents.forEach((event) => {
      const fromYear = new Date(`${event.fromDate}T00:00:00`).getFullYear();
      const toYear = new Date(`${event.toDate}T00:00:00`).getFullYear();
      for (let year = fromYear; year <= toYear; year += 1) {
        years.add(year);
      }
    });
    return Array.from(years).sort((a, b) => b - a);
  }, [conferenceEvents]);

  const filteredEvents = useMemo<EventDetail[]>(() => {
    return conferenceEvents.filter((event) => {
      const matchesStatus =
        activeFilter === "all"
          ? true
          : activeFilter === "upcoming"
            ? event.status === "upcoming" || event.status === "ongoing"
            : event.status === activeFilter;

      if (!matchesStatus) return false;

      if (selectedYear) {
        const year = Number(selectedYear);
        const eventStart = new Date(`${event.fromDate}T00:00:00`);
        const eventEnd = new Date(`${event.toDate}T23:59:59`);
        const filterStart = new Date(year, 0, 1);
        const filterEnd = new Date(year, 11, 31, 23, 59, 59, 999);
        if (eventEnd < filterStart || eventStart > filterEnd) return false;
      }

      return true;
    });
  }, [conferenceEvents, activeFilter, selectedYear]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter, selectedYear]);

  /* Auto-advance carousel — only runs when there are 2+ upcoming events */
  useEffect(() => {
    if (highlightedEvents.length <= 1) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % highlightedEvents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [highlightedEvents.length]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;
  const countLabel =
    filteredEvents.length === 1 ? "conference event" : "conference events";

  return (
    <section
      className="w-full min-h-[85vh] bg-white py-4 md:py-16 transition-colors duration-500"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(217, 229, 251, 1) 0%, #ffff 80%)",
      }}
    >
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
        <div className="col-span-4 col-start-1 sm:col-span-8 lg:col-span-10 lg:col-start-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e]">
                Conference Experiences
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-1">
                Browse conferences where EvolTech is learning, connecting, and
                sharing ideas across industries.
              </p>
            </div>
            <div className="flex gap-[10px] bg-[#58619D] rounded-full p-1 shadow-md shrink-0">
              {FILTERS.map((filter) => (
                <TabButton
                  key={filter.value}
                  label={filter.label}
                  tabKey={filter.value}
                  activeTab={activeFilter}
                  onSelect={(tab) => setActiveFilter(tab as FilterType)}
                />
              ))}
            </div>
          </div>

          {/* ── Featured Upcoming Highlights ── */}
          {highlightedEvents.length > 0 && (
            <div className="mb-10">
              {/* Section label */}
              <div className="flexitems-center gap-2 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    background: "#fff",
                    border: "1px solid rgba(254,127,0,0.35)",
                    color: "#FE7F00",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse inline-block"
                    style={{ backgroundColor: "#FE7F00" }}
                  />
                  Upcoming
                </span>
              </div>

              {/* Cross-fade card strip — all cards share the same grid cell */}
              <div style={{ display: "grid" }}>
                {highlightedEvents.map((ev, i) => (
                  <div
                    key={ev.id}
                    style={{
                      gridArea: "1 / 1",
                      opacity: i === activeSlide ? 1 : 0,
                      transition: "opacity 0.55s ease",
                      pointerEvents: i === activeSlide ? "auto" : "none",
                    }}
                  >
                    <FeaturedConferenceCard event={ev} />
                  </div>
                ))}
              </div>

              {/* Carousel controls — only shown when 2+ events */}
              {highlightedEvents.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-5">
                  {/* Prev */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlide(
                        (prev) =>
                          (prev - 1 + highlightedEvents.length) %
                          highlightedEvents.length,
                      )
                    }
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(88,97,157,0.22)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.06)")
                    }
                    aria-label="Previous conference"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M13 4l-6 6 6 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Dot indicators */}
                  <div className="flex items-center gap-2">
                    {highlightedEvents.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveSlide(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          background:
                            i === activeSlide
                              ? "#58619d"
                              : "rgba(255,255,255,0.20)",
                          width: i === activeSlide ? 20 : 7,
                          height: 7,
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlide(
                        (prev) => (prev + 1) % highlightedEvents.length,
                      )
                    }
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(88,97,157,0.22)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.06)")
                    }
                    aria-label="Next conference"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M7 4l6 6-6 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}

              <div className="mt-8 border-b border-[#E4EAF4]" />
            </div>
          )}

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between flex-wrap">
            <p className="text-sm text-gray-500">
              Showing {filteredEvents.length} {countLabel}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedYear("")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  !selectedYear
                    ? "bg-[#58619D] text-white border-[#58619D] shadow-sm"
                    : "bg-white text-[#1a1a2e] border-[#D7DFEC] hover:border-[#58619D] hover:text-[#58619D]"
                }`}
              >
                All
              </button>
              {availableYears.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() =>
                    setSelectedYear(
                      selectedYear === String(year) ? "" : String(year),
                    )
                  }
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                    selectedYear === String(year)
                      ? "bg-[#58619D] text-white border-[#58619D] shadow-sm"
                      : "bg-white text-[#1a1a2e] border-[#D7DFEC] hover:border-[#58619D] hover:text-[#58619D]"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleEvents.map((event) => (
              <CuratedEventCard
                key={event.id}
                event={event}
                category="conference"
                variant="sleek"
              />
            ))}
          </div>

          {hasMore && (
            <div className="w-full justify-center items-center flex p-6 pt-10">
              <ThemeButton
                text="Show More"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                endIcon={<span className="">{RoundChevronDown}</span>}
                extraStyles="font-semibold"
              />
            </div>
          )}

          {filteredEvents.length === 0 && (
            <p className="col-span-4 sm:col-span-8 lg:col-span-10 lg:col-start-2 text-center text-gray-400 mt-10 text-lg">
              No conference events found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;

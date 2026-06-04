"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  listedEventDetailsConfig,
  formatEventDateRange,
  type EventDetail,
} from "@/data/eventDetailsConfig";
import CuratedEventCard from "../components/CuratedEventCard";
import { TabButton } from "@/components/services/tabButton";
import ThemeButton from "@/components/Button/ThemeButton";
import { RoundChevronDown, CalenderIcon } from "@/assets/icons/custom-icons";

/* ─────────────────────────────────────────────────────────────────────────────
 * Upcoming / ongoing conference highlight card.
 * Layout: 40% vibrant brand-colored left panel | 60% clear bright image right.
 * Animated shimmer gradient outer border. No heavy dark overlay on the image.
 * variant="hero"    — tall, full description, vivid orange CTA button
 * variant="compact" — shorter, no description, inline CTA link
 * ───────────────────────────────────────────────────────────────────────────── */
function UpcomingGlassCard({
  event,
  variant = "hero",
}: {
  event: EventDetail;
  variant?: "hero" | "compact";
}) {
  const isOngoing = event.status === "ongoing";
  const badgeLabel = isOngoing ? "Ongoing" : "Upcoming";
  const badgeColor = isOngoing ? "#16A34A" : "#FE7F00";
  const href = `/events/${event.slug}`;
  const locationStr = [event.city, event.state].filter(Boolean).join(", ");
  const isHero = variant === "hero";

  return (
    <div
      style={{
        background:
          "linear-gradient(270deg, #FE7F00, #58619D, #4C96D7, #FE7F00)",
        backgroundSize: "300% 300%",
        animation: "shimmer-border 4s ease infinite",
        borderRadius: "1rem",
        padding: "2px",
        /* Glow around the whole card */
        boxShadow:
          "0 0 0 1px rgba(88,97,157,0.15), 0 8px 32px rgba(88,97,157,0.22), 0 0 60px rgba(254,127,0,0.10)",
      }}
    >
      <Link href={href} className="block">
        <div
          className={`group relative flex overflow-hidden rounded-2xl ${
            isHero ? "h-[280px] md:h-[320px]" : "h-[160px] sm:h-[180px]"
          }`}
        >
          {/* ─────────────────────────────
           * LEFT 40% — vivid brand panel
           * ───────────────────────────── */}
          <div
            className={`relative flex flex-col justify-between shrink-0 ${
              isHero
                ? "w-[42%] sm:w-[40%] p-5 sm:p-7"
                : "w-[48%] sm:w-[44%] p-4 sm:p-5"
            }`}
            style={{
              background:
                "linear-gradient(145deg, #111C5D 0%, #1E2D7D 40%, #0B0F2B 100%)",
            }}
          >
            {/* Dot-grid texture for depth */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            {/* Ambient color glow from badge color */}
            <div
              className="absolute -top-8 -left-8 w-36 h-36 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${badgeColor}33 0%, transparent 70%)`,
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <span
                className={`inline-flex items-center gap-1.5 text-white font-bold rounded-full ${
                  isHero
                    ? "text-xs px-3 py-1 mb-3"
                    : "text-[0.65rem] px-2.5 py-0.5 mb-2"
                }`}
                style={{
                  backgroundColor: badgeColor,
                  boxShadow: `0 0 12px ${badgeColor}99, 0 0 28px ${badgeColor}44`,
                }}
              >
                <span
                  className="rounded-full inline-block animate-pulse bg-white"
                  style={{ width: isHero ? 6 : 5, height: isHero ? 6 : 5 }}
                />
                {badgeLabel}
              </span>

              <h3
                className={`text-white font-extrabold leading-snug line-clamp-2 ${
                  isHero
                    ? "text-lg sm:text-xl md:text-2xl mb-2"
                    : "text-sm sm:text-[0.95rem] mb-1"
                }`}
              >
                {event.title}
              </h3>

              {isHero && (
                <p className="text-white/55 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {event.description}
                </p>
              )}
            </div>

            {/* Bottom: meta + CTA */}
            <div
              className={`relative z-10 flex flex-col ${
                isHero ? "gap-1.5" : "gap-1"
              }`}
            >
              {locationStr && (
                <div className="flex items-center gap-1.5 text-white/65 text-xs">
                  <svg
                    width={isHero ? 12 : 10}
                    height={isHero ? 12 : 10}
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M8 1a5 5 0 0 1 5 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 0 1 5-5Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <circle
                      cx="8"
                      cy="6"
                      r="1.6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                  <span className="truncate">{locationStr}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-white/65 text-xs">
                <span
                  className={`opacity-75 ${
                    isHero
                      ? "[&>svg]:w-3 [&>svg]:h-3"
                      : "[&>svg]:w-2.5 [&>svg]:h-2.5"
                  }`}
                >
                  {CalenderIcon}
                </span>
                <span>
                  {formatEventDateRange(event.fromDate, event.toDate)}
                </span>
              </div>

              {isHero ? (
                <div className="mt-2">
                  <span
                    className="inline-flex items-center gap-2 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-full transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.03]"
                    style={{
                      background:
                        "linear-gradient(90deg, #FE7F00 0%, #FF9F2F 100%)",
                      boxShadow:
                        "0 4px 14px rgba(254,127,0,0.50), 0 1px 3px rgba(0,0,0,0.2)",
                    }}
                  >
                    View Details
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
              ) : (
                <div className="flex items-center gap-1 text-[#FF9F2F] text-xs font-bold mt-0.5 group-hover:gap-2 transition-[gap] duration-300">
                  <span>View Details</span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M4 10h12M12 6l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* ─────────────────────────────
           * RIGHT 60% — clear, bright event image
           * No dark overlay — image shows in full colour
           * ───────────────────────────── */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src={event.image.src}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Thin left-edge feather so left panel and image blend seamlessly */}
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#111C5D] to-transparent pointer-events-none" />
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

          {/* ── Upcoming Highlights ── */}
          {highlightedEvents.length > 0 && (
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[#FE7F00]/10 border border-[#FE7F00]/30 text-[#FE7F00] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FE7F00] animate-pulse inline-block" />
                  Upcoming
                </span>
              </div>

              {/* Single event — plain hero; multiple events — animated carousel */}
              {highlightedEvents.length === 1 ? (
                <UpcomingGlassCard
                  event={highlightedEvents[0]}
                  variant="hero"
                />
              ) : (
                <div>
                  {/* Slide strip */}
                  <div className="relative overflow-hidden">
                    <div
                      className="flex transition-transform duration-700 ease-in-out"
                      style={{
                        transform: `translateX(-${activeSlide * 100}%)`,
                      }}
                    >
                      {highlightedEvents.map((ev) => (
                        <div key={ev.id} className="min-w-full">
                          <UpcomingGlassCard event={ev} variant="hero" />
                        </div>
                      ))}
                    </div>

                    {/* Prev arrow */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveSlide(
                          (prev) =>
                            (prev - 1 + highlightedEvents.length) %
                            highlightedEvents.length,
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/25 flex items-center justify-center hover:bg-black/60 transition-colors"
                      aria-label="Previous conference"
                    >
                      <svg
                        width="16"
                        height="16"
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

                    {/* Next arrow */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveSlide(
                          (prev) => (prev + 1) % highlightedEvents.length,
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/25 flex items-center justify-center hover:bg-black/60 transition-colors"
                      aria-label="Next conference"
                    >
                      <svg
                        width="16"
                        height="16"
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

                  {/* Dot indicators */}
                  <div className="flex justify-center items-center gap-2 mt-3">
                    {highlightedEvents.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveSlide(i)}
                        className={`rounded-full transition-all duration-300 ${
                          i === activeSlide
                            ? "bg-[#FE7F00] w-5 h-2"
                            : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
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

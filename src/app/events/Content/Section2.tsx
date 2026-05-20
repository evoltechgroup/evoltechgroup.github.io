"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  listedEventDetailsConfig,
  type EventCategory,
  type EventDetail,
} from "@/data/eventDetailsConfig";
import CuratedEventCard from "../components/CuratedEventCard";
import { TabButton } from "@/components/services/tabButton";
import { SpaceSwitch } from "@/components/SpaceSwitch";
import ThemeButton from "@/components/Button/ThemeButton";
import { RoundChevronDown } from "@/assets/icons/custom-icons";
import { CalendarRange, ChevronDown, X } from "lucide-react";

type FilterType = "all" | "upcoming" | "past";
type CategoryFilter = "all" | EventCategory;

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "All Events", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
];

type SpaceFilter = "evoltech" | "ceo";

const SPACE_FILTERS: { label: string; value: SpaceFilter }[] = [
  { label: "EvolTech Space", value: "evoltech" },
  { label: "CEO Space", value: "ceo" },
];

const DATE_LABEL_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

const MONTH_OPTIONS = Array.from({ length: 12 }, (_, index) => ({
  label: new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date(2026, index, 1),
  ),
  value: `${index}`,
}));

export const getCategoryFromQuery = (
  category: string | null,
): CategoryFilter => {
  if (category === "conference" || category === "internal") {
    return category;
  }

  return "all";
};

const Section2 = () => {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);
  const [activeSpace, setActiveSpace] = useState<SpaceFilter>("evoltech");
  const [visibleCount, setVisibleCount] = useState(6);
  const dateFilterRef = useRef<HTMLDivElement | null>(null);
  const activeCategory = getCategoryFromQuery(searchParams.get("category"));
  const availableYears = useMemo(() => {
    const years = new Set<number>();

    listedEventDetailsConfig.forEach((event) => {
      const fromYear = new Date(`${event.fromDate}T00:00:00`).getFullYear();
      const toYear = new Date(`${event.toDate}T00:00:00`).getFullYear();

      for (let year = fromYear; year <= toYear; year += 1) {
        years.add(year);
      }
    });

    return Array.from(years).sort((left, right) => right - left);
  }, []);

  const filteredEvents = useMemo<EventDetail[]>(() => {
    return listedEventDetailsConfig.filter((event) => {
      const matchesStatus =
        activeFilter === "all"
          ? true
          : activeFilter === "upcoming"
            ? event.status === "upcoming" || event.status === "ongoing"
            : event.status === activeFilter;
      const matchesCategory =
        activeCategory === "all" ? true : event.category === activeCategory;
      const matchesSpace =
        activeCategory !== "internal"
          ? true
          : activeSpace === "ceo"
            ? event.space === "ceo"
            : event.space !== "ceo";

      if (!matchesStatus || !matchesCategory || !matchesSpace) {
        return false;
      }

      if (selectedYear) {
        const year = Number(selectedYear);
        const month = selectedMonth === "" ? undefined : Number(selectedMonth);
        const eventStart = new Date(`${event.fromDate}T00:00:00`);
        const eventEnd = new Date(`${event.toDate}T23:59:59`);
        const filterStart =
          month === undefined ? new Date(year, 0, 1) : new Date(year, month, 1);
        const filterEnd =
          month === undefined
            ? new Date(year, 11, 31, 23, 59, 59, 999)
            : new Date(year, month + 1, 0, 23, 59, 59, 999);

        if (eventEnd < filterStart || eventStart > filterEnd) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, activeFilter, selectedMonth, selectedYear]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory, activeFilter, selectedMonth, selectedYear, activeSpace]);

  useEffect(() => {
    if (activeCategory !== "internal") {
      setActiveSpace("evoltech");
    }
  }, [activeCategory]);

  useEffect(() => {
    if (!isMonthPickerOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (
        dateFilterRef.current &&
        !dateFilterRef.current.contains(event.target as Node)
      ) {
        setIsMonthPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [isMonthPickerOpen]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const hasDateFilter = Boolean(selectedYear);
  const dateRangeLabel = selectedYear
    ? selectedMonth === ""
      ? selectedYear
      : DATE_LABEL_FORMATTER.format(
          new Date(Number(selectedYear), Number(selectedMonth), 1),
        )
    : "Select Year / Month";

  const sectionContent = (() => {
    if (activeCategory === "internal" && activeSpace === "ceo") {
      return {
        title: "CEO Space",
        description:
          "Celebrating the meaningful moments, shared experiences, and human connection between our CEO and the EvolTech teams.",
        singularCountLabel: "CEO event",
        pluralCountLabel: "CEO events",
      };
    }
    return {
      all: {
        title: "Curated Experiences",
        description:
          "Explore our latest conference appearances and EvolTech Space moments in one place.",
        singularCountLabel: "event",
        pluralCountLabel: "events",
      },
      conference: {
        title: "Conference Experiences",
        description:
          "Browse conferences where EvolTech is learning, connecting, and sharing ideas across industries.",
        singularCountLabel: "conference event",
        pluralCountLabel: "conference events",
      },
      internal: {
        title: "EvolTech Space",
        description:
          "See the internal moments that shape our culture, from leadership gatherings to team experiences.",
        singularCountLabel: "EvolTech Space event",
        pluralCountLabel: "EvolTech Space events",
      },
    }[activeCategory];
  })();

  const countLabel =
    filteredEvents.length === 1
      ? sectionContent.singularCountLabel
      : sectionContent.pluralCountLabel;

  return (
    <section
      className="w-full min-h-[85vh] bg-white py-4 md:py-16 transition-colors duration-500"
      style={{
        backgroundImage:
          activeCategory === "internal" && activeSpace === "ceo"
            ? "linear-gradient(160deg, rgba(56, 189, 248, 0.38) 0%, rgba(147, 197, 253, 0.22) 55%, #ffffff 100%)"
            : "linear-gradient(to bottom, rgba(217, 229, 251, 1) 0%, #ffff 80%)",
      }}
    >
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0 ">
        <div className="col-span-4 col-start-1 sm:col-span-8 lg:col-span-10 lg:col-start-2 ">
          {activeCategory === "internal" && (
            <div className="mb-10">
              <SpaceSwitch
                options={SPACE_FILTERS}
                activeValue={activeSpace}
                onChange={(v) => setActiveSpace(v as SpaceFilter)}
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e]">
                {sectionContent.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-1">
                {sectionContent.description}
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
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              Showing {filteredEvents.length} {countLabel}
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <div ref={dateFilterRef} className="relative">
                <button
                  type="button"
                  onClick={() => setIsMonthPickerOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-2 rounded-full cursor-pointer border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    hasDateFilter
                      ? "border-[#58619D] bg-[#58619D] text-white shadow-md"
                      : "border-[#D7DFEC] bg-white text-[#1a1a2e] hover:border-[#58619D] hover:shadow-sm"
                  }`}
                >
                  <CalendarRange
                    size={15}
                    className={hasDateFilter ? "text-white" : "text-[#58619D]"}
                  />
                  <span>{dateRangeLabel}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isMonthPickerOpen ? "rotate-180" : ""
                    } ${hasDateFilter ? "text-white/70" : "text-gray-400"}`}
                  />
                </button>

                {isMonthPickerOpen && (
                  <div className="absolute right-0 z-20 mt-2 w-[min(100vw-2rem,19rem)] overflow-hidden rounded-2xl border border-[#E7EBF3] bg-white shadow-[0_8px_40px_rgba(15,23,42,0.13)]">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 border-b border-[#F0F3FA] px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF0F9]">
                          <CalendarRange size={14} className="text-[#58619D]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold leading-tight text-[#1a1a2e]">
                            Filter by Date
                          </p>
                          <p className="text-xs text-gray-400">
                            Year required · Month optional
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsMonthPickerOpen(false)}
                        className="shrink-0 rounded-full p-1.5 text-gray-400 transition hover:bg-[#F4F6FA] hover:text-[#1a1a2e]"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    {/* Body */}
                    <div className="space-y-3 p-4">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Year
                        </label>
                        <select
                          value={selectedYear}
                          onChange={(event) => {
                            const nextYear = event.target.value;
                            setSelectedYear(nextYear);
                            if (!nextYear) {
                              setSelectedMonth("");
                            }
                          }}
                          className="w-full rounded-xl border border-[#D7DFEC] bg-white px-3 py-2.5 text-sm text-[#1a1a2e] outline-none transition focus:border-[#58619D] focus:ring-2 focus:ring-[#58619D]/10"
                        >
                          <option value="">All years</option>
                          {availableYears.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          className={`mb-1.5 block text-xs font-semibold uppercase tracking-wide transition ${
                            selectedYear ? "text-gray-500" : "text-gray-300"
                          }`}
                        >
                          Month
                        </label>
                        <select
                          value={selectedMonth}
                          disabled={!selectedYear}
                          onChange={(event) =>
                            setSelectedMonth(event.target.value)
                          }
                          className="w-full rounded-xl border border-[#D7DFEC] bg-white px-3 py-2.5 text-sm text-[#1a1a2e] outline-none transition focus:border-[#58619D] focus:ring-2 focus:ring-[#58619D]/10 disabled:cursor-not-allowed disabled:border-[#EEF0F8] disabled:bg-[#F8F9FC] disabled:text-gray-300"
                        >
                          <option value="">All months</option>
                          {MONTH_OPTIONS.map((month) => (
                            <option key={month.value} value={month.value}>
                              {month.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Footer */}
                    {hasDateFilter && (
                      <div className="border-t border-[#F0F3FA] px-4 py-3 flex justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedYear("");
                            setSelectedMonth("");
                          }}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#D7DFEC] px-3 py-1.5 text-xs font-semibold text-[#58619D] transition hover:border-[#58619D] hover:bg-[#EEF0F9]"
                        >
                          <X size={11} />
                          Clear filter
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory === "internal" && activeSpace === "ceo"
              ? // CEO Space: 6 placeholder cards (content coming soon)
                Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="relative h-[25rem] rounded overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #daeffe 0%, #c8e8fb 45%, #d6effe 100%)",
                      boxShadow: "0 10px_32px rgba(15,23,42,0.08)",
                    }}
                  >
                    {/* Shimmer image placeholder */}
                    <div className="w-full h-48 bg-[#b6d9f5]/60 flex items-center justify-center">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        opacity="0.35"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="40"
                          height="40"
                          rx="8"
                          stroke="#1761A0"
                          strokeWidth="2"
                        />
                        <circle
                          cx="16"
                          cy="16"
                          r="5"
                          stroke="#1761A0"
                          strokeWidth="2"
                        />
                        <path
                          d="M4 32l10-10 8 8 6-6 16 16"
                          stroke="#1761A0"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Content area */}
                    <div className="px-4 pt-4 pb-4 flex flex-col gap-2">
                      <div className="h-4 w-2/3 rounded-full bg-[#4C96D7]/20" />
                      <div className="h-3 w-full rounded-full bg-[#4C96D7]/12" />
                      <div className="h-3 w-4/5 rounded-full bg-[#4C96D7]/12" />
                      <div className="mt-2 h-3 w-1/2 rounded-full bg-[#4C96D7]/10" />
                    </div>
                    {/* Coming Soon label */}
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-[#1761A0] bg-white/60 border border-[#4C96D7]/25 backdrop-blur-sm">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <circle
                          cx="6"
                          cy="6"
                          r="5"
                          stroke="#4C96D7"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M6 3.5v3l2 1"
                          stroke="#4C96D7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      Coming Soon
                    </div>
                    {/* Decorative bite */}
                    <div
                      className="absolute rounded-full bg-white/80"
                      style={{ width: 80, height: 80, bottom: -24, right: -24 }}
                    />
                  </div>
                ))
              : visibleEvents.map((event) => (
                  <CuratedEventCard
                    key={event.id}
                    event={event}
                    category={
                      activeCategory === "all" ? undefined : activeCategory
                    }
                    variant={
                      activeCategory === "internal" ? "compact" : "sleek"
                    }
                  />
                ))}
          </div>
          {hasMore && (
            <div className="w-full justify-center items-center flex p-6 pt-10">
              <ThemeButton
                text="Show More"
                onClick={handleShowMore}
                endIcon={<span className="">{RoundChevronDown}</span>}
                extraStyles="font-semibold"
              />
            </div>
          )}
          {filteredEvents.length === 0 && (
            <p className="col-span-4 sm:col-span-8 lg:col-span-10 lg:col-start-2 text-center text-gray-400 mt-10 text-lg">
              No events found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section2;

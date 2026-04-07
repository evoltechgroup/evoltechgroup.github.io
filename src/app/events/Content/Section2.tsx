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
import ThemeButton from "@/components/Button/ThemeButton";
import { RoundChevronDown } from "@/assets/icons/custom-icons";
import { CalendarRange, X } from "lucide-react";

type FilterType = "all" | "upcoming" | "past";
type CategoryFilter = "all" | EventCategory;

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "All Events", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
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

const getCategoryFromQuery = (category: string | null): CategoryFilter => {
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

      if (!matchesStatus || !matchesCategory) {
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
  }, [activeCategory, activeFilter, selectedMonth, selectedYear]);

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

  const sectionContent = {
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

  const countLabel =
    filteredEvents.length === 1
      ? sectionContent.singularCountLabel
      : sectionContent.pluralCountLabel;

  return (
    <section
      className="w-full min-h-[85vh] bg-white py-4 md:py-16"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(217, 229, 251, 1) 0%, #ffff 80%)",
      }}>
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0 ">
        <div className="col-span-4 col-start-1 sm:col-span-8 lg:col-span-10 lg:col-start-2 ">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
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
                  className={`inline-flex items-center gap-3 rounded-full  cursor-pointer border px-4 py-3 text-sm font-semibold transition ${
                    hasDateFilter
                      ? "border-[#58619D] bg-[#58619D] text-white shadow-md"
                      : "border-[#D7DFEC] bg-white text-[#1a1a2e] hover:border-[#58619D] hover:bg-[#F6F8FC]"
                  }`}>
                  <CalendarRange size={18} />
                  <span>{dateRangeLabel}</span>
                </button>
                {isMonthPickerOpen && (
                  <div className="absolute right-0 z-20 mt-3 w-[min(100vw-2rem,22rem)] rounded-[28px] border border-[#E7EBF3] bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
                    <div className="mb-3 flex items-center justify-between ">
                      <div>
                        <p className="text-sm font-semibold text-[#1a1a2e]">
                          Select Year and Month
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Choose a year first, then narrow the results to a
                          specific month if needed.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsMonthPickerOpen(false)}
                        className="rounded-full p-2 text-gray-400 transition hover:bg-[#F4F6FA] hover:text-[#1a1a2e]">
                        <X size={16} />
                      </button>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="flex flex-col gap-2 text-sm font-medium text-[#1a1a2e]">
                        Year
                        <select
                          value={selectedYear}
                          onChange={(event) => {
                            const nextYear = event.target.value;
                            setSelectedYear(nextYear);
                            if (!nextYear) {
                              setSelectedMonth("");
                            }
                          }}
                          className="rounded-2xl border border-[#D7DFEC] bg-white px-4 py-3 text-sm text-[#1a1a2e] outline-none transition focus:border-[#58619D]">
                          <option value="">All years</option>
                          {availableYears.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="flex flex-col gap-2 text-sm font-medium text-[#1a1a2e]">
                        Month
                        <select
                          value={selectedMonth}
                          disabled={!selectedYear}
                          onChange={(event) =>
                            setSelectedMonth(event.target.value)
                          }
                          className="rounded-2xl border border-[#D7DFEC] bg-white px-4 py-3 text-sm text-[#1a1a2e] outline-none transition disabled:cursor-not-allowed disabled:bg-[#F4F6FA] disabled:text-gray-400 focus:border-[#58619D]">
                          <option value="">All months</option>
                          {MONTH_OPTIONS.map((month) => (
                            <option key={month.value} value={month.value}>
                              {month.label}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <p className="text-xs text-gray-500">
                        Events that overlap the selected month or year will be
                        shown.
                      </p>
                      {hasDateFilter && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedYear("");
                            setSelectedMonth("");
                          }}
                          className="shrink-0 rounded-full border border-[#D7DFEC] px-3 py-2 text-xs font-semibold text-[#58619D] transition hover:border-[#58619D] hover:bg-[#F3F6FC]">
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleEvents.map((event) => (
              <CuratedEventCard
                key={event.id}
                event={event}
                category={activeCategory === "all" ? undefined : activeCategory}
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

"use client";
import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  listedEventDetailsConfig,
  type EventCategory,
  type EventDetail,
} from "@/data/eventDetailsConfig";
import CuratedEventCard from "../components/CuratedEventCard";
import { TabButton } from "@/components/services/tabButton";
import ThemeButton from "@/components/Button/ThemeButton";
import { RoundChevronDown } from "@/assets/icons/custom-icons";
import CEOVideoLibraryCard from "../components/CEOVideoLibraryCard";
import ConferenceSection from "./ConferenceSection";

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

export const getCategoryFromQuery = (
  category: string | null,
): CategoryFilter => {
  if (category === "conference" || category === "internal") {
    return category;
  }

  return "all";
};

const getSpaceFromQuery = (space: string | null): SpaceFilter => {
  if (space === "ceo") return "ceo";
  return "evoltech";
};

/* ── Thin router: delegates to the right section component ────────── */
const Section2 = () => {
  const searchParams = useSearchParams();
  const activeCategory = getCategoryFromQuery(searchParams.get("category"));

  if (activeCategory === "conference") {
    return <ConferenceSection />;
  }

  return <InternalSection />;
};

/* ── Internal events section (EvolTech Space + CEO Space + All) ───── */
const InternalSection = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedYear, setSelectedYear] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const activeCategory = getCategoryFromQuery(searchParams.get("category"));
  const activeSpace = getSpaceFromQuery(searchParams.get("space"));

  const availableYears = useMemo(() => {
    const years = new Set<number>();
    listedEventDetailsConfig
      .filter((event) => {
        if (activeCategory === "all") return event.category !== "conference";
        if (event.category !== activeCategory) return false;
        if (activeCategory === "internal") {
          return activeSpace === "ceo"
            ? event.space === "ceo"
            : event.space !== "ceo";
        }
        return true;
      })
      .forEach((event) => {
        const fromYear = new Date(`${event.fromDate}T00:00:00`).getFullYear();
        const toYear = new Date(`${event.toDate}T00:00:00`).getFullYear();
        for (let year = fromYear; year <= toYear; year += 1) {
          years.add(year);
        }
      });
    return Array.from(years).sort((left, right) => right - left);
  }, [activeCategory, activeSpace]);

  const filteredEvents = useMemo<EventDetail[]>(() => {
    return listedEventDetailsConfig.filter((event) => {
      // In "all" view, exclude conference events (they live in ConferenceSection)
      if (activeCategory === "all" && event.category === "conference") {
        return false;
      }
      const matchesStatus =
        activeFilter === "all"
          ? true
          : activeFilter === "upcoming"
            ? event.status === "upcoming" || event.status === "ongoing"
            : event.status === activeFilter;
      const matchesCategory =
        activeCategory === "all" ? true : event.category === activeCategory;
      // Both "all" and "internal" apply the space filter (no more mixed curated view)
      const matchesSpace =
        activeCategory === "conference"
          ? true
          : activeSpace === "ceo"
            ? event.space === "ceo"
            : event.space !== "ceo";

      if (!matchesStatus || !matchesCategory || !matchesSpace) return false;

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
  }, [activeCategory, activeFilter, selectedYear, activeSpace]);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory, activeFilter, selectedYear, activeSpace]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

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
    // "all" now defaults to EvolTech Space — no more "Curated Experiences" view
    return {
      title: "EvolTech Space",
      description:
        "See the internal moments that shape our culture, from leadership gatherings to team experiences.",
      singularCountLabel: "EvolTech Space event",
      pluralCountLabel: "EvolTech Space events",
    };
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
          {(activeCategory === "internal" || activeCategory === "all") && (
            <div className="mb-10">
              <div className="flex gap-[10px] bg-[#58619D] rounded-full p-1 shadow-md w-fit">
                {SPACE_FILTERS.map((sf) => (
                  <TabButton
                    key={sf.value}
                    label={sf.label}
                    tabKey={sf.value}
                    activeTab={activeSpace}
                    onSelect={(v) => {
                      const params = new URLSearchParams(
                        searchParams.toString(),
                      );
                      if (v === "evoltech") {
                        params.delete("space");
                      } else {
                        params.set("space", v);
                      }
                      router.replace(`/events?${params.toString()}`, {
                        scroll: false,
                      });
                    }}
                  />
                ))}
              </div>
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

            {/* Hide All / Upcoming / Past for EvolTech Space and CEO Space — all events are shown */}
            {activeCategory !== "internal" && activeCategory !== "all" && (
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
            )}
          </div>

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
            {(activeCategory === "internal" || activeCategory === "all") &&
            activeSpace === "ceo" ? (
              <>
                {/* Real CEO Space events from eventDetailsConfig */}
                {visibleEvents.map((event) => (
                  <CuratedEventCard
                    key={event.id}
                    event={event}
                    category="internal"
                    variant="compact"
                  />
                ))}
                {/* Executive Video Library card — links to /events/ceo-video-library */}
                <CEOVideoLibraryCard videoCount={4} />
              </>
            ) : (
              visibleEvents.map((event) => (
                <CuratedEventCard
                  key={event.id}
                  event={event}
                  category={
                    activeCategory === "all" ? undefined : activeCategory
                  }
                  variant={
                    activeCategory === "internal" || activeCategory === "all"
                      ? "compact"
                      : "sleek"
                  }
                />
              ))
            )}
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
          {filteredEvents.length === 0 &&
            !(
              (activeCategory === "internal" || activeCategory === "all") &&
              activeSpace === "ceo"
            ) && (
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

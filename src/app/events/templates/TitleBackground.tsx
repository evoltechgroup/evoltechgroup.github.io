"use client";
import { eclipseEffect } from "@/assets/effects";
import {
  Bg126,
  Bg188,
  Bg189,
  Bg190,
  Bg191,
  Bg193,
  EventsBg,
  EvoltechGroupV2,
} from "@/assets/images/Events";
import { formatEventDateRange } from "@/data/eventDetailsConfig";
import ThemeButton from "@/components/Button/ThemeButton";
import { ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { StaticImageData } from "next/image";

interface TitleBackgroundProps {
  event: {
    title: string;
    fromDate: string;
    toDate: string;
    dateLabel?: string;
    tags?: { label: string; bgColor: string }[];
    city?: string;
    state?: string;
    venue?: string;
    category?: string;
    image?: StaticImageData;
    bannerImage?: StaticImageData;
  };
}

const TitleBackgroundContent: React.FC<TitleBackgroundProps> = ({ event }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = event.category ?? searchParams.get("category");
  const isConference = category === "conference";

  const fallbackBg = isConference ? EventsBg : EvoltechGroupV2;
  const eventBg = event.bannerImage ?? event.image ?? fallbackBg;

  /* ── Shared brand background layers (same for all categories) ── */
  const BrandBackground = (
    <div className="absolute inset-0 z-0 w-full h-full flex bg-black overflow-hidden pointer-events-none">
      <div className="absolute inset-0 z-0 w-full h-full flex bg-black overflow-hidden pointer-events-none">
        <div className="absolute z-0 w-full h-full">{eclipseEffect}</div>
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
        {!isConference && (
          <div className="absolute z-8 w-full h-full">
            <img
              src={eventBg.src}
              alt="EventBg"
              className="md:absolute w-full h-full object-cover mix-blend-lighten"
            />
          </div>
        )}
      </div>
    </div>
  );

  /* ── CONFERENCE layout: back button card → centered image → meta ── */
  if (isConference) {
    return (
      <div className="relative flex flex-col w-full h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden mt-20">
        {BrandBackground}

        <div className="relative z-10 flex flex-col h-full w-full max-w-5xl mx-auto px-4 lg:px-8 ">
          {/* TOP: transparent card with back button */}
          <div className="pt-5 pb-3">
            <div
              className="inline-flex"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "2rem",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <ThemeButton
                text="Back to All"
                onClick={() => router.back()}
                startIcon={
                  <span>
                    <ChevronLeft />
                  </span>
                }
                extraStyles="!bg-transparent !text-white hover:!bg-[#FFFFFF1A] hover:!text-white hover:brightness-100 !pl-2 !pr-4"
              />
            </div>
          </div>

          {/* MIDDLE: event image as a visible rounded card */}
          <div className="flex-1 flex items-center justify-center overflow-hidden py-2">
            <div className="relative w-full max-w-5xl h-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <img
                src={eventBg.src}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* BOTTOM: title + meta tags — no card, transparent */}
          <div className="py-4 flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {event.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-black bg-[#FFBB00] px-2 py-1 rounded-md font-semibold">
                {event.dateLabel ??
                  formatEventDateRange(event.fromDate, event.toDate)}
              </span>
              {event.city && (
                <span className="text-sm text-black bg-[#FFBB00] px-2 py-1 rounded-md font-semibold">
                  {event.city}, {event.state}
                </span>
              )}
              {event.venue && (
                <span className="text-sm text-black bg-[#FFBB00] px-2 py-1 rounded-md font-semibold">
                  {event.venue}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── INTERNAL / CEO layout: unchanged original design ── */
  return (
    <div className="relative flex w-full flex-col items-center bg-[#ffff] py-10 h-[60vh] lg:h-[75vh] xl:h-[75vh]">
      {BrandBackground}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0 w-full">
          <div className="col-span-4 col-start-1 flex w-full flex-col items-start text-left lg:col-span-8 lg:col-start-2">
            <div
              className="w-full flex flex-col items-start gap-4 rounded-2xl p-6 backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
              }}
            >
              <ThemeButton
                text="Back to All Events"
                onClick={() => router.back()}
                startIcon={
                  <span className="">
                    <ChevronLeft />
                  </span>
                }
                extraStyles="!bg-transparent border border-[#FFFFFFD] !text-[#FFFFFF] hover:!bg-[#FFFFFF1A] hover:!text-white hover:brightness-200 !pl-2"
              />
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {event.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-black bg-[#FFBB00] px-2 py-1 rounded-md font-semibold">
                  {event.dateLabel ??
                    formatEventDateRange(event.fromDate, event.toDate)}
                </span>
                {event.city && (
                  <span className="text-sm text-black bg-[#FFBB00] px-2 py-1 rounded-md font-semibold">
                    {event.city}, {event.state}
                  </span>
                )}
                {event.venue && (
                  <span className="text-sm text-black bg-[#FFBB00] px-2 py-1 rounded-md font-semibold">
                    {event.venue}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TitleBackground: React.FC<TitleBackgroundProps> = ({ event }) => {
  return (
    <Suspense
      fallback={<div className="h-[60vh] lg:h-[75vh] w-full bg-black" />}
    >
      <TitleBackgroundContent event={event} />
    </Suspense>
  );
};

export default TitleBackground;

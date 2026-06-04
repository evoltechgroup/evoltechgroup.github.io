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
  /** When false, the event-specific bg image is hidden — only brand color layers show. Defaults to true. */
  showBgImage?: boolean;
}

const TitleBackgroundContent: React.FC<TitleBackgroundProps> = ({
  event,
  showBgImage = true,
}) => {
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
        <div className="absolute z-4 w-full h-full mt-10">
          <img
            src={Bg188.src}
            alt=""
            className="md:absolute w-full h-full object-cover"
          />
        </div>
        {!isConference && showBgImage && (
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
              <span className="text-sm bg-transparent border border-yellow-400 text-[#FFBB00] px-2 py-1 rounded-full font-medium">
                {event.dateLabel ??
                  formatEventDateRange(event.fromDate, event.toDate)}
              </span>
              {event.city && (
                <span className="text-sm bg-transparent border border-yellow-400 text-[#FFBB00] px-2 py-1 rounded-full font-medium">
                  {event.city}, {event.state}
                </span>
              )}
              {event.venue && (
                <span className="text-sm bg-transparent border border-yellow-400 text-[#FFBB00] px-2 py-1 rounded-full font-medium">
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
              className="w-full flex flex-col items-start gap-4 rounded-2xl px-6 py-5"
              style={
                event.bannerImage
                  ? {
                      background: "rgba(255,255,255,0.25)",
                      border: "1px solid rgba(255,255,255,0.40)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                      backdropFilter: "blur(10px)",
                    }
                  : {
                      background: "rgba(0,0,0,0.30)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.28)",
                    }
              }
            >
              <ThemeButton
                text="Back to All Events"
                onClick={() => router.back()}
                startIcon={
                  <span>
                    <ChevronLeft />
                  </span>
                }
                extraStyles={`
    !bg-[rgba(255,255,255,0.25)]
    border border-white/40
    ${event.bannerImage ? "!text-black/70 hover:!text-black" : "!text-white hover:!text-white/80"}
    backdrop-blur-md
    shadow-[0_8px_32px_rgba(0,0,0,0.15)]
    hover:!bg-[rgba(255,255,255,0.35)]
    hover:border-white/50
    !pl-2
  `}
              />
              <h1
                className="text-3xl md:text-5xl font-bold text-white mb-2"
                style={{
                  textShadow:
                    "0 2px 16px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.40)",
                }}
              >
                {event.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-white bg-[#FFBB00] px-2 py-1 rounded-md font-medium shadow-[0_2px_8px_rgba(0,0,0,0.30)]">
                  {event.dateLabel ??
                    formatEventDateRange(event.fromDate, event.toDate)}
                </span>
                {event.city && (
                  <span className="text-sm text-white bg-[#FFBB00] px-2 py-1 rounded-md font-medium shadow-[0_2px_8px_rgba(0,0,0,0.30)]">
                    {event.city}, {event.state}
                  </span>
                )}
                {event.venue && (
                  <span className="text-sm text-white bg-[#FFBB00] px-2 py-1 rounded-md font-medium shadow-[0_2px_8px_rgba(0,0,0,0.30)]">
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

const TitleBackground: React.FC<TitleBackgroundProps> = ({
  event,
  showBgImage = true,
}) => {
  return (
    <Suspense
      fallback={<div className="h-[60vh] lg:h-[75vh] w-full bg-black" />}
    >
      <TitleBackgroundContent event={event} showBgImage={showBgImage} />
    </Suspense>
  );
};

export default TitleBackground;

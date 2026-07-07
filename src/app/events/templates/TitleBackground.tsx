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
import { Manrope, Inter } from "next/font/google";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { StaticImageData } from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope-tb",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-tb",
  display: "swap",
});

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

  /* ── CONFERENCE layout: premium dark hero ── */
  if (isConference) {
    return (
      <div
        className={`${manrope.variable} ${inter.variable} w-full mt-20`}
        style={{
          background:
            "linear-gradient(180deg, #020617 0%, #071426 60%, #0F172A 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8 pt-6 pb-10 flex flex-col gap-5">
          {/* ── 1. Back nav pill ── */}
          <div>
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56,189,248,0.08)";
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.28)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="M13 4l-6 6 6 6"
                  stroke="#38BDF8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="text-sm font-medium"
                style={{
                  fontFamily: "var(--font-inter-tb), Inter, sans-serif",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Back to All
              </span>
            </button>
          </div>

          {/* ── 2. Banner image container ── */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <img
              src={eventBg.src}
              alt={event.title}
              className="w-full object-cover block"
              style={{ maxHeight: 380 }}
            />
            {/* Bottom gradient fade: transparent → deep navy */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                height: "40%",
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(7,20,38,0.30) 60%, rgba(7,20,38,0.55) 100%)",
              }}
            />
          </div>

          {/* ── 3. Title block ── */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
            style={{
              fontFamily: "var(--font-manrope-tb), Manrope, sans-serif",
            }}
          >
            {event.title}
          </h1>

          {/* ── 4. Meta pill row ── */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Date */}
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm"
              style={{
                fontFamily: "var(--font-inter-tb), Inter, sans-serif",
                background: "rgba(7,20,38,0.70)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <svg
                width="12"
                height="12"
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
                  stroke="#38BDF8"
                  strokeWidth="1.4"
                />
                <path d="M1 7h14" stroke="#38BDF8" strokeWidth="1.4" />
                <path
                  d="M5 1v4M11 1v4"
                  stroke="#38BDF8"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
              {event.dateLabel ??
                formatEventDateRange(event.fromDate, event.toDate)}
            </span>

            {/* Location */}
            {event.city && (
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm"
                style={{
                  fontFamily: "var(--font-inter-tb), Inter, sans-serif",
                  background: "rgba(7,20,38,0.70)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  color: "rgba(255,255,255,0.75)",
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
                    stroke="#38BDF8"
                    strokeWidth="1.4"
                  />
                  <circle
                    cx="8"
                    cy="6"
                    r="1.6"
                    stroke="#38BDF8"
                    strokeWidth="1.4"
                  />
                </svg>
                {event.city}
                {event.state ? `, ${event.state}` : ""}
              </span>
            )}

            {/* Venue */}
            {event.venue && (
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm"
                style={{
                  fontFamily: "var(--font-inter-tb), Inter, sans-serif",
                  background: "rgba(7,20,38,0.70)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <rect
                    x="2"
                    y="1"
                    width="12"
                    height="14"
                    rx="1.5"
                    stroke="#38BDF8"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M5 5h6M5 8h6M5 11h4"
                    stroke="#38BDF8"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                {event.venue}
              </span>
            )}
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

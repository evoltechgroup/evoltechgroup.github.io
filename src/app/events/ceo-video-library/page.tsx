"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import TitleBackground from "@/app/events/templates/TitleBackground";
import {
  eventDetailsConfig,
  formatEventDateRange,
  type EventDetail,
} from "@/data/eventDetailsConfig";

/** CEO episodes with a real video URL only — sorted by date (newest first) */
const CEO_VIDEO_EVENTS = eventDetailsConfig
  .filter(
    (e): e is EventDetail & { episode: string } =>
      e.space === "ceo" && !!e.episode && !!e.videoUrl,
  )
  .sort(
    (a, b) =>
      new Date(`${a.fromDate}T00:00:00`).getTime() -
      new Date(`${b.fromDate}T00:00:00`).getTime(),
  );

const LIBRARY_EVENT = {
  title: "Executive Video Library",
  fromDate: "2026-01-01",
  toDate: "2026-12-31",
  dateLabel: "CEO Space",
  category: "internal",
};

/* ── Single video card ─────────────────────────────────────────────── */
function VideoCard({
  event,
  onPlay,
}: {
  event: EventDetail & { episode: string };
  onPlay: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onPlay}
      onKeyDown={(e) => e.key === "Enter" && onPlay()}
      className="group relative cursor-pointer outline-none"
      style={{ height: "22rem" }}
    >
      {/* Card shell — single overflow-hidden boundary */}
      <div className="absolute inset-0 rounded-2xl shadow-[0_8px_32px_rgba(15,23,42,0.12)] group-hover:shadow-[0_20px_48px_rgba(15,23,42,0.22)] transition-shadow duration-300 flex flex-col overflow-hidden">
        {/* ── Thumbnail ── */}
        <div className="relative h-56 flex-shrink-0 overflow-hidden bg-[#0B1530]">
          {/* Scaled LinkedIn iframe — not interactive */}
          <iframe
            src={event.videoUrl!}
            width={520}
            height={399}
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%) scale(0.54)",
              transformOrigin: "top center",
              border: "none",
              pointerEvents: "none",
            }}
            scrolling="no"
            loading="lazy"
            title={event.title}
          />

          {/* Dark overlay — hides LinkedIn default UI */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.80) 100%)",
            }}
          />

          {/* Episode badge — top-left */}

          {/* Yellow play button — centred */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "rgba(255,187,0,0.82)",
                boxShadow:
                  "0 0 0 6px rgba(255,187,0,0.18), 0 6px 20px rgba(255,187,0,0.38)",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 22 22"
                fill="none"
                aria-hidden
              >
                <polygon points="8,5 19,11 8,17" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Content zone — mirrors CEOVideoLibraryCard ── */}
        <div className="relative flex flex-1 flex-col overflow-hidden">
          {/* Pastel gradient — fades on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-[500ms] ease-in-out group-hover:opacity-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, #c4d9f5 0%, #d4e6fb 55%, #deedfb 100%)",
            }}
          />

          {/* Text */}
          <div className="relative z-10 flex flex-col h-full px-4 pt-3 pb-3">
            <h3 className="text-sm font-bold text-[#1a1a2e] leading-snug line-clamp-2 mb-1">
              {event.title}
            </h3>
            <p className="text-[11px] text-[#334155]/60 font-medium flex-1">
              {formatEventDateRange(event.fromDate, event.toDate)}
            </p>
            <div className="h-2 flex-shrink-0" />
          </div>

          {/* White circle — expands from bottom-right to cover content zone */}
          <div
            className="absolute rounded-full bg-white transition-transform duration-[650ms] ease-in-out scale-0 group-hover:scale-[7] z-[5]"
            style={{ width: 96, height: 96, bottom: -28, right: -28 }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── LinkedIn modal — full interactive player ───────────────────────── */
function VideoModal({
  videoUrl,
  title,
  onClose,
}: {
  videoUrl: string;
  title: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[520px] rounded-2xl overflow-hidden bg-[#0B1530]"
        style={{
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(76,150,215,0.15)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <span className="text-xs font-semibold text-[#8DCAFF]">
            CEO Space · Video
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </div>

        {/* Full interactive LinkedIn embed — autoplay on open */}
        <iframe
          src={`${videoUrl}${videoUrl.includes("?") ? "&" : "?"}autoplay=1`}
          height="399"
          width="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen"
          title={title}
          style={{ display: "block", border: "none" }}
        />

        <div className="px-4 py-3 border-t border-white/10">
          <p className="text-xs text-white/60 line-clamp-1">{title}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function CEOVideoLibraryPage() {
  const [activeEvent, setActiveEvent] = useState<
    (typeof CEO_VIDEO_EVENTS)[0] | null
  >(null);

  return (
    <>
      <TitleBackground event={LIBRARY_EVENT} />

      <div
        className="w-full bg-white py-16"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(217,229,251,0.5) 0%, #ffff 40%)",
        }}
      >
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
          <div className="col-span-4 col-start-1 lg:col-span-10 lg:col-start-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CEO_VIDEO_EVENTS.map((event) => (
                <VideoCard
                  key={event.id}
                  event={event}
                  onPlay={() => setActiveEvent(event)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeEvent && (
        <VideoModal
          videoUrl={activeEvent.videoUrl!}
          title={activeEvent.title}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </>
  );
}

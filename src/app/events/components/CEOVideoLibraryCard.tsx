"use client";
import Link from "next/link";
import { Play } from "lucide-react";
import { CalenderIcon } from "@/assets/icons/custom-icons";

interface CEOVideoLibraryCardProps {
  videoCount?: number;
}

const CEOVideoLibraryCard: React.FC<CEOVideoLibraryCardProps> = ({
  videoCount = 4,
}) => {
  return (
    <Link href="/events/ceo-video-library" className="block">
      <div className="group relative h-[25rem] cursor-pointer">
        {/* ── Outer shell — same structure as CompactCard ─────── */}
        <div className="absolute inset-0 rounded shadow-[0_10px_32px_rgba(15,23,42,0.10)] group-hover:shadow-[0_18px_44px_rgba(15,23,42,0.16)] transition-shadow duration-300 flex flex-col overflow-hidden">
          {/* ── Video thumbnail — LinkedIn EP01 iframe preview ── */}
          <div className="relative w-full h-48 flex-shrink-0 overflow-hidden bg-[#0B1530]">
            {/* Scaled iframe — pointer-events none, LinkedIn UI not interactive */}
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7434291295868690432?compact=1"
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
              title="Executive Video Library preview"
            />

            {/* Overlay: dims LinkedIn default play/like/share UI */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0.68) 100%)",
              }}
            />

            {/* Custom yellow play button + count */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                style={{
                  background: "rgba(255,187,0,0.88)",
                  boxShadow:
                    "0 0 0 6px rgba(255,187,0,0.14), 0 6px 20px rgba(255,187,0,0.30)",
                }}
              >
                <Play size={18} fill="white" className="text-white ml-0.5" />
              </div>
              <span className="text-[11px] font-semibold text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                {videoCount} Videos
              </span>
            </div>

            {/* "Video Library" badge */}
            <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white/85 bg-white/10 border border-white/15 backdrop-blur-sm">
              Video Library
            </div>
          </div>

          {/* ── Content zone — same pastel gradient as CompactCard ── */}
          <div className="relative flex flex-1 flex-col overflow-hidden">
            {/* Pastel gradient fades out on hover */}
            <div
              className="absolute inset-0 transition-opacity duration-[500ms] ease-in-out group-hover:opacity-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, #c4d9f5 0%, #d4e6fb 55%, #deedfb 100%)",
              }}
            />

            {/* Text content */}
            <div className="relative z-10 flex flex-col h-full px-4 pt-3 pb-4">
              <h3 className="text-sm sm:text-base font-bold text-[#1a1a2e] leading-snug mb-1.5 line-clamp-2">
                Executive Video Library
              </h3>
              <p className="text-xs text-[#334155]/70 leading-relaxed line-clamp-3 flex-1">
                Perspectives on leadership, strategy, and culture — straight
                from our CEO.
              </p>
              <div className="mt-2 flex items-end justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 text-xs text-[#1a1a2e] font-semibold bg-[#4C96D7]/10 rounded-full px-3 py-1.5 border border-[#4C96D7]/20">
                  <span className="text-[#4C96D7]">{CalenderIcon}</span>
                  <span>Feb – May 2026</span>
                </div>
                {/* Spacer for the arrow button */}
                <div className="w-10 h-10 flex-shrink-0" />
              </div>
            </div>

            {/* White circle concave bite — same as CompactCard */}
            <div
              className="absolute rounded-full bg-white transition-transform duration-[650ms] ease-in-out group-hover:scale-[10] z-[5]"
              style={{ width: 96, height: 96, bottom: -28, right: -28 }}
            />
          </div>
        </div>

        {/* ── Arrow — glassmorphism pill, matches CompactCard ───────────────── */}
        <div
          className="absolute z-20 transition-transform duration-300 group-hover:scale-110"
          style={{ bottom: 8, right: 8 }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 10h12M12 6l4 4-4 4"
                stroke="#1761A0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CEOVideoLibraryCard;

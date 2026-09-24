"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function LiquidGlassButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative inline-flex"
      style={{
        filter: `drop-shadow(0 0 ${hovered ? "18px" : "6px"} rgba(56,189,248,${hovered ? "0.55" : "0.22"}))`,
        transition: "filter 0.5s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Overflow container — clips all liquid layers */}
      <div
        className="relative inline-flex overflow-hidden rounded-full"
        style={{
          background: "rgba(7, 16, 50, 0.52)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: `1px solid rgba(141,202,255,${hovered ? "0.55" : "0.28"})`,
          boxShadow: hovered
            ? "inset 0 1px 0 rgba(255,255,255,0.24), inset 0 -1px 0 rgba(56,189,248,0.22), inset 0 0 32px rgba(56,189,248,0.1)"
            : "inset 0 1px 0 rgba(255,255,255,0.13), inset 0 -1px 0 rgba(56,189,248,0.07)",
          transition: "border-color 0.45s ease, box-shadow 0.45s ease",
        }}
      >
        {/* ── Layer 1: animated liquid gradient ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(112deg, transparent 12%, rgba(56,189,248,0.22) 38%, rgba(76,150,215,0.3) 54%, rgba(141,202,255,0.18) 70%, transparent 88%)",
            animation:
              "lgb-liquid 4.2s cubic-bezier(0.445,0.05,0.55,0.95) infinite",
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* ── Layer 2: blob A — cyan, drifts left-center ── */}
        <div
          className="absolute"
          style={{
            width: "72%",
            height: "220%",
            top: "-60%",
            left: "-8%",
            background:
              "radial-gradient(ellipse, rgba(56,189,248,0.32) 0%, transparent 62%)",
            filter: "blur(20px)",
            animation: "lgb-blob-a 7.5s ease-in-out infinite",
            opacity: hovered ? 0.95 : 0.48,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* ── Layer 3: blob B — pale blue, drifts right ── */}
        <div
          className="absolute"
          style={{
            width: "58%",
            height: "190%",
            top: "-45%",
            right: "-4%",
            background:
              "radial-gradient(ellipse, rgba(141,202,255,0.28) 0%, transparent 58%)",
            filter: "blur(14px)",
            animation: "lgb-blob-b 5.8s ease-in-out infinite",
            opacity: hovered ? 0.85 : 0.38,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* ── Layer 4: shine sweep (runs on hover) ── */}
        <motion.div
          className="absolute inset-y-0 pointer-events-none"
          initial={{ x: "-110%" }}
          animate={hovered ? { x: "380%" } : { x: "-110%" }}
          transition={
            hovered
              ? { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
              : { duration: 0 }
          }
          style={{
            width: "38%",
            skewX: "-14deg",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), rgba(255,255,255,0.08), transparent)",
          }}
        />

        {/* ── Layer 5: top-edge glass highlight ── */}
        <div
          className="absolute top-0 pointer-events-none"
          style={{
            left: "12%",
            right: "12%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent)",
          }}
        />

        {/* ── Layer 6: bottom-edge blue rim ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: "20%",
            right: "20%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(56,189,248,0.45), transparent)",
            opacity: hovered ? 1 : 0.4,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 inline-flex items-center gap-3 px-7 py-3.5">
          <span
            className="text-sm font-semibold uppercase tracking-[0.13em] whitespace-nowrap"
            style={{
              color: "rgba(255,255,255,0.95)",
              textShadow: hovered
                ? "0 0 18px rgba(141,202,255,0.75)"
                : "0 0 8px rgba(141,202,255,0.25)",
              transition: "text-shadow 0.4s ease",
            }}
          >
            Read Announcement
          </span>
          <motion.div
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
          >
            <ArrowRight
              size={15}
              style={{
                color: hovered ? "#38bdf8" : "#8DCAFF",
                filter: hovered
                  ? "drop-shadow(0 0 5px rgba(56,189,248,0.9))"
                  : "none",
                transition: "color 0.35s ease, filter 0.35s ease",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

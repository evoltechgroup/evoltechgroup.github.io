"use client";

import React from "react";
import { motion } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────────────────────── */
export interface SpaceSwitchOption {
  label: string;
  value: string;
}

interface SpaceSwitchProps {
  options: SpaceSwitchOption[];
  activeValue: string;
  onChange: (value: string) => void;
}

/* ── Geometry ───────────────────────────────────────────────────────────────── */
const W = 292;
const H = 50;
const R = H / 2;
const CX = W / 2;
const STROKE = 2.2;
const PAD = STROKE / 2 + 2;

/*
 * Directional open half-capsule paths.
 *
 * LEFT / EvolTech Space:
 *   Starts at CENTER-TOP.
 *   Flows anti-clockwise around the left half.
 *   Ends at CENTER-BOTTOM.
 *
 * RIGHT / CEO Space:
 *   Starts at CENTER-BOTTOM.
 *   Flows anti-clockwise around the right half.
 *   Ends at CENTER-TOP.
 *
 * Both paths stay open at the centre divider.
 * No inner vertical border is drawn.
 */
function getOpenHalfCapsulePath(side: "left" | "right") {
  const top = PAD;
  const bottom = H - PAD;
  const radius = (bottom - top) / 2;
  const centerY = H / 2;

  if (side === "right") {
    const outerRight = W - PAD;

    return `
      M ${CX},${bottom}
      H ${outerRight - radius}
      A ${radius},${radius} 0 0 0 ${outerRight},${centerY}
      A ${radius},${radius} 0 0 0 ${outerRight - radius},${top}
      H ${CX}
    `;
  }

  const outerLeft = PAD;

  return `
    M ${CX},${top}
    H ${outerLeft + radius}
    A ${radius},${radius} 0 0 0 ${outerLeft},${centerY}
    A ${radius},${radius} 0 0 0 ${outerLeft + radius},${bottom}
    H ${CX}
  `;
}

/* Dim always-visible base outline */
const FULL_PATH = `
  M ${R},0
  L ${W - R},0
  A ${R},${R} 0 1,1 ${W - R},${H}
  L ${R},${H}
  A ${R},${R} 0 1,0 ${R},0
  Z
`;

/* ── Motion ─────────────────────────────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;
const TRANSITION = { duration: 0.56, ease: EASE } as const;

/* ── Colours ────────────────────────────────────────────────────────────────── */
const BLUE = "#4C96D7";
const BLUE_MID = "rgba(141,202,255,0.60)";
const BLUE_HALO = "rgba(76,150,215,0.28)";

/* ── Component ──────────────────────────────────────────────────────────────── */
export const SpaceSwitch: React.FC<SpaceSwitchProps> = ({
  options,
  activeValue,
  onChange,
}) => {
  const left = options[0];
  const right = options[1];
  if (!left || !right) return null;

  const isRight = activeValue === right.value;
  const activeSide = isRight ? "right" : "left";
  const activePath = getOpenHalfCapsulePath(activeSide);

  return (
    <div
      role="radiogroup"
      aria-label="Space selector"
      style={{
        position: "relative",
        display: "inline-flex",
        width: W,
        height: H,
        borderRadius: R,
        background:
          "linear-gradient(160deg, rgba(10,16,44,0.98) 0%, rgba(5,8,24,0.99) 100%)",
        boxShadow: [
          "0 8px 36px rgba(0,0,0,0.60)",
          "0 2px 8px rgba(0,0,0,0.35)",
          "inset 0 1px 0 rgba(141,202,255,0.06)",
          "inset 0 -1px 0 rgba(0,0,0,0.40)",
        ].join(", "),
        overflow: "visible",
      }}
    >
      {/* ── Top gloss sheen ─────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "40%",
          borderRadius: `${R}px ${R}px 50% 50% / 55% 55% 35% 35%`,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.04), transparent)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ── SVG animated border ─────────────────────────────────────────────── */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width={W}
        height={H}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 3,
          overflow: "visible",
        }}
      >
        <defs>
          <filter id="ss-halo" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="ss-corona" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

       
        {/*
          Active open half-border.
          The key forces a fresh pathLength draw on every side change.
          This avoids delayed morphing and keeps the flow directional.
        */}
        <motion.path
          key={`${activeSide}-halo`}
          d={activePath}
          fill="none"
          stroke={BLUE_HALO}
          strokeWidth={11}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ss-halo)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={TRANSITION}
        />

        <motion.path
          key={`${activeSide}-corona`}
          d={activePath}
          fill="none"
          stroke={BLUE_MID}
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ss-corona)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={TRANSITION}
        />

        <motion.path
          key={`${activeSide}-edge`}
          d={activePath}
          fill="none"
          stroke={BLUE}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={TRANSITION}
        />
      </svg>

      {/* ── Centre divider ──────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: "20%",
          height: "60%",
          width: 1,
          transform: "translateX(-0.5px)",
          background: "rgba(76,150,215,0.09)",
          zIndex: 4,
          pointerEvents: "none",
        }}
      />

      {/* ── Left button — EvolTech Space ────────────────────────────────────── */}
      <button
        type="button"
        role="radio"
        aria-checked={!isRight}
        onClick={() => onChange(left.value)}
        style={{
          flex: 1,
          position: "relative",
          zIndex: 5,
          fontSize: "0.775rem",
          fontWeight: 700,
          fontFamily: "inherit",
          letterSpacing: "0.015em",
          color: !isRight ? "#ffffff" : "rgba(141,202,255,0.30)",
          textShadow: !isRight
            ? "0 0 18px rgba(76,150,215,0.75), 0 0 36px rgba(76,150,215,0.40)"
            : "none",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          transition: "color 250ms ease, text-shadow 250ms ease",
          outline: "none",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        {left.label}
      </button>

      {/* ── Right button — CEO Space ─────────────────────────────────────────── */}
      <button
        type="button"
        role="radio"
        aria-checked={isRight}
        onClick={() => onChange(right.value)}
        style={{
          flex: 1,
          position: "relative",
          zIndex: 5,
          fontSize: "0.775rem",
          fontWeight: 700,
          fontFamily: "inherit",
          letterSpacing: "0.015em",
          color: isRight ? "#ffffff" : "rgba(141,202,255,0.30)",
          textShadow: isRight
            ? "0 0 18px rgba(76,150,215,0.75), 0 0 36px rgba(76,150,215,0.40)"
            : "none",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          transition: "color 250ms ease, text-shadow 250ms ease",
          outline: "none",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        {right.label}
      </button>
    </div>
  );
};

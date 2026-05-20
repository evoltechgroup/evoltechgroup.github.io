"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

/* ── Geometry ───────────────────────────────────────────────────────────────── */
const LOGO_W = 42;
const LOGO_H = 24;
const CAPSULE_H = 50;
const CAPSULE_W = 200;
const TRACK_PAD = 6;
const POS_L = TRACK_PAD;
const POS_R = CAPSULE_W - LOGO_W - TRACK_PAD;

/* ── EvolTech logo mark (3 strips) ──────────────────────────────────────────── */
function LogoMark() {
  return (
    <svg
      width={LOGO_W}
      height={LOGO_H}
      viewBox="0 0 56 32"
      fill="none"
      style={{ display: "block" }}
    >
      <path
        d="M0.800781 21.3512C0.800781 21.0631 0.924979 20.7891 1.14157 20.5992L22.9796 1.45457C23.626 0.887909 24.6388 1.34692 24.6388 2.20653V10.6488C24.6388 10.9369 24.5146 11.2109 24.2981 11.4008L2.45999 30.5454C1.81361 31.1121 0.800781 30.6531 0.800781 29.7935V21.3512Z"
        fill="#8DCAFF"
      />
      <path
        d="M16.0703 21.3512C16.0703 21.0631 16.1945 20.7891 16.4111 20.5992L38.2492 1.45457C38.8955 0.887909 39.9084 1.34692 39.9084 2.20653V10.6488C39.9084 10.9369 39.7842 11.2109 39.5676 11.4008L17.7295 30.5454C17.0831 31.1121 16.0703 30.6531 16.0703 29.7935V21.3512Z"
        fill="#4C96D7"
      />
      <path
        d="M31.3301 21.3512C31.3301 21.0631 31.4543 20.7891 31.6709 20.5992L53.5089 1.45457C54.1553 0.887909 55.1681 1.34692 55.1681 2.20653V10.6488C55.1681 10.9369 55.0439 11.2109 54.8274 11.4008L32.9893 30.5454C32.3429 31.1121 31.3301 30.6531 31.3301 29.7935V21.3512Z"
        fill="#1761A0"
      />
    </svg>
  );
}

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

/* ── SpaceSwitch ────────────────────────────────────────────────────────────── */
export const SpaceSwitch: React.FC<SpaceSwitchProps> = ({
  options,
  activeValue,
  onChange,
}) => {
  const left = options[0];
  const right = options[1];
  const isRight = activeValue === right?.value;
  const [hovered, setHovered] = useState(false);

  /* Spring: 0 = left (options[0] active), 1 = right (options[1] active) */
  const progress = useSpring(isRight ? 1 : 0, {
    stiffness: 340,
    damping: 28,
    mass: 0.9,
    restDelta: 0.001,
  });

  useEffect(() => {
    progress.set(isRight ? 1 : 0);
  }, [isRight, progress]);

  /* Logo slides only — no rotation */
  const logoX = useTransform(progress, [0, 1], [POS_L, POS_R]);

  /* Sliding shadow under logo */
  const shadowX = useTransform(logoX, (v) => v + LOGO_W / 2 - 20);
  const shadowOp = useTransform(
    progress,
    [0, 0.4, 0.6, 1],
    [0.22, 0.08, 0.08, 0.22],
  );

  /* Glow tracks logo */
  const glowX = useTransform(logoX, (v) => v - (68 - LOGO_W) / 2);
  /* White active-pill slides with logo */
  const pillX = useTransform(logoX, (v) => v - 5);

  /*
   * Text visibility:
   *   left text  = options[0].label → shown when CEO (right) is active → progress near 1
   *   right text = options[1].label → shown when EvolTech (left) is active → progress near 0
   */
  const leftTextOp = useTransform(progress, [0.5, 0.8], [0, 1]);
  const rightTextOp = useTransform(progress, [0.2, 0.5], [1, 0]);

  /* Slight horizontal drift on text for polish */
  const leftTextX = useTransform(progress, [0.5, 0.8], [-5, 0]);
  const rightTextX = useTransform(progress, [0.2, 0.5], [0, 5]);

  if (!left || !right) return null;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isRight}
      onClick={() => onChange(isRight ? left.value : right.value)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "inline-block",
        width: CAPSULE_W,
        height: CAPSULE_H,
        borderRadius: CAPSULE_H / 2,
        background: "#ffffff",
        boxShadow: [
          "inset 0 2px 6px rgba(0,0,0,0.06)",
          "inset 0 -1px 3px rgba(255,255,255,0.95)",
          "0 3px 12px rgba(0,0,0,0.06)",
          "0 1px 3px rgba(0,0,0,0.04)",
          hovered
            ? [
                "0 0 0 1.5px #4C96D7",
                "0 0 18px rgba(141,202,255,0.75)",
                "0 0 36px rgba(76,150,215,0.55)",
                "0 0 60px rgba(76,150,215,0.30)",
              ].join(", ")
            : "0 0 0 1px rgba(0,0,0,0.07)",
        ].join(", "),
        overflow: "hidden",
        cursor: "pointer",
        outline: "none",
        userSelect: "none",
        padding: 0,
        border: "none",
        transition: "box-shadow 200ms ease",
      }}
    >
      {/* Inner track groove */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 6,
          bottom: 6,
          left: 5,
          right: 5,
          borderRadius: "9999px",
          background: "rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "inset 0 1px 4px rgba(0,0,0,0.09)",
        }}
      />

      {/* Top gloss sheen */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "42%",
          borderRadius: `${CAPSULE_H / 2}px ${CAPSULE_H / 2}px 40% 40% / 50% 50% 30% 30%`,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.72), rgba(255,255,255,0))",
          pointerEvents: "none",
        }}
      />

      {/* Ambient glow (tracks logo) */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          x: glowX,
          y: "-50%",
          width: 68,
          height: 44,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(76,150,215,0.2) 0%, rgba(23,97,160,0.07) 55%, transparent 75%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      {/* Sliding white active-pill (shows which side is active) */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          top: 5,
          left: 0,
          x: pillX,
          width: LOGO_W + 10,
          height: CAPSULE_H - 10,
          borderRadius: (CAPSULE_H - 10) / 2,
          background: "transparent",
          // boxShadow:
          //   "0 2px 10px rgba(23,97,160,0.14), 0 1px 4px rgba(0,0,0,0.10)",
          pointerEvents: "none",
        }}
      />

      {/* Shadow (tracks logo) */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 4,
          left: 0,
          x: shadowX,
          opacity: shadowOp,
          width: 40,
          height: 5,
          borderRadius: "50%",
          background: "rgba(23,97,160,0.3)",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />

      {/*
       * Left text — options[0].label ("EvolTech Space")
       * Appears on left side when CEO Space (right) is active
       */}
      <motion.span
        aria-hidden
        style={{
          position: "absolute",
          /* spans the left half (logo rests on right when CEO active) */
          left: TRACK_PAD,
          right: LOGO_W + TRACK_PAD + 4,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          x: leftTextX,
          opacity: leftTextOp,
          fontSize: "0.8125rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "#1761A0",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {left.label}
      </motion.span>

      {/*
       * Right text — options[1].label ("CEO Space")
       * Appears on right side when EvolTech Space (left) is active
       */}
      <motion.span
        aria-hidden
        style={{
          position: "absolute",
          /* spans the right half (logo rests on left when EvolTech active) */
          left: LOGO_W + TRACK_PAD + 4,
          right: TRACK_PAD,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          x: rightTextX,
          opacity: rightTextOp,
          fontSize: "0.8125rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "#1761A0",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {right.label}
      </motion.span>

      {/* Sliding logo mark */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          top: (CAPSULE_H - LOGO_H) / 2,
          left: 0,
          x: logoX,
          width: LOGO_W,
          height: LOGO_H,
          pointerEvents: "none",
          willChange: "transform",
          filter: "drop-shadow(0 1px 6px rgba(23,97,160,0.35))",
        }}
      >
        <LogoMark />
      </motion.div>
    </button>
  );
};

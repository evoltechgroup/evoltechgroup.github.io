"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRightCircle } from "lucide-react";
import Link from "next/link";

export interface EventCTAProps {
  text: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  showDefaultIcon?: boolean;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  external?: boolean;
}

/**
 * EventCTA - Call-to-action button component
 * Supports both links and click handlers with animations
 */
const EventCTA: React.FC<EventCTAProps> = ({
  text,
  href,
  onClick,
  icon,
  showDefaultIcon = true,
  className = "bg-[#F47937] text-white hover:bg-[#f86521]",
  containerClassName = "flex justify-center mt-4 mb-10",
  animate = true,
  external = false,
}) => {
  const buttonContent = (
    <span
      className={`inline-flex items-center justify-center gap-2 text-base sm:text-lg font-medium px-6 py-2 rounded-full transition cursor-pointer ${className}`}
    >
      {text}
      {icon
        ? icon
        : showDefaultIcon && (
            <ChevronRightCircle size={20} strokeWidth={2} color="#FFDAC6" />
          )}
    </span>
  );

  const MotionWrapper = ({ children }: { children: React.ReactNode }) =>
    animate ? (
      <motion.div
        className={containerClassName}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    ) : (
      <div className={containerClassName}>{children}</div>
    );

  if (href) {
    return (
      <MotionWrapper>
        <Link href={href} target={external ? "_blank" : undefined}>
          {buttonContent}
        </Link>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper>
      <button onClick={onClick}>{buttonContent}</button>
    </MotionWrapper>
  );
};

export default EventCTA;

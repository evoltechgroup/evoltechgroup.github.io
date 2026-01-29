"use client";
import React from "react";
import { motion } from "framer-motion";

interface TextBlock {
  text: string;
  className?: string;
  highlight?: boolean;
}

interface EventDescriptionProps {
  title?: string;
  subtitle?: string;
  blocks: TextBlock[];
  titleClassName?: string;
  subtitleClassName?: string;
  defaultTextClassName?: string;
  highlightClassName?: string;
  containerClassName?: string;
  animate?: boolean;
}

/**
 * EventDescription - Text content section with flexible formatting
 * Supports multiple text blocks with custom styling and highlights
 */
const EventDescription: React.FC<EventDescriptionProps> = ({
  title,
  subtitle,
  blocks,
  titleClassName = "text-xl sm:text-2xl font-semibold text-gray-900",
  subtitleClassName = "text-[#000000] font-medium text-lg leading-relaxed",
  defaultTextClassName = "text-[#000000] text-lg leading-relaxed font-medium",
  highlightClassName = "text-2xl font-semibold text-[#F47937]",
  containerClassName = "p-4 text-center space-y-6",
  animate = true,
}) => {
  return (
    <motion.div
      className={containerClassName}
      initial={animate ? { opacity: 0 } : {}}
      animate={animate ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {title && <h2 className={titleClassName}>{title}</h2>}
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}

      <div className="space-y-6 ">
        {blocks.map((block, index) => (
          <p
            key={index}
            className={
              block.className ||
              (block.highlight ? highlightClassName : defaultTextClassName)
            }
          >
            {block.text}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default EventDescription;

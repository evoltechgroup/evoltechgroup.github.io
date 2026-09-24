"use client";
import React from "react";
import { motion } from "framer-motion";

export interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
  subcaption?: string;
}

interface EventImageGridProps {
  images: ImageItem[];
  columns?: 2 | 3 | 4;
  title?: string;
  titleClassName?: string;
  imageClassName?: string;
  captionClassName?: string;
  subcaptionClassName?: string;
  containerClassName?: string;
  showDivider?: boolean;
  animate?: boolean;
}

/**
 * EventImageGrid - Flexible grid layout for displaying event images
 * Supports 2, 3, or 4 column layouts with captions
 */
const EventImageGrid: React.FC<EventImageGridProps> = ({
  images,
  columns = 3,
  title,
  titleClassName = "text-lg sm:text-2xl text-black font-semibold",
  imageClassName = "w-[170px] h-[110px] rounded-3xl object-cover shadow-md",
  captionClassName = "font-semibold text-sm text-black mt-2",
  subcaptionClassName = "text-sm font-medium text-[#666666]",
  containerClassName = "",
  showDivider = true,
  animate = true,
}) => {
  const gridColsClass = {
    2: "grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={` p-4 px-6 bg-[#EDF3FE] ${containerClassName}`}>
      {title && (
        <div className="flex items-center gap-2 mb-4 mt-4">
          <h3 className={titleClassName}>{title}</h3>
          {showDivider && <div className="flex-1 h-px bg-[#DDDDDD]"></div>}
        </div>
      )}

      <div
        className={`flex flex-wrap justify-center gap-4 lg:gap-8   ${gridColsClass}`}
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="text-start rounded-2xl"
            initial={animate ? { opacity: 0, scale: 0.9 } : {}}
            animate={animate ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.src} alt={item.alt} className={imageClassName} />
            {item.caption && <p className={captionClassName}>{item.caption}</p>}
            {item.subcaption && (
              <p className={subcaptionClassName}>{item.subcaption}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventImageGrid;

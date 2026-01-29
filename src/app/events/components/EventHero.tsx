"use client";
import React from "react";
import { motion } from "framer-motion";

export interface EventHeroProps {
  backgroundImage: string;
  logo?: string;
  title: string;
  subtitle?: string;
  date: string;
  location?: string;
  grayscale?: boolean;
  bgSize?: string;
  bgPosition?: string;
  bgPositionMobile?: string;
  overlayOpacity?: number;
  className?: string;
  containerHeight?: string;
  logoHeight?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  dateClassName?: string;
  locationClassName?: string;
}

/**
 * EventHero - Banner section with background image and overlay text
 * Displays event branding, title, date, and location
 */
const EventHero: React.FC<EventHeroProps> = ({
  backgroundImage,
  logo,
  title,
  subtitle,
  date,
  location,
  grayscale = false,
  overlayOpacity = 0,
  bgSize = "cover",
  bgPosition = "center",
  bgPositionMobile = "left center",
  className = "",
  containerHeight = "h-64 sm:h-96",
  logoHeight = "h-14 lg:h-20",
  titleClassName = "text-xl sm:text-4xl text-black font-bold",
  subtitleClassName = "text-base sm:text-lg font-medium text-gray-700",
  dateClassName = "text-base sm:text-xl font-semibold text-[#054D88]",
  locationClassName = "text-base sm:text-xl font-semibold text-[#054D88]",
}) => {
  return (
    <div
      className={`relative ${containerHeight} w-full flex flex-col justify-center items-center text-center  text-white rounded-lg ${className}`}
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 rounded-2xl bg-center md:bg-[position:var(--bg-position)] ${grayscale ? "filter grayscale" : ""}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: bgSize,
          '--bg-position': bgPosition,
          backgroundRepeat: "no-repeat",
        } as React.CSSProperties}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#FFFFFF] "
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 space-y-2 sm:space-y-4 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* {logo && (
          <img
            src={logo}
            alt="Event Logo"
            className={`${logoHeight} mx-auto`}
          />
        )} */}

        {/* <div className="space-y-2">
          <h2 className={titleClassName}>{title}</h2>
          {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
        </div> */}

        {/* <div className="space-y-1">
          <p className={dateClassName}>{date}</p>
          {location && <p className={locationClassName}>{location}</p>}
        </div> */}
      </motion.div>
    </div>
  );
};

export default EventHero;

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";

interface EventCardProps {
  logo?: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  buttonText: string;
  details?: string;
  autoOpen?: boolean;
  onToggle?: (open: boolean) => void;
  onOpen: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  logo,
  title,
  date,
  time,
  location,
  buttonText,
  details,
  autoOpen = false,
  onToggle,
  onOpen,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (autoOpen) setOpen(true);
  }, [autoOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    onToggle?.(open);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, onToggle]);

  return (
    <>
      {/* Main Event Card */}
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[300px] md:h-[300px] p-6 md:p-10 gap-6 shadow-md bg-gradient-to-r from-[#F7E6DD] to-[#FFFFFF] ">
        {/* Logo + Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full">
          {logo && (
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="event logo"
                className="h-20 sm:h-24 md:h-28 object-contain"
              />
            </div>
          )}
          <div className="text-center md:text-left">
            <Button className="bg-[#FFE0CF] text-black p-2 px-4 rounded-full font-medium text-xs sm:text-sm md:text-base">
              The Innovation Spotlight
            </Button>
            <h2 className="text-xl sm:text-2xl md:text-[32px] font-bold text-[#000000] mt-2">
              {title}
            </h2>
            <p className="text-[#F47937] text-lg sm:text-xl md:text-2xl font-semibold">
              {date}
              {time && `, ${time}`}
            </p>
            {location && (
              <p className="text-[#212121] text-base sm:text-lg md:text-2xl font-semibold">
                {location}
              </p>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="mt-4 md:mt-0">
          <button
           onClick={onOpen}
            className="rounded-full px-4 sm:px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm sm:text-base"
          >
            {buttonText}
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-lg max-h-[80vh] overflow-y-auto p-6 z-10"
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>

              {/* Event Info */}
              <div className="flex items-center gap-4 mb-4">
                {logo && <img src={logo} alt="event logo" className="h-12 sm:h-16" />}
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{title}</h3>
              </div>

              <p className="text-red-500 font-medium mb-1 text-sm sm:text-base">
                {date}
                {time && `, ${time}`}
              </p>
              {location && (
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{location}</p>
              )}
              <p className="text-gray-700 text-sm sm:text-base">{details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventCard;

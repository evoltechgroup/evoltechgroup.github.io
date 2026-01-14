"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import { ChevronRightCircle } from "lucide-react";
import { label } from "framer-motion/client";

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
  label?: string;
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
  label,
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
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center min-h-[300px] h-[350px] lg:h-[300px] p-6 md:p-10 gap-6 shadow-md bg-gradient-to-r from-[#F7E6DD] to-[#FFFFFF] ">
        <div className="flex flex-col md:flex-row items-center md:items-center  gap-6 ">
          {logo && (
            <div className="flex justify-center">
              <img
                src={logo}
                alt="event logo"
                className="h-16 w-24 sm:h-20 sm:w-28 md:h-32 md:w-60 object-contain rounded-2xl"
              />
            </div>
          )}

          <div className="text-center md:text-left flex-1">
            {label && (
              <span className="inline-block bg-[#FFE0CF] text-black px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-2">
                {label}
              </span>
            )}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
              {title}
            </h2>
            <p className="text-[#F47937] text-base sm:text-lg md:text-2xl font-semibold">
              {date}
              {time && `, ${time}`}
            </p>
            {location && (
              <p className="text-gray-800 text-sm sm:text-base md:text-2xl font-semibold">
                {location}
              </p>
            )}
          </div>

          <div className="flex justify-center md:justify-end w-full md:w-auto lg:pl-16">
            <button
              onClick={onOpen}
              className="flex items-center gap-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium text-sm sm:text-base cursor-pointer">
              {buttonText}
              <ChevronRightCircle size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-lg max-h-[80vh] overflow-y-auto p-6 z-10">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl">
                ✕
              </button>

              <div className="flex items-center gap-4 mb-4">
                {logo && (
                  <img src={logo} alt="event logo" className="h-12 sm:h-16 " />
                )}
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {title}
                </h3>
              </div>

              <p className="text-red-500 font-medium mb-1 text-sm sm:text-base">
                {date}
                {time && `, ${time}`}
              </p>
              {location && (
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {location}
                </p>
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

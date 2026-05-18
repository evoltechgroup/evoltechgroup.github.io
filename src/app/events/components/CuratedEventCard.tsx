"use client";
import React from "react";
import Link from "next/link";
import {
  formatEventDateRange,
  type EventCategory,
  type EventDetail,
} from "@/data/eventDetailsConfig";
import { CalenderIcon } from "@/assets/icons/custom-icons";

interface CuratedEventCardProps {
  event: EventDetail;
  category?: EventCategory;
}

const CuratedEventCard: React.FC<CuratedEventCardProps> = ({
  event,
  category,
}) => {
  const badgeConfig =
    event.status === "ongoing"
      ? {
          label: "Ongoing",
          className: "bg-[#16A34A] text-white",
        }
      : event.status === "upcoming"
        ? {
            label: "Upcoming",
            className: "bg-[#FE7F00] text-white",
          }
        : null;
  const eventHref = category
    ? `/events/${event.slug}?category=${category}`
    : `/events/${event.slug}`;

  return (
    <Link href={eventHref} className="block h-full">
      <div className="group flex h-[28rem] flex-col overflow-hidden rounded-3xl border border-[#E4EAF4] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]  hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] cursor-pointer">
        <div className="relative w-full h-48 sm:h-52 overflow-hidden">
          <img
            src={event.image.src}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {badgeConfig && (
            <span
              className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${badgeConfig.className}`}
            >
              {badgeConfig.label}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col bg-white p-5">
          <h3 className="text-base sm:text-lg font-bold text-[#1a1a2e] leading-snug mb-2">
            {event.title}
          </h3>
          <p className="text-sm text-gray-500 font-medium leading-relaxed flex-1">
            {event.description}
          </p>
        </div>

        <div className="mt-auto bg-white px-5 pb-5 pt-2">
          <div className="flex items-center gap-2 text-sm text-[#444444] bg-[#F3F5F7] rounded-sm font-medium w-max px-3 py-1">
            <span className="text-[#444444]">{CalenderIcon}</span>
            <span>
              {event.dateLabel ??
                formatEventDateRange(event.fromDate, event.toDate)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CuratedEventCard;

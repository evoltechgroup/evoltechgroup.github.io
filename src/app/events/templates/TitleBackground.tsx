"use client";
import { eclipseEffect } from "@/assets/effects";
import {
  Bg126,
  Bg188,
  Bg189,
  Bg190,
  Bg191,
  Bg193,
  EventsBg,
  EvoltechGroupV2,
} from "@/assets/images/Events";
import { formatEventDateRange } from "@/data/eventDetailsConfig";
import ThemeButton from "@/components/Button/ThemeButton";
import { ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface TitleBackgroundProps {
  event: {
    title: string;
    fromDate: string;
    toDate: string;
    tags?: { label: string; bgColor: string }[];
    city?: string;
    state?: string;
    venue?: string;
  };
}

const TitleBackground: React.FC<TitleBackgroundProps> = ({ event }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const [backHref, setBackHref] = useState("/events");

  useEffect(() => {
    if (category === "conference" || category === "internal") {
      setBackHref(`/events?category=${category}`);
      return;
    }

    setBackHref("/events");
  }, [category]);

  const EventBg = category === "internal" ? EvoltechGroupV2 : EventsBg;
  return (
    <div className="relative flex w-full flex-col items-center bg-[#ffff] py-10 h-[60vh] lg:h-[75vh] xl:h-[75vh]">
      <div className="absolute inset-0 z-0 w-full h-full flex bg-black overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0 w-full h-full flex bg-black overflow-hidden pointer-events-none">
          <div className="absolute z-8 w-full h-full">{eclipseEffect}</div>

          <div className="absolute z-7 w-full h-full">
            <img
              src={Bg191.src}
              alt="Bg191"
              className="md:absolute w-full h-full object-cover "
            />
          </div>
          <div className="absolute z-6 w-full h-full">
            <img
              src={Bg190.src}
              alt="Bg190"
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-5 w-full h-full">
            <img
              src={Bg189.src}
              alt="Bg189"
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-4 w-full h-full">
            <img
              src={Bg188.src}
              alt="Bg188"
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-3 w-full h-full">
            <img
              src={EventBg.src}
              alt="EventBg"
              className="md:absolute w-full h-full lg:h-auto lg:-bottom-34 z-3 object-cover mix-blend-lighten lg:object-fill"
            />
          </div>
          <div className="absolute z-2 w-full h-full">
            <img
              src={Bg193.src}
              alt="Bg193"
              className="md:absolute w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-1 w-full h-full">
            <img
              src={Bg126.src}
              alt="Bg126"
              className="md:absolute w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0 w-full">
          <div className="col-span-4 col-start-1 flex w-full flex-col items-start gap-4 text-left lg:col-span-10 lg:col-start-2">
            <ThemeButton
              text="Back to All Events"
              onClick={() => router.push(backHref)}
              startIcon={
                <span className="">
                  <ChevronLeft />
                </span>
              }
              extraStyles="!bg-transparent border border-[#FFFFFF4D] !text-gray-400 hover:!bg-[#FFFFFF1A] hover:!text-white hover:brightness-100 !pl-2"
            />
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-lg text-gray-200 bg-[#FE7F00] px-2 py-1 rounded-md font-medium">
                {event.dateLabel ??
                  formatEventDateRange(event.fromDate, event.toDate)}
              </span>
              {event.city && (
                <span className="text-lg text-gray-200  bg-[#FE7F00] px-2 py-1 rounded-md font-medium">
                  {event.city}, {event.state}
                </span>
              )}
              {event.venue && (
                <span className="text-lg text-gray-200  bg-[#FE7F00] px-2 py-1 rounded-md font-medium">
                  {event.venue}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBackground;

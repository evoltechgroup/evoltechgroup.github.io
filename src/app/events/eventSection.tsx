"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import EventCard from "./EventCard";
import Modal from "./Model";
import DynamicEventModal from "./components/DynamicEventModal";

import { useState, useRef } from "react";
import { eventsData } from "./events";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

const EventSection = () => {
  const [activeEvent, setActiveEvent] = useState<any>(null);
  const swiperRef = useRef<any>(null);

  const currentDate = new Date();
  const events = eventsData.filter((event) => {
    if (!event.expired) return true;
    const expiredDate = new Date(event.expired);
    return currentDate <= expiredDate;
  });

  const handleOpen = (event: any) => {
    setActiveEvent(event);
    swiperRef.current?.autoplay?.stop();
  };

  const handleClose = () => {
    setActiveEvent(null);
    swiperRef.current?.autoplay?.start();
  };

  return (
    <div className="relative w-full mx-auto">
      {events.length > 0 ? (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={events.length > 1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}>
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <EventCard {...event} onOpen={() => handleOpen(event)} />
            </SwiperSlide>
          ))}

          {events.length > 1 && (
            <>
              <button className="custom-prev absolute left-4 cursor-pointer lg:left-10 top-1/2 -translate-y-1/2 z-10 rounded-full transition-all">
                <ChevronLeftCircle
                  size={36}
                  strokeWidth={1}
                  className="text-[#757070]"
                />
              </button>
              <button className="custom-next absolute right-4 cursor-pointer lg:right-10 top-1/2 -translate-y-1/2 z-10 rounded-full transition-all">
                <ChevronRightCircle
                  size={36}
                  strokeWidth={1}
                  className="text-[#757070]"
                />
              </button>
            </>
          )}
        </Swiper>
      ) : (
        <div className="text-center py-10 text-gray-500">
          No upcoming events at this time.
        </div>
      )}

      <Modal open={!!activeEvent} onClose={handleClose}>
        {activeEvent && (
          <DynamicEventModal event={activeEvent} onClose={handleClose} />
        )}
      </Modal>
    </div>
  );
};

export default EventSection;

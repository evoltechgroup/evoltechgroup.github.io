"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
import EventCard from "./EventCard";
import Modal from "./Model";
import SiiaPopup from "./Popup/Siia";

import { useState, useRef } from "react";
import { eventsData } from "./events";
import GrowAtlPopup from "./Popup/Atea";

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
    if (event.link) {
      window.open(event.link, "_blank");
      return;
    }
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
              <div className="custom-prev swiper-button-prev !text-[#F47937] !left-4 lg:!left-10 "></div>
              <div className="custom-next swiper-button-next !text-[#F47937] !right-4 lg:!right-10 "></div>
            </>
          )}
        </Swiper>
      ) : (
        <div className="text-center py-10 text-gray-500">
          No upcoming events at this time.
        </div>
      )}

      <Modal open={!!activeEvent} onClose={handleClose}>
        {activeEvent?.id === 2 && (
          <SiiaPopup event={activeEvent} onClose={handleClose} />
        )}
      </Modal>
    </div>
  );
};

export default EventSection;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import EventCard from "./events";
import Modal from "./Model";
import GrowAtlPopup from "./Popup/Atea";
import SiiaPopup from "./Popup/Siia";

import Atea from "@/assets/images/Events/atea/Atea.png";
import Innov from "@/assets/images/Events/siia/Innov.png";
import { useState, useRef } from "react";

const EventSection = () => {
  const [activeEvent, setActiveEvent] = useState<any>(null);
  const swiperRef = useRef<any>(null);

  const events = [
    {
      id: 1,
      logo: Atea.src,
      title: "Join EvolTech at GrowATL 2025",
      date: "September 06",
      time: "10am - 2:00pm",
      location: "Johns Creek, Georgia",
      buttonText: "Discover more",
      details: "GrowATL brings leaders together..."
    },
    {
      id: 2,
      logo: Innov.src,
      title: "Join EvolTech at SIIA 2025",
      date: "October 12-14 | PHX",
      buttonText: "Discover more",
      details: "EvolTech will showcase innovations..."
    }
  ];

  const handleOpen = (event: any) => {
    setActiveEvent(event);
    swiperRef.current?.autoplay?.stop(); // stop slide
  };

  const handleClose = () => {
    setActiveEvent(null);
    swiperRef.current?.autoplay?.start(); // resume slide
  };

  return (
    <div className="relative w-full mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard {...event} onOpen={() => handleOpen(event)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal open={!!activeEvent} onClose={handleClose}>
        {activeEvent?.id === 1 && <GrowAtlPopup />} {/* no event prop */}
        {activeEvent?.id === 2 && <SiiaPopup event={activeEvent} />}
      </Modal>
    </div>
  );
};

export default EventSection;

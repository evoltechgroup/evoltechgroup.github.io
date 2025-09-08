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
      title: "EvolTech at GrowATL 2025",
      date: "September 06",
      time: "10am - 2:00pm",
      location: "Johns Creek, Georgia",
      buttonText: "Discover more",
      label: " Innovations, Insights and Impact",
    },
    {
      id: 2,
      logo: Innov.src,
      title: "Join EvolTech at SIIA 2025",
      date: "October 12-14 | PHX",
      buttonText: "Discover more",
      label: "The Innovation Spotlight",
    },
  ];

  const handleOpen = (event: any) => {
     if (event.id === 1) {
       window.location.href = "/contact?source=ATEA2025#contact-form"; //remove this line to enable popup
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
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard {...event} onOpen={() => handleOpen(event)} />
          </SwiperSlide>
        ))}

        {/* Custom navigation arrows */}
        <div className="custom-prev swiper-button-prev !text-[#F47937] !left-4 lg:!left-10 "></div>
        <div className="custom-next swiper-button-next !text-[#F47937] !right-4 lg:!right-10 "></div>
      </Swiper>

      <Modal open={!!activeEvent} onClose={handleClose}>
        {/* {activeEvent?.id === 1 && <GrowAtlPopup onClose={handleClose} />} */}
        {activeEvent?.id === 2 && <SiiaPopup event={activeEvent} onClose={handleClose} />}
      </Modal>
    </div>
  );
};

export default EventSection;

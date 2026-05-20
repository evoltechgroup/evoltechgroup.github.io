"use client";
import React from "react";
import { EventDetail } from "@/data/eventDetailsConfig";
import TitleBackground from "./TitleBackground";
import EventPhotoAlbum from "../components/EventPhotoAlbum";
import ThemeButton from "@/components/Button/ThemeButton";
import { RoundChevronRight } from "@/assets/icons/custom-icons";
import { useRouter } from "next/navigation";

interface EventTemplate3Props {
  event: EventDetail;
}

const EventTemplate3: React.FC<EventTemplate3Props> = ({ event }) => {
  const router = useRouter();
  return (
    <div className="w-full">
      <TitleBackground event={event} />
      <div
        className="w-full bg-white py-16"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(217, 229, 251, 0.5) 0%, #ffff 40%)",
        }}
      >
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
          <div className="col-span-4 col-start-1 lg:col-span-10 lg:col-start-2">
            {event.detailContent.overview && (
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] border-l-4 border-[#4A90E2] pl-4 mb-6 bg-white shadow-sm py-2">
                  {event.detailContent.overview}
                </h2>
              </div>
            )}

            {event.detailContent.sections?.map((section, idx) => (
              <div key={idx} className="mb-10">
                {section.title && (
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">
                    {section.title}
                  </h3>
                )}
                <p
                  className="text-base text-gray-700 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: section.content || "" }}
                />
              </div>
            ))}

            {(event.detailContent.images?.length || event.detailContent.videos?.length) ? (
                <div className="mt-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8 text-center">
                    Here are few photos from the event!
                  </h2>
                  <EventPhotoAlbum
                    images={event.detailContent.images ?? []}
                    eventTitle={event.title}
                    videos={event.detailContent.videos}
                  />
                </div>
              ) : null}

            {event.detailContent.ctaText && (
              <div className="w-full flex justify-center items-center py-10">
                <ThemeButton
                  text={event.detailContent.ctaText ?? "Contact Us"}
                  onClick={() => {
                    const ctaLink = event.detailContent.ctaLink;

                    if (event.status === "past" || !ctaLink) {
                      router.push(
                        `/contact?source=${encodeURIComponent(event.title)}#contact-form`,
                      );
                      return;
                    }

                    window.open(
                      ctaLink,
                      ctaLink.startsWith("http") ? "_blank" : "_self",
                    );
                  }}
                  endIcon={<span>{RoundChevronRight}</span>}
                  extraStyles="!py-2"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTemplate3;

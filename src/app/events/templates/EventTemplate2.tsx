"use client";
import React from "react";
import Image from "next/image";
import { EventDetail } from "@/data/eventDetailsConfig";
import TitleBackground from "./TitleBackground";
import ThemeButton from "@/components/Button/ThemeButton";
import { RoundChevronRight } from "@/assets/icons/custom-icons";
import EventPhotoAlbum from "../components/EventPhotoAlbum";
import { useRouter } from "next/navigation";

interface EventTemplate2Props {
  event: EventDetail;
}

const EventTemplate2: React.FC<EventTemplate2Props> = ({ event }) => {
  const router = useRouter();
  return (
    <div className="w-full bg-white">
      <TitleBackground
        event={event}
        showBgImage={event.showTitleBgImage ?? true}
      />
      <div
        className="w-full bg-white py-1"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(217, 229, 251, 0.5) 0%, #ffff 40%)",
        }}
      >
        {event.bannerImage && (
          <div className="w-full pt-8 pb-2">
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
              <div className="col-span-4 col-start-1 lg:col-span-10 lg:col-start-2">
                <div className="relative h-[160px] sm:h-[280px] w-full overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={event.bannerImage}
                    alt={event.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full py-6 sm:py-10">
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
            <div className="col-span-10 col-start-1 lg:col-span-10 lg:col-start-2">
              {event.detailContent.overview && (
                <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border-l-4 border-[#4A90E2] mb-8 sm:mb-10">
                  <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
                    {event.detailContent.overview}
                  </p>
                </div>
              )}

              {event.detailContent.sections?.map((section, idx) => (
                <div key={idx} className="mb-8">
                  {section.title && (
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
                      {section.title}
                    </h2>
                  )}
                  {section.content && (
                    <p
                      className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  )}
                </div>
              ))}

              {event.detailContent.images?.length ||
              event.detailContent.videos?.length ? (
                <div className="mt-12">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-4 sm:mb-6 text-center">
                    {event.category === "conference"
                      ? "Conference Highlights"
                      : "Relive the Moments — A Few Highlights from the Event"}
                  </h2>
                  <EventPhotoAlbum
                    images={event.detailContent.images ?? []}
                    eventTitle={event.title}
                    videos={event.detailContent.videos}
                  />
                </div>
              ) : null}

              {event.detailContent.ctaText && (
                <div className="flex w-full items-center justify-center py-10">
                  <ThemeButton
                    text={event.detailContent.ctaText}
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
    </div>
  );
};

export default EventTemplate2;

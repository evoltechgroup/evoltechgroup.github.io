"use client";
import React from "react";
import Image from "next/image";
import { EventDetail } from "@/data/eventDetailsConfig";
import ThemeButton from "@/components/Button/ThemeButton";
import { RoundChevronRight } from "@/assets/icons/custom-icons";
import TitleBackground from "./TitleBackground";
import EventPhotoAlbum from "../components/EventPhotoAlbum";
import { useRouter } from "next/navigation";

interface EventTemplate1Props {
  event: EventDetail;
}

const EventTemplate1: React.FC<EventTemplate1Props> = ({ event }) => {
  const router = useRouter();
  const hasBanner = Boolean(event.bannerImage);

  return (
    <div className="w-full bg-white">
      <TitleBackground
        event={event}
        showBgImage={event.showTitleBgImage ?? true}
      />
      <div
        className="w-full bg-white py-16"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(217, 229, 251, 0.5) 0%, #ffff 40%)",
        }}
      >
        {hasBanner && (
          <div className="w-full pb-5">
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
              <div className="col-span-4 col-start-1 lg:col-span-10 lg:col-start-2">
                <div className="relative h-[150px] sm:h-[270px] w-full overflow-hidden shadow-lg">
                  <Image
                    src={event.bannerImage!}
                    alt={event.title}
                    fill
                    className="sm:object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full md:py-10">
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
            <div className="col-span-4 col-start-1 lg:col-span-10 lg:col-start-2">
              {event.detailContent.overview && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">
                    Overview
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed ">
                    {event.detailContent.overview}
                  </p>
                </div>
              )}

              {event.detailContent.sections?.map((section, idx) => (
                <div
                  key={idx}
                  className={`mb-8 border-l-4  ${
                    section.leftHighlight
                      ? "border-[#4A90E2] bg-white shadow-sm w-fit p-2 pl-4"
                      : "border-transparent"
                  }`}
                >
                  {section.title && (
                    <h3
                      className={`text-xl !font-semibold text-[#1a1a2e] ${section.content && "mb-3"}`}
                      dangerouslySetInnerHTML={{ __html: section.title }}
                    />
                  )}
                  {section.content && (
                    <p
                      className={`event-section-content text-base font-medium text-gray-600 leading-relaxed whitespace-pre-line ${section.leftHighlight ? "font-semibold !text-[#1a1a2e] text-xl" : ""}`}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  )}
                </div>
              ))}

              {event.detailContent.images?.length ||
              event.detailContent.videos?.length ? (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6 text-center">
                    Conference Highlights
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
    </div>
  );
};

export default EventTemplate1;

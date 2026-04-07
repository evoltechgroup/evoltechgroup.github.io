"use client";
import React from "react";
import Image from "next/image";
import { EventDetail } from "@/data/eventDetailsConfig";
import TitleBackground from "./TitleBackground";
import ThemeButton from "@/components/Button/ThemeButton";
import { RoundChevronRight } from "@/assets/icons/custom-icons";
import { useRouter } from "next/navigation";

interface EventTemplate4Props {
  event: EventDetail;
}

const EventTemplate4: React.FC<EventTemplate4Props> = ({ event }) => {
  const router = useRouter();
  return (
    <div className="w-full bg-white">
      <TitleBackground event={event} />
      <div
        className="w-full bg-white py-1"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(217, 229, 251, 0.5) 0%, #ffff 40%)",
        }}>
        <div className="w-full py-10">
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
            <div className="col-span-4 col-start-1 lg:col-span-10 lg:col-start-2">
              {event.detailContent.overview && (
                <div className="mb-10 rounded-2xl border-l-4 border-[#4A90E2] bg-white p-8 shadow-sm">
                  <p className="text-lg font-medium leading-relaxed text-gray-800">
                    {event.detailContent.overview}
                  </p>
                </div>
              )}

              {event.detailContent.sections?.map((section, idx) => (
                <div key={idx} className="mb-8">
                  {section.title && (
                    <h2 className="mb-4 text-2xl font-bold text-[#1a1a2e]">
                      {section.title}
                    </h2>
                  )}
                  {section.content && (
                    <p
                      className="whitespace-pre-line text-base leading-relaxed text-gray-700"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  )}
                </div>
              ))}

              {event.detailContent.speakers &&
                event.detailContent.speakers.length > 0 && (
                  <div className="mt-12">
                    <h2 className="mb-8 text-center text-2xl font-bold text-[#1a1a2e]">
                      Featured Speakers
                    </h2>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                      {event.detailContent.speakers.map((speaker) => (
                        <div
                          key={speaker.name}
                          className="flex flex-col items-center text-center">
                          <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full shadow-md sm:h-32 sm:w-32">
                            <Image
                              src={speaker.image}
                              alt={speaker.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <p className="text-sm font-semibold leading-snug text-[#1a1a2e] sm:text-base">
                            {speaker.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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

export default EventTemplate4;

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
      <TitleBackground
        event={event}
        showBgImage={event.showTitleBgImage ?? true}
      />

      {/* ── Video player — shown when the event has a videoUrl ── */}
      {event.episode && (
        <div className="w-full bg-[#0B1530] py-10 px-4">
          <div className="max-w-4xl mx-auto">
            {event.videoUrl ? (
              /* 16:9 responsive iframe */
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={event.videoUrl}
                  title={event.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  style={{ border: "none" }}
                />
              </div>
            ) : (
              /* Coming-soon placeholder */
              <div
                className="relative w-full aspect-video rounded-2xl flex flex-col items-center justify-center gap-4"
                style={{
                  background:
                    "linear-gradient(135deg, #0B1E3D 0%, #1761A0 60%, #0D2B52 100%)",
                  border: "1px solid rgba(76,150,215,0.25)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,187,0,0.15)",
                    border: "2px solid rgba(255,187,0,0.35)",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <polygon points="5,3 19,12 5,21" fill="#FFBB00" />
                  </svg>
                </div>
                <p className="text-[#8DCAFF]/70 text-sm font-medium">
                  Video coming soon
                </p>
                {event.duration && (
                  <span className="text-[#8DCAFF]/40 text-xs">
                    {event.episode} · {event.duration}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <div
        className="w-full bg-white py-8 sm:py-16"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(217, 229, 251, 0.5) 0%, #ffff 40%)",
        }}
      >
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
          <div className="col-span-4 col-start-1 lg:col-span-10 lg:col-start-2">
            {event.detailContent.overview && (
              <div className="mb-8 sm:mb-10">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#1a1a2e] border-l-4 border-[#4A90E2] pl-3 sm:pl-4 mb-4 sm:mb-6 bg-white shadow-sm py-2">
                  {event.detailContent.overview}
                </h2>
              </div>
            )}

            {event.detailContent.sections?.map((section, idx) => (
              <div key={idx} className="mb-10">
                {section.title && (
                  <h3 className="text-base sm:text-xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
                    {section.title}
                  </h3>
                )}
                <p
                  className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: section.content || "" }}
                />
              </div>
            ))}

            {event.detailContent.images?.length ||
            event.detailContent.videos?.length ? (
              <div className="mt-10 sm:mt-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-5 sm:mb-8 text-center">
                  Reliving the Best Moments
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

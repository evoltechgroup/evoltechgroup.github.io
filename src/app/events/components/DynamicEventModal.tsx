"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronRightCircle } from "lucide-react";
import { Event } from "../events";

interface DynamicEventModalProps {
  event: Event;
  onClose: () => void;
}

const DynamicEventModal = ({ event, onClose }: DynamicEventModalProps) => {
  const router = useRouter();
  const modal = event.modal;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!modal) return null;

  const {
    hero,
    description,
    featureGrid,
    imageGrid,
    panelists,
    outerBackground,
    cta,
  } = modal;

  const heroBg =
    isMobile && hero.mobileBackgroundImage
      ? hero.mobileBackgroundImage
      : hero.backgroundImage;
  const hasHeroInlineContent =
    !hero.heroAsImage &&
    !!(hero.logo || hero.headingLogo || hero.headingText || hero.dateText);

  const ctaHref = cta.external
    ? (cta.href ?? "#")
    : cta.contactSource
      ? `/contact?source=${cta.contactSource}#contact-form`
      : (cta.href ?? "/contact");

  const handleInternalCta = () => {
    onClose();
    router.push(ctaHref);
  };

  const card = (
    <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full mx-0 lg:mx-4 overflow-hidden relative">
      <button
        onClick={onClose}
        className="absolute top-0 right-0 z-50 font-bold text-[#F47937] bg-white rounded-2xl px-3.5 py-2 hover:text-[#ef6b24] shadow-md cursor-pointer transition-colors"
        aria-label="Close">
        ✕
      </button>

      <div className="relative z-10 overflow-y-auto max-h-[90vh]">
        {hero.heroAsImage ? (
          <div className="relative p-1">
            <img
              src={heroBg}
              alt="Event banner"
              className="w-full object-cover rounded-[12px]"
            />
          </div>
        ) : (
          <div
            className={`relative ${hero.containerHeight ?? "h-64 sm:h-80"} w-full flex flex-col justify-center items-center text-center text-white`}>
            <div
              className={`absolute inset-0 bg-center ${hero.grayscale ? "filter grayscale" : ""}`}
              style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: hero.bgSize ?? "cover",
                backgroundPosition: hero.bgPosition ?? "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {!!hero.overlayOpacity && (
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: hero.overlayOpacity }}
              />
            )}

            {hasHeroInlineContent && (
              <div className="relative z-10 lg:-top-9 space-y-4 mt-4">
                {hero.logo && (
                  <img
                    src={hero.logo}
                    alt="Event Logo"
                    className="h-14 lg:h-20 mx-auto"
                  />
                )}
                {(hero.headingLogo || hero.headingText) && (
                  <div className="flex items-center justify-center gap-2 lg:mb-2">
                    {hero.headingLogo && (
                      <img
                        src={hero.headingLogo}
                        alt="EvolTech"
                        className="h-4 lg:h-7"
                      />
                    )}
                    {hero.headingText && (
                      <h2 className="text-xl sm:text-4xl text-black font-bold">
                        {hero.headingText}
                      </h2>
                    )}
                  </div>
                )}
                {hero.dateText && (
                  <p className="text-base sm:text-xl font-semibold text-[#054D88]">
                    {hero.dateText}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {(hero.headingLogo || hero.headingText) && !hasHeroInlineContent && (
          <div className="py-2 lg:py-4 flex flex-col gap-3 lg:gap-4 text-center">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 flex justify-center items-center gap-2">
              {hero.headingLogo && (
                <img
                  src={hero.headingLogo}
                  alt="EvolTech Logo"
                  className="h-6 lg:h-8 w-auto"
                />
              )}
              {hero.headingText && <span>{hero.headingText}</span>}
            </h2>
            {hero.dateText && (
              <p className="text-[#F47937] text-xl lg:text-2xl font-medium">
                {hero.dateText}
              </p>
            )}
          </div>
        )}

        {featureGrid && (
          <div
            className={`grid grid-cols-2 lg:grid-cols-${featureGrid.columns ?? 4} bg-[#EDF3FE] border-y-1 p-4 lg:p-6 lg:px-16 w-full gap-6`}
            style={{
              borderImageSource:
                "linear-gradient(90deg, rgba(5,42,70,0.5), #F47937 100%)",
              borderImageSlice: 1,
            }}>
            {featureGrid.items.map((feature, i) => (
              <div key={i} className="flex flex-col items-center h-full">
                <div className="bg-white p-1 lg:p-2 rounded-[12px] shadow-md mb-2 lg:mb-4">
                  <img
                    src={feature.icon}
                    alt={feature.text}
                    className="w-6 lg:w-8 h-6 lg:h-8"
                  />
                </div>
                <div className="flex flex-1 items-center">
                  <p className="text-sm lg:text-base font-semibold text-gray-800 text-center">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {description && (
          <div className="py-4 px-2 space-y-3 text-center">
            {description.title && (
              <h3
                className={
                  description.titleClassName ??
                  "text-xl sm:text-2xl font-semibold text-gray-900"
                }>
                {description.title}
              </h3>
            )}
            {description.blocks.map((block, i) => (
              <p
                key={i}
                className={
                  block.className ??
                  "text-[#212121] font-medium text-base leading-relaxed"
                }>
                {block.text}
              </p>
            ))}
          </div>
        )}

        {imageGrid && (
          <div
            className={`grid grid-cols-${imageGrid.columns ?? 3} gap-2 px-4 pb-4`}>
            {imageGrid.images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="w-full object-cover rounded-lg"
              />
            ))}
          </div>
        )}

        {panelists && panelists.length > 0 && (
          <div className="px-5 lg:px-10 pb-6">
            <div className="flex items-center gap-2 mb-6 mt-4">
              <h3 className="text-lg sm:text-2xl text-black font-semibold">
                The Panelists
              </h3>
              <div className="flex-1 h-px bg-[#DDDDDD]" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {panelists.map((panelist, i) => (
                <div key={i} className="text-start w-36">
                  <img
                    src={panelist.image}
                    alt={panelist.name}
                    className="w-24 h-24 rounded-2xl object-cover mb-2"
                  />
                  <p className="font-semibold text-sm text-black">
                    {panelist.name}
                  </p>
                  <p className="text-sm font-medium text-[#666666]">
                    {panelist.title}
                  </p>
                  <p className="text-sm font-medium text-[#666666]">
                    {panelist.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center pb-6 pt-2">
          {cta.external ? (
            <Link
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F47937] text-white text-base sm:text-lg font-medium px-6 py-2 rounded-full hover:bg-[#f86521] transition cursor-pointer">
              {cta.text}
              <ChevronRightCircle size={20} strokeWidth={2} color="#FFDAC6" />
            </Link>
          ) : (
            <button
              onClick={handleInternalCta}
              className="inline-flex items-center justify-center gap-2 bg-[#F47937] text-white text-base sm:text-lg font-medium px-6 py-2 rounded-full hover:bg-[#f86521] transition cursor-pointer">
              {cta.text}
              <ChevronRightCircle size={20} strokeWidth={2} color="#FFDAC6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  if (outerBackground) {
    return (
      <div
        className="relative rounded-2xl overflow-hidden max-w-2xl w-full mx-0 lg:mx-4"
        style={{
          backgroundImage: `url(${outerBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="bg-white/0 rounded-2xl shadow-lg w-full overflow-hidden relative">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 z-50 font-bold text-[#F47937] bg-white rounded-2xl px-3.5 py-2 hover:text-[#ef6b24] shadow-md cursor-pointer transition-colors"
            aria-label="Close">
            ✕
          </button>

          <div className="relative z-10 overflow-y-auto max-h-[90vh]">
            <div
              className={`relative ${hero.containerHeight ?? "h-64"} w-full`}
              style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: hero.bgSize ?? "cover",
                backgroundPosition: hero.bgPosition ?? "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            <div className="relative py-8 px-4">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center space-y-4">
                  {event.logo && (
                    <img
                      src={event.logo}
                      alt={event.title}
                      className="h-12 mx-auto mb-6"
                    />
                  )}
                  {description?.blocks.map((block, i) => (
                    <p
                      key={i}
                      className={
                        block.className ??
                        "text-[#212121] font-medium text-base"
                      }>
                      {block.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center pb-8">
              {cta.external ? (
                <Link
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#F47937] text-white text-base sm:text-lg font-medium px-6 py-2 rounded-full hover:bg-[#f86521] transition cursor-pointer">
                  {cta.text}
                  <ChevronRightCircle
                    size={20}
                    strokeWidth={2}
                    color="#FFDAC6"
                  />
                </Link>
              ) : (
                <button
                  onClick={handleInternalCta}
                  className="inline-flex items-center justify-center gap-2 bg-[#F47937] text-white text-base sm:text-lg font-medium px-6 py-2 rounded-full hover:bg-[#f86521] transition cursor-pointer">
                  {cta.text}
                  <ChevronRightCircle
                    size={20}
                    strokeWidth={2}
                    color="#FFDAC6"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return card;
};

export default DynamicEventModal;

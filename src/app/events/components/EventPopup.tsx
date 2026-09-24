"use client";
import React from "react";
import EventHero, { EventHeroProps } from "./EventHero";
import EventImageGrid, { ImageItem } from "./EventImageGrid";
import EventDescription from "./EventDescription";
import EventCTA from "./EventCTA";

// Define section types
export type SectionType =
  | "hero"
  | "description"
  | "imageGrid"
  | "cta"
  | "custom";

// Define section configuration
export interface SectionConfig {
  type: SectionType;
  order: number;
  props?: any;
  customContent?: React.ReactNode;
}

// Main EventPopup Props
export interface EventPopupProps {
  // Close handler
  onClose: () => void;

  // Hero section data
  hero: EventHeroProps;

  // Description section data
  description?: {
    title?: string;
    subtitle?: string;
    blocks: Array<{
      text: string;
      className?: string;
      highlight?: boolean;
    }>;
    titleClassName?: string;
    containerClassName?: string;
  };

  // Image grid section data
  imageGrid?: {
    images: ImageItem[];
    title?: string;
    columns?: 2 | 3 | 4;
    showDivider?: boolean;
  };

  // CTA section data
  cta?: {
    text: string;
    href?: string;
    onClick?: () => void;
    external?: boolean;
    className?: string;
    icon?: React.ReactNode;
    showDefaultIcon?: boolean;
  };

  // Section order configuration
  sectionOrder?: SectionType[] | readonly SectionType[];

  // Custom sections
  customSections?: Array<{
    order: number;
    content: React.ReactNode;
  }>;

  // Container styling
  containerClassName?: string;
  maxHeight?: string;
}

const EventPopup: React.FC<EventPopupProps> = ({
  onClose,
  hero,
  description,
  imageGrid,
  cta,
  sectionOrder = ["hero", "description", "imageGrid", "cta"],
  customSections = [],
  containerClassName = "bg-white rounded-2xl shadow-lg max-w-2xl w-full mx-0 lg:mx-4 overflow-hidden",
  maxHeight = "max-h-[90vh]",
}) => {
  // Mobile detection state
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Build sections based on order
  const sections: Array<{
    type: SectionType;
    order: number;
    content: React.ReactNode;
  }> = [];

  // Map section types to their content
  const sectionMap: Record<SectionType, React.ReactNode> = {
    hero: hero ? <EventHero {...hero} /> : null,
    description: description ? <EventDescription {...description} /> : null,
    imageGrid: imageGrid ? <EventImageGrid {...imageGrid} /> : null,
    cta: cta ? <EventCTA {...cta} /> : null,
    custom: null,
  };

  // Build ordered sections array
  sectionOrder.forEach((type, index) => {
    const content = sectionMap[type];
    if (content) {
      sections.push({ type, order: index, content });
    }
  });

  // Add mobile-only info section after hero
  // Only show if there's actual content (logo, title, subtitle, date, or location)
  const hasMobileContent =
    hero &&
    ((hero.logo && hero.logo.trim()) ||
      (hero.title && hero.title.trim()) ||
      (hero.subtitle && hero.subtitle.trim()) ||
      (hero.date && hero.date.trim()) ||
      (hero.location && hero.location.trim()));

  if (isMobile && hasMobileContent) {
    sections.push({
      type: "custom",
      order: 0.5, // Right after hero (hero is at order 0)
      content: (
        <div className="px-4 py-4 text-center">
          {hero.logo && hero.logo.trim() && (
            <img
              src={hero.logo}
              alt="Event Logo"
              className="h-12 mx-auto mb-3"
            />
          )}
          {((hero.title && hero.title.trim()) ||
            (hero.subtitle && hero.subtitle.trim())) && (
            <p className="text-[#054D88] font-semibold text-base mb-1">
              {hero.subtitle || hero.title}
            </p>
          )}
          {((hero.date && hero.date.trim()) ||
            (hero.location && hero.location.trim())) && (
            <p className="text-[#F47937] font-semibold text-base mb-3">
              {hero.date}
              {hero.date &&
              hero.date.trim() &&
              hero.location &&
              hero.location.trim()
                ? " | "
                : ""}
              {hero.location}
            </p>
          )}
          <div className="w-full h-[1px] bg-gray-300 mt-2"></div>
        </div>
      ),
    });
  }

  // Add custom sections
  customSections.forEach((customSection) => {
    sections.push({
      type: "custom",
      order: customSection.order,
      content: customSection.content,
    });
  });

  // Sort sections by order
  sections.sort((a, b) => a.order - b.order);

  return (
    <div className={`relative ${containerClassName}`}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-0 right-0 z-50 font-bold text-[#F47937] bg-white rounded-2xl px-3.5 py-2 hover:text-[#ef6b24] shadow-md cursor-pointer transition-colors"
        aria-label="Close popup"
      >
        ✕
      </button>

      {/* Scrollable Content */}
      <div className={`relative z-10 flex-1 overflow-y-auto  ${maxHeight}`}>
        {sections.map((section, index) => (
          <React.Fragment key={`section-${section.type}-${index}`}>
            {section.content}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EventPopup;

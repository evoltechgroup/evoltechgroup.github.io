/**
 * Event Components - Index File
 * 
 * Central export point for all event popup components
 */

// Main Component
export { default as EventPopup } from "./EventPopup";
export type { EventPopupProps, SectionConfig, SectionType } from "./EventPopup";

// Sub-components
export { default as EventHero } from "./EventHero";
export type { EventHeroProps } from "./EventHero";

export { default as EventImageGrid } from "./EventImageGrid";
export type { ImageItem } from "./EventImageGrid";

export { default as EventDescription } from "./EventDescription";

export { default as EventCTA } from "./EventCTA";
export type { EventCTAProps } from "./EventCTA";

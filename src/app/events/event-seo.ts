export interface EventSchema {
  "@context": string;
  "@type": string;
  name: string;
  startDate: string;
  endDate: string;
  location: {
    "@type": string;
    name: string;
    address?: {
      "@type": string;
      addressLocality: string;
      addressRegion?: string;
      addressCountry: string;
    };
  };
  organizer: {
    "@type": string;
    name: string;
    url?: string;
  };
  description?: string;
  eventStatus?: string;
  eventAttendanceMode?: string;
}

export const eventSchemas: EventSchema[] = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "EvolTech at GrowATL 2025",
    startDate: "2025-09-06T10:00:00-04:00",
    endDate: "2025-09-06T14:00:00-04:00",
    location: {
      "@type": "Place",
      name: "Johns Creek, Georgia",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johns Creek",
        addressRegion: "GA",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "ATEA",
    },
    description:
      "Join EvolTech at GrowATL 2025 for innovations, insights and impact in technology and operations.",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "SIIA 2025 - The Innovation Spotlight",
    startDate: "2025-10-12",
    endDate: "2025-10-14",
    location: {
      "@type": "Place",
      name: "Phoenix, Arizona",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Phoenix",
        addressRegion: "AZ",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "SIIA",
      url: "https://www.siia.org",
    },
    description:
      "Join EvolTech at SIIA 2025's Innovation Spotlight to explore cutting-edge technology solutions.",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "SIIA Dubai International Conference 2026 - Global Self-Insurance Forum",
    startDate: "2026-01-26",
    endDate: "2026-01-28",
    location: {
      "@type": "Place",
      name: "Dubai, UAE",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "SIIA",
      url: "https://www.siia.org",
    },
    description:
      "SIIA Dubai International Conference 2026 - Global Self-Insurance Forum featuring EvolTech's innovative solutions.",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "ABA Conference for Community Bankers",
    startDate: "2026-02-15",
    endDate: "2026-02-17",
    location: {
      "@type": "Place",
      name: "Orlando, Florida",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "American Bankers Association",
      url: "https://www.aba.com",
    },
    description:
      "ABA Conference for Community Bankers featuring EvolTech's banking technology solutions and expertise.",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Healthcare Price Transparency Forum",
    startDate: "2026-02-25",
    endDate: "2026-02-26",
    location: {
      "@type": "Place",
      name: "Jacksonville, Florida",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jacksonville",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "SIIA",
      url: "https://www.siia.org",
    },
    description:
      "Healthcare Price Transparency Forum showcasing EvolTech's healthcare technology innovations.",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  },
];

export function getActiveEventSchemas(
  currentDate: Date = new Date(),
): EventSchema[] {
  return eventSchemas.filter((event) => {
    const eventEndDate = new Date(event.endDate);
    return eventEndDate >= currentDate;
  });
}

export function getAllEventSchemas(): EventSchema[] {
  return eventSchemas;
}

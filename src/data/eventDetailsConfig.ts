import { StaticImageData } from "next/image";
import {
  EventsBg,
  EvoltechGroupV2,
  GroupPic1,
  GroupPic2,
} from "@/assets/images/Events";
import {
  AnnualLeadershipSummit01,
  AnnualLeadershipSummit02,
  AnnualLeadershipSummit03,
  AnnualLeadershipSummit04,
  AnnualLeadershipSummit05,
  AnnualLeadershipSummit06,
  AnnualLeadershipSummit07,
  AnnualLeadershipSummit08,
} from "@/assets/images/Events/EvolTech-Summit";
import {
  AiHackathon,
  AndamanEvent,
  EvolTechCeremony,
  SpringExchange,
  SpringExchangeBanner,
  AbaBanner,
  HCAABanner,
  HCAA,
  SIIAInsuranceInstituteBanner,
  HCAABanner2026,
} from "@/assets/images/Events/CuratedEvents";
import Alwyn from "@/assets/images/Events/atea/Alwyn.png";
import AteaBg from "@/assets/images/Events/atea/Atea-Bg.png";
import AteaBanner from "@/assets/images/Events/atea/Atea.png";
import Kanchana from "@/assets/images/Events/atea/Kanchana.png";
import Nazeera from "@/assets/images/Events/atea/Nazeera.png";
import Ramesh from "@/assets/images/Events/atea/Ramesh.png";
import Thulasi from "@/assets/images/Events/atea/Thulasi.png";
import ABABanner from "@/assets/images/Events/ABA/aba-banner.png";
import AbaBg from "@/assets/images/Events/ABA/Aba-bg.png";
import Innov from "@/assets/images/Events/siia/Innov.png";
import SiiaBg from "@/assets/images/Events/siia/SiiaBg.png";
import HealthcareBanner from "@/assets/images/Events/siia/siia heathcare/siia-healthcare-banner.png";
import SiiaDubai1 from "@/assets/images/Events/siia/siia dubai/siia-dubai1.png";
import SiiaDubai2 from "@/assets/images/Events/siia/siia dubai/siia-dubai2.png";
import SiiaDubai3 from "@/assets/images/Events/siia/siia dubai/siia-dubai3.png";
import SiiaDubaiBanner from "@/assets/images/Events/siia/siia dubai/siia-dubai-banner.png";
import {
  CEO1,
  CEO2,
  CEO3,
  CEO4,
  CEO5,
  CEO6,
  CEO7,
  CEO8,
  CEO9,
  Awards1,
  Awards2,
  Awards3,
  Awards4,
  Awards5,
} from "@/assets/images/Events/EvoltechSpace/Moments-With-Ceo/index";
import {
  AISession1,
  AndamanTrip1,
  AndamanTrip10,
  AndamanTrip11,
  AndamanTrip2,
  AndamanTrip3,
  AndamanTrip4,
  AndamanTrip5,
  AndamanTrip6,
  AndamanTrip7,
  AndamanTrip8,
  AndamanTrip9,
  AndamanTrip12,
  AndamanTrip13,
  AndamanTrip14,
  AndamanTrip15,
  AndamanTrip16,
  AndamanTrip17,
  AndamanTrip18,
  AndamanTrip20,
  AndamanTrip21,
  AndamanTrip22,
  Cruise2,
  Cruise3,
  FireCamp,
  ChristmasCelebration1,
  ChristmasCelebration2,
  ChristmasCelebration3,
  DiwaliCelebration1,
  DiwaliCelebration2,
  DiwaliCelebration3,
  DiwaliCelebration4,
  EvolTechCeremony1,
  Marathon1,
  PongalCelebration1,
  PongalCelebration2,
  PongalCelebration3,
  PongalCelebration4,
  PongalCelebration5,
  PongalCelebration6,
  PongalCelebration7,
  PongalCelebration8,
  Cruise,
  Cruise1,
  Resort,
  PongalCelebration9,
  PongalCelebration10,
  PongalCelebration11,
  PongalCelebration12,
  PongalCelebration13,
  Marathon4,
  Marathon2,
  Marathon3,
  Marathon,
  DiwaliCelebration7,
  DiwaliCelebration5,
  DiwaliCelebration6,
  OpeningCeremony1,
  OpeningCeremony6,
  OpeningCeremony4,
  OpeningCeremony3,
  OpeningCeremony2,
  OpeningCeremony,
  MomentsWithCEO1,
  MomentsWithCEO2,
  MomentsWithCEO3,
  MomentsWithCEO4,
  MomentsWithCEO5,
  MomentsWithCEO6,
  MomentsWithCEO7,
  MomentsWithCEO8,
  AiTraining1,
  AiTraining2,
  AiTraining3,
  AiTraining4,
  GoaTrip1,
  GoaTrip4,
  GoaTrip3,
  GoaTrip2,
  Cruise4,
  Cruise5,
} from "@/assets/images/Events/EvoltechSpace";

import {
  AiBanner,
  ChristmasBanner,
  DiwaliBanner,
  AiBanner2,
} from "@/assets/effects/Banner";
import {
  AmericanBankers1,
  AmericanBankers2,
  AmericanBankers3,
  AmericanBankers4,
  AmericanBankers5,
  AmericanBankersBanner,
} from "@/assets/images/Events/Conference";
import {
  TheGOATrip,
  ThePuneTeam,
  BowlingWithTheTeam,
  DinnerWithTeam,
  LunchwithTheTeam,
} from "@/assets/images/Team/Outing";

export type EventTemplate =
  | "template1"
  | "template2"
  | "template3"
  | "template4";
export type EventCategory = "internal" | "conference";
export type EventStatus = "upcoming" | "ongoing" | "past";

export interface EventTag {
  label: string;
  bgColor: string;
}

export interface EventSpeaker {
  name: string;
  image: StaticImageData;
}

export interface EventDetailContent {
  overview?: string;
  sections?: {
    title: string;
    content?: string;
    leftHighlight?: boolean;
  }[];
  images?: StaticImageData[];
  speakers?: EventSpeaker[];
  highlights?: string[];
  ctaText?: string;
  ctaLink?: string;
  videos?: string[];
}

export interface EventDetail {
  id: number;
  slug: string;
  template: EventTemplate;
  category: EventCategory;
  status: EventStatus;
  showInList?: boolean;
  space?: "ceo";

  image: StaticImageData;
  title: string;
  description: string;
  fromDate: string;
  toDate: string;

  city?: string;
  state?: string;
  venue?: string;

  tags?: EventTag[];
  bannerImage?: StaticImageData;
  /** Primary video URL (YouTube embed or direct MP4) — shows a video player on the detail page */
  videoUrl?: string;
  /** Episode identifier for video-type events, e.g. "EP 01" */
  episode?: string;
  /** Runtime for video-type events, e.g. "18 min" */
  duration?: string;
  /** When false, the event-specific bg image is hidden in the TitleBackground — only brand color layers show. Defaults to true. */
  showTitleBgImage?: boolean;
  detailContent: EventDetailContent;
}

type RawEventDetail = Omit<EventDetail, "status">;

const EVENT_DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const EVENT_MONTH_DAY_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
});

export const formatEventDateRange = (fromDate: string, toDate: string) => {
  const start = new Date(`${fromDate}T00:00:00`);
  const end = new Date(`${toDate}T00:00:00`);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return `${fromDate} - ${toDate}`;
  }

  if (fromDate === toDate) {
    return EVENT_DATE_FORMATTER.format(start);
  }

  if (start.getFullYear() === end.getFullYear()) {
    if (start.getMonth() === end.getMonth()) {
      return `${start.toLocaleString("en-US", {
        month: "long",
      })} ${start.getDate()}-${end.getDate()}, ${end.getFullYear()}`;
    }

    return `${EVENT_MONTH_DAY_FORMATTER.format(start)} - ${EVENT_DATE_FORMATTER.format(end)}`;
  }

  return `${EVENT_DATE_FORMATTER.format(start)} - ${EVENT_DATE_FORMATTER.format(end)}`;
};

const sortEventsByNewest = (events: EventDetail[]) => {
  return [...events].sort((left, right) => {
    return (
      new Date(`${right.fromDate}T00:00:00`).getTime() -
      new Date(`${left.fromDate}T00:00:00`).getTime()
    );
  });
};

const shouldShowEventInList = (event: Pick<EventDetail, "showInList">) => {
  return event.showInList !== false;
};

export const getEventStatus = (
  fromDate: string,
  toDate: string,
  currentDate: Date = new Date(),
): EventStatus => {
  const today = new Date(currentDate);
  today.setHours(0, 0, 0, 0);

  const eventStart = new Date(`${fromDate}T00:00:00`);
  const eventEnd = new Date(`${toDate}T23:59:59`);

  if (eventEnd < today) {
    return "past";
  }

  if (eventStart <= today) {
    return "ongoing";
  }

  return "upcoming";
};

const rawEventDetailsConfig: RawEventDetail[] = [
  {
    id: 4,
    slug: "siia-national-conference-phoenix-2026",
    template: "template2",
    category: "conference",
    image: SIIAInsuranceInstituteBanner,
    title: "SIIA National Conference - Phoenix",
    description:
      "EvolTech will be attending the SIIA National Conference 2026 in Phoenix — connecting with industry leaders, exploring emerging trends, and engaging with the future of self-insurance and employee benefits.",
    fromDate: "2026-10-11",
    toDate: "2026-10-13",
    tags: [
      { label: "Conference", bgColor: "#FE7F00" },
      { label: "Self-Insurance", bgColor: "#4A90E2" },
      { label: "Industry Leadership", bgColor: "#FFBB00" },
    ],
    city: "Phoenix",
    state: "AZ",
    detailContent: {
      overview:
        "EvolTech will be attending the SIIA National Conference 2026 in Phoenix — one of the industry's most influential gatherings for self-insurance, employee benefits, and risk management professionals. The conference brings together TPAs, self-funded employers, stop-loss carriers, brokers, captives, and technology providers to discuss trends, innovation, and the future of healthcare and benefits administration.",

      sections: [
        {
          title: "Why EvolTech Is Attending",
          content:
            "The SIIA National Conference is a key opportunity to engage directly with organizations shaping the self-insurance market. We're attending to better understand the challenges facing TPAs, self-funded employers, and healthcare organizations and to explore how technology can support operational transformation and stronger member outcomes.",
          leftHighlight: true,
        },
        {
          title: "How EvolTech Supports the Industry",
          content:
            "EvolTech works with organizations seeking to modernize operations through AI-powered solutions, digital transformation, cloud modernization, data and analytics platforms, and workflow optimization, practical capabilities built for the demands of the self-insurance industry.",
        },
        {
          title: "Let's Connect at the Conference",
          content:
            "If you'll be attending the SIIA National Conference 2026 in Phoenix, we'd love to connect and discuss how EvolTech's technology and operational expertise can support your organization.",
          leftHighlight: true,
        },
      ],

      ctaText: "More Details",
      ctaLink: "https://siiaconferences.org/",
    },
  },
  {
    id: 9,
    slug: "hcaa-tpa-summit-2026",
    template: "template2",
    category: "conference",
    image: HCAABanner2026,
    title: "HCAA TPA Summit 2026",
    description:
      "EvolTech will be attending the HCAA TPA Summit 2026 to connect with healthcare administrators, TPAs, self-funded employers, and industry leaders shaping the future of healthcare administration and benefits management.",
    fromDate: "2026-07-27",
    toDate: "2026-07-29",
    tags: [
      { label: "Conference", bgColor: "#FE7F00" },
      { label: "Healthcare", bgColor: "#4A90E2" },
      { label: "TPA Summit", bgColor: "#00B894" },
    ],
    city: "Dallas",
    state: "TX",
    venue: "Omni PGA Frisco Resort",
    detailContent: {
      overview:
        "EvolTech will be attending the HCAA TPA Summit 2026 in Dallas, Texas a premier industry event bringing together TPAs, self-funded employers, healthcare service providers, and technology partners. Hosted by the Healthcare Administrators Association (HCAA), the summit is a key forum for discussing emerging trends, operational challenges, and the evolving needs of the self-insurance ecosystem.",

      sections: [
        {
          title: "Why EvolTech Is Attending",
          content:
            "The HCAA TPA Summit gives EvolTech direct access to organizations navigating rapid change across healthcare administration and benefits management. Our goal is to understand evolving industry priorities, strengthen relationships, and explore how modern technology can help organizations improve efficiency, scalability, and member outcomes.",
          leftHighlight: true,
        },
        {
          title: "What We're Bringing to the Conversation",
          content:
            "We'll be discussing AI-powered operational solutions, workflow automation, digital transformation, and managed technology services, practical capabilities designed to help TPAs and healthcare organizations modernize operations and reduce administrative friction.",
        },
        {
          title: "Let's Connect at the Summit",
          content:
            "If you'll be attending the HCAA TPA Summit 2026, we'd welcome the opportunity to connect, exchange ideas, and explore how technology can support your organization's goals.",
          leftHighlight: true,
        },
      ],

      ctaText: "More Details",

      ctaLink: "https://www.hcaa.org/events/EventDetails.aspx?id=1969867",
    },
  },
  {
    id: 1,
    slug: "spring-exchange-2026",
    template: "template1",
    category: "conference",
    image: SpringExchange,
    bannerImage: SpringExchangeBanner,
    title: "SIIA Spring Exchange 2026",
    description:
      "SIIA's Spring Exchange brings self-insurance leaders together for relationship-building, capital conversations, and practical business growth.",
    fromDate: "2026-03-30",
    toDate: "2026-04-01",
    tags: [
      { label: "Conference", bgColor: "#FE7F00" },
      { label: "Networking", bgColor: "#FFBB00" },
      { label: "External Partner Event", bgColor: "#4A90E2" },
    ],
    city: "New Orleans",
    state: "LA",
    venue: "Sheraton New Orleans",
    detailContent: {
      overview:
        "EvolTech attended SIIA's Spring Exchange in New Orleans — a relationship-driven forum bringing together leaders across the self-insurance marketplace for focused business conversations, partnership building, and capital discussions.",
      sections: [
        {
          title: "Why EvolTech Was There",
          content:
            "EvolTech attended Spring Exchange to connect with key players across the self-insurance marketplace, explore partnership opportunities, and position our technology solutions for teams evaluating digital transformation in TPA and self-insured employer operations.",
          leftHighlight: true,
        },
        {
          title: "Conversations That Mattered",
          content:
            "We used the event's meeting-focused format to have productive, targeted conversations with decision-makers looking at modernizing claims workflows, reducing administrative cost, and building more scalable operations — precisely the problems our technology is built to solve.",
        },
        {
          title: "What We Took Away",
          content:
            "Spring Exchange reinforced the value of showing up in person. The connections made and conversations started at the event directly supported our business development momentum and confirmed the market's appetite for practical, well-executed technology solutions in the self-insurance space.",
          leftHighlight: true,
        },
      ],
      ctaText: "Connect with us",
      ctaLink: "/contact?source=SpringExchange2026#contact-form",
    },
  },
  {
    id: 7,
    slug: "growatl-2025-tech-panel",
    template: "template4",
    category: "conference",
    image: AteaBg,
    title: "GrowATL 2025 - Tech Panel",
    description:
      "EvolTech joined GrowATL 2025 for a technology panel focused on innovation, insights, impact, and the future of the Atlanta startup ecosystem.",
    fromDate: "2025-09-06",
    toDate: "2025-09-06",
    tags: [
      { label: "Conference", bgColor: "#FE7F00" },
      { label: "Technology", bgColor: "#4A90E2" },
      { label: "Panel Discussion", bgColor: "#FFBB00" },
    ],
    city: "Johns Creek",
    state: "GA",
    venue: "Sankranti Restaurant",
    detailContent: {
      overview:
        "GrowATL 2025 was ATEA Atlanta Chapter's flagship entrepreneurship and innovation summit, bringing founders, operators, and ecosystem builders together for a day of bold conversations and practical momentum.",
      sections: [
        {
          title: "Why EvolTech Participated",
          content:
            "Our team joined the GrowATL 2025 tech panel to exchange ideas with fellow leaders and contribute perspectives on scaling operations, building smarter technology foundations, and turning innovation into measurable business value.",
        },
        {
          title: "Panel Conversations",
          content:
            "The session brought together cross-industry leadership voices from technology, healthcare, networking, and startup founders shaping the next phase of growth in the Atlanta region. EvolTech contributed our perspective on modern technology execution and what it takes to build lasting, scalable solutions in the current market environment.",
        },
      ],
      videos: [
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7373369406070054915?compact=1",
      ],
      speakers: [
        {
          name: "Alwyn Joseph PremKumar",
          image: Alwyn,
        },
        {
          name: "Ramesh S.",
          image: Ramesh,
        },
        {
          name: "Kanchana V Raman",
          image: Kanchana,
        },
        {
          name: "Nazeera Dawood",
          image: Nazeera,
        },
        {
          name: "Thulasidharan LG",
          image: Thulasi,
        },
      ],
      ctaText: "More details",
      ctaLink: "https://atea.zohobackstage.com/ATEAAtlantaGrowATL2025#/",
    },
  },
  {
    id: 8,
    slug: "siia-national-conference-phoenix-2025",
    template: "template2",
    category: "conference",
    image: Innov,
    title: "SIIA National Conference - Phoenix",
    description:
      "EvolTech joined SIIA's 2025 Innovation Spotlight in Phoenix to share technology strategies for smarter, faster, and more customer-friendly operations.",
    fromDate: "2025-10-12",
    toDate: "2025-10-14",
    tags: [
      { label: "Conference", bgColor: "#FE7F00" },
      { label: "Self-Insurance", bgColor: "#4A90E2" },
      { label: "Innovation", bgColor: "#FFBB00" },
    ],
    city: "Phoenix",
    state: "AZ",
    detailContent: {
      overview:
        "SIIA's Innovation Spotlight in Phoenix brought together leaders looking for practical ways to modernize operations, improve customer experience, and use technology more effectively across the self-insurance ecosystem.",
      sections: [
        {
          title: "What we showcased",
          content:
            "EvolTech highlighted technology solutions designed to streamline operations, reduce avoidable cost, and create more scalable digital workflows for growing organizations.",
        },
        {
          title: "Key focus areas",
          content:
            "Our conversations centered on transforming operations, cutting costs, building smarter with modern technology, and delivering smoother customer experiences.",
        },
        {
          title: "Why the event mattered",
          content:
            "The conference created strong opportunities to connect with teams actively evaluating digital transformation priorities and looking for execution partners who understood operations as well as technology.",
        },
      ],
      ctaText: "Connect with us",
      ctaLink: "/contact?source=SIIA2025#contact-form",
    },
  },
  // {
  //   id: 9,
  //   slug: "siia-international-conference-dubai-2026",
  //   template: "template1",
  //   category: "conference",
  //   image: SiiaDubai1,
  //   title: "SIIA International Conference - Dubai",
  //   description:
  //     "SIIA's Dubai conference connected global self-insurance, healthcare, and captive leaders around international growth, innovation, and AI-enabled operations.",
  //   fromDate: "2026-01-26",
  //   toDate: "2026-01-28",
  //   tags: [
  //     { label: "Conference", bgColor: "#FE7F00" },
  //     { label: "Global Forum", bgColor: "#4A90E2" },
  //     { label: "Self-Insurance", bgColor: "#FFBB00" },
  //   ],
  //   city: "Dubai",
  //   state: "UAE",
  //   detailContent: {
  //     overview:
  //       "The SIIA International Conference in Dubai brought together leaders from self-insurance, healthcare, and captive insurance for a distinctly global exchange of ideas, partnerships, and market perspectives.",
  //     sections: [
  //       {
  //         title: "A global meeting point",
  //         content:
  //           "Dubai's role as a gateway to the Middle East, Africa, and South Asia made the event especially valuable for organizations exploring international expansion, regional partnerships, and emerging models in self-insurance.",
  //       },
  //       {
  //         title: "What stood out",
  //         content:
  //           "Attendees explored the growing intersection of captives, benefits, TPAs, and AI-enabled administration while connecting with both regional operators and multinational organizations active in the market.",
  //       },
  //       {
  //         title: "Why EvolTech was there",
  //         content:
  //           "We joined the forum to engage with decision-makers navigating modern operations, data-driven workflows, and technology-enabled service delivery across complex insurance environments.",
  //       },
  //     ],
  //     ctaText: "More details",
  //     ctaLink: "https://www.siia.org/i4a/pages/index.cfm?pageid=8016",
  //   },
  // },
  {
    id: 6,
    slug: "aba-conference-community-bankers",
    template: "template2",
    category: "conference",
    image: EventsBg,
    title: "American Bankers Association (ABA) Conference",
    description:
      "EvolTech attended the ABA Conference for Community Bankers to connect with banking leaders and share practical technology solutions for modern community banking.",
    fromDate: "2026-02-15",
    toDate: "2026-02-17",
    tags: [
      { label: "Conference", bgColor: "#FE7F00" },
      { label: "Banking", bgColor: "#4A90E2" },
    ],
    city: "Orlando",
    state: "FL",
    venue: "JW Marriott Grande Lakes",
    detailContent: {
      overview:
        "The ABA Conference for Community Bankers brought banking leaders together for practical conversations around growth, customer experience, operations, and technology strategy.",
      sections: [
        {
          title: "What we focused on",
          content:
            "EvolTech used the event to discuss modern banking technology, operational efficiency, and digital experiences that help community-focused institutions stay agile while preserving the service standards that set them apart.",
        },
        {
          title: "Why the event mattered",
          content:
            "The conference created meaningful opportunities to hear directly from banking leaders, understand the pressures facing community institutions, and connect our solutions to real operational needs.",
        },
      ],
      images: [
        AmericanBankers1,
        AmericanBankers2,
        AmericanBankers3,
        AmericanBankers4,
        AmericanBankers5,
      ],
      ctaText: "More details",
      ctaLink:
        "https://www.aba.com/training-events/conferences/conference-for-community-bankers/program",
    },
  },
  {
    id: 10,
    slug: "hcaa-executive-forum-2026",
    template: "template2",
    category: "conference",
    image: HCAABanner,
    title: "HCAA 2026 Executive Forum",
    description:
      "EvolTech tracked the HCAA Executive Forum to stay close to leadership conversations shaping healthcare cost containment, benefits operations, and employer strategy.",
    fromDate: "2026-02-23",
    toDate: "2026-02-25",
    tags: [
      { label: "Conference", bgColor: "#FE7F00" },
      { label: "Healthcare", bgColor: "#4A90E2" },
      { label: "Executive Forum", bgColor: "#FFBB00" },
    ],
    detailContent: {
      overview:
        "The HCAA Executive Forum gathered healthcare cost containment and benefits leaders for focused conversations around strategy, regulation, operational efficiency, and the future of employer-sponsored healthcare programs.",
      sections: [
        {
          title: "Why it was relevant",
          content:
            "The forum aligned closely with the challenges our healthcare clients faced, especially around controlling cost, improving administrative execution, and responding to a fast-changing benefits landscape.",
        },
        {
          title: "EvolTech's lens",
          content:
            "We followed the event to stay aligned with executive priorities across healthcare administration, data transparency, and digital workflows that can reduce friction for both plans and members.",
        },
      ],
    },
  },
  {
    id: 11,
    slug: "siia-price-transparency-forum-2026",
    template: "template2",
    category: "conference",
    image: HealthcareBanner,
    title: "SIIA Price Transparency Forum",
    description:
      "SIIA's Price Transparency Forum focused on policy, compliance, and practical ways to manage rising healthcare and prescription drug costs.",
    fromDate: "2026-02-25",
    toDate: "2026-02-26",
    tags: [
      { label: "Conference", bgColor: "#FE7F00" },
      { label: "Healthcare", bgColor: "#4A90E2" },
      { label: "Price Transparency", bgColor: "#FFBB00" },
    ],
    city: "Jacksonville",
    state: "FL",
    detailContent: {
      overview:
        "The forum centered on how price transparency rules are reshaping access to claims and prescription cost data, and how organizations can turn that visibility into smarter decisions.",
      sections: [
        {
          title: "Policy and compliance",
          content:
            "Sessions focused on federal price transparency requirements and the operational realities of using richer claims data in a compliant, actionable way.",
        },
        {
          title: "Managing cost-of-care",
          content:
            "Industry leaders shared strategies for addressing rising medical and pharmacy costs, improving oversight, and building more informed health plan decisions.",
        },
        {
          title: "Why We Attended",
          content:
            "The event aligned closely with our focus on helping healthcare organizations translate data access into better workflows, lower friction, and more effective cost management.",
        },
      ],
      ctaText: "More details",
      ctaLink: "https://www.siia.org/i4a/pages/index.cfm?pageid=8032",
    },
  },

  {
    id: 2,
    slug: "evoltech-office-blessing-2026",
    template: "template2",
    category: "internal",
    image: EvolTechCeremony,
    title: "EvolTech 2.0 - Office Blessing Ceremony",
    description:
      "We marked the grand opening of our new, more spacious office with a traditional blessing ceremony filled with warmth, gratitude, and positive energy.",
    fromDate: "2026-03-08",
    toDate: "2026-03-08",
    tags: [
      { label: "Internal Event", bgColor: "#B6D2FF" },
      { label: "Team Culture", bgColor: "#8DCAFF" },
    ],
    city: "Chennai",
    state: "TN",
    detailContent: {
      overview:
        "We marked the grand opening of our new, more spacious office with a traditional blessing ceremony filled with warmth, gratitude, and positive energy.",
      sections: [
        {
          title: "",
          content: `In a heartfelt and auspicious start to the year, EvolTech celebrated the official opening and blessing of our new, spacious office space. The ceremony brought together the entire team, leadership, and close well-wishers in a beautiful blend of tradition, gratitude, and excitement for the future.<br/>
          Surrounded by vibrant flowers, incense, and positive energy, we sought blessings for growth, innovation, collaboration, and prosperity in our expanded workspace. The larger, brighter office symbolizes not just more physical space, but also the expanding horizons of our ambitions — empowering our talented team to ideate, build, and deliver even greater impact for clients across FinTech, Healthcare, and Retail.<br/>
          This milestone moment reinforced our core values of respect, unity, and mindful progress as we step into a new chapter of EvolTech’s journey.`,
        },
      ],
      images: [EvolTechCeremony, GroupPic1, GroupPic2],
    },
    showInList: false,
  },
  {
    id: 3,
    slug: "annual-leadership-summit-2025",
    template: "template3",
    category: "internal",
    image: EvoltechGroupV2,
    // bannerImage: AnnualLeadershipSummit01,
    title: "EvolTech Annual Leadership Summit 2025",
    description:
      "Celebrating excellence is at the heart of EvolTech. Our R&R initiatives spotlight individual and team achievements, fostering a culture of appreciation...",
    fromDate: "2026-01-23",
    toDate: "2026-01-23",
    tags: [
      { label: "Internal Event", bgColor: "#B6D2FF" },
      { label: "Leadership", bgColor: "#FE7F00" },
    ],
    detailContent: {
      overview:
        "Reflecting on an unforgettable EvolTech Annual Leadership Summit 2025.",
      sections: [
        {
          title: "",
          content:
            "As we stepped into 2026, we took a meaningful pause to reflect on what an incredible journey 2025 had been for EvolTech.<br/><br/>Our Annual Summit 2025 was more than a gathering. It was a moment to celebrate a year of growth, learning, resilience, and shared success. The day was filled with laughter, surprises, shared stories, heartfelt appreciation, and genuine happiness. Every smile, every conversation, and every moment of recognition reminded us that EvolTech is built on people, trust, and a shared purpose.<br/><br/>We celebrated our wins, acknowledged efforts that often go unseen, and honored the passion and commitment our team brings every single day. It was a powerful reminder that behind every milestone is a team that believes, supports, and grows together.<br/><br/>As we closed the chapter on a remarkable 2025, we did so with deep gratitude. And as we stepped into 2026, we were energized, aligned, and more ready than ever for what was ahead.",
        },
      ],
      images: [
        AnnualLeadershipSummit01,
        AnnualLeadershipSummit02,
        AnnualLeadershipSummit03,
        AnnualLeadershipSummit04,
        AnnualLeadershipSummit05,
        AnnualLeadershipSummit06,
        AnnualLeadershipSummit07,
        AnnualLeadershipSummit08,
        Awards1,
        Awards2,
        Awards3,
        Awards4,
        CEO1,
        CEO2,
        CEO5,
        CEO6,
        CEO7,
        // CEO8,
      ],
      highlights: [
        "Team building activities and workshops",
        "Recognition awards ceremony",
        "Strategic planning sessions",
        "Networking and collaboration opportunities",
      ],
    },
  },
  {
    id: 5,
    slug: "andaman-team-meetup-2026",
    template: "template3",
    category: "internal",
    image: Cruise3,
    title: "2026 Team Meetup - Andaman Islands",
    description:
      "Our entire team escaped to the stunning Andaman Islands for an unforgettable 2026 offsite. Sun, sea, sand, and shared experiences helped us bond, recharge...",
    fromDate: "2026-01-24",
    toDate: "2026-01-26",
    tags: [
      { label: "Internal Event", bgColor: "#B6D2FF" },
      { label: "Team Bonding", bgColor: "#4A90E2" },
      { label: "Adventure", bgColor: "#FE7F00" },
    ],
    city: "Port Blair",
    state: "Andaman & Nicobar",
    detailContent: {
      overview:
        "Our entire team escaped to the stunning Andaman Islands for an unforgettable 2026 offsite.",
      sections: [
        {
          title: "Island Inspiration",
          content:
            "From team-building activities on pristine beaches to strategic planning sessions with ocean views, this retreat was the perfect blend of relaxation and collective focus. The serene environment of the islands provided the ideal backdrop for the team to step away from the daily routine and connect on a personal level.",
        },
        {
          title: "Exploring North Bay & Ross Island",
          content:
            "The retreat kicked off with a journey into the history and natural beauty of the archipelago. We spent our mornings exploring the ruins of Ross Island and diving into the vibrant marine life at North Bay. These excursions allowed the team to step away from the daily routine and connect while navigating the stunning coastal landscapes of Port Blair.",
        },
        {
          title: "Recharging & Visioning",
          content:
            "Between the adventures, we found time for quiet reflection. Whether it was strategic planning sessions with ocean views or sharing meals on pristine beaches, this retreat was the perfect blend of work and play. We returned to the office with a renewed sense of purpose and a stronger connection as a family.",
        },
        {
          title: "The DJ Night",
          content:
            "As the sun set, the energy shifted from exploration to celebration. We hosted an exclusive DJ night under the stars, where the team traded their walking shoes for the dance floor. It was a night filled with music, laughter, and high energy, serving as the perfect celebration of our collective efforts and the strong bond we share as a team.",
        },
      ],
      images: [
        AndamanTrip14,
        AndamanTrip18,
        AndamanTrip15,
        AndamanTrip17,
        // AndamanTrip19,
        AndamanTrip10,
        AndamanTrip16,
        AndamanTrip13,
        AndamanTrip12,
        Resort,
        Cruise,
        Cruise2,
        Cruise3,
        Cruise4,
        Cruise5,
        AndamanTrip20,
        AndamanTrip21,
        AndamanTrip22,
        // AndamanEvent,
        AndamanTrip1,
        AndamanTrip2,
        // AndamanTrip4,
        AndamanTrip9,
        AndamanTrip3,
        AndamanTrip5,
        AndamanTrip6,
        AndamanTrip11,
        FireCamp,
        // AndamanTrip12,
        // AndamanTrip14,
        // AndamanTrip15,
        // AndamanTrip16,
      ],
    },
  },
  {
    id: 19,
    slug: "moments-with-our-ceo",
    template: "template3",
    category: "internal",
    image: AnnualLeadershipSummit01,
    title: "Moments with Our CEO",
    description:
      "Celebrating the meaningful moments, shared experiences, and human connection between our CEO, Thulasidharan LG, and the EvolTech teams in India.",
    fromDate: "2026-02-14",
    toDate: "2026-02-14",
    tags: [
      { label: "Internal Event", bgColor: "#B6D2FF" },
      { label: "Leadership", bgColor: "#4A90E2" },
      { label: "Team Culture", bgColor: "#8DCAFF" },
    ],
    city: "Chennai",
    state: "TN",
    venue: "EvolTech Office",
    space: "ceo" as const,
    detailContent: {
      overview:
        "Leadership at EvolTech extends well beyond strategy, vision, and business growth. It lives equally in presence, connection, and the moments we create together as one team.",
      sections: [
        {
          title: "Connection Beyond Distance",
          content:
            "Our CEO, Thulasidharan LG, is based in the United States, but his connection to our teams in Pune and Chennai has never been defined by distance. Every visit to our India offices becomes far more than a leadership interaction. It becomes an occasion filled with genuine conversations, shared laughter, team outings, and experiences that bring our people closer together.",
        },
        {
          title: "Leadership That Feels Human",
          content:
            "Whether it is a casual dinner, a fun team activity, an evening at the theatre, a game of bowling, or simply sitting together over lunch and talking openly about life beyond work, these moments reflect something important about who we are at EvolTech. They remind us that the best leadership is not just directional. It is human.",
        },
        {
          title: "Shared Experiences, Stronger Teams",
          content:
            "In these visits, hierarchy quietly steps aside. What takes its place is warmth, accessibility, and the kind of connection that makes a team feel genuinely valued, not just as professionals, but as people. The strongest teams are not built through shared targets alone. They are built through shared experiences, shared memories, and the feeling of belonging to something that truly cares about its people.",
        },
      ],
      highlights: [
        "Meaningful interactions with CEO Thulasidharan LG",
        "Team gatherings across Pune and Chennai",
        "Shared dinners, outings, theatre visits, and bowling sessions",
        "Moments that reflect EvolTech’s people-first culture",
        "A leadership culture built on warmth, accessibility, and belonging",
      ],
      images: [
        MomentsWithCEO1,
        MomentsWithCEO2,
        MomentsWithCEO3,
        MomentsWithCEO4,
        MomentsWithCEO6,
        MomentsWithCEO7,
        // MomentsWithCEO8,
        Cruise4,
        Cruise5,
        // CEO4,
        CEO3,
        MomentsWithCEO5,
        CEO9,
      ],
    },
  },
  {
    id: 12,
    slug: "evoltech-pongal-celebration-2026",
    template: "template2",
    category: "internal",
    // showTitleBgImage: false,
    image: PongalCelebration5,
    title: "EvolTech Pongal Celebration 2026",
    description:
      "A vibrant celebration of harvest and heritage at our Chennai office, featuring traditional decor, festive food, and team festivities.",
    fromDate: "2026-01-13",
    toDate: "2026-01-13",
    city: "Chennai",
    state: "TN",
    venue: "EvolTech Office",
    detailContent: {
      overview:
        "We celebrated the festival of harvest, Pongal, at the EvolTech Space, bringing the team together to honor tradition and share in the festive spirit.",
      sections: [
        {
          title: "Tradition & Festivity",
          content:
            "The office was transformed with traditional 'Kolam' designs and sugarcane decorations. The team gathered to witness the symbolic boiling of the milk, marking prosperity and new beginnings for the year ahead.",
        },
        {
          title: "Cultural Connection",
          content:
            "Dressed in traditional attire, the team enjoyed a festive lunch served on banana leaves, fostering a deep sense of community and appreciation for our shared heritage.",
        },
      ],
      images: [
        PongalCelebration2,
        PongalCelebration1,
        PongalCelebration3,
        PongalCelebration4,
        PongalCelebration5,
        PongalCelebration7,
        PongalCelebration8,
        PongalCelebration6,
        // PongalCelebration9,
        PongalCelebration10,
        // PongalCelebration11,
        PongalCelebration12,
        PongalCelebration13,
      ],
    },
  },
  {
    id: 13,
    slug: "evoltech-christmas-celebration-2025",
    template: "template3",
    category: "internal",
    image: ChristmasCelebration1,
    bannerImage: ChristmasBanner,
    title: "EvolTech Christmas & Year-End Social",
    description:
      "Wrapping up 2025 with holiday cheer, Secret Santa surprises, and a celebration of our team's collective success.",
    fromDate: "2025-12-22",
    toDate: "2025-12-22",
    tags: [
      { label: "Internal Event", bgColor: "#B6D2FF" },
      { label: "Celebration", bgColor: "#FFBB00" },
    ],
    detailContent: {
      overview:
        "The EvolTech office transformed into a festive hub as we celebrated the holiday season and a successful close to 2025.",
      sections: [
        {
          title: "The Spirit of New Beginnings",
          content:
            "The office was transformed with traditional 'Kolam' designs and sugarcane decorations. The team gathered to witness the symbolic boiling of the milk, marking prosperity and new beginnings for the year ahead.",
        },
        {
          title: "Traditional Heritage",
          content:
            "Dressed in traditional attire, the team enjoyed a festive lunch served on banana leaves, fostering a deep sense of community and appreciation for our shared heritage. This celebration serves as a reminder of our roots and the importance of coming together as one family.",
        },
        {
          title: "Team Bonding & Games",
          content:
            "The afternoon was filled with traditional games and lighthearted competition. It wasn't just about the festival; it was about building the strong cultural foundation that makes the EvolTech team unique.",
        },
      ],
      images: [
        ChristmasCelebration1,
        ChristmasCelebration2,
        ChristmasCelebration3,
      ],
      videos: [
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7409995870210842624?compact=1",
      ],
      highlights: [
        "Secret Santa gift exchange and reveals",
        "Traditional holiday themed team lunch",
        "Year-end reflection and appreciation session",
        "Festive office decor and 'Best Dressed' celebration",
      ],
    },
  },
  {
    id: 14,
    slug: "chennai-marathon-run-for-our-national-heroes-2026",
    template: "template3",
    category: "internal",
    image: Marathon4,
    title: "Chennai Marathon - Run for our National Heroes",
    description:
      "The EvolTech team hit the streets of Chennai to run in honor of our national heroes, promoting fitness and gratitude.",
    fromDate: "2025-12-07",
    toDate: "2025-12-07",
    tags: [
      { label: "Fitness", bgColor: "#4A90E2" },
      { label: "Community", bgColor: "#FE7F00" },
      { label: "Social Cause", bgColor: "#FFBB00" },
    ],
    city: "Chennai",
    state: "TN",
    detailContent: {
      overview:
        "Our team proudly participated in the 2026 Chennai Marathon, dedicated to the theme 'Run for our National Heroes.'",
      sections: [
        {
          title: "Running for a Cause",
          content:
            "More than just a race, this marathon was a tribute to the bravery and sacrifice of our national heroes. The EvolTech team joined thousands of fellow citizens on the streets of Chennai, fueled by a collective sense of pride and a desire to give back to those who serve our nation.",
        },
        {
          title: "Team Endurance & Spirit",
          content:
            "Starting in the early morning hours, our participants pushed their physical limits across various categories. From seasoned runners to first-timers, the camaraderie was palpable as team members cheered each other on at every kilometer mark, embodying the 'one team' spirit that defines our office culture.",
        },
        {
          title: "Fitness Beyond the Desk",
          content:
            "At EvolTech, we believe that peak professional performance starts with physical well-being. This marathon was a perfect opportunity to step away from our screens, hit the pavement, and reinforce our commitment to a healthy, active lifestyle while supporting a significant social cause.",
        },
        {
          title: "A Memorable Finish",
          content:
            "Crossing the finish line wasn't just about the medals; it was about the shared experience of contributing to a larger movement. The day concluded with a team breakfast where we shared stories of the run and reflected on the importance of honoring our heroes through action.",
        },
      ],
      highlights: [
        "Team participation in 5K, 10K, and Half-Marathon categories",
        "Dedicated 'Run for our National Heroes' tribute run",
        "Early morning team warm-up and strategy session",
        "Post-marathon celebration and fitness recognition",
      ],
      images: [Marathon, Marathon1, Marathon2, Marathon4],
    },
  },
  {
    id: 16,
    slug: "evoltech-diwali-celebration-2025",
    template: "template3",
    category: "internal",
    image: DiwaliCelebration3,
    bannerImage: DiwaliBanner,
    title: "Diwali 2025 - Festival of Lights",
    description:
      "A luminous celebration at our Chennai office featuring traditional diyas, festive sweets, and a spirit of togetherness.",
    fromDate: "2025-10-16",
    toDate: "2025-10-16",
    city: "Chennai",
    state: "TN",
    venue: "EvolTech Office",
    detailContent: {
      overview:
        "EvolTech celebrated Diwali with a burst of color and light, marking the triumph of knowledge over ignorance and unity over all.",
      sections: [
        {
          title: "Illuminating the Workspace",
          content:
            "The Chennai office was transformed into a glowing hub of celebration. Team members came together to light traditional diyas and decorate the workspace with vibrant marigolds, creating an atmosphere that felt more like a home than an office.",
        },
        {
          title: "Tradition and Style",
          content:
            "It was a day of cultural pride as everyone arrived in their finest traditional wear. From intricate sarees to elegant dhotis, the diversity and style of the team added to the festive brilliance of the afternoon.",
        },
        {
          title: "Sweets, Savories, and Stories",
          content:
            "No Diwali is complete without the feast. We shared a variety of traditional sweets and savory snacks, taking a break from our engineering sprints to share stories and celebrate the personal milestones of the team.",
        },
        {
          title: "The Spirit of Gratitude",
          content:
            "As the day concluded, the leadership team expressed their gratitude for the hard work that has powered our growth throughout 2025. The event reinforced our core values: that our strength lies in our people and our shared traditions.",
        },
      ],
      highlights: [
        "Traditional Diya lighting ceremony",
        "Office-wide Rangoli competition",
        "Grand Diwali festive lunch",
        "Traditional attire 'Best Dressed' awards",
      ],
      images: [
        DiwaliCelebration1,
        DiwaliCelebration3,
        DiwaliCelebration4,
        DiwaliCelebration5,
        DiwaliCelebration6,
        DiwaliCelebration7,
      ],
    },
  },
  {
    id: 17,
    slug: "evoltech-ai-innovation-session-2026",
    template: "template3",
    category: "internal",
    image: AISession1,
    bannerImage: AiBanner,
    title: "AI & Future Tech: Internal Deep-Dive",
    description:
      "An internal learning session focused on LLM workflows, Agentic AI, and emerging AI technologies, helping our team stay updated with the latest industry advancements.",
    fromDate: "2025-11-15",
    toDate: "2025-11-15",
    city: "Chennai",
    state: "TN",
    venue: "EvolTech Office - Innovation Lab",
    detailContent: {
      overview:
        "As part of our continuous learning initiative, the team participated in a knowledge-sharing session covering modern AI workflows, Agentic AI concepts, and their practical applications in today's technology landscape.",

      sections: [
        {
          title: "LLM & AI Workflows",
          content:
            "The session explored Large Language Model (LLM) workflows, development processes, and real-world implementation approaches that are shaping modern AI solutions.",
        },
        {
          title: "Agentic AI Applications",
          content:
            "Team members gained insights into Agentic AI, MCP concepts, and emerging use cases, fostering discussions on how these technologies can drive innovation and improve business outcomes.",
        },
      ],

      highlights: [
        "Overview of LLM and AI development workflows",
        "Introduction to Agentic AI and MCP concepts",
        "Knowledge-sharing and collaborative discussions",
        "Exploration of practical AI applications",
        "Interactive Q&A and team engagement",
      ],

      images: [AiTraining1, AiTraining2, AiTraining3, AiTraining4],
    },
  },
  {
    id: 18,
    slug: "evoltech-office-opening-2025",
    template: "template3",
    category: "internal",
    image: OpeningCeremony1,
    title: "Office Opening Ceremony",
    description:
      "Commemorating the official inauguration of our Chennai operations and the beginning of a new chapter for the team.",
    fromDate: "2025-06-05",
    toDate: "2025-06-05",
    tags: [
      { label: "Internal Event", bgColor: "#B6D2FF" },
      { label: "Milestone", bgColor: "#4A90E2" },
      { label: "Team Culture", bgColor: "#8DCAFF" },
    ],
    city: "Chennai",
    state: "TN",
    venue: "EvolTech Office",
    detailContent: {
      overview:
        "We officially opened the doors to our Chennai headquarters, a space designed to foster the modularity and clean code principles that define our engineering culture.",
      sections: [
        {
          title: "A Vision Realized",
          content:
            "The opening ceremony marked the culmination of months of planning. Leadership, including Thulasi sir, joined the full team to cut the ribbon on a workspace optimized for collaborative system architecture and technical innovation.",
        },
        {
          title: "Designed for Innovation",
          content:
            "Every corner of the new office reflects our 'Architecture over Speed' philosophy. With dedicated zones for deep-focus engineering and open areas for rapid prototyping, the environment is built to support our expanding expertise in Next.js and AWS serverless infrastructure.",
        },
        {
          title: "Building the Future Together",
          content:
            "As we gathered for the inaugural lunch, the energy was focused on the road ahead. This office is not just a building; it is the foundation where our multi-tenant integrations and the CLRFI platform will continue to evolve.",
        },
      ],
      highlights: [
        "Official ribbon-cutting ceremony with leadership",
        "Inaugural walkthrough of the new engineering bays",
        "Team-wide luncheon and strategy kickoff",
        "Special presentation on the 2025-2026 technical roadmap",
      ],
      videos: [
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7363534950446350336?compact=1",
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7361492210162286592?compact=1",
      ],
      images: [
        OpeningCeremony,
        OpeningCeremony1,
        OpeningCeremony2,
        OpeningCeremony3,
        OpeningCeremony4,
        OpeningCeremony6,
      ],
    },
  },
  // ── CEO Video Episodes ───────────────────────────────────────
  {
    id: 20,
    slug: "ceo-video-building-culture",
    template: "template3",
    category: "internal",
    space: "ceo" as const,
    showInList: false,
    image: MomentsWithCEO3,
    episode: "EP 01",
    duration: "18 min",
    videoUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7434291295868690432?compact=1",
    title: "Guess the employee by their voice? 🎤",
    description:
      "Our CEO shares the principles behind building a people-first culture and why presence — physical and emotional — defines leadership at EvolTech.",
    fromDate: "2026-02-01",
    toDate: "2026-02-01",
    tags: [
      { label: "Leadership", bgColor: "#B6D2FF" },
      { label: "CEO Space", bgColor: "#4A90E2" },
    ],
    detailContent: {
      overview:
        "Leadership at EvolTech is not just about strategy — it is about showing up. In this episode, our CEO Thulasidharan LG reflects on what it truly means to build culture through presence, authenticity, and genuine connection.",
      sections: [
        {
          title: "Why Culture Starts at the Top",
          content:
            "Culture is not built through policy documents or mission statements. It is built through consistent behaviour at every level — especially at the leadership level. In this conversation, our CEO unpacks what that looks like at EvolTech and how presence has become one of our most powerful leadership tools.",
        },
      ],
    },
  },
  {
    id: 21,
    slug: "ceo-video-vision-2026",
    template: "template3",
    category: "internal",
    space: "ceo" as const,
    showInList: false,
    image: MomentsWithCEO4,
    episode: "EP 02",
    duration: "24 min",
    videoUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7429199267229204480?compact=1",
    title: "Some companies plan meetings.EvolTech plans memories. 🌍✨",
    description:
      "A candid conversation about where EvolTech is headed in 2026: the technology bets we're making, the people we're investing in, and the purpose driving every decision.",
    fromDate: "2026-03-01",
    toDate: "2026-03-01",
    tags: [
      { label: "Strategy", bgColor: "#B6D2FF" },
      { label: "CEO Space", bgColor: "#4A90E2" },
    ],
    detailContent: {
      overview:
        "2026 is a pivotal year for EvolTech. Our CEO walks through the strategic pillars guiding the company — from our technology roadmap to the talent investments that will define our next chapter.",
      sections: [
        {
          title: "Technology Bets for 2026",
          content:
            "From AI-assisted engineering workflows to expanding our AWS serverless expertise, this episode dives into the specific technology choices EvolTech is doubling down on — and why.",
        },
      ],
    },
  },
  {
    id: 22,
    slug: "ceo-video-navigating-fintech",
    template: "template3",
    category: "internal",
    space: "ceo" as const,
    showInList: false,
    image: MomentsWithCEO5,
    episode: "EP 03",
    duration: "16 min",
    videoUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7428099602337198080?compact=1",
    title: "Navigating Fintech: Insights from the Frontlines",
    description:
      "What does it take to build and sustain a fintech product in today's regulatory and market landscape? Our CEO shares hard-won insights from years on the frontlines.",
    fromDate: "2026-04-01",
    toDate: "2026-04-01",
    tags: [
      { label: "Industry", bgColor: "#B6D2FF" },
      { label: "CEO Space", bgColor: "#4A90E2" },
    ],
    detailContent: {
      overview:
        "The fintech industry is evolving faster than ever. In this episode, our CEO draws on firsthand experience navigating regulatory shifts, customer expectations, and market dynamics to share practical insights for building lasting fintech solutions.",
      sections: [
        {
          title: "What the Market Is Telling Us",
          content:
            "EvolTech operates at the intersection of technology and financial services. In this conversation, our CEO shares what the market signals are pointing to — and how EvolTech is positioning itself to respond.",
        },
      ],
    },
  },
  {
    id: 23,
    slug: "ceo-video-innovation-practice",
    template: "template3",
    category: "internal",
    space: "ceo" as const,
    showInList: false,
    image: MomentsWithCEO7,
    episode: "EP 04",
    duration: "21 min",
    videoUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7431804532759642112?compact=1",
    title: "Innovation in Practice: How EvolTech Builds for Tomorrow",
    description:
      "Innovation is not an abstract concept at EvolTech — it is a daily practice. Our CEO reveals the frameworks, mindsets, and team rituals that keep EvolTech ahead of the curve.",
    fromDate: "2026-05-15",
    toDate: "2026-05-15",
    tags: [
      { label: "Product Vision", bgColor: "#B6D2FF" },
      { label: "CEO Space", bgColor: "#4A90E2" },
    ],
    detailContent: {
      overview:
        "Innovation at EvolTech is deliberate, structured, and deeply human. In the latest episode of the Executive Video Library, our CEO breaks down the practices and principles that allow the team to consistently build ahead of the curve.",
      sections: [
        {
          title: "The EvolTech Innovation Framework",
          content:
            "From rapid prototyping sessions to cross-functional product reviews, this episode reveals the internal practices that drive innovation at EvolTech — and how anyone on the team can contribute to building for tomorrow.",
        },
      ],
    },
  },
  {
    id: 24,
    slug: "goa-team-offsite-2026",
    template: "template2",
    category: "internal",
    image: TheGOATrip,
    title: "Team Offsite — Goa",
    description:
      "The EvolTech team escaped to the sun-soaked shores of Goa for a well-deserved offsite — a perfect blend of relaxation, team bonding, and unforgettable memories.",
    fromDate: "2024-09-02",
    toDate: "2024-09-02",
    tags: [
      { label: "Team Offsite", bgColor: "#B6D2FF" },
      { label: "Goa", bgColor: "#4A90E2" },
    ],
    city: "Goa",
    state: "GA",
    venue: "Goa",
    showInList: true,
    detailContent: {
      overview:
        "Our team headed to the vibrant shores of Goa for an exciting offsite. From beach walks to team dinners under the stars, this trip was a celebration of our people and the bonds that make EvolTech special.",
      sections: [
        {
          title: "Sun, Sand & Team Spirit",
          content:
            "The Goa offsite was more than just a trip — it was a reminder of why we work so hard together. Teams from across EvolTech came together to unwind, explore, and celebrate the connections that define our culture.",
        },
        {
          title: "Evenings to Remember",
          content:
            "Late evenings by the beach, shared meals, and spontaneous adventures made this offsite one for the books. Goa gave us the perfect backdrop to step back, recharge, and return stronger.",
        },
      ],
      images: [TheGOATrip, GoaTrip1, GoaTrip2, GoaTrip3, GoaTrip4],
    },
  },
  {
    id: 25,
    slug: "pune-team-outing-2026",
    template: "template2",
    category: "internal",
    image: ThePuneTeam,
    title: "Pune Team Outing",
    description:
      "The EvolTech Pune team came together for a memorable outing — a day filled with laughter, great food, and the kind of connection that only happens when you step out of the office.",
    fromDate: "2025-04-23",
    toDate: "2025-04-23",
    tags: [
      { label: "Team Outing", bgColor: "#B6D2FF" },
      { label: "Pune", bgColor: "#4A90E2" },
    ],
    city: "Pune",
    state: "MH",
    venue: "Pune",
    showInList: true,
    detailContent: {
      overview:
        "The Pune team stepped out for a day of fun, great food, and meaningful connection. Events like these remind us that the strongest teams are not built through shared targets alone — they are built through shared experiences.",
      sections: [
        {
          title: "Pune Team Moments",
          content:
            "From laughs over lunch to memorable activities, the Pune outing was a celebration of the incredible people who make our Pune office shine. A day to step back, breathe, and enjoy each other's company.",
        },
        {
          title: "Bowling & Beyond",
          content:
            "The team rounded off the day with a friendly bowling session — competitive, noisy, and full of memories. These are the moments that build the culture we are proud of.",
        },
      ],
      images: [ThePuneTeam, BowlingWithTheTeam, DinnerWithTeam],
    },
  },
];

export const eventDetailsConfig: EventDetail[] = sortEventsByNewest(
  rawEventDetailsConfig.map((event) => ({
    ...event,
    status: getEventStatus(event.fromDate, event.toDate),
  })),
);

export const listedEventDetailsConfig: EventDetail[] =
  eventDetailsConfig.filter(shouldShowEventInList);

export const getEventBySlug = (slug: string): EventDetail | undefined => {
  return eventDetailsConfig.find((event) => event.slug === slug);
};

export const getEventsByCategory = (category: EventCategory): EventDetail[] => {
  return listedEventDetailsConfig.filter(
    (event) => event.category === category,
  );
};

export const getEventsByTemplate = (template: EventTemplate): EventDetail[] => {
  return listedEventDetailsConfig.filter(
    (event) => event.template === template,
  );
};

export const getEventsByStatus = (status: EventStatus): EventDetail[] => {
  return listedEventDetailsConfig.filter((event) => event.status === status);
};

import { StaticImageData } from "next/image";
import { EventsBg, GroupPic1, GroupPic2 } from "@/assets/images/Events";
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
} from "@/assets/images/Events/CuratedEvents";
import Alwyn from "@/assets/images/Events/atea/Alwyn.png";
import AteaBg from "@/assets/images/Events/atea/Atea-Bg.png";
import Kanchana from "@/assets/images/Events/atea/Kanchana.png";
import Nazeera from "@/assets/images/Events/atea/Nazeera.png";
import Ramesh from "@/assets/images/Events/atea/Ramesh.png";
import Thulasi from "@/assets/images/Events/atea/Thulasi.png";
import ABABanner from "@/assets/images/Events/ABA/aba-banner.png";
import AbaBg from "@/assets/images/Events/ABA/Aba-bg.png";
import Innov from "@/assets/images/Events/siia/Innov.png";
import HealthcareBanner from "@/assets/images/Events/siia/siia heathcare/siia-healthcare-banner.png";
import SiiaDubai1 from "@/assets/images/Events/siia/siia dubai/siia-dubai1.png";
import SiiaDubai2 from "@/assets/images/Events/siia/siia dubai/siia-dubai2.png";
import SiiaDubai3 from "@/assets/images/Events/siia/siia dubai/siia-dubai3.png";
import SiiaDubaiBanner from "@/assets/images/Events/siia/siia dubai/siia-dubai-banner.png";

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
}

export interface EventDetail {
  id: number;
  slug: string;
  template: EventTemplate;
  category: EventCategory;
  status: EventStatus;
  showInList?: boolean;

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
    id: 1,
    slug: "spring-exchange-2026",
    template: "template1",
    category: "conference",
    image: SpringExchange,
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
    bannerImage: SpringExchangeBanner,
    detailContent: {
      overview:
        "Spring Exchange is SIIA's relationship-driven forum for leaders across the self-insurance marketplace. The event is designed to create more room for meaningful conversations, sharper collaboration, and faster business momentum.",
      sections: [
        {
          title: "A program built to move business forward",
          content:
            "The Spring Exchange format focuses on high-value meetings, peer conversations, and targeted introductions that help attendees turn time on site into real opportunities.",
          leftHighlight: true,
        },
        {
          title: "More time for real conversations",
          content:
            "Attendees get expanded time with industry peers, decision-makers, and potential partners so meetings can go beyond introductions and become productive working sessions.",
        },
        {
          title: "Deep-dive discussions",
          content:
            "Instead of relying only on formal presentations, the program creates space for focused small-group conversations around market challenges, operating strategies, and growth opportunities.",
        },
        {
          title: "Public and private meeting space",
          content:
            "Dedicated networking areas and reservable meeting rooms make it easier for teams to host client conversations, partnership discussions, and follow-up meetings during the event.",
        },
        {
          title: "Access to capital conversations",
          content:
            "Private equity and investment participants add another layer of opportunity for organizations exploring strategic growth, minority investment, or broader capital solutions.",
        },
        {
          title: "Vendor showcases",
          content:
            "Showcase sessions give solution providers more room to demonstrate their capabilities in context and help attendees evaluate products in a more useful, business-focused setting.",
        },
        {
          title: "Career coaching and leadership development",
          content:
            "Special programming supports rising leaders with coaching, practical guidance, and time with experienced industry executives.",
        },
        {
          title: "Women in SIIA",
          content:
            "Dedicated networking time highlights and supports the women shaping the future of the self-insurance industry.",
        },
        {
          title: "Why it matters",
          content:
            "Spring Exchange remains one of the industry's strongest venues for turning introductions into action and conversations into partnerships.",
          leftHighlight: true,
        },
      ],
      ctaText: "More details",
      ctaLink: "#",
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
          title: "Theme",
          content:
            'The event centered on "ATL Ecosystem for Innovations, Insights and Impact," creating space for dialogue around technology leadership, startup growth, and the road to ATEA Atlanta Vision 2030.',
        },
        {
          title: "Why EvolTech participated",
          content:
            "Our team joined the tech panel to exchange ideas with fellow leaders and contribute perspectives on scaling operations, building smarter technology foundations, and turning innovation into measurable business value.",
        },
        {
          title: "Panel conversations",
          content:
            "The session highlighted cross-industry leadership viewpoints from technology, healthcare, networking, and startup founders shaping the next phase of growth in the region.",
        },
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
            "The conference created strong opportunities to connect with teams actively evaluating digital transformation priorities and looking for execution partners who understand operations as well as technology.",
        },
      ],
      ctaText: "Connect with us",
      ctaLink: "/contact?source=SIIA2025#contact-form",
    },
  },
  {
    id: 9,
    slug: "siia-international-conference-dubai-2026",
    template: "template2",
    category: "conference",
    image: SiiaDubai1,
    title: "SIIA International Conference - Dubai",
    description:
      "SIIA's Dubai conference connected global self-insurance, healthcare, and captive leaders around international growth, innovation, and AI-enabled operations.",
    fromDate: "2026-01-26",
    toDate: "2026-01-28",
    tags: [
      { label: "Conference", bgColor: "#FE7F00" },
      { label: "Global Forum", bgColor: "#4A90E2" },
      { label: "Self-Insurance", bgColor: "#FFBB00" },
    ],
    city: "Dubai",
    state: "UAE",
    bannerImage: SiiaDubaiBanner,
    detailContent: {
      overview:
        "The SIIA International Conference in Dubai brought together leaders from self-insurance, healthcare, and captive insurance for a distinctly global exchange of ideas, partnerships, and market perspectives.",
      sections: [
        {
          title: "A global meeting point",
          content:
            "Dubai's role as a gateway to the Middle East, Africa, and South Asia made the event especially valuable for organizations exploring international expansion, regional partnerships, and emerging models in self-insurance.",
        },
        {
          title: "What stood out",
          content:
            "Attendees explored the growing intersection of captives, benefits, TPAs, and AI-enabled administration while connecting with both regional operators and multinational organizations active in the market.",
        },
        {
          title: "Why EvolTech was there",
          content:
            "We joined the forum to engage with decision-makers navigating modern operations, data-driven workflows, and technology-enabled service delivery across complex insurance environments.",
        },
      ],
      images: [SiiaDubai3, SiiaDubai2, SiiaDubai1],
      ctaText: "More details",
      ctaLink: "https://www.siia.org/i4a/pages/index.cfm?pageid=8016",
    },
  },
  {
    id: 6,
    slug: "aba-conference-community-bankers",
    template: "template2",
    category: "conference",
    image: ABABanner,
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
    bannerImage: AbaBg,
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
    image: EventsBg,
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
            "The forum aligned closely with the challenges our healthcare clients face, especially around controlling cost, improving administrative execution, and responding to a fast-changing benefits landscape.",
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
          title: "Why EvolTech follows this space",
          content:
            "The event aligns closely with our interest in helping healthcare organizations translate data access into better workflows, lower friction, and more effective cost management.",
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
    image: AnnualLeadershipSummit01,
    title: "EvolTech Annual Leadership Summit 2025!",
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
    image: AndamanEvent,
    title: "2026 Team Meetup - Andaman Islands",
    description:
      "Our entire team escaped to the stunning Andaman Islands for an unforgettable 2026 offsite. Sun, sea, sand, and shared experiences helped us bond, recharge...",
    fromDate: "2026-01-24",
    toDate: "2026-01-26",
    tags: [
      { label: "Internal Event", bgColor: "#B6D2FF" },
      { label: "Team Bonding", bgColor: "#4A90E2" },
    ],
    detailContent: {
      overview:
        "Our entire team escaped to the stunning Andaman Islands for an unforgettable 2026 offsite.",
      sections: [
        {
          title: "",
          content:
            "Sun, sea, sand, and shared experiences helped us bond, recharge, and align on our vision for the year ahead. From team-building activities on pristine beaches to strategic planning sessions with ocean views, this retreat was the perfect blend of work and play.",
        },
      ],
      images: [AndamanEvent],
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

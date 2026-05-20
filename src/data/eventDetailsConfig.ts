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
  AndamanTrip19,
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
  Marathon4,
  Marathon2,
  Marathon3,
  Marathon,
  DiwaliCelebration7,
  DiwaliCelebration5,
  DiwaliCelebration6,
} from "@/assets/images/Events/EvoltechSpace";
import { Christmas } from "@/assets/events/video";
import {
  AmericanBankers1,
  AmericanBankers2,
  AmericanBankersBanner,
} from "@/assets/images/Events/Confrence";

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
  //   bannerImage: AmericanBankersBanner,
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
      images: [AmericanBankers1, AmericanBankers2],
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
        AndamanTrip19,
        AndamanTrip10,
        AndamanTrip16,
        AndamanTrip13,
        Resort,
        FireCamp,
        Cruise,
        Cruise2,
        Cruise3,

        // AndamanEvent,
        AndamanTrip1,
        AndamanTrip2,
        // AndamanTrip4,
        AndamanTrip9,
        AndamanTrip3,
        AndamanTrip5,
        AndamanTrip6,
        AndamanTrip7,
        AndamanTrip11,
        AndamanTrip12,
        // AndamanTrip14,
        // AndamanTrip15,
        AndamanTrip16,
        AndamanTrip17,
      ],
    },
  },
  {
    id: 19,
    slug: "moments-with-our-ceo",
    template: "template3",
    category: "internal",
    image: Cruise1,
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
    },
  },
  {
    id: 12,
    slug: "evoltech-pongal-celebration-2026",
    template: "template2",
    category: "internal",
    image: PongalCelebration2,
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
        PongalCelebration9,
        PongalCelebration10,
        PongalCelebration11,
      ],
    },
  },
  {
    id: 13,
    slug: "evoltech-christmas-celebration-2025",
    template: "template3",
    category: "internal",
    image: ChristmasCelebration1,
    title: "EvolTech Christmas & Year-End Social",
    description:
      "Wrapping up 2025 with holiday cheer, Secret Santa surprises, and a celebration of our team's collective success.",
    fromDate: "2025-12-24",
    toDate: "2025-12-24",
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
      // videos: [Christmas],
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
    image: Marathon1,
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
    title: "AI & Future Tech: Internal Deep-Dive",
    description:
      "Exploring the intersection of Generative AI, image restoration, and automated workflows in our development pipeline.",
    fromDate: "2025-11-15",
    toDate: "2025-11-15",
    city: "Chennai",
    state: "TN",
    venue: "EvolTech Office - Innovation Lab",
    detailContent: {
      overview:
        "Our engineering team gathered for an intensive session on leveraging AI tools to enhance our technical delivery and creative workflows.",
      sections: [
        {
          title: "Mastering Generative Workflows",
          content:
            "This session focused on the practical application of Generative AI within our current projects. We explored techniques for high-fidelity image restoration and cinematic video generation, aligning with our commitment to delivering professional-grade visual content for events like the EvolTech Summit.",
        },
        {
          title: "AI-Powered Development",
          content:
            "Beyond visual media, we discussed integrating AI into our coding standards. The team shared insights on using LLMs to maintain our 'Architecture over Speed' philosophy, ensuring that AI-assisted code still adheres to our strict modularity and clean code principles.",
        },
        {
          title: "Future Roadmap: CLRFI & Automation",
          content:
            "We dedicated the final segment to discussing how AI will power the next phase of the CLRFI platform. From automated lead generation to intelligent mortgage flyer processing, the session provided a roadmap for making our serverless infrastructure even more autonomous.",
        },
      ],
      highlights: [
        "Workshop on AI-driven image sharpening and studio lighting",
        "Demo of cinematic video generation from static photos",
        "Strategic planning for AI integration in the CLRFI platform",
        "Collaborative session on AI-assisted clean code practices",
      ],
    },
  },
  {
    id: 18,
    slug: "evoltech-office-opening-2025",
    template: "template3",
    category: "internal",
    image: EvolTechCeremony1,
    title: "Office Opening Ceremony",
    description:
      "Commemorating the official inauguration of our Chennai operations and the beginning of a new chapter for the team.",
    fromDate: "2025-08-14",
    toDate: "2025-08-14",
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

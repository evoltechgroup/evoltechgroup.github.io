/* ─────────────────────────────────────────────────────────────────────────────
 * EvolTech News & Insights — centralized article data
 * ───────────────────────────────────────────────────────────────────────────── */
import type { StaticImageData } from "next/image";
import GregArmsImg from "@/assets/images/Team/Members/GregArms.png";
import FiveOakInsideImg from "@/assets/effects/FiveOak-EvolTech.jpg";
import ThulasiInsideImg from "@/assets/effects/Thulasi-Banner.png";
import { GregArms } from "@/assets/effects/Banner";

export type ArticleCategory =
  | "Company News"
  | "Industry"
  | "Events"
  | "Technology"
  | "Culture";

export const CATEGORY_COLORS: Record<ArticleCategory, string> = {
  "Company News": "#FFBB00",
  Industry: "#4C96D7",
  Events: "#8DCAFF",
  Technology: "#a78bfa",
  Culture: "#34d399",
};

export type ContentBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; level: 2 | 3; id: string; content: string }
  | { type: "quote"; content: string; attribution?: string }
  | { type: "list"; items: string[] };

export interface NewsArticle {
  slug: string;
  category: ArticleCategory;
  isFeatured?: boolean;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; initials: string };
  gradient: string;
  accentColor: string;
  bannerImage?: StaticImageData;
  body: ContentBlock[];
  related: string[]; // slugs of related articles
}

export const NEWS_ARTICLES: NewsArticle[] = [
  /* ── 0. Greg Arms — Strategic Advisor ───────────────────────────────────── */
  {
    slug: "greg-arms-strategic-advisor",
    category: "Company News",
    isFeatured: true,
    title: "Introducing Our Strategic Advisor — Greg Arms",
    excerpt:
      "Strengthening our healthcare and self-insurance expertise. EvolTech welcomes Greg Arms — a 40-year veteran of the global insurance industry — as a Strategic Advisor.",
    date: "May 25, 2026",
    readTime: "5 min read",
    author: { name: "EvolTech Team", role: "Editorial", initials: "ET" },
    gradient: "from-[#0B1530] via-[#1761A0] to-[#0d3d6e]",
    accentColor: "#FFBB00",
    bannerImage: GregArms,
    body: [
      {
        type: "paragraph",
        content:
          "At EvolTech, our growth has always been anchored in two things — the right people and the right relationships. As we continue to expand our capabilities across healthcare, self-insurance, and benefits technology, we are proud to welcome Greg Arms as a Strategic Advisor to EvolTech.",
      },
      {
        type: "heading",
        level: 2,
        id: "who-is-greg-arms",
        content: "Who is Greg Arms?",
      },
      {
        type: "paragraph",
        content:
          "Greg is a 40-year veteran of the global insurance industry, with deep experience across Life, Health, Disability, and Pension sectors spanning both U.S. operations and international markets.",
      },
      {
        type: "paragraph",
        content:
          "Over the course of his distinguished career, Greg has held senior executive leadership roles at some of the world's most respected carriers and brokers:",
      },
      {
        type: "list",
        items: [
          "Chubb — Global Head of Accident & Health",
          "Marsh — Global Co-Leader of Mercer Marsh Benefits",
          "Willis Group — Chairman & CEO of Global Employee Benefits Practice",
          "UnitedHealth Group — Chief Marketing Officer & International CEO",
          "AIG — VP Life Insurance & President, Worldwide Director of Group Management Division",
        ],
      },
      {
        type: "paragraph",
        content:
          "Today, Greg serves as President & CEO of The Arms Group, where he advises organisations ranging from Insurtech start-ups to Global 500 companies on operational performance, innovation, strategic partnerships, and executive development.",
      },
      {
        type: "heading",
        level: 2,
        id: "what-gregs-advisory-brings",
        content: "What Greg's Advisory Brings to EvolTech",
      },
      {
        type: "paragraph",
        content:
          "EvolTech's leadership team, under the direction of our CEO Thulasidharan LG, has been purposefully building the expertise and relationships needed to serve healthcare and self-insurance organisations at a higher level. Greg's addition to our advisory structure reflects that commitment.",
      },
      {
        type: "paragraph",
        content:
          "His perspective gives EvolTech deeper visibility into the dynamics of the self-insured market — the challenges facing TPAs, self-funded employers, payer organisations, and healthcare service networks — and the technology gaps that organisations within this ecosystem most urgently need to close.",
      },
      {
        type: "paragraph",
        content:
          "As EvolTech continues to expand its technology-enabled operational solutions for healthcare and benefits organisations, Greg's industry insight and relationships will help us stay sharply aligned with where the market is heading — and build solutions that genuinely serve it.",
      },
      {
        type: "heading",
        level: 2,
        id: "gregs-current-advisory-engagements",
        content: "Greg's Current Advisory Engagements",
      },
      {
        type: "paragraph",
        content:
          "Beyond his role with EvolTech, Greg brings active advisory experience from across the healthcare and insurance technology space:",
      },
      {
        type: "list",
        items: [
          "OutcomeRx — Senior Advisor; an insurance management services company focused on cell and gene therapy coverages and warranty solutions",
          "INTERVENT International — Advisor; a firm offering behavioural change and population health management solutions backed by over 100 peer-reviewed scientific studies",
          "Cavo Health — Advisor; a technology company delivering AI-powered word matching engines to optimise healthcare spending",
        ],
      },
      {
        type: "paragraph",
        content:
          "Greg is also an active member of the Self-Insurance Institute of America (SIIA), where he has served as Program Chair for SIIA's international conference, and participates actively in the World Captives Forum, the South Carolina Captive Insurance Association, and the World Affairs Council of Charleston.",
      },
      {
        type: "heading",
        level: 2,
        id: "a-message-from-our-ceo",
        content: "A Message from Our CEO",
      },
      {
        type: "quote",
        content:
          "As EvolTech deepens its focus on healthcare and the self-insurance ecosystem, having an advisor of Greg's calibre — with his global carrier experience, his active industry presence, and his genuine understanding of where this market is headed — is genuinely valuable to how we think and build. We are glad to have him working alongside our leadership team.",
        attribution: "Thulasidharan LG, CEO, EvolTech",
      },
      {
        type: "heading",
        level: 2,
        id: "looking-ahead",
        content: "Looking Ahead",
      },
      {
        type: "paragraph",
        content:
          "This is a meaningful step in EvolTech's journey. Our focus remains on building technology and operational solutions that help healthcare and benefits organisations work better, faster, and smarter. Greg's advisory role strengthens our ability to do that with greater depth and market alignment. We look forward to sharing more about EvolTech's expanding capabilities in this space in the months ahead.",
      },
    ],
    related: ["fiveoak-evoltech-partnership", "thulasidharan-ceo-announcement"],
  },

  /* ── Fiveoak & EvolTech Partnership ─────────────────────────────────────── */
  {
    slug: "fiveoak-evoltech-partnership",
    category: "Company News",
    title:
      "EvolTech & Fiveoak: Expanding and Elevating Our Partnership to New Markets",
    excerpt:
      "Our partnership with Fiveoak is reaching new markets and new customers. Together, we\u2019re delivering cutting-edge Virtual AI Assistant solutions transforming customer engagement and brand impact across retail, law, banking, and healthcare.",
    date: "April 15, 2026",
    readTime: "3 min read",
    author: { name: "EvolTech Team", role: "Editorial", initials: "ET" },
    gradient: "from-[#1a3a5c] to-[#0B0F2B]",
    accentColor: "#4C96D7",
    bannerImage: FiveOakInsideImg,
    body: [
      {
        type: "paragraph",
        content:
          "Our partnership with Fiveoak is reaching new markets and new customers, and we\u2019re excited to share this next phase of our journey together!",
      },
      {
        type: "paragraph",
        content:
          "Over the years, Fiveoak has been a trusted leader in helping organizations build stronger brand reputations. Now, with the combined force of Fiveoak and EvolTech, we\u2019re amplifying our go-to-market strategy to deliver cutting-edge Virtual AI Assistant solutions that are already transforming customer engagement and brand impact for retail and law firm customers today.",
      },
      {
        type: "paragraph",
        content:
          "Together, we\u2019re geared up to extend these capabilities across industries including banking, credit unions, healthcare, and insurance.",
      },
      {
        type: "heading",
        level: 2,
        id: "together-fiveoak-new-heights",
        content: "Together, We\u2019re Taking Fiveoak to New Heights",
      },
      {
        type: "paragraph",
        content:
          "Our expanded collaboration is focused on delivering impactful outcomes such as:",
      },
      {
        type: "list",
        items: [
          "Elevated brand recognition in competitive markets",
          "Continuous improvement in customer experiences through AI",
          "Deepened customer engagement and improved retention",
          "Transforming metrics into meaningful and actionable insights",
        ],
      },
      {
        type: "quote",
        content:
          "At EvolTech, our mission has always been to bring innovation and measurable impact to our customers and partners. Extending our collaboration with Fiveoak allows us to go further, delivering AI-powered engagement and reputation management that elevates customer experience and insights across banking, credit unions, healthcare, insurance, and retail industries.",
        attribution: "Thulasidharan LG, CEO of EvolTech",
      },
      {
        type: "quote",
        content:
          "We\u2019re excited to continue our journey with EvolTech. Together, we\u2019re combining Fiveoak\u2019s AI-driven customer engagement platform with EvolTech\u2019s deep industry expertise to help organizations build stronger relationships, unlock meaningful data insights, and create measurable value for their customers.",
        attribution: "Trey Richards, CEO of Fiveoak",
      },
      {
        type: "paragraph",
        content:
          "We are excited about our shared vision to reshape customer experience and elevate brand excellence across industries.",
      },
    ],
    related: ["greg-arms-strategic-advisor", "thulasidharan-ceo-announcement"],
  },

  /* ── CEO Announcement ───────────────────────────────────────────────────── */
  {
    slug: "thulasidharan-ceo-announcement",
    category: "Company News",
    title:
      "The Wait Is Over \u2014 Welcoming Thulasidharan LG as CEO of EvolTech",
    excerpt:
      "Having supported EvolTech as a Strategic Advisor, Thulasidharan LG now steps into the CEO role with a clear focus, determination, and a commitment to spark creativity while upholding our people-first culture.",
    date: "August 1, 2025",
    readTime: "3 min read",
    author: { name: "EvolTech Team", role: "Editorial", initials: "ET" },
    gradient: "from-[#2d1a5c] to-[#0B0F2B]",
    accentColor: "#a78bfa",
    bannerImage: ThulasiInsideImg,
    body: [
      {
        type: "paragraph",
        content:
          "We\u2019re excited to welcome Thulasidharan LG as the new Chief Executive Officer of EvolTech, effective August 1, 2025.",
      },
      {
        type: "paragraph",
        content:
          "Having supported EvolTech as a Strategic Advisor, he now steps into the CEO role with a clear focus, determination, and a commitment to spark creativity while upholding our people-first culture.",
      },
      {
        type: "heading",
        level: 2,
        id: "his-vision",
        content: "His Vision",
      },
      {
        type: "paragraph",
        content:
          "To build a company that leads with integrity, delivers real innovation, and creates a positive impact where technology solves practical business problems while taking care of the people who make it all possible.",
      },
      {
        type: "heading",
        level: 2,
        id: "his-mission",
        content: "His Mission",
      },
      {
        type: "list",
        items: [
          "To nurture a culture rooted in trust, agility, and continuous learning",
          "To empower our teams, deepen client partnerships, and deliver meaningful, measurable outcomes",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "our-people-our-culture",
        content: "Our People, Our Culture",
      },
      {
        type: "paragraph",
        content: "EvolTech\u2019s greatest strength is its people.",
      },
      {
        type: "paragraph",
        content:
          "L.G. Thulasidharan believes that true leadership is about creating space for others to lead \u2014 by listening deeply, building trust, and choosing purpose over position.",
      },
      {
        type: "quote",
        content:
          "The future isn\u2019t something we wait for \u2014 it\u2019s something we build together.",
        attribution: "L.G. Thulasidharan, CEO, EvolTech",
      },
      {
        type: "paragraph",
        content:
          "We look forward to what\u2019s ahead and to building it together.",
      },
    ],
    related: ["greg-arms-strategic-advisor", "fiveoak-evoltech-partnership"],
  },
];

export function getArticle(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.slug === slug);
}

export function getRelated(slugs: string[]): NewsArticle[] {
  return slugs
    .map((s) => NEWS_ARTICLES.find((a) => a.slug === s))
    .filter(Boolean) as NewsArticle[];
}

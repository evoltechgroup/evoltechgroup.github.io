/* ─────────────────────────────────────────────────────────────────────────────
 * EvolTech News & Insights — centralized article data
 * ───────────────────────────────────────────────────────────────────────────── */
import type { StaticImageData } from "next/image";
import GregArmsImg from "@/assets/images/Team/Members/GregArms.png";
import Thulasi from "@/assets/images/Team/Members/Thulasi.png";
import {
  GregArms,
  TenthYearBanner,
  ThulasiBanner1,
  FiveOakEvolTech,
  TenthYearBanner1,
} from "@/assets/effects/Banner";

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
  /** Small square-friendly image used in related-story thumbnails. Falls back to bannerImage. */
  coverImage?: StaticImageData;
  body: ContentBlock[];
  related: string[]; // slugs of related articles
}

export const NEWS_ARTICLES: NewsArticle[] = [
  /* ── 0. Greg Arms — Strategic Advisor ───────────────────────────────────── */
  {
    slug: "greg-arms-strategic-advisor",
    category: "Company News",
    isFeatured: true,
    title: "EvolTech Announces Greg Arms as Strategic Advisor",
    excerpt:
      "EvolTech welcomes Greg Arms, a 40-year insurance industry veteran, as Strategic Advisor to support the company’s continued growth and market expansion.",
    date: "May 25, 2026",
    readTime: "4 min read",
    author: { name: "EvolTech Team", role: "Editorial", initials: "ET" },
    gradient: "from-[#0B1530] via-[#1761A0] to-[#0d3d6e]",
    accentColor: "#FFBB00",
    bannerImage: GregArms,
    coverImage: GregArmsImg,

    body: [
      {
        type: "paragraph",
        content:
          "EvolTech is pleased to announce the appointment of Greg Arms as Strategic Advisor, supporting the company’s continued growth and market expansion.",
      },

      {
        type: "paragraph",
        content:
          "Greg is a 40-year insurance industry veteran with deep experience in the Life, Health, and Pension insurance sectors, both in the US and internationally. Throughout his career, he has held senior leadership roles at some of the industry’s foremost insurance carriers and brokers.",
      },

      {
        type: "paragraph",
        content:
          "In his advisory role, Greg will work closely with EvolTech’s leadership team to provide strategic insight into market trends, operational challenges, and the evolving needs of organizations within the insurance and healthcare ecosystem.",
      },

      {
        type: "heading",
        level: 2,
        id: "greg-arms-statement",
        content: "A Message from Greg Arms",
      },

      {
        type: "quote",
        content:
          "EvolTech has developed proven technology solutions that enhance operational excellence and customer service for the organizations they support. It is exciting to work with such outstanding and thoughtful leaders, along with highly capable teams that design and deliver truly innovative outcomes for their clients.",
        attribution: "Greg Arms, Strategic Advisor, EvolTech",
      },

      {
        type: "heading",
        level: 2,
        id: "ceo-message",
        content: "A Message from Our CEO",
      },

      {
        type: "quote",
        content:
          "We are thrilled to welcome Greg to EvolTech as a Strategic Advisor. His strategic perspective, global experience, and strong relationships across multiple insurance and healthcare-related sectors will help EvolTech better address the evolving needs of organizations across industries and geographies.",
        attribution: "LG Thulasidharan, CEO, EvolTech",
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
          "Greg’s appointment reflects EvolTech’s broader commitment to bringing together experienced industry leaders who can help guide the company’s strategic direction and foster meaningful collaboration across the insurance and healthcare ecosystem.",
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
    bannerImage: FiveOakEvolTech,
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
    bannerImage: ThulasiBanner1,
    coverImage: Thulasi,
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
  {
    slug: "10-years-of-evoltech",
    category: "Company News",
    isFeatured: true,

    title: "The Story of EvolTech — 10 Years of Evolution",

    excerpt:
      "From a small passionate team in 2015 to a decade of innovation, growth, and transformation — celebrating 10 years of EvolTech.",

    date: "June 10, 2026",
    readTime: "4 min read",

    author: {
      name: "EvolTech Team",
      role: "Editorial",
      initials: "ET",
    },

    gradient: "from-[#0B1530] via-[#1761A0] to-[#0d3d6e]",
    accentColor: "#4C96D7",
    bannerImage: TenthYearBanner1,

    body: [
      {
        type: "heading",
        level: 2,
        id: "where-it-began",
        content: "Where It Began",
      },

      {
        type: "paragraph",
        content:
          "In 2015, EvolTech began as a small, passionate team supporting the U.S. retail sector with a simple vision — to solve real business challenges through technology.",
      },

      {
        type: "paragraph",
        content:
          "What followed was a journey built through persistence, collaboration, and continuous learning. Every challenge helped shape the foundation of who we are today.",
      },

      {
        type: "heading",
        level: 2,
        id: "our-evolution",
        content: "Our Evolution",
      },

      {
        type: "paragraph",
        content:
          "The turning point came in 2020, when the world paused and businesses were forced to rethink the future.",
      },

      {
        type: "paragraph",
        content: "For EvolTech, this became an opportunity to evolve.",
      },

      {
        type: "paragraph",
        content:
          "By 2022, our transformation accelerated as we expanded beyond delivery into innovation — building products, developing IP, and creating technology-led solutions that deliver measurable business impact.",
      },

      {
        type: "paragraph",
        content:
          "In 2024, our growth was also reflected in our culture, with 55% women representation, reinforcing our belief that strong innovation is built by empowered and diverse teams.",
      },

      {
        type: "heading",
        level: 2,
        id: "a-new-chapter",
        content: "A New Chapter",
      },

      {
        type: "paragraph",
        content:
          "As we entered our 10th year, EvolTech welcomed a major leadership milestone.",
      },

      {
        type: "paragraph",
        content:
          "In 2025, Thulasidharan LG stepped in as CEO, bringing strategic vision, operational leadership, and a renewed focus on scaling EvolTech’s next phase of growth and transformation.",
      },

      {
        type: "paragraph",
        content:
          "This marked the beginning of an exciting new chapter for the company.",
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
          "Ten years is an important milestone — but for EvolTech, it’s just the beginning.",
      },

      {
        type: "paragraph",
        content:
          "As we move forward, our commitment remains unchanged: building meaningful technology solutions, strengthening client partnerships, empowering our people, and creating lasting impact.",
      },

      {
        type: "paragraph",
        content:
          "To every client, partner, employee, advisor, and supporter who has been part of this journey — thank you.",
      },

      {
        type: "quote",
        content:
          "Here’s to the next decade of innovation, growth, and transformation.",
        attribution: "EvolTech — Together, We Evolve.",
      },
    ],

    related: ["greg-arms-strategic-advisor", "thulasidharan-ceo-announcement"],
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

/* ─────────────────────────────────────────────────────────────────────────────
 * EvolTech News & Insights — centralized article data
 * ───────────────────────────────────────────────────────────────────────────── */
import type { StaticImageData } from "next/image";
import GregArmsImg from "@/assets/images/Team/Members/GregArms.png";

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
    bannerImage: GregArmsImg,
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
    related: [
      "siia-spring-exchange-2026",
      "siia-price-transparency-2026",
      "ai-innovation-deep-dive",
    ],
  },

  /* ── 1. SIIA Spring Exchange 2026 ────────────────────────────────────────── */
  {
    slug: "siia-spring-exchange-2026",
    category: "Events",
    isFeatured: true,
    title:
      "EvolTech at SIIA Spring Exchange 2026 — Conversations That Drive Business Forward",
    excerpt:
      "We joined the self-insurance industry's most relationship-driven forum in New Orleans. Here's what stood out, who we met, and why it mattered for the organizations we work with.",
    date: "April 2, 2026",
    readTime: "4 min read",
    author: { name: "EvolTech Team", role: "Editorial", initials: "ET" },
    gradient: "from-[#1761A0] via-[#0d3d6e] to-[#050d1f]",
    accentColor: "#4C96D7",
    body: [
      {
        type: "paragraph",
        content:
          "SIIA Spring Exchange is one of those events where the value isn't on the mainstage — it's in the hallway conversations, the dinner tables, and the moments between sessions where people stop performing and start talking. We brought a small, focused team to New Orleans this year and left with exactly the kind of context that shapes how we work with the organizations in this space.",
      },
      {
        type: "heading",
        level: 2,
        id: "conversations-that-matter",
        content: "The conversations that matter most",
      },
      {
        type: "paragraph",
        content:
          "Self-insurance is a space built on trust and long-term relationships. The organizations that lead here — the TPAs, stop-loss carriers, captive managers — operate in a world where reputation travels faster than any marketing campaign. What we consistently heard was a desire for partners who understand the operational reality, not just the technology pitch. That's the conversation we're built for.",
      },
      {
        type: "heading",
        level: 2,
        id: "three-things-we-heard",
        content: "Three things we heard on the floor",
      },
      {
        type: "list",
        items: [
          "Data integrity is the core problem — organizations aren't lacking data, they're struggling to trust it.",
          "Compliance workloads are crowding out strategic thinking at mid-size TPAs.",
          "AI conversations have matured: people are past the hype and asking about specific, provable workflows.",
        ],
      },
      {
        type: "quote",
        content:
          "The gap between compliance and operational reality is where strategy happens — and where most vendors stop listening.",
        attribution: "Overheard at SIIA Spring Exchange, New Orleans",
      },
      {
        type: "paragraph",
        content:
          "We'll be following up on several of the relationships we started here. If you were at the Exchange and want to continue a conversation, reach out directly — we'd rather have a focused call than exchange brochures.",
      },
    ],
    related: [
      "aba-community-bankers-recap",
      "siia-price-transparency-2026",
      "growatl-2025-panel",
    ],
  },

  /* ── 2. ABA Community Bankers 2026 ───────────────────────────────────────── */
  {
    slug: "aba-community-bankers-recap",
    category: "Events",
    title: "Connecting with Community Banking Leaders at ABA Orlando 2026",
    excerpt:
      "The ABA Conference for Community Bankers gave us direct access to executives navigating digital transformation. We brought practical technology conversations — here's what we heard back.",
    date: "February 18, 2026",
    readTime: "3 min read",
    author: { name: "EvolTech Team", role: "Editorial", initials: "ET" },
    gradient: "from-[#1a3a5c] to-[#0B0F2B]",
    accentColor: "#4C96D7",
    body: [
      {
        type: "paragraph",
        content:
          "Community banks occupy a critical but often underserved position in the US financial ecosystem. They know their customers deeply but frequently lack the technical infrastructure to compete with larger institutions on digital experience. The ABA Conference brought together a cross-section of leaders working through exactly this tension.",
      },
      {
        type: "heading",
        level: 2,
        id: "technology-moment",
        content: "Why community banking is having a technology moment",
      },
      {
        type: "paragraph",
        content:
          "Regulatory pressure, rising customer expectations, and the expansion of fintech alternatives have pushed technology investment to the top of the priority list for community bank executives. What we found in Orlando was not resistance to change — but a healthy skepticism about where to start and who to trust. That skepticism, in our experience, is a sign of a mature buyer.",
      },
      {
        type: "heading",
        level: 2,
        id: "what-executives-told-us",
        content: "What executives told us",
      },
      {
        type: "paragraph",
        content:
          "Most of the conversations circled around two themes: reducing operational drag in back-office processes and building digital touchpoints that don't feel generic. Several leaders mentioned that their core banking system vendors weren't moving fast enough. That gap — between the platform and the customer-facing layer — is exactly where we do our best work.",
      },
      {
        type: "quote",
        content:
          "We don't need another platform. We need someone who can make what we already have work the way it should.",
        attribution: "Community bank EVP, ABA Orlando 2026",
      },
      {
        type: "paragraph",
        content:
          "We came away from Orlando with a clearer picture of where the industry is heading and a set of relationships that we're looking forward to building on.",
      },
    ],
    related: [
      "siia-spring-exchange-2026",
      "siia-price-transparency-2026",
      "ai-innovation-deep-dive",
    ],
  },

  /* ── 3. EvolTech Office 2026 ─────────────────────────────────────────────── */
  {
    slug: "evoltech-office-2026",
    category: "Company News",
    title: "EvolTech 2.0 — A New Space Built for the Next Chapter",
    excerpt:
      "We officially opened our expanded Chennai office with a traditional blessing ceremony. More space, more energy, and a stronger foundation for the team building the future of EvolTech.",
    date: "March 9, 2026",
    readTime: "2 min read",
    author: { name: "EvolTech Team", role: "Editorial", initials: "ET" },
    gradient: "from-[#2d1a5c] to-[#0B0F2B]",
    accentColor: "#8DCAFF",
    body: [
      {
        type: "paragraph",
        content:
          "Every company has a moment when its physical space stops matching its ambitions. For EvolTech, that moment arrived last year when our Chennai team outgrew what we'd built. This March, we inaugurated our new space with a traditional blessing ceremony — a moment that felt earned, not rushed.",
      },
      {
        type: "heading",
        level: 2,
        id: "designed-for-how-we-work",
        content: "A space designed for how we actually work",
      },
      {
        type: "paragraph",
        content:
          "The new office was designed with collaboration and deep work in mind — not as competing goals, but as modes that the space supports intentionally. Dedicated focus zones sit alongside open collaboration areas. The team helped shape the layout, and you can feel that in how naturally people move through it.",
      },
      {
        type: "heading",
        level: 2,
        id: "what-this-represents",
        content: "What this represents",
      },
      {
        type: "paragraph",
        content:
          "We've grown meaningfully over the past three years — in team size, in client scope, and in the complexity of the work we take on. The new space is a reflection of that growth and a foundation for what comes next. It's also a statement of intent: we're building something long-term here.",
      },
      {
        type: "quote",
        content:
          "Spaces shape culture. We wanted this office to reflect who we are — thoughtful, collaborative, and genuinely invested in the work.",
      },
    ],
    related: [
      "andaman-team-meetup",
      "growatl-2025-panel",
      "ai-innovation-deep-dive",
    ],
  },

  /* ── 4. SIIA Price Transparency 2026 ─────────────────────────────────────── */
  {
    slug: "siia-price-transparency-2026",
    category: "Industry",
    title: "Price Transparency in Healthcare: What the Forum Made Clear",
    excerpt:
      "SIIA's Price Transparency Forum surfaced real tension between compliance demands and operational reality. The organizations leading the shift are the ones using data — not just collecting it.",
    date: "February 27, 2026",
    readTime: "5 min read",
    author: { name: "EvolTech Team", role: "Editorial", initials: "ET" },
    gradient: "from-[#0d4a3a] to-[#0B0F2B]",
    accentColor: "#FFBB00",
    body: [
      {
        type: "paragraph",
        content:
          "Price transparency mandates have been law for years now, but compliance rates remain inconsistent — and the quality of what's disclosed varies enormously. The SIIA Price Transparency Forum in Jacksonville brought together stakeholders from across the self-funded ecosystem to examine what's working, what isn't, and what comes next.",
      },
      {
        type: "heading",
        level: 2,
        id: "compliance-burden",
        content: "The compliance burden is real — but it's not the whole story",
      },
      {
        type: "paragraph",
        content:
          "Most of the organizations in the room have cleared the basic compliance bar. The harder conversation is about what to do with the data once you're producing it. Machine-readable files are only valuable if someone is reading them — and most employers and plan sponsors still lack the tools or expertise to act on what's disclosed.",
      },
      {
        type: "heading",
        level: 2,
        id: "where-the-opportunity-lies",
        content: "Where the opportunity lies",
      },
      {
        type: "paragraph",
        content:
          "The TPAs and benefit administrators that are pulling ahead aren't just compliant — they're building analytical capabilities on top of the transparency data. They're comparing negotiated rates, identifying outliers, and bringing that intelligence to employer clients as a value-add. That's the shift from compliance to competitive advantage.",
      },
      {
        type: "quote",
        content:
          "Transparency without analysis is just paperwork. The organizations winning here are turning mandate into insight.",
        attribution: "Forum panelist, Jacksonville 2026",
      },
      {
        type: "paragraph",
        content:
          "EvolTech works with several organizations navigating exactly this challenge — building operational capacity to move from data collection to data use. If this is a conversation your organization is having, we're happy to share what we've learned.",
      },
    ],
    related: [
      "siia-spring-exchange-2026",
      "aba-community-bankers-recap",
      "ai-innovation-deep-dive",
    ],
  },

  /* ── 5. AI Innovation Deep-Dive ──────────────────────────────────────────── */
  {
    slug: "ai-innovation-deep-dive",
    category: "Technology",
    title: "Inside Our AI Deep-Dive: From Generative Workflows to Smarter Code",
    excerpt:
      "Our engineering team ran an intensive session on integrating AI into delivery pipelines and creative workflows. This is what we're building toward — and how we're keeping quality at the center.",
    date: "November 16, 2025",
    readTime: "6 min read",
    author: {
      name: "EvolTech Engineering",
      role: "Technology",
      initials: "EE",
    },
    gradient: "from-[#1a1050] to-[#0B0F2B]",
    accentColor: "#a78bfa",
    body: [
      {
        type: "paragraph",
        content:
          "There's a lot of noise in the AI conversation right now — most of it generated by vendors selling outcomes they can't deliver. Our internal AI deep-dive session was designed as an antidote to that: a focused, hands-on examination of where AI tools actually improve how we work and where the hype outpaces the reality.",
      },
      {
        type: "heading",
        level: 2,
        id: "setting-the-scope",
        content: "Setting the scope right",
      },
      {
        type: "paragraph",
        content:
          "We scoped the session around three specific questions: Where does AI reduce friction in delivery? Where does it introduce new risk? And where is human judgment irreplaceable? Answering these with specificity — rather than abstractly — is what separates useful AI adoption from performative adoption.",
      },
      {
        type: "heading",
        level: 2,
        id: "where-ai-helped",
        content: "Where AI actually helped us",
      },
      {
        type: "list",
        items: [
          "Code review acceleration — catching patterns and edge cases that reviewers sometimes miss under time pressure.",
          "Documentation generation — producing first drafts of technical specs from existing code, which engineers then refine.",
          "Creative concepting — using generative tools to rapidly explore visual directions before committing resources.",
          "Client communication drafts — accelerating the iteration cycle on complex written deliverables.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "what-we-are-watching",
        content: "What we're watching",
      },
      {
        type: "paragraph",
        content:
          "The most interesting near-term development is AI that works within existing toolchains rather than requiring new platforms. The tools that win in enterprise contexts will be the ones that integrate rather than replace. We're evaluating several of these closely.",
      },
      {
        type: "quote",
        content:
          "The question isn't whether to use AI — it's whether you're using it where it actually earns its place.",
        attribution: "EvolTech Engineering Team",
      },
    ],
    related: [
      "evoltech-office-2026",
      "siia-price-transparency-2026",
      "growatl-2025-panel",
    ],
  },

  /* ── 6. GrowATL 2025 ─────────────────────────────────────────────────────── */
  {
    slug: "growatl-2025-panel",
    category: "Events",
    title: "GrowATL 2025 — EvolTech on the Technology Panel",
    excerpt:
      "We joined ATEA Atlanta's flagship summit to talk about scaling operations, building smarter tech foundations, and turning innovation into measurable value. Here's our perspective.",
    date: "September 6, 2025",
    readTime: "3 min read",
    author: { name: "EvolTech Team", role: "Editorial", initials: "ET" },
    gradient: "from-[#3a1a10] to-[#0B0F2B]",
    accentColor: "#FFBB00",
    body: [
      {
        type: "paragraph",
        content:
          "GrowATL is one of the few summits in the region that puts technology leadership in conversation with business strategy — not as separate tracks, but as the same conversation. We joined the technology panel this year to share how EvolTech thinks about the relationship between infrastructure, process, and growth.",
      },
      {
        type: "heading",
        level: 2,
        id: "what-the-panel-discussed",
        content: "What the panel discussed",
      },
      {
        type: "paragraph",
        content:
          "The panel covered a range of ground — from the practical challenges of scaling operations in mid-size companies to the strategic questions around when to build versus buy. We tried to bring a perspective grounded in what actually works in the field, not what looks good in a pitch deck.",
      },
      {
        type: "heading",
        level: 2,
        id: "our-core-message",
        content: "Our core message",
      },
      {
        type: "paragraph",
        content:
          "The companies that scale well don't necessarily have better technology — they have better operational discipline around the technology they do have. Clarity of process, quality of data, and consistency of execution are the compounding advantages that most growth-stage companies underinvest in.",
      },
      {
        type: "quote",
        content:
          "Sustainable scale isn't a technology problem. It's a systems problem — and systems start with people and process, not software.",
        attribution: "EvolTech at GrowATL 2025",
      },
    ],
    related: [
      "siia-spring-exchange-2026",
      "aba-community-bankers-recap",
      "evoltech-office-2026",
    ],
  },

  /* ── 7. Andaman Team Meetup ──────────────────────────────────────────────── */
  {
    slug: "andaman-team-meetup",
    category: "Culture",
    title: "Andaman 2026 — Why We Make Time for the Team",
    excerpt:
      "The entire EvolTech team escaped to the Andaman Islands for three days of sun, sea, and shared experiences. This isn't a retreat report — it's a reminder of why belonging matters.",
    date: "January 27, 2026",
    readTime: "4 min read",
    author: { name: "EvolTech Team", role: "Editorial", initials: "ET" },
    gradient: "from-[#0d3a4a] to-[#0B0F2B]",
    accentColor: "#34d399",
    body: [
      {
        type: "paragraph",
        content:
          "We took the whole team to the Andaman Islands in January — three days away from screens, client deliverables, and the ordinary rhythm of work. It's an investment we make deliberately, because we believe the quality of a team's relationships is inseparable from the quality of their work.",
      },
      {
        type: "heading",
        level: 2,
        id: "why-we-go",
        content: "Why we go",
      },
      {
        type: "paragraph",
        content:
          "There's something that happens when you take people out of their professional context and put them somewhere genuinely beautiful. The hierarchies flatten, the conversations go deeper, and you remember that the people you work with every day are genuinely interesting humans. We come back knowing each other better — and that shows in how we collaborate.",
      },
      {
        type: "heading",
        level: 2,
        id: "three-days",
        content: "What three days actually looked like",
      },
      {
        type: "paragraph",
        content:
          "Snorkeling, beach walks, long meals, and conversations that had nothing to do with work — and some that eventually did, but in the best way. By the last evening, people were talking about where the company is headed and what they want to build next. That's the kind of conversation you can't schedule into a calendar.",
      },
      {
        type: "quote",
        content:
          "You can't manufacture culture. But you can create the conditions for it — and then get out of the way.",
        attribution: "EvolTech, Andaman Islands 2026",
      },
    ],
    related: [
      "evoltech-office-2026",
      "growatl-2025-panel",
      "siia-spring-exchange-2026",
    ],
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

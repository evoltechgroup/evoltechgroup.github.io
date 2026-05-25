import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { absoluteUrl } from "../seo.config";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Newspaper,
  Tag,
} from "lucide-react";
import GregArmsImg from "@/assets/images/Team/Members/GregArms.png";

/* ─────────────────────────────────────────────────────────────────────────────
 * Static data — replace with a CMS/fetch when ready
 * ───────────────────────────────────────────────────────────────────────────── */
type ArticleCategory =
  | "Company News"
  | "Industry"
  | "Events"
  | "Technology"
  | "Culture";

interface Article {
  id: string;
  category: ArticleCategory;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string; // Tailwind gradient classes for placeholder image
  accentColor: string;
  image?: StaticImageData;
  href: string;
}

const FEATURED: Article = {
  id: "greg-arms-strategic-advisor",
  category: "Company News",
  title: "Introducing Our Strategic Advisor \u2014 Greg Arms",
  excerpt:
    "Strengthening our healthcare and self-insurance expertise. EvolTech welcomes Greg Arms \u2014 a 40-year veteran of the global insurance industry \u2014 as a Strategic Advisor.",
  date: "May 25, 2026",
  readTime: "5 min read",
  gradient: "from-[#0B1530] via-[#1761A0] to-[#0d3d6e]",
  accentColor: "#FFBB00",
  image: GregArmsImg,
  href: "/news/greg-arms-strategic-advisor",
};

const ARTICLES: Article[] = [
  {
    id: "aba-community-bankers-recap",
    category: "Events",
    title: "Connecting with Community Banking Leaders at ABA Orlando 2026",
    excerpt:
      "The ABA Conference for Community Bankers gave us direct access to executives navigating digital transformation. We brought practical technology conversations — here's what we heard back.",
    date: "February 18, 2026",
    readTime: "3 min read",
    gradient: "from-[#1a3a5c] to-[#0B0F2B]",
    accentColor: "#4C96D7",
    href: "/news/aba-community-bankers-recap",
  },
  {
    id: "evoltech-office-2026",
    category: "Company News",
    title: "EvolTech 2.0 — A New Space Built for the Next Chapter",
    excerpt:
      "We officially opened our expanded Chennai office with a traditional blessing ceremony. More space, more energy, and a stronger foundation for the team building the future of EvolTech.",
    date: "March 9, 2026",
    readTime: "2 min read",
    gradient: "from-[#2d1a5c] to-[#0B0F2B]",
    accentColor: "#8DCAFF",
    href: "/news/evoltech-office-2026",
  },
  {
    id: "siia-price-transparency-2026",
    category: "Industry",
    title: "Price Transparency in Healthcare: What the Forum Made Clear",
    excerpt:
      "SIIA's Price Transparency Forum surfaced real tension between compliance demands and operational reality. The organizations leading the shift are the ones using data — not just collecting it.",
    date: "February 27, 2026",
    readTime: "5 min read",
    gradient: "from-[#0d4a3a] to-[#0B0F2B]",
    accentColor: "#FFBB00",
    href: "/news/siia-price-transparency-2026",
  },
  {
    id: "ai-innovation-deep-dive",
    category: "Technology",
    title: "Inside Our AI Deep-Dive: From Generative Workflows to Smarter Code",
    excerpt:
      "Our engineering team ran an intensive session on integrating AI into delivery pipelines and creative workflows. This is what we're building toward — and how we're keeping quality at the center.",
    date: "November 16, 2025",
    readTime: "6 min read",
    gradient: "from-[#1a1050] to-[#0B0F2B]",
    accentColor: "#4C96D7",
    href: "/news/ai-innovation-deep-dive",
  },
  {
    id: "growatl-2025-panel",
    category: "Events",
    title: "GrowATL 2025 — EvolTech on the Technology Panel",
    excerpt:
      "We joined ATEA Atlanta's flagship summit to talk about scaling operations, building smarter tech foundations, and turning innovation into measurable value. Here's our perspective.",
    date: "September 6, 2025",
    readTime: "3 min read",
    gradient: "from-[#3a1a10] to-[#0B0F2B]",
    accentColor: "#FFBB00",
    href: "/news/growatl-2025-panel",
  },
  {
    id: "andaman-team-meetup",
    category: "Culture",
    title: "Andaman 2026 — Why We Make Time for the Team",
    excerpt:
      "The entire EvolTech team escaped to the Andaman Islands for three days of sun, sea, and shared experiences. This isn't a retreat report — it's a reminder of why belonging matters.",
    date: "January 27, 2026",
    readTime: "4 min read",
    gradient: "from-[#0d3a4a] to-[#0B0F2B]",
    accentColor: "#8DCAFF",
    href: "/news/andaman-team-meetup",
  },
];

interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  format: string;
  href: string;
}

const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "spring-exchange-2026",
    title: "SIIA Spring Exchange 2026",
    date: "Mar 30 – Apr 1, 2026",
    location: "New Orleans, LA",
    format: "Conference",
    href: "/events/spring-exchange-2026",
  },
  {
    id: "aba-bankers",
    title: "ABA Conference for Community Bankers",
    date: "February 15–17, 2026",
    location: "Orlando, FL",
    format: "Conference",
    href: "/events/aba-conference-community-bankers",
  },
  {
    id: "siia-price-transparency",
    title: "SIIA Price Transparency Forum",
    date: "February 25–26, 2026",
    location: "Jacksonville, FL",
    format: "Forum",
    href: "/events/siia-price-transparency-forum-2026",
  },
];

const CATEGORY_COLORS: Record<ArticleCategory, string> = {
  "Company News": "#FFBB00",
  Industry: "#4C96D7",
  Events: "#8DCAFF",
  Technology: "#a78bfa",
  Culture: "#34d399",
};

/* ─────────────────────────────────────────────────────────────────────────────
 * Page
 * ───────────────────────────────────────────────────────────────────────────── */
export default function NewsPage() {
  return (
    <main className="bg-[#0B0F2B] text-white min-h-screen overflow-hidden">
      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, #4C96D7 0%, #1761A0 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="lg:col-span-10 lg:col-start-2">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4C96D7]/30 bg-[#4C96D7]/10 text-[#8DCAFF] text-xs font-semibold tracking-widest uppercase mb-6">
              <Newspaper size={12} />
              News &amp; Insights
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5 max-w-3xl">
              What&rsquo;s happening at{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #8DCAFF 0%, #4C96D7 50%, #FFBB00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                EvolTech
              </span>
            </h1>

            <p className="text-[#C7E5FF] text-lg max-w-2xl leading-relaxed">
              Industry perspectives, conference recaps, team milestones, and
              technology insights — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Featured Article ─────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <Link href={FEATURED.href} className="group block">
            <div className="relative rounded-3xl overflow-hidden h-[420px] sm:h-[480px] cursor-pointer">
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${FEATURED.gradient}`}
              />

              {/* Photo — right-aligned, full portrait visible */}
              {FEATURED.image && (
                <div className="absolute right-0 top-0 h-full w-[55%] sm:w-[52%]">
                  <Image
                    src={FEATURED.image}
                    alt="Greg Arms"
                    fill
                    className="object-contain object-right"
                    priority
                  />
                  {/* Subtle left blend only — no hard edge */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(11,21,48,0.95) 0%, rgba(11,21,48,0.4) 18%, transparent 40%)",
                    }}
                  />
                </div>
              )}

              {/* Decorative grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Radial glow */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 50%, rgba(76,150,215,0.5) 0%, transparent 60%)",
                }}
              />

              {/* "Featured" label */}
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#FFBB00] text-[#0B0F2B] text-xs font-bold uppercase tracking-wider">
                  Featured
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: `${CATEGORY_COLORS[FEATURED.category]}22`,
                    color: CATEGORY_COLORS[FEATURED.category],
                    border: `1px solid ${CATEGORY_COLORS[FEATURED.category]}44`,
                  }}
                >
                  {FEATURED.category}
                </span>
              </div>

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div className="flex items-center gap-4 text-[#C7E5FF]/70 text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {FEATURED.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {FEATURED.readTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug mb-4 max-w-3xl">
                  {FEATURED.title}
                </h2>
                <p className="text-[#C7E5FF]/80 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl line-clamp-2">
                  {FEATURED.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[#FFBB00] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Read full story
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── 3. Latest News Grid ─────────────────────────────────────────────── */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#4C96D7] text-xs font-semibold uppercase tracking-widest mb-2">
                Latest
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                News &amp; Stories
              </h2>
            </div>
            <Link
              href="/events"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#C7E5FF]/70 hover:text-[#FFBB00] transition-colors duration-200 font-medium"
            >
              View all events
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <Link
                key={article.id}
                href={article.href}
                className="group block h-full"
              >
                <article className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0d1222] hover:border-white/20 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  {/* Image / gradient placeholder */}
                  <div
                    className={`relative h-44 bg-gradient-to-br ${article.gradient} flex-shrink-0 overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0 opacity-25"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                    {/* Category badge on image */}
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: `${CATEGORY_COLORS[article.category]}22`,
                        color: CATEGORY_COLORS[article.category],
                        border: `1px solid ${CATEGORY_COLORS[article.category]}55`,
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-[#C7E5FF]/50 text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug mb-2 line-clamp-2 group-hover:text-[#FFBB00] transition-colors duration-200">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-[#C7E5FF]/60 leading-relaxed line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-[#4C96D7] font-semibold group-hover:gap-2.5 transition-all duration-200">
                      Read more
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Mobile: view all events link */}
          <div className="mt-8 sm:hidden text-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm text-[#C7E5FF]/70 hover:text-[#FFBB00] transition-colors font-medium"
            >
              View all events
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Upcoming Events ──────────────────────────────────────────────── */}
      {/* <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#FFBB00] text-xs font-semibold uppercase tracking-widest mb-2">
                On the calendar
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Upcoming Events
              </h2>
            </div>
            <Link
              href="/events?category=conference"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#C7E5FF]/70 hover:text-[#FFBB00] transition-colors duration-200 font-medium"
            >
              All conferences
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {UPCOMING_EVENTS.map((event, i) => (
              <Link key={event.id} href={event.href} className="group block">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-white/[0.07] bg-[#0d1222] hover:border-[#4C96D7]/40 hover:bg-[#0f1628] transition-all duration-300">
                  <span className="text-4xl sm:text-5xl font-bold text-white/10 font-mono leading-none select-none w-12 sm:text-right flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>

              
                  <div className="hidden sm:block w-px h-12 bg-white/10 flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#4C96D7]/15 text-[#8DCAFF] border border-[#4C96D7]/25">
                        {event.format}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#FFBB00] transition-colors duration-200">
                      {event.title}
                    </h3>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-3 sm:gap-1 flex-shrink-0 text-[#C7E5FF]/60 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {event.location}
                    </span>
                  </div>

                  <ArrowRight
                    size={18}
                    className="hidden sm:block text-white/20 group-hover:text-[#FFBB00] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Metadata
 * ───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "News & Insights | EvolTech",
  description:
    "Industry perspectives, conference recaps, team milestones, and technology insights from EvolTech — a global technology and operations firm.",
  alternates: {
    canonical: absoluteUrl("/news"),
  },
  openGraph: {
    title: "News & Insights | EvolTech",
    description:
      "Industry perspectives, conference recaps, team milestones, and technology insights from EvolTech.",
    url: absoluteUrl("/news"),
    siteName: "EvolTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Insights | EvolTech",
    description:
      "Industry perspectives, conference recaps, team milestones, and technology insights from EvolTech.",
  },
};

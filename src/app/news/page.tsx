import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { absoluteUrl } from "../seo.config";
import {
  ArrowRight,
  Calendar,
  Clock,
  FileText,
  Heart,
  Newspaper,
  Shield,
  Users,
} from "lucide-react";
import GregArmsImg from "@/assets/images/Team/Members/GregArms.png";
// import NewsBannerImg from "@/assets/effects/NewsBanner.png";
// import FiveOakBannerImg from "@/assets/effects/FiveOak-Evoltech-banner.png";
// import ThulasiBanner from "@/assets/effects/ThulasiBanner.png";
// import TenthYearBanner1 from "@/assets/effects/10-years-Banner.png";
import { LiquidGlassButton } from "./LiquidGlassButton";
// import { ThulasiBanner1 } from "@/assets/effects/Banner";
import {
  NewsBanner,
  FiveOakEvolTechBanner,
  ThulasiBanner,
  TenthYearBanner,
  sampleBanner,
} from "@/assets/effects/Banner";

/* ─────────────────────────────────────────────────────────────────────────────
 * Static data
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
  gradient: string;
  accentColor: string;
  image?: StaticImageData;
  href: string;
}

const CATEGORY_COLORS: Record<ArticleCategory, string> = {
  "Company News": "#FFBB00",
  Industry: "#4C96D7",
  Events: "#8DCAFF",
  Technology: "#a78bfa",
  Culture: "#34d399",
};

/* ─────────────────────────────────────────────────────────────────────────────
 * All news in one pool — the entry with the newest date becomes the featured
 * card automatically. To add a new article:
 *   1. Add it here with today's date.
 *   2. The old featured article drops to the grid. Nothing else to change.
 * ───────────────────────────────────────────────────────────────────────────── */
const ALL_ARTICLES: Article[] = [
  {
    id: "greg-arms-strategic-advisor",
    category: "Company News" as ArticleCategory,
    title: "Introducing Our Strategic Advisor \u2014 Greg Arms",
    excerpt:
      "Strengthening our healthcare and self-insurance expertise. EvolTech welcomes Greg Arms \u2014 a 40-year veteran of the global insurance industry \u2014 as a Strategic Advisor.",
    date: "May 25, 2026",
    readTime: "5 min read",
    gradient: "from-[#0B1530] via-[#1761A0] to-[#0d3d6e]",
    accentColor: "#FFBB00",
    image: GregArmsImg,
    href: "/news/greg-arms-strategic-advisor",
  },
  // ── Add new articles below — newest date wins featured ────────────────────
  {
    id: "10-years-of-evoltech",
    category: "Company News" as ArticleCategory,
    title: "The Story of EvolTech \u2014 10 Years of Evolution",
    excerpt:
      "From a small passionate team in 2015 to a decade of innovation, growth, and transformation \u2014 celebrating 10 years of EvolTech.",
    date: "June 10, 2025",
    readTime: "3 min read",
    gradient: "from-[#0B1530] via-[#1761A0] to-[#0d3d6e]",
    accentColor: "#4C96D7",
    image: TenthYearBanner,
    href: "/news/10-years-of-evoltech",
  },
  {
    id: "fiveoak-evoltech-partnership",
    category: "Company News" as ArticleCategory,
    title:
      "EvolTech & Fiveoak: Expanding and Elevating Our Partnership to New Markets",
    excerpt:
      "Our partnership with Fiveoak is reaching new markets and new customers. Together, we're delivering cutting-edge Virtual AI Assistant solutions transforming customer engagement and brand impact.",
    date: "April 15, 2026",
    readTime: "3 min read",
    gradient: "from-[#1a3a5c] to-[#0B0F2B]",
    accentColor: "#4C96D7",
    image: FiveOakEvolTechBanner,
    href: "/news/fiveoak-evoltech-partnership",
  },
  {
    id: "thulasidharan-ceo-announcement",
    category: "Company News" as ArticleCategory,
    title:
      "The Wait Is Over \u2014 Welcoming Thulasidharan LG as CEO of EvolTech",
    excerpt:
      "Having supported EvolTech as a Strategic Advisor, Thulasidharan LG now steps into the CEO role with a clear focus, determination, and a commitment to spark creativity while upholding our people-first culture.",
    date: "August 1, 2025",
    readTime: "3 min read",
    gradient: "from-[#2d1a5c] to-[#0B0F2B]",
    accentColor: "#a78bfa",
    image: sampleBanner,
    href: "/news/thulasidharan-ceo-announcement",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

/* Derived — do not edit manually */
const FEATURED = ALL_ARTICLES[0]!;
const ARTICLES = ALL_ARTICLES.slice(1);
/** true while Greg Arms is still the newest article → renders the custom branded card */
const isGregArmsFeatured = FEATURED.id === "greg-arms-strategic-advisor";

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
          {isGregArmsFeatured ? (
            /* ── Premium hero banner ── */
            <Link href={FEATURED.href} className="group block">
              <div
                className="relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(76,150,215,0.25)] group-hover:scale-[1.005]"
                style={{ minHeight: 540 }}
              >
                {/* Dark navy base */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#030c1f] via-[#071535] to-[#0e3270]" />

                {/* World-map / nodes — full opacity */}
                <Image
                  src={NewsBanner}
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden
                />

                {/* Left-to-center dark scrim — keeps text readable */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(3,12,31,0.93) 0%, rgba(3,12,31,0.78) 28%, rgba(3,12,31,0.30) 55%, transparent 72%)",
                  }}
                />

                {/* Cyan glow — upper right */}
                <div
                  className="absolute top-0 right-[18%] w-[420px] h-[420px] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(56,189,248,0.22) 0%, transparent 70%)",
                    filter: "blur(60px)",
                  }}
                />

                {/* Content grid — 5:7 split */}
                <div
                  className="relative z-10 grid grid-cols-1 lg:grid-cols-[5fr_7fr]"
                  style={{ minHeight: 540 }}
                >
                  {/* LEFT — text */}
                  <div className="flex flex-col justify-center px-8 sm:px-12 py-12 lg:py-16">
                    {/* Category badge */}
                    <div className="inline-flex w-fit items-center px-4 py-1.5 rounded-full border border-[#4C96D7] text-[#8DCAFF] text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
                      Company News
                    </div>

                    {/* Headline */}
                    <div className="mb-5">
                      <h2
                        className="text-white font-bold leading-[1.1]"
                        style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}
                      >
                        Introducing
                      </h2>
                      <h2
                        className="font-black leading-[1.0]"
                        style={{
                          fontSize: "clamp(3rem, 7vw, 5.5rem)",
                          background:
                            "linear-gradient(90deg, #e0d0ff 0%, #b197fc 40%, #7c6fe8 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        Greg Arms
                      </h2>
                    </div>

                    {/* Accent divider */}
                    <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#38bdf8] mb-6" />

                    {/* Subheadline */}
                    <div className="mb-5">
                      <p className="text-white text-sm font-bold uppercase tracking-[0.18em] leading-snug">
                        Strategic Advisor &mdash;
                      </p>
                      <p className="text-[#38bdf8] text-sm font-bold uppercase tracking-[0.18em] leading-snug mt-1">
                        Healthcare &amp; Insurance
                      </p>
                    </div>

                    {/* Body */}
                    <p className="text-[#C7E5FF]/80 text-sm leading-relaxed max-w-[280px] mb-8">
                      40 years of global insurance leadership helping guide
                      EvolTech&rsquo;s expansion into healthcare and benefits
                      technology.
                    </p>

                    {/* CTA button — liquid glass */}
                    <LiquidGlassButton />
                  </div>

                  {/* RIGHT — quote card + portrait + icons */}
                  <div
                    className="relative flex items-end justify-center overflow-hidden"
                    style={{ minHeight: 420 }}
                  >
                    {/* Blue-cyan radial glow behind portrait */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 85%, rgba(23,97,160,0.95) 0%, rgba(56,189,248,0.45) 28%, transparent 62%)",
                      }}
                    />

                    {/* Portrait */}
                    <div className="relative w-full h-[420px] sm:h-[540px] lg:absolute lg:inset-0 lg:inset-y-0 lg:h-auto">
                      <Image
                        src={FEATURED.image!}
                        alt="Greg Arms — Strategic Advisor"
                        fill
                        className="object-contain object-bottom"
                        priority
                      />
                    </div>

                    {/* Glassmorphism quote card — bottom-left of right panel */}
                    <div
                      className="absolute bottom-8 left-0 z-10 px-5 py-4 rounded-2xl max-w-[220px]"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(141,202,255,0.12) 0%, rgba(23,97,160,0.22) 50%, rgba(5,18,50,0.50) 100%)",
                        backdropFilter: "blur(28px)",
                        WebkitBackdropFilter: "blur(28px)",
                        border: "1px solid rgba(141,202,255,0.38)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.14), 0 8px 32px rgba(0,0,0,0.35)",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center mb-3"
                        style={{ background: "rgba(23,97,160,0.75)" }}
                      >
                        <span className="text-[#8DCAFF] text-lg font-black leading-none">
                          &ldquo;
                        </span>
                      </div>
                      <p className="text-white/90 text-sm italic leading-relaxed font-medium">
                        Helping healthcare and benefits organizations work
                        smarter.
                      </p>
                      <div className="w-10 h-[2px] mt-3 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#38bdf8]" />
                    </div>

                    {/* Healthcare icons column — far right */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
                      {[
                        { Icon: Shield, label: "Coverage" },
                        { Icon: Users, label: "Benefits" },
                        { Icon: Heart, label: "Health" },
                        { Icon: FileText, label: "Compliance" },
                      ].map(({ Icon, label }, i) => (
                        <div
                          key={i}
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          title={label}
                          style={{
                            background: "rgba(255,255,255,0.07)",
                            border: "1px solid rgba(141,202,255,0.38)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                          }}
                        >
                          <Icon
                            size={20}
                            strokeWidth={1.5}
                            className="text-[#8DCAFF]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            /* ── Standard gradient card ── */
            <Link href={FEATURED.href} className="group block">
              <div className="relative rounded-3xl overflow-hidden h-[420px] sm:h-[480px] cursor-pointer transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(76,150,215,0.25)] group-hover:scale-[1.005]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${FEATURED.gradient}`}
                />
                {FEATURED.image && (
                  <Image
                    src={FEATURED.image}
                    alt=""
                    fill
                    className="object-contain object-center"
                    aria-hidden
                    priority
                  />
                )}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 50%, rgba(76,150,215,0.5) 0%, transparent 60%)",
                  }}
                />
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
          )}
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
            {ARTICLES.length > 3 && (
              <Link
                href="/news"
                className="hidden sm:inline-flex items-center gap-2 text-sm text-[#C7E5FF]/70 hover:text-[#FFBB00] transition-colors duration-200 font-medium"
              >
                View all News
                <ArrowRight size={14} />
              </Link>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <Link
                key={article.id}
                href={article.href}
                className="group block h-full"
              >
                <article className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d1222] hover:border-[#4C96D7]/55 transition-all duration-300 shadow-[0_0_18px_rgba(76,150,215,0.07)] hover:shadow-[0_0_28px_rgba(76,150,215,0.18)]">
                  {/* Thumbnail — real image or gradient fallback */}
                  <div
                    className={`relative h-44 bg-gradient-to-br ${article.gradient} flex-shrink-0 overflow-hidden`}
                  >
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 opacity-25"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                          backgroundSize: "30px 30px",
                        }}
                      />
                    )}
                    {/* Category badge */}
                    <span
                      className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
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

          {/* Mobile: view all news link */}
          {ARTICLES.length > 3 && (
            <div className="mt-8 sm:hidden text-center">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm text-[#C7E5FF]/70 hover:text-[#FFBB00] transition-colors font-medium"
              >
                View all News
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </section>
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

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Copy,
  ExternalLink,
  Share2,
  User,
} from "lucide-react";
import {
  CATEGORY_COLORS,
  ContentBlock,
  getRelated,
  NewsArticle,
} from "@/data/newsData";

/* ─────────────────────────────────────────────────────────────────────────────
 * Animation variants
 * ───────────────────────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────────────────────────────────────────────────────────
 * Content block renderer
 * ───────────────────────────────────────────────────────────────────────────── */
function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <h2
          key={i}
          id={block.id}
          className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 scroll-mt-28"
        >
          {block.content}
        </h2>
      ) : (
        <h3
          key={i}
          id={block.id}
          className="text-lg font-semibold text-white mt-8 mb-3 scroll-mt-28"
        >
          {block.content}
        </h3>
      );
    case "paragraph":
      return (
        <p
          key={i}
          className="text-[#C7E5FF]/80 leading-relaxed mb-5 text-[15px]"
        >
          {block.content}
        </p>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-8 pl-6 border-l-4 border-[#1761A0] bg-[#FFBB00]/5 rounded-r-xl py-5 pr-5"
        >
          <p className="text-white text-base sm:text-lg italic font-medium leading-relaxed mb-2">
            &ldquo;{block.content}&rdquo;
          </p>
          {block.attribution && (
            <p className="text-[#C7E5FF]/50 text-xs uppercase tracking-wider mt-2">
              — {block.attribution}
            </p>
          )}
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="mb-5 space-y-2.5 pl-1">
          {block.items.map((item, j) => (
            <li
              key={j}
              className="flex gap-3 text-[#C7E5FF]/80 text-[15px] leading-relaxed"
            >
              <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FFBB00]" />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
 * TOC sidebar
 * ───────────────────────────────────────────────────────────────────────────── */
function TableOfContents({ blocks }: { blocks: ContentBlock[] }) {
  const headings = blocks.filter(
    (b): b is Extract<ContentBlock, { type: "heading" }> =>
      b.type === "heading",
  );
  const [activeId, setActiveId] = useState("");
  const headingIds = headings.map((h) => h.id).join(",");

  useEffect(() => {
    if (!headingIds) return;
    const ids = headingIds.split(",");
    const onScroll = () => {
      // Reading line = 20% from the top of the viewport
      const readingLine = window.scrollY + window.innerHeight * 0.2;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= readingLine) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, [headingIds]);

  if (headings.length === 0) return null;
  return (
    <nav className="hidden xl:block">
      <div className="sticky top-28">
        <p className="text-xs uppercase tracking-widest text-[#C7E5FF]/40 font-semibold mb-4">
          Contents
        </p>
        <ul className="space-y-2">
          {headings.map((h) => {
            const isActive = activeId === h.id;
            return (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`flex items-center gap-1.5 text-sm leading-relaxed transition-all duration-200 ${
                    h.level === 3 ? "pl-3" : ""
                  } ${
                    isActive
                      ? "text-[#FFBB00] font-medium"
                      : h.level === 3
                        ? "text-[#C7E5FF]/45 hover:text-white"
                        : "text-[#C7E5FF]/60 hover:text-white"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 rounded-full transition-all duration-200 ${
                      isActive ? "w-1.5 h-1.5 bg-[#FFBB00]" : "w-0 h-1.5"
                    }`}
                  />
                  {h.content}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Sidebar
 * ───────────────────────────────────────────────────────────────────────────── */
function Sidebar({ article }: { article: NewsArticle }) {
  const related = getRelated(article.related);
  return (
    <aside className="space-y-6">
      {/* News details card */}
      <div className="rounded-2xl border border-white/[0.08] bg-[#0d1222] p-5">
        <p className="text-[10px] uppercase tracking-widest text-[#C7E5FF]/40 font-semibold mb-4">
          News Details
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2.5">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: CATEGORY_COLORS[article.category] }}
            />
            <span className="text-[#C7E5FF]/60">Category</span>
            <span className="ml-auto text-white font-medium">
              {article.category}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Calendar size={13} className="text-[#C7E5FF]/40 flex-shrink-0" />
            <span className="text-[#C7E5FF]/60">Published</span>
            <span className="ml-auto text-white font-medium">
              {article.date}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock size={13} className="text-[#C7E5FF]/40 flex-shrink-0" />
            <span className="text-[#C7E5FF]/60">Read time</span>
            <span className="ml-auto text-white font-medium">
              {article.readTime}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <User size={13} className="text-[#C7E5FF]/40 flex-shrink-0" />
            <span className="text-[#C7E5FF]/60">Author</span>
            <span className="ml-auto text-white font-medium">
              {article.author.name}
            </span>
          </div>
        </div>
      </div>

      {/* Related stories */}
      {related.length > 0 && (
        <div className="rounded-2xl border border-white/[0.08] bg-[#0d1222] p-5">
          <p className="text-[10px] uppercase tracking-widest text-[#C7E5FF]/40 font-semibold mb-4">
            Related Stories
          </p>
          <div className="space-y-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/news/${r.slug}`}
                className="group flex gap-3 items-start"
              >
                <div
                  className="relative w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${r.accentColor}55, #0B0F2B)`,
                    border: `1px solid ${r.accentColor}22`,
                  }}
                >
                  {(r.coverImage ?? r.bannerImage) && (
                    <Image
                      src={(r.coverImage ?? r.bannerImage)!}
                      alt={r.title}
                      fill
                      sizes="56px"
                      className="object-cover object-center"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider block mb-0.5"
                    style={{ color: CATEGORY_COLORS[r.category] }}
                  >
                    {r.category}
                  </span>
                  <p className="text-xs text-white font-medium leading-snug line-clamp-2 group-hover:text-[#FFBB00] transition-colors duration-150">
                    {r.title}
                  </p>
                  <p className="text-[10px] text-[#C7E5FF]/40 mt-1">{r.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Share button (client-side copy to clipboard)
 * ───────────────────────────────────────────────────────────────────────────── */
function ShareButton() {
  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-[#C7E5FF]/70 text-xs font-medium hover:border-[#4C96D7]/40 hover:text-white transition-all duration-200"
    >
      <Copy size={13} />
      Copy link
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Main component
 * ───────────────────────────────────────────────────────────────────────────── */
export default function ArticleDetail({ article }: { article: NewsArticle }) {
  const categoryColor = CATEGORY_COLORS[article.category];

  return (
    <main className="bg-[#0B0F2B] text-white min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-0 px-4 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] opacity-15 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse, ${categoryColor} 0%, #1761A0 40%, transparent 70%)`,
            filter: "blur(70px)",
          }}
        />

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Back link */}
          <motion.div variants={fadeUp} transition={{ duration: 0.4 }}>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-xs text-[#C7E5FF]/50 hover:text-[#FFBB00] transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={14} />
              News &amp; Insights
            </Link>
          </motion.div>

          {/* Badges */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-2 mb-5"
          >
            <span
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{
                background: `${categoryColor}1A`,
                color: categoryColor,
                border: `1px solid ${categoryColor}44`,
              }}
            >
              {article.category}
            </span>
            {article.isFeatured && (
              <span className="px-3 py-1 rounded-full bg-[#FFBB00] text-[#0B0F2B] text-xs font-bold uppercase tracking-wider">
                Featured
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
          >
            {article.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="text-[#C7E5FF]/75 text-base sm:text-lg leading-relaxed mb-7 max-w-2xl italic"
          >
            {article.excerpt}
          </motion.p>

          {/* Meta + actions row */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08]"
          >
            {/* Author + date */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${categoryColor}, #1761A0)`,
                }}
              >
                {article.author.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">
                  {article.author.name}
                </p>
                <div className="flex items-center gap-3 text-[#C7E5FF]/50 text-xs mt-0.5">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} />
                    {article.date}
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <ShareButton />
              {article.pressReleaseUrl && (
                <a
                  href={article.pressReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFBB00]/40 text-[#FFBB00] text-xs font-semibold hover:bg-[#FFBB00]/10 hover:border-[#FFBB00]/70 transition-all duration-200"
                >
                  <ExternalLink size={13} />
                  View Press Release
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Featured image ────────────────────────────────────────────────────── */}
      <motion.section
        className="px-4 pt-10 pb-4"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          {article.bannerImage ? (
            /* Full-cover photo banner */
            <div
              className={`relative rounded-3xl overflow-hidden bg-[#040c22] w-full${article.pressReleaseUrl ? " cursor-pointer group/banner" : ""}`}
              style={{ aspectRatio: "9 / 4" }}
              onClick={() =>
                article.pressReleaseUrl &&
                window.open(
                  article.pressReleaseUrl,
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <Image
                src={article.bannerImage}
                alt={article.title}
                fill
                className="object-contain object-center"
                priority
              />
              {/* Edge fades — blends bg into page seamlessly */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#040c22] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#040c22] to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#040c22] to-transparent pointer-events-none" />
              {/* Bottom fade so category badge stays readable */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16"
                style={{
                  background:
                    "linear-gradient(to top, rgba(4,12,34,0.75) 0%, transparent 100%)",
                }}
              />
              {/* Corner badge */}
              <div className="absolute bottom-4 left-6">
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: `${categoryColor}22`,
                    color: categoryColor,
                    border: `1px solid ${categoryColor}44`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {article.category}
                </span>
              </div>
            </div>
          ) : (
            /* Gradient placeholder */
            <div
              className={`relative rounded-3xl overflow-hidden h-64 sm:h-80 bg-gradient-to-br ${article.gradient}`}
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              {/* Radial light */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at 35% 45%, ${categoryColor}44 0%, transparent 65%)`,
                }}
              />
              {/* Watermark label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-5xl sm:text-7xl font-black uppercase tracking-tighter select-none"
                  style={{ color: `${categoryColor}12` }}
                >
                  {article.category}
                </span>
              </div>
              {/* Corner badge */}
              <div className="absolute bottom-5 left-6">
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: `${categoryColor}22`,
                    color: categoryColor,
                    border: `1px solid ${categoryColor}44`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {article.category}
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.section>

      {/* ── 3-column body ─────────────────────────────────────────────────────── */}
      <section className="px-4 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid xl:grid-cols-[180px_1fr_260px] gap-10 xl:gap-12">
            {/* Left: TOC */}
            <TableOfContents blocks={article.body} />

            {/* Center: Article body */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="min-w-0 max-w-2xl mx-auto xl:mx-0 xl:max-w-none"
            >
              {article.body.map((block, i) => renderBlock(block, i))}

              {/* End divider */}
              <div className="mt-12 pt-8 border-t border-white/[0.08]">
                <p className="text-[#C7E5FF]/40 text-xs">
                  Published {article.date} · {article.readTime} · EvolTech
                </p>
              </div>
            </motion.article>

            {/* Right: Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div className="sticky top-28">
                <Sidebar article={article} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom navigation ─────────────────────────────────────────────────── */}
      <motion.section
        className="px-4 pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Back button */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 text-[#C7E5FF]/70 text-sm font-medium hover:border-[#4C96D7]/40 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <ArrowLeft size={15} />
              All News &amp; Insights
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 text-[#C7E5FF]/70 text-sm font-medium hover:border-[#4C96D7]/40 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Explore Events
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

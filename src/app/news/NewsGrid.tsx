"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { type NewsArticle, CATEGORY_COLORS } from "@/data/newsData";

export default function NewsGrid({ articles }: { articles: NewsArticle[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? articles : articles.slice(0, 3);

  return (
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
          {articles.length > 3 && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#C7E5FF]/70 hover:text-[#FFBB00] transition-colors duration-200 font-medium"
            >
              View all News
              <ArrowRight size={14} />
            </button>
          )}
        </div>

        {/* Grid — same card design as before */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group block h-full"
            >
              <article className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d1222] hover:border-[#4C96D7]/55 transition-all duration-300 shadow-[0_0_18px_rgba(76,150,215,0.07)] hover:shadow-[0_0_28px_rgba(76,150,215,0.18)]">
                {/* Thumbnail */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${article.gradient} flex-shrink-0 overflow-hidden`}
                >
                  {article.bannerImage ? (
                    <Image
                      src={article.bannerImage}
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

                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug mb-2 line-clamp-2 group-hover:text-[#FFBB00] transition-colors duration-200">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#C7E5FF]/60 leading-relaxed line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs text-[#4C96D7] font-semibold group-hover:gap-2.5 transition-all duration-200">
                    Read more
                    <ArrowRight size={12} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile: show all button */}
        {articles.length > 3 && !showAll && (
          <div className="mt-8 sm:hidden text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-sm text-[#C7E5FF]/70 hover:text-[#FFBB00] transition-colors font-medium"
            >
              View all News
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

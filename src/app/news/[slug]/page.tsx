import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { absoluteUrl } from "@/app/seo.config";
import { getArticle, NEWS_ARTICLES } from "@/data/newsData";
import ArticleDetail from "./ArticleDetail";

/* ─────────────────────────────────────────────────────────────────────────────
 * Static params — required for output: 'export'
 * ───────────────────────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({ slug: article.slug }));
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Dynamic metadata
 * ───────────────────────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Article Not Found | EvolTech" };
  }

  return {
    title: `${article.title} | EvolTech`,
    description: article.excerpt,
    alternates: {
      canonical: absoluteUrl(`/news/${slug}`),
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: absoluteUrl(`/news/${slug}`),
      siteName: "EvolTech",
      type: "article",
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Page
 * ───────────────────────────────────────────────────────────────────────────── */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}

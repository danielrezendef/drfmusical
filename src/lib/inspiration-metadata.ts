import type { Metadata } from "next";
import type { InspirationArticle, InspirationCategory } from "@/content/inspiracoes";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const socialImage = {
  url: "/inspiracoes/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Inspirações para casamentos do DRF Musical",
};

export function buildArticleMetadata(article: InspirationArticle): Metadata {
  const path = `/inspiracoes/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: path,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [SITE_NAME],
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [socialImage.url],
    },
  };
}

export function buildCategoryMetadata(category: InspirationCategory): Metadata {
  const path = `/inspiracoes/${category.slug}`;
  const description = `${category.description} Encontre orientações e referências selecionadas pelo DRF Musical.`;

  return {
    title: category.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${category.title} | ${SITE_NAME}`,
      description,
      url: new URL(path, SITE_URL).toString(),
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} | ${SITE_NAME}`,
      description,
      images: [socialImage.url],
    },
  };
}

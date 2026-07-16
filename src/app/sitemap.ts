import type { MetadataRoute } from "next";
import { getPublishedArticles, inspirationCategories } from "@/content/inspiracoes";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getPublishedArticles();
  const latestPublication = articles[0]?.updatedAt ?? articles[0]?.publishedAt;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date("2026-07-15T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/inspiracoes`,
      lastModified: latestPublication ? new Date(`${latestPublication}T00:00:00Z`) : new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = inspirationCategories.map((category) => {
    const latestCategoryArticle = articles.find((article) => article.category === category.slug);

    return {
      url: `${SITE_URL}/inspiracoes/${category.slug}`,
      lastModified: latestCategoryArticle
        ? new Date(`${latestCategoryArticle.updatedAt ?? latestCategoryArticle.publishedAt}T00:00:00Z`)
        : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/inspiracoes/${article.slug}`,
    lastModified: new Date(`${article.updatedAt ?? article.publishedAt}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: article.featured ? 0.8 : 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}

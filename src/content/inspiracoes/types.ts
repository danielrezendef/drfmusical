export type InspirationCategorySlug =
  | "musicas-por-momento"
  | "guias"
  | "playlists"
  | "casamentos-reais";

export type InspirationCategory = {
  slug: InspirationCategorySlug;
  title: string;
  description: string;
  eyebrow: string;
  symbol: string;
};

export type ArticleSubsection = {
  title: string;
  paragraphs: string[];
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  subsections?: ArticleSubsection[];
};

export type InspirationArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: InspirationCategorySlug;
  coverImage: string;
  coverAlt: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  city?: string;
  featured?: boolean;
  keywords: string[];
  tip: string;
  sections: ArticleSection[];
  relatedSlugs: string[];
  draft?: boolean;
  placeholderMedia?: boolean;
};

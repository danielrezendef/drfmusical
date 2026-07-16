import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/inspiracoes/ArticleContent";
import { ArticleHeader } from "@/components/inspiracoes/ArticleHeader";
import { Breadcrumbs } from "@/components/inspiracoes/Breadcrumbs";
import { InspirationCTA } from "@/components/inspiracoes/InspirationCTA";
import { JsonLd } from "@/components/inspiracoes/JsonLd";
import { RelatedContent } from "@/components/inspiracoes/RelatedContent";
import {
  getInspirationArticle,
  getInspirationCategory,
  getPublishedArticles,
  inspirationCategories,
} from "@/content/inspiracoes";
import { buildArticleMetadata } from "@/lib/inspiration-metadata";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInspirationArticle(slug);
  if (!article) return {};
  return buildArticleMetadata(article);
}

export default async function InspirationArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getInspirationArticle(slug);
  if (!article) notFound();

  const category = getInspirationCategory(article.category);
  if (!category) notFound();

  const articleUrl = `${SITE_URL}/inspiracoes/${article.slug}`;
  const categoryUrl = `${SITE_URL}/inspiracoes/${category.slug}`;
  const relatedArticles = article.relatedSlugs
    .map((relatedSlug) => getInspirationArticle(relatedSlug))
    .filter((relatedArticle) => relatedArticle !== undefined);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: new URL(article.coverImage, SITE_URL).toString(),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-drf.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Inspirações",
        item: `${SITE_URL}/inspiracoes`,
      },
      { "@type": "ListItem", position: 3, name: category.title, item: categoryUrl },
      { "@type": "ListItem", position: 4, name: article.title, item: articleUrl },
    ],
  };

  return (
    <main className="inspirations-main article-page">
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <div className="inspirations-container">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Inspirações", href: "/inspiracoes" },
            { label: category.title, href: `/inspiracoes/${category.slug}` },
            { label: article.title },
          ]}
        />
        <ArticleHeader article={article} category={category} />
        <ArticleContent article={article} />

        <nav className="article-return-links" aria-label="Navegação do conteúdo">
          <Link href={`/inspiracoes/${category.slug}`}>Ver mais em {category.title}</Link>
          <Link href="/inspiracoes">Voltar às Inspirações</Link>
        </nav>

        <InspirationCTA articleTitle={article.title} />
        <RelatedContent articles={relatedArticles} categories={inspirationCategories} />
      </div>
    </main>
  );
}

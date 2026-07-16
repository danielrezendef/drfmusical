import type { Metadata } from "next";
import { CategoryCard } from "@/components/inspiracoes/CategoryCard";
import { InspirationCard } from "@/components/inspiracoes/InspirationCard";
import { InspirationCTA } from "@/components/inspiracoes/InspirationCTA";
import { InspirationExplorer } from "@/components/inspiracoes/InspirationExplorer";
import { InspirationsHero } from "@/components/inspiracoes/InspirationsHero";
import {
  getInspirationCategory,
  getPublishedArticles,
  inspirationCategories,
} from "@/content/inspiracoes";
import { SITE_NAME } from "@/lib/seo";

const title = "Inspirações para casamento";
const description =
  "Guias, músicas, playlists e ideias para planejar a trilha sonora do casamento com emoção, personalidade e organização.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/inspiracoes" },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/inspiracoes",
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE_NAME}`,
    description,
  },
};

export default function InspirationsPage() {
  const articles = getPublishedArticles();
  const featured = articles.filter((article) => article.featured);
  const mainFeature = featured[0];
  const secondaryFeatures = featured.slice(1, 4);
  const recent = articles.slice(0, 6);

  return (
    <main className="inspirations-main">
      <InspirationsHero />

      <section className="inspirations-section" aria-labelledby="inspiration-featured-title">
        <div className="inspirations-container">
          <div className="inspirations-section-heading">
            <p className="inspiration-eyebrow">Seleção editorial</p>
            <h2 id="inspiration-featured-title">Inspirações em destaque</h2>
          </div>
          {mainFeature && (
            <div className="featured-editorial-grid">
              <InspirationCard
                article={mainFeature}
                category={getInspirationCategory(mainFeature.category)!}
                prominent
                priority
              />
              <div className="secondary-featured-grid">
                {secondaryFeatures.map((article) => (
                  <InspirationCard
                    key={article.slug}
                    article={article}
                    category={getInspirationCategory(article.category)!}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="inspirations-section inspiration-categories" aria-labelledby="categories-title">
        <div className="inspirations-container">
          <div className="inspirations-section-heading">
            <p className="inspiration-eyebrow">Caminhos para começar</p>
            <h2 id="categories-title">Explore por categoria</h2>
          </div>
          <div className="inspiration-category-grid">
            {inspirationCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="inspirations-section" aria-labelledby="recent-title">
        <div className="inspirations-container">
          <div className="inspirations-section-heading">
            <p className="inspiration-eyebrow">Novas leituras</p>
            <h2 id="recent-title">Conteúdos mais recentes</h2>
          </div>
          <div className="inspiration-grid">
            {recent.map((article) => (
              <InspirationCard
                key={article.slug}
                article={article}
                category={getInspirationCategory(article.category)!}
              />
            ))}
          </div>
        </div>
      </section>

      <InspirationExplorer articles={articles} categories={inspirationCategories} />

      <div className="inspirations-container">
        <InspirationCTA />
      </div>
    </main>
  );
}

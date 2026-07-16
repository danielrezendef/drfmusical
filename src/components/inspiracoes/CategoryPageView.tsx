import Link from "next/link";
import type { InspirationArticle, InspirationCategory } from "@/content/inspiracoes";
import { SITE_URL } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { InspirationCard } from "./InspirationCard";
import { InspirationCTA } from "./InspirationCTA";
import { JsonLd } from "./JsonLd";

export function CategoryPageView({
  category,
  articles,
  categories,
}: {
  category: InspirationCategory;
  articles: InspirationArticle[];
  categories: InspirationCategory[];
}) {
  const relatedCategories = categories.filter((item) => item.slug !== category.slug);
  const categoryUrl = `${SITE_URL}/inspiracoes/${category.slug}`;
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
    ],
  };

  return (
    <main className="inspirations-main">
      <JsonLd data={breadcrumbJsonLd} />
      <div className="inspirations-container category-page">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Inspirações", href: "/inspiracoes" },
            { label: category.title },
          ]}
        />
        <header className="category-header">
          <span className="inspiration-category-symbol" aria-hidden="true">
            {category.symbol}
          </span>
          <p className="inspiration-eyebrow">{category.eyebrow}</p>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </header>

        <section aria-labelledby="category-content-title">
          <h2 id="category-content-title" className="sr-only">
            Conteúdos de {category.title}
          </h2>
          <div className="inspiration-grid">
            {articles.map((article) => (
              <InspirationCard key={article.slug} article={article} category={category} />
            ))}
          </div>
        </section>

        <nav className="related-categories" aria-label="Outras categorias de Inspirações">
          <strong>Explore também</strong>
          <div>
            {relatedCategories.map((item) => (
              <Link key={item.slug} href={`/inspiracoes/${item.slug}`}>
                {item.title}
              </Link>
            ))}
          </div>
        </nav>

        <InspirationCTA />
      </div>
    </main>
  );
}

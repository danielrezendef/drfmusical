import type { InspirationArticle, InspirationCategory } from "@/content/inspiracoes";
import { InspirationCard } from "./InspirationCard";

export function RelatedContent({
  articles,
  categories,
}: {
  articles: InspirationArticle[];
  categories: InspirationCategory[];
}) {
  return (
    <section className="related-content" aria-labelledby="related-content-title">
      <div className="inspirations-section-heading">
        <p className="inspiration-eyebrow">Continue planejando</p>
        <h2 id="related-content-title">Conteúdos relacionados</h2>
      </div>
      <div className="inspiration-grid">
        {articles.map((article) => {
          const category = categories.find((item) => item.slug === article.category);
          if (!category) return null;
          return <InspirationCard key={article.slug} article={article} category={category} />;
        })}
      </div>
    </section>
  );
}

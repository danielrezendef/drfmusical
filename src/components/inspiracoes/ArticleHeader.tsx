import Image from "next/image";
import type { InspirationArticle, InspirationCategory } from "@/content/inspiracoes";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function ArticleHeader({
  article,
  category,
}: {
  article: InspirationArticle;
  category: InspirationCategory;
}) {
  return (
    <header className="article-header">
      <p className="inspiration-eyebrow">{category.title}</p>
      <h1>{article.title}</h1>
      <p className="article-lead">{article.excerpt}</p>
      <div className="article-meta">
        <time dateTime={article.publishedAt}>
          Publicado em {dateFormatter.format(new Date(`${article.publishedAt}T00:00:00Z`))}
        </time>
        <span>{article.readingTime}</span>
        {article.city && <span>{article.city}, MG</span>}
      </div>
      <figure className="article-cover">
        <Image
          src={article.coverImage}
          alt={article.coverAlt}
          fill
          sizes="(max-width: 900px) 100vw, 1040px"
          priority
        />
        {article.placeholderMedia && (
          <figcaption>
            Imagem editorial provisória. Este espaço está preparado para registros reais
            autorizados.
          </figcaption>
        )}
      </figure>
    </header>
  );
}

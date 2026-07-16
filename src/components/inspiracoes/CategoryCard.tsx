import Link from "next/link";
import type { InspirationCategory } from "@/content/inspiracoes";

export function CategoryCard({ category }: { category: InspirationCategory }) {
  return (
    <article className="inspiration-category-card">
      <span className="inspiration-category-symbol" aria-hidden="true">
        {category.symbol}
      </span>
      <p className="inspiration-eyebrow">{category.eyebrow}</p>
      <h2>{category.title}</h2>
      <p>{category.description}</p>
      <Link className="inspiration-text-link" href={`/inspiracoes/${category.slug}`}>
        Explorar <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

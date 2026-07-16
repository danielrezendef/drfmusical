"use client";

import Image from "next/image";
import Link from "next/link";
import type { InspirationArticle, InspirationCategory } from "@/content/inspiracoes";
import { trackEvent } from "@/lib/analytics";

type InspirationCardProps = {
  article: InspirationArticle;
  category: InspirationCategory;
  prominent?: boolean;
  priority?: boolean;
};

export function InspirationCard({
  article,
  category,
  prominent = false,
  priority = false,
}: InspirationCardProps) {
  return (
    <article className={`inspiration-card ${prominent ? "is-prominent" : ""}`}>
      <Link
        href={`/inspiracoes/${article.slug}`}
        aria-label={`Ler: ${article.title}`}
        onClick={() => trackEvent("inspiration_open", { slug: article.slug })}
      >
        <div className="inspiration-card-image">
          <Image
            src={article.coverImage}
            alt={article.coverAlt}
            fill
            sizes={prominent ? "(max-width: 768px) 100vw, 62vw" : "(max-width: 768px) 100vw, 33vw"}
            priority={priority}
          />
        </div>
        <div className="inspiration-card-content">
          <p className="inspiration-card-meta">
            <span>{category.title}</span>
            <span>{article.readingTime}</span>
          </p>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <span className="inspiration-text-link">
            Ler inspiração <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}

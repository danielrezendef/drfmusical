"use client";

import { useMemo, useState } from "react";
import type {
  InspirationArticle,
  InspirationCategory,
  InspirationCategorySlug,
} from "@/content/inspiracoes";
import { trackEvent } from "@/lib/analytics";
import { InspirationCard } from "./InspirationCard";

type ActiveCategory = "all" | InspirationCategorySlug;

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");
}

export function InspirationExplorer({
  articles,
  categories,
}: {
  articles: InspirationArticle[];
  categories: InspirationCategory[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("all");

  const filteredArticles = useMemo(() => {
    const normalizedQuery = normalizeSearch(query.trim());

    return articles.filter((article) => {
      const matchesCategory = activeCategory === "all" || article.category === activeCategory;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const searchableContent = normalizeSearch(
        [article.title, article.excerpt, article.city, ...article.keywords]
          .filter(Boolean)
          .join(" "),
      );
      return searchableContent.includes(normalizedQuery);
    });
  }, [activeCategory, articles, query]);

  function selectCategory(category: ActiveCategory) {
    setActiveCategory(category);
    trackEvent("inspiration_filter", { category });
  }

  return (
    <section className="inspirations-section" aria-labelledby="explorar-inspiracoes">
      <div className="inspirations-container">
        <div className="inspirations-section-heading">
          <p className="inspiration-eyebrow">Encontre uma ideia</p>
          <h2 id="explorar-inspiracoes">Explore todas as inspirações</h2>
        </div>

        <div className="inspiration-search-panel">
          <label htmlFor="inspiration-search">Buscar nas Inspirações</label>
          <input
            id="inspiration-search"
            type="search"
            value={query}
            placeholder="Buscar músicas, ideias ou guias..."
            onChange={(event) => setQuery(event.target.value)}
            onBlur={() => {
              if (query.trim()) trackEvent("inspiration_search", { query: query.trim() });
            }}
          />
          <div className="inspiration-filters" aria-label="Filtrar por categoria">
            <button
              type="button"
              className={activeCategory === "all" ? "is-active" : ""}
              aria-pressed={activeCategory === "all"}
              onClick={() => selectCategory("all")}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                className={activeCategory === category.slug ? "is-active" : ""}
                aria-pressed={activeCategory === category.slug}
                onClick={() => selectCategory(category.slug)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="inspiration-grid" aria-live="polite">
            {filteredArticles.map((article) => {
              const category = categories.find((item) => item.slug === article.category);
              if (!category) return null;
              return <InspirationCard key={article.slug} article={article} category={category} />;
            })}
          </div>
        ) : (
          <p className="inspiration-empty-state" role="status">
            Nenhuma inspiração encontrada. Tente outro termo.
          </p>
        )}
      </div>
    </section>
  );
}

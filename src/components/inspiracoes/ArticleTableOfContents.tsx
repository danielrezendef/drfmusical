import type { ArticleSection } from "@/content/inspiracoes";

export function ArticleTableOfContents({ sections }: { sections: ArticleSection[] }) {
  return (
    <nav className="article-toc" aria-label="Sumário do conteúdo">
      <strong>Neste conteúdo</strong>
      <ol>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

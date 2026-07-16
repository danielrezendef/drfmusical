import type { InspirationArticle } from "@/content/inspiracoes";
import { ArticleTableOfContents } from "./ArticleTableOfContents";
import { DRFTipBox } from "./DRFTipBox";

export function ArticleContent({ article }: { article: InspirationArticle }) {
  return (
    <div className="article-reading-column">
      <ArticleTableOfContents sections={article.sections} />
      <div className="article-content">
        {article.sections.map((section, index) => (
          <section id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.subsections?.map((subsection) => (
              <div key={subsection.title}>
                <h3>{subsection.title}</h3>
                {subsection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
            {index === 0 && <DRFTipBox>{article.tip}</DRFTipBox>}
          </section>
        ))}
      </div>
    </div>
  );
}

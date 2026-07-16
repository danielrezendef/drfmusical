import { CategoryPageView } from "@/components/inspiracoes/CategoryPageView";
import { getInspirationCategory, getPublishedArticles, inspirationCategories } from "@/content/inspiracoes";
import { buildCategoryMetadata } from "@/lib/inspiration-metadata";

const category = getInspirationCategory("musicas-por-momento")!;
export const metadata = buildCategoryMetadata(category);

export default function MusicsByMomentPage() {
  const articles = getPublishedArticles().filter((article) => article.category === category.slug);
  return <CategoryPageView category={category} articles={articles} categories={inspirationCategories} />;
}

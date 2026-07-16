import type { InspirationCategory } from "./types";

export const inspirationCategories: InspirationCategory[] = [
  {
    slug: "musicas-por-momento",
    title: "Músicas por momento",
    description:
      "Ideias para escolher a música certa para cada entrada, rito e celebração do casamento.",
    eyebrow: "Cerimônia",
    symbol: "♪",
  },
  {
    slug: "guias",
    title: "Guias para os noivos",
    description:
      "Orientações práticas para planejar a música, a formação e o ritmo de todo o evento.",
    eyebrow: "Planejamento",
    symbol: "♩",
  },
  {
    slug: "playlists",
    title: "Playlists e repertórios",
    description:
      "Seleções para diferentes estilos de celebração, sempre abertas à história de cada casal.",
    eyebrow: "Repertório",
    symbol: "♫",
  },
  {
    slug: "casamentos-reais",
    title: "Casamentos reais",
    description:
      "Referências regionais e aprendizados sobre como a música acompanha celebrações de verdade.",
    eyebrow: "Histórias",
    symbol: "♬",
  },
];

export function getInspirationCategory(slug: string) {
  return inspirationCategories.find((category) => category.slug === slug);
}

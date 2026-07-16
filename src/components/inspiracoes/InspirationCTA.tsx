import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export function InspirationCTA({ articleTitle }: { articleTitle?: string }) {
  const message = articleTitle
    ? `Olá! Li o conteúdo “${articleTitle}” no site do DRF Musical e gostaria de conversar sobre a música do meu casamento.`
    : "Olá! Vim pela área de Inspirações do site do DRF Musical e gostaria de conversar sobre a música do meu casamento.";

  return (
    <section className="inspiration-cta" aria-labelledby="inspiration-cta-title">
      <div>
        <p className="inspiration-eyebrow">Do planejamento para a música</p>
        <h2 id="inspiration-cta-title">Transforme referências em uma trilha que seja de vocês</h2>
      </div>
      <div className="inspiration-cta-grid">
        <Link className="inspiration-cta-card" href="/#trilha-sonora">
          <strong>Monte a trilha sonora do seu casamento</strong>
          <span>Escolha uma música para cada momento e envie sua seleção ao DRF Musical.</span>
        </Link>
        <Link className="inspiration-cta-card" href="/#simulador">
          <strong>Simule sua formação musical</strong>
          <span>Escolha os instrumentos e veja uma estimativa inicial para o seu casamento.</span>
        </Link>
        <a
          className="inspiration-cta-card is-primary"
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Falar com o DRF Musical</strong>
          <span>Converse com a equipe sobre o seu casamento.</span>
        </a>
      </div>
    </section>
  );
}

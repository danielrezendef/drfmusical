import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_URL } from "@/lib/seo";
import { whatsappUrl } from "@/lib/site";

const inspirationMessage =
  "Olá! Vim pela área de Inspirações do site do DRF Musical e gostaria de conversar sobre a música do meu casamento.";

export function InspirationsFooter() {
  return (
    <footer className="inspirations-footer">
      <div className="inspirations-container inspirations-footer-inner">
        <div>
          <Image
            src="/logo-drf-branca.png"
            alt="Logo do DRF Musical"
            width={120}
            height={72}
          />
          <p>A trilha sonora do seu grande sonho.</p>
        </div>
        <nav aria-label="Links do rodapé">
          <Link href="/inspiracoes">Inspirações</Link>
          <Link href="/#trilha-sonora">Monte sua trilha sonora</Link>
          <Link href="/#simulador">Simule sua formação</Link>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={whatsappUrl(inspirationMessage)} target="_blank" rel="noopener noreferrer">
            Fale com o DRF Musical
          </a>
        </nav>
      </div>
    </footer>
  );
}

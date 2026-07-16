import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

const inspirationMessage =
  "Olá! Vim pela área de Inspirações do site do DRF Musical e gostaria de conversar sobre a música do meu casamento.";

export function InspirationsHeader() {
  return (
    <header className="inspirations-header">
      <div className="inspirations-header-inner">
        <Link href="/" className="inspirations-brand" aria-label="Ir para a página inicial">
          <Image src="/logo-drf.png" alt="Logo do DRF Musical" width={122} height={72} priority />
        </Link>
        <nav aria-label="Navegação das Inspirações">
          <Link href="/">Início</Link>
          <Link href="/inspiracoes">Inspirações</Link>
          <Link href="/#trilha-sonora">Trilha sonora</Link>
          <Link href="/#simulador">Simulador</Link>
          <a href={whatsappUrl(inspirationMessage)} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

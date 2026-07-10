"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  EVENT_TYPES,
  INSTRUMENTS,
  type EventType,
  type InstrumentId,
  formatCurrency,
  whatsappUrl,
} from "@/lib/site";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Momentos", href: "#momentos" },
  { label: "Simulador", href: "#simulador" },
  { label: "Dúvidas", href: "#duvidas" },
];

const weddingMoments = [
  "Entrada do Noivo",
  "Entrada da Noiva",
  "Salmo",
  "Aclamação do Evangelho",
  "Entrada das Alianças",
  "Comunhão",
  "Assinaturas",
  "Fotos",
  "Saída dos Noivos",
];

const receptionItems = [
  "Jantar",
  "Música ambiente",
  "Entrada dos noivos",
  "Momentos especiais",
  "Celebração",
  "Repertório personalizado",
];

const faqItems = [
  {
    question: "Vocês atendem fora de Itaúna/MG?",
    answer:
      "Sim. Atendemos Itaúna/MG e região. O deslocamento pode influenciar no orçamento final.",
  },
  {
    question: "O repertório pode ser personalizado?",
    answer:
      "Sim. A escolha das músicas pode ser feita de acordo com o estilo e a história do casal.",
  },
  {
    question: "Vocês fazem casamento e recepção?",
    answer:
      "Sim. Atendemos tanto o casamento quanto a recepção, com formações musicais personalizadas para cada momento.",
  },
  {
    question: "O valor do simulador é o valor final?",
    answer:
      "Não. O simulador apresenta apenas uma estimativa inicial. A proposta final depende de data, local, duração, deslocamento e estrutura necessária.",
  },
  {
    question: "Como solicito uma proposta?",
    answer:
      "Você pode simular o orçamento no site e enviar a simulação pelo WhatsApp.",
  },
];

function scrollToSimulator() {
  document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
}

function MusicParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, index) => ({
        id: index,
        note: ["♪", "♫", "♬", "♩"][index % 4],
        left: `${(index * 37) % 100}%`,
        delay: `${(index * 1.7) % 14}s`,
        duration: `${18 + (index % 8) * 2}s`,
        size: `${0.9 + (index % 5) * 0.18}rem`,
      })),
    [],
  );

  return (
    <div className="music-particles" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            fontSize: particle.size,
          }}
        >
          {particle.note}
        </span>
      ))}
    </div>
  );
}

function GlobalArtisticBackground() {
  return (
    <div className="site-art-background" aria-hidden="true">
      <div />
    </div>
  );
}

function ArtisticBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[url('/fundo.png')] bg-cover bg-center opacity-[0.2] blur-[4px]" />
      <div className="absolute inset-0 bg-ivory/78" />
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M12.1 4.2a7.7 7.7 0 0 0-6.6 11.7l-1 3.6 3.7-1a7.7 7.7 0 1 0 3.9-14.3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.1 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.1.2-.2.3 0 .6.4.7 1 1.3 1.7 1.7.3.2.4.1.6 0l.6-.5c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.6v.4c0 .4-.2.7-.5.9-.5.3-1.4.6-2.7.2-2.2-.7-4.6-3-5.3-5.2-.4-1.2-.1-2 .2-2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [eventType, setEventType] = useState<EventType>("Casamento");
  const [city, setCity] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [selectedInstruments, setSelectedInstruments] = useState<InstrumentId[]>([]);
  const [hasSimulated, setHasSimulated] = useState(false);

  const selectedInstrumentData = INSTRUMENTS.filter((instrument) =>
    selectedInstruments.includes(instrument.id),
  );

  const estimate = selectedInstrumentData.reduce(
    (total, instrument) => total + instrument.price,
    0,
  );

  const simulationMessage = useMemo(() => {
    const instruments =
      selectedInstrumentData.map((instrument) => instrument.name).join(", ") ||
      "Nenhum instrumento selecionado";

    return `Olá! Vim pelo site do DRF Musical e fiz uma simulação de orçamento.

Tipo de evento: ${eventType}
Data: ${eventDate || "Não informado"}
Cidade/local: ${city.trim() || "Não informado"}
Instrumentos escolhidos: ${instruments}
Valor estimado: ${estimate ? formatCurrency(estimate) : "Não informado"}

Gostaria de receber uma proposta personalizada.`;
  }, [city, estimate, eventDate, eventType, selectedInstrumentData]);

  const floatingMessage = hasSimulated ? simulationMessage : DEFAULT_WHATSAPP_MESSAGE;

  function toggleInstrument(id: InstrumentId) {
    setSelectedInstruments((current) =>
      current.includes(id)
        ? current.filter((instrumentId) => instrumentId !== id)
        : [...current, id],
    );
    setHasSimulated(true);
  }

  function sendSimulation() {
    setHasSimulated(true);
    window.open(whatsappUrl(simulationMessage), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-ivory text-espresso">
      <GlobalArtisticBackground />
      <MusicParticles />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-ivory/36 backdrop-blur-xl transition">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="DRF Musical">
            <Image
              src="/logo-drf.png"
              alt="DRF Musical"
              width={92}
              height={54}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 text-base font-semibold text-espresso/78 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-gold">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="mobile-menu-button lg:hidden"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-espresso/10 bg-ivory/96 px-5 py-5 shadow-soft lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-4 text-base font-semibold">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full px-2 py-2 text-espresso/82"
                >
                  {item.label}
                </a>
              ))}
              <a className="btn btn-dark mt-2" href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}>
                Orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
        {!videoFailed && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/fundo.png"
            onError={() => setVideoFailed(true)}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        )}
        {videoFailed && (
          <div className="absolute inset-0 bg-[url('/fundo.png')] bg-cover bg-center" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/66 via-ivory/54 to-ivory/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),rgba(43,32,24,0.22))]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-14 pt-28 text-center">
          <Image
            src="/logo-drf.png"
            alt="DRF Musical"
            width={190}
            height={112}
            className="mb-8 h-auto w-36 object-contain sm:w-44"
            priority
          />
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-umber">
            Itaúna/MG e região
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-espresso sm:text-7xl lg:text-8xl">
            A trilha sonora do seu grande sonho
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-espresso/78 sm:text-xl">
            Música ao vivo para casamentos, cerimônias e recepções.
          </p>
          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <button className="btn btn-gold" type="button" onClick={scrollToSimulator}>
              Simular orçamento
            </button>
            <a className="btn btn-light" href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="section relative">
        <ArtisticBackdrop />
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">Sobre</p>
            <h2 className="section-title">DRF Musical</h2>
            <p className="section-subtitle">
              Música ao vivo para transformar momentos em memórias.
            </p>
          </div>
          <div>
            <p className="text-lg leading-9 text-espresso/76">
              O DRF Musical leva emoção, sensibilidade e elegância para casamentos,
              cerimônias e recepções. Com formações musicais personalizadas, criamos a
              trilha sonora ideal para cada momento do seu grande dia.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Música ao vivo personalizada",
                "Repertório escolhido com cuidado",
                "Formação ideal para cada momento",
              ].map((item) => (
                <article key={item} className="feature-card">
                  <span>♪</span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="momentos" className="section bg-cream/58">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="eyebrow">Cerimônia</p>
            <h2 className="section-title">
              Momentos que ganham mais emoção com música ao vivo
            </h2>
            <p className="section-subtitle">
              Cada entrada, cada detalhe e cada etapa ganham ainda mais significado
              quando acompanhados pela trilha sonora certa.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {weddingMoments.map((moment, index) => (
              <article key={moment} className="moment-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{moment}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative">
        <ArtisticBackdrop />
        <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Recepção</p>
            <h2 className="section-title">Recepção com música ao vivo</h2>
            <p className="section-subtitle">
              Além do casamento, também criamos uma atmosfera elegante e acolhedora para
              recepções, jantares, entrada dos noivos e momentos especiais.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {receptionItems.map((item) => (
              <article key={item} className="reception-card">
                <span>♬</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="simulador" className="section bg-espresso text-ivory">
        <div className="section-inner">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow text-champagne">Simulador</p>
              <h2 className="section-title text-ivory">
                Simule uma prévia do seu orçamento
              </h2>
              <p className="section-subtitle text-ivory/72">
                Escolha os instrumentos desejados e veja uma estimativa inicial para sua
                formação musical.
              </p>
              <p className="mt-8 rounded-2xl border border-champagne/24 bg-white/7 p-5 text-sm leading-7 text-ivory/70">
                O valor apresentado é apenas uma simulação inicial. A proposta final pode
                variar conforme data, local, duração, deslocamento e estrutura necessária.
              </p>
            </div>

            <div className="simulator-panel">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="field">
                  <span>Tipo de evento</span>
                  <select
                    value={eventType}
                    onChange={(event) => {
                      setEventType(event.target.value as EventType);
                      setHasSimulated(true);
                    }}
                  >
                    {EVENT_TYPES.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  <span>Cidade/local do evento</span>
                  <input
                    type="text"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                      setHasSimulated(true);
                    }}
                    placeholder="Ex.: Itaúna/MG"
                  />
                </label>
                <label className="field sm:col-span-2">
                  <span>Data do evento</span>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(event) => {
                      setEventDate(event.target.value);
                      setHasSimulated(true);
                    }}
                  />
                </label>
              </div>

              <div className="mt-7">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-champagne">
                  Instrumentos desejados
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {INSTRUMENTS.map((instrument) => {
                    const selected = selectedInstruments.includes(instrument.id);
                    return (
                      <button
                        key={instrument.id}
                        type="button"
                        className={`instrument-card ${selected ? "selected" : ""}`}
                        onClick={() => toggleInstrument(instrument.id)}
                        aria-pressed={selected}
                      >
                        <span>{instrument.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-champagne/22 bg-ivory p-5 text-espresso shadow-glow">
                {estimate > 0 ? (
                  <p className="font-display text-3xl font-semibold">
                    Valor estimado: {formatCurrency(estimate)}
                  </p>
                ) : (
                  <p className="text-base font-semibold">
                    Selecione ao menos um instrumento para simular.
                  </p>
                )}
              </div>

              <button className="btn btn-gold mt-5 w-full" type="button" onClick={sendSimulation}>
                Enviar simulação pelo WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="eyebrow">Processo</p>
            <h2 className="section-title">Como funciona</h2>
            <p className="section-subtitle">
              Cada casamento é único. Por isso, após a simulação, entendemos os detalhes
              do evento para montar a proposta ideal.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              "Escolha a formação musical",
              "Simule uma estimativa",
              "Envie pelo WhatsApp",
              "Receba uma proposta personalizada",
            ].map((step, index) => (
              <article key={step} className="step-card">
                <span>{index + 1}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative bg-cream/55">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="eyebrow">Galeria</p>
            <h2 className="section-title">Um pouco da nossa música</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Casamento", "Recepção", "Bastidores"].map((item) => (
              <article key={item} className="gallery-card">
                <div className="absolute inset-0 bg-[url('/fundo.png')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-espresso/50" />
                <div className="relative z-10 flex h-full flex-col justify-between p-6 text-ivory">
                  <span className="play-icon">▶</span>
                  <h3>{item}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="duvidas" className="section relative">
        <ArtisticBackdrop />
        <div className="section-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Dúvidas frequentes</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-espresso text-center text-ivory">
        <div className="section-inner max-w-4xl">
          <p className="eyebrow text-champagne">DRF Musical</p>
          <h2 className="section-title text-ivory">
            Seu grande dia merece uma trilha sonora especial.
          </h2>
          <p className="section-subtitle mx-auto text-ivory/72">
            Simule sua formação musical ou fale conosco para receber uma proposta personalizada.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="btn btn-gold" type="button" onClick={scrollToSimulator}>
              Simular orçamento
            </button>
            <a className="btn btn-outline" href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ivory px-5 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <Image
              src="/logo-drf.png"
              alt="DRF Musical"
              width={120}
              height={72}
              className="mb-4 h-auto w-28 object-contain"
            />
            <p className="font-display text-2xl font-semibold">
              A trilha sonora do seu grande sonho
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm md:items-end">
            <div className="flex items-center gap-3 md:justify-end">
              <a
                className="footer-social-link"
                href="https://instagram.com/drfmusical"
                aria-label="Instagram do DRF Musical"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                className="footer-social-link footer-social-link-dark"
                href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                aria-label="WhatsApp do DRF Musical"
              >
                <WhatsAppIcon />
              </a>
            </div>
            <p className="text-espresso/55">© DRF Musical. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl(floatingMessage)}
        target="_blank"
        rel="noreferrer"
      >
        Orçamento
      </a>
    </main>
  );
}

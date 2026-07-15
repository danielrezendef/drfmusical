"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { SoundtrackBuilder } from "@/components/soundtrack/SoundtrackBuilder";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  EVENT_TYPES,
  INSTRUMENTS,
  SOUND_SYSTEM_PRICE,
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
  { label: "Trilha sonora", href: "#trilha-sonora" },
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

function MusicParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, index) => ({
        id: index,
        note: ["♪", "♫", "♬", "♩"][index % 4],
        left: `${(index * 37) % 100}%`,
        delay: `${(index * 1.7) % 14}s`,
        duration: `${18 + (index % 8) * 2}s`,
        size: `${1.8 + (index % 5) * 0.34}rem`,
      })),
    [],
  );

  useEffect(() => {
    let animationFrame: number | null = null;
    let pointerX = -1000;
    let pointerY = -1000;

    function updateParticlePositions() {
      animationFrame = null;
      const notes = containerRef.current?.querySelectorAll<HTMLElement>("[data-floating-note]");
      if (!notes) return;

      notes.forEach((note) => {
        const rect = note.parentElement?.getBoundingClientRect();
        if (!rect) return;

        const deltaX = rect.left + rect.width / 2 - pointerX;
        const deltaY = rect.top + rect.height / 2 - pointerY;
        const distance = Math.hypot(deltaX, deltaY);
        const influenceRadius = 150;

        if (distance > 0 && distance < influenceRadius) {
          const force = (1 - distance / influenceRadius) * 28;
          note.style.setProperty("--note-push-x", `${(deltaX / distance) * force}px`);
          note.style.setProperty("--note-push-y", `${(deltaY / distance) * force}px`);
        } else {
          note.style.setProperty("--note-push-x", "0px");
          note.style.setProperty("--note-push-y", "0px");
        }
      });
    }

    function handlePointerMove(event: PointerEvent) {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateParticlePositions);
      }
    }

    function resetParticles() {
      pointerX = -1000;
      pointerY = -1000;
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateParticlePositions);
      }
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", resetParticles);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", resetParticles);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={containerRef} className="music-particles" aria-hidden="true">
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
          <span data-floating-note>{particle.note}</span>
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
      <div className="absolute inset-0 bg-ivory/86" />
    </div>
  );
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [eventType, setEventType] = useState<EventType>("Casamento");
  const [city, setCity] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [selectedInstruments, setSelectedInstruments] = useState<InstrumentId[]>([]);

  const selectedInstrumentData = INSTRUMENTS.filter((instrument) =>
    selectedInstruments.includes(instrument.id),
  );

  const instrumentsTotal = selectedInstrumentData.reduce(
    (total, instrument) => total + instrument.price,
    0,
  );
  
  const estimate =
    selectedInstrumentData.length > 0 ? instrumentsTotal + SOUND_SYSTEM_PRICE : 0;

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

  function toggleInstrument(id: InstrumentId) {
    setSelectedInstruments((current) =>
      current.includes(id)
        ? current.filter((instrumentId) => instrumentId !== id)
        : [...current, id],
    );
  }

  function sendSimulation() {
    window.open(whatsappUrl(simulationMessage), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-espresso">
      <GlobalArtisticBackground />
      <MusicParticles />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-ivory/36 backdrop-blur-xl transition">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-5">
          <a href="#inicio" className="flex items-center gap-3" aria-label="DRF Musical">
            <Image
              src="/logo-drf.png"
              alt="Logo do DRF Musical"
              width={122}
              height={72}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-5 text-sm font-semibold text-espresso/78 xl:gap-7 xl:text-base lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="main-menu-link">
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
              <a
                className="btn btn-dark mt-2"
                href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
              >
                Orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-ivory" />
        {!videoFailed && (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-50"
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
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/88 via-cream/76 to-ivory/96" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,232,0.42),rgba(43,32,24,0.12))]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-14 pt-28 text-center">
          <Image
            src="/logo-drf.png"
            alt="Logo do DRF Musical"
            width={190}
            height={112}
            className="mb-8 h-auto w-36 object-contain sm:w-44"
            priority
          />
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-espresso sm:text-7xl lg:text-8xl">
            A trilha sonora do seu grande sonho
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-espresso/78 sm:text-xl">
            Música ao vivo para o seu melhor momento.
          </p>
          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a className="btn btn-gold" href="#simulador">
              Simular orçamento
            </a>
            <a
              className="btn btn-light"
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="section relative">
        <div className="absolute inset-0 -z-10 bg-ivory" aria-hidden="true" />
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
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
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

      <section id="momentos" className="section relative bg-cream/58">
        <div className="absolute inset-0 bg-ivory" aria-hidden="true" />
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
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

      <section id="simulador" className="section simulator-section text-ivory">
        <div className="section-inner">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow text-champagne">Simulador</p>
              <h2 className="section-title simulator-heading">
                Simule uma prévia do seu orçamento
              </h2>
              <p className="section-subtitle simulator-copy">
                Escolha os instrumentos desejados e veja uma estimativa inicial para sua
                formação musical.
              </p>
              <p className="mt-6 rounded-2xl border border-champagne/24 bg-white/7 p-4 text-sm font-medium leading-7 text-ivory/86">
                O valor apresentado é apenas uma simulação inicial. A proposta final pode
                variar conforme data, local, duração, deslocamento e estrutura necessária.
              </p>
              <div className="mt-4 flex justify-start">
                <button className="btn btn-gold simulator-whatsapp-button" type="button" onClick={sendSimulation}>
                  Enviar simulação pelo WhatsApp
                </button>
              </div>
            </div>

            <div className="simulator-panel">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="field">
                  <span>Tipo de evento</span>
                  <select
                    value={eventType}
                    onChange={(event) => setEventType(event.target.value as EventType)}
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
                    onChange={(event) => setCity(event.target.value)}
                    placeholder="Ex.: Itaúna/MG"
                  />
                </label>
                <label className="field sm:col-span-2">
                  <span>Data do evento</span>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
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

            </div>
          </div>
        </div>
      </section>

      <SoundtrackBuilder />

      <section className="section relative">
        <ArtisticBackdrop />
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="eyebrow">Processo</p>
            <h2 className="section-title">Como funciona</h2>
            <p className="section-subtitle">
              Cada casamento é único. Por isso, após a simulação, entendemos os detalhes
              do evento para montar a proposta ideal.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
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

      <section id="duvidas" className="section faq-footer-section relative">
        <ArtisticBackdrop />
        <div className="section-inner flex min-h-full flex-col justify-between gap-7">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="section-title">Dúvidas frequentes</h2>
            </div>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <footer className="footer-in-faq">
            <div className="footer-in-faq-inner flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-md">
                <Image
                  src="/logo-drf-branca.png"
                  alt="Logo do DRF Musical"
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
                    className="footer-social-link footer-social-link-instagram"
                    href="https://instagram.com/drfmusical"
                    aria-label="Instagram do DRF Musical"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="social-icon-sprite social-icon-instagram" aria-hidden="true" />
                  </a>
                  <a
                    className="footer-social-link footer-social-link-whatsapp"
                    href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                    aria-label="WhatsApp do DRF Musical"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="social-icon-sprite social-icon-whatsapp" aria-hidden="true" />
                  </a>
                </div>
                <p className="text-ivory/55">© DRF Musical. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      </section>

    </main>
  );
}

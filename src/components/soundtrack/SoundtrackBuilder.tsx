"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { weddingMoments } from "@/data/weddingSongs";
import { whatsappUrl } from "@/lib/site";
import { SelectionToast } from "./SelectionToast";
import { SoundtrackSummary } from "./SoundtrackSummary";
import { WeddingMomentAccordion } from "./WeddingMomentAccordion";

const STORAGE_KEY = "drf-musical-soundtrack";

type SelectionMap = Record<string, string[]>;

function validateSelections(value: unknown): SelectionMap {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value).flatMap(([momentId, storedSelection]) => {
      const moment = weddingMoments.find((item) => item.id === momentId);
      if (!moment) return [];

      const storedIds = typeof storedSelection === "string"
        ? [storedSelection]
        : Array.isArray(storedSelection)
          ? storedSelection.filter((id): id is string => typeof id === "string")
          : [];
      const validIds = [...new Set(storedIds)]
        .filter((id) => moment.songs.some((song) => song.id === id))
        .slice(0, moment.maxSelections ?? 1);

      return validIds.length > 0 ? [[momentId, validIds]] : [];
    }),
  );
}

export function SoundtrackBuilder() {
  const [selectedSongIds, setSelectedSongIds] = useState<SelectionMap>({});
  const [openMomentId, setOpenMomentId] = useState<string>(weddingMoments[0].id);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [storageReady, setStorageReady] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastMessage(message);
    toastTimer.current = setTimeout(() => setToastMessage(null), 3200);
  }, []);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setSelectedSongIds(validateSelections(JSON.parse(saved)));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setStorageReady(true);
    }

    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedSongIds));
  }, [selectedSongIds, storageReady]);

  function toggleSong(momentId: string, songId: string) {
    const moment = weddingMoments.find((item) => item.id === momentId);
    const song = moment?.songs.find((item) => item.id === songId);
    if (!moment || !song) return;

    const maxSelections = moment.maxSelections ?? 1;
    const currentIds = selectedSongIds[momentId] ?? [];
    const removing = currentIds.includes(songId);

    if (!removing && currentIds.length >= maxSelections) {
      showToast(`Você já escolheu ${maxSelections} músicas para ${moment.title}. Remova uma para trocar.`);
      return;
    }

    setSelectedSongIds((current) => {
      const selectedIds = current[momentId] ?? [];
      if (removing) {
        const remainingIds = selectedIds.filter((id) => id !== songId);
        const next = { ...current };
        if (remainingIds.length > 0) next[momentId] = remainingIds;
        else delete next[momentId];
        return next;
      }
      return {
        ...current,
        [momentId]: maxSelections === 1 ? [songId] : [...selectedIds, songId],
      };
    });

    showToast(
      removing
        ? `“${song.title}” foi removida da trilha sonora.`
        : `“${song.title}” foi adicionada à trilha sonora do seu casamento.`,
    );
  }

  function removeSelection(momentId: string, songId: string) {
    const moment = weddingMoments.find((item) => item.id === momentId);
    const song = moment?.songs.find((item) => item.id === songId);
    setSelectedSongIds((current) => {
      const remainingIds = (current[momentId] ?? []).filter((id) => id !== songId);
      const next = { ...current };
      if (remainingIds.length > 0) next[momentId] = remainingIds;
      else delete next[momentId];
      return next;
    });
    if (song) showToast(`“${song.title}” foi removida da trilha sonora.`);
  }

  function changeSelection(momentId: string) {
    setOpenMomentId(momentId);
    window.requestAnimationFrame(() => {
      document.getElementById(`moment-${momentId}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }

  function clearSelections() {
    if (!window.confirm("Deseja limpar todas as músicas escolhidas?")) return;
    setSelectedSongIds({});
    window.localStorage.removeItem(STORAGE_KEY);
    showToast("Sua seleção foi limpa.");
  }

  function sendSoundtrack() {
    if (Object.values(selectedSongIds).every((songIds) => songIds.length === 0)) {
      showToast("Escolha pelo menos uma música para montar sua trilha sonora.");
      return;
    }

    const choices = weddingMoments
      .map((moment) => {
        const songs = moment.songs.filter((item) =>
          (selectedSongIds[moment.id] ?? []).includes(item.id),
        );
        const selectedText = songs.length > 0
          ? songs.map((song) => `${song.title} — ${song.artist}`).join("\n")
          : "Ainda não escolhido";
        return `${moment.title}:\n${selectedText}`;
      })
      .join("\n\n");

    const message = `Olá!\n\nMontei a trilha sonora do meu casamento no site do DRF Musical.\n\n${choices}\n\nGostaria de conversar sobre meu casamento e receber uma proposta personalizada.`;

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="trilha-sonora" className="section soundtrack-section">
      <div className="section-inner">
        <div className="soundtrack-intro">
          <p className="eyebrow">Uma história contada em música</p>
          <p className="soundtrack-emotional-copy">
            Cada casamento conta uma história. A música é quem dá voz a essa história.
          </p>
          <h2 className="section-title">Monte a trilha sonora do seu casamento</h2>
          <p className="section-subtitle">
            Escolha uma música para cada momento e envie sua seleção diretamente para o
            DRF Musical.
          </p>
          <p className="soundtrack-note">
            Estas são sugestões para inspirar vocês. O repertório pode ser personalizado
            de acordo com a história e o estilo do casal.
          </p>
        </div>

        <div className="soundtrack-layout">
          <div className="soundtrack-moments">
            {weddingMoments.map((moment) => (
              <WeddingMomentAccordion
                key={moment.id}
                moment={moment}
                isOpen={openMomentId === moment.id}
                selectedSongIds={selectedSongIds[moment.id]}
                onToggle={() => setOpenMomentId((current) => current === moment.id ? "" : moment.id)}
                onSelect={(songId) => toggleSong(moment.id, songId)}
              />
            ))}
          </div>

          <SoundtrackSummary
            selectedSongIds={selectedSongIds}
            onRemove={removeSelection}
            onChange={changeSelection}
            onClear={clearSelections}
            onSend={sendSoundtrack}
          />
        </div>
      </div>

      <SelectionToast message={toastMessage} />
    </section>
  );
}

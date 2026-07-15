import type { WeddingMoment } from "@/data/weddingSongs";
import { MomentIcon } from "./MomentIcon";
import { SongCard } from "./SongCard";

type WeddingMomentAccordionProps = {
  moment: WeddingMoment;
  isOpen: boolean;
  searchQuery?: string;
  selectedSongIds?: string[];
  onToggle: () => void;
  onSelect: (songId: string) => void;
};

export function WeddingMomentAccordion({
  moment,
  isOpen,
  searchQuery = "",
  selectedSongIds = [],
  onToggle,
  onSelect,
}: WeddingMomentAccordionProps) {
  const panelId = `soundtrack-panel-${moment.id}`;
  const buttonId = `soundtrack-button-${moment.id}`;
  const maxSelections = moment.maxSelections ?? 1;
  const normalizedQuery = searchQuery.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
  const visibleSongs = [...moment.songs]
    .sort((first, second) => {
      const featuredOrder = Number(Boolean(second.featured)) - Number(Boolean(first.featured));
      return featuredOrder || first.title.localeCompare(second.title, "pt-BR", { sensitivity: "base" });
    })
    .filter((song) => {
      if (!normalizedQuery) return true;
      const searchableText = `${song.title} ${song.artist}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("pt-BR");
      return searchableText.includes(normalizedQuery);
    });
  const selectedSongs = moment.songs.filter((song) => selectedSongIds.includes(song.id));
  const selectionSummary = maxSelections > 1
    ? `${selectedSongs.length} de ${maxSelections} músicas escolhidas`
    : selectedSongs[0]
      ? `${selectedSongs[0].title} — ${selectedSongs[0].artist}`
      : "Ainda não escolhido";

  return (
    <article className={`soundtrack-accordion ${isOpen ? "is-open" : ""}`} id={`moment-${moment.id}`}>
      <button
        id={buttonId}
        className="soundtrack-accordion-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="moment-icon">
          <MomentIcon name={moment.icon} />
        </span>
        <span className="moment-heading">
          <strong>{moment.title}</strong>
          <small>{selectionSummary}</small>
        </span>
        <span className="accordion-indicator" aria-hidden="true" />
      </button>

      <div
        id={panelId}
        className="soundtrack-accordion-panel"
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div>
          <div className="soundtrack-accordion-content">
            <p className="moment-description">{moment.description}</p>
            {maxSelections > 1 && (
              <p className="moment-selection-guidance">
                Escolha {maxSelections} músicas para acompanhar este momento.
              </p>
            )}
            <div className="soundtrack-song-list">
              {visibleSongs.map((song) => (
                <SongCard
                  key={song.id}
                  song={song}
                  selected={selectedSongIds.includes(song.id)}
                  onToggle={() => onSelect(song.id)}
                />
              ))}
              {visibleSongs.length === 0 && (
                <p className="soundtrack-search-empty">
                  Nenhuma música encontrada neste momento.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

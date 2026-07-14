import { weddingMoments } from "@/data/weddingSongs";
import { SoundtrackProgress } from "./SoundtrackProgress";

type SoundtrackSummaryProps = {
  selectedSongIds: Record<string, string[]>;
  onRemove: (momentId: string, songId: string) => void;
  onChange: (momentId: string) => void;
  onClear: () => void;
  onSend: () => void;
};

export function SoundtrackSummary({
  selectedSongIds,
  onRemove,
  onChange,
  onClear,
  onSend,
}: SoundtrackSummaryProps) {
  const completed = weddingMoments.filter((moment) =>
    (selectedSongIds[moment.id]?.length ?? 0) >= (moment.maxSelections ?? 1),
  ).length;
  const totalSelected = Object.values(selectedSongIds).reduce(
    (total, songIds) => total + songIds.length,
    0,
  );

  return (
    <aside className="soundtrack-summary" aria-label="Resumo da trilha sonora">
      <div className="soundtrack-summary-title-row">
        <div>
          <p className="eyebrow">Resumo</p>
          <h3>Sua trilha sonora</h3>
        </div>
        <button
          className="clear-soundtrack-button"
          type="button"
          onClick={onClear}
          disabled={totalSelected === 0}
        >
          Limpar seleção
        </button>
      </div>

      <SoundtrackProgress completed={completed} total={weddingMoments.length} />

      <ol className="soundtrack-summary-list">
        {weddingMoments.map((moment) => {
          const selectedIds = selectedSongIds[moment.id] ?? [];
          const songs = moment.songs.filter((item) => selectedIds.includes(item.id));
          const isComplete = songs.length >= (moment.maxSelections ?? 1);

          return (
            <li
              key={moment.id}
              className={`${songs.length > 0 ? "is-filled" : ""} ${isComplete ? "is-complete" : ""}`}
            >
              <span className="summary-status-dot" aria-hidden="true" />
              <div>
                <strong>{moment.title}</strong>
                {songs.length === 0 ? (
                  <p>Ainda não escolhido</p>
                ) : (
                  <ul className="summary-selected-songs">
                    {songs.map((song) => (
                      <li key={song.id}>
                        <span>{song.title} — {song.artist}</span>
                        <button
                          type="button"
                          aria-label={`Remover ${song.title} de ${moment.title}`}
                          onClick={() => onRemove(moment.id, song.id)}
                        >
                          Remover
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {songs.length > 0 && (
                  <div className="summary-item-actions">
                    <button type="button" onClick={() => onChange(moment.id)}>Alterar</button>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <button className="btn btn-gold soundtrack-send-button" type="button" onClick={onSend}>
        Enviar nossa trilha sonora
      </button>
    </aside>
  );
}

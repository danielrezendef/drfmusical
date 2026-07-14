import type { WeddingSong } from "@/data/weddingSongs";
import { PlatformLinkButton } from "./PlatformLinkButton";

type SongCardProps = {
  song: WeddingSong;
  selected: boolean;
  onToggle: () => void;
};

export function SongCard({ song, selected, onToggle }: SongCardProps) {
  return (
    <article className={`soundtrack-song-card ${selected ? "is-selected" : ""}`}>
      <div>
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
      </div>

      <div className="platform-links">
        {song.spotifyUrl && <PlatformLinkButton platform="spotify" href={song.spotifyUrl} />}
        {song.youtubeUrl && <PlatformLinkButton platform="youtube" href={song.youtubeUrl} />}
      </div>

      <button
        className="song-select-button"
        type="button"
        aria-pressed={selected}
        onClick={onToggle}
      >
        {selected
          ? "✓ Adicionada à nossa trilha sonora"
          : "+ Adicionar à nossa trilha sonora"}
      </button>
    </article>
  );
}

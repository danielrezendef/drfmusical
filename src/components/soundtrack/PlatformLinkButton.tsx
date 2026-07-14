type PlatformLinkButtonProps = {
  platform: "spotify" | "youtube";
  href: string;
};

function SpotifyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M7 9.2c3.5-1 7.8-.7 10.7.9M7.7 12.3c3-.8 6.6-.5 9.1.8M8.3 15.2c2.4-.6 5.2-.4 7.3.6" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.45" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M21 8.2a3 3 0 0 0-2.1-2.1C17 5.6 12 5.6 12 5.6s-5 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.6 12 31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8Z" fill="currentColor" />
      <path d="m10 15.2 5-3.2-5-3.2Z" fill="#fff" />
    </svg>
  );
}

export function PlatformLinkButton({ platform, href }: PlatformLinkButtonProps) {
  const label = platform === "spotify" ? "Ouvir no Spotify" : "Ouvir no YouTube";

  return (
    <a
      className={`platform-link platform-link-${platform}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (abre em uma nova aba)`}
    >
      {platform === "spotify" ? <SpotifyIcon /> : <YouTubeIcon />}
      <span>{label}</span>
    </a>
  );
}

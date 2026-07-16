export function DRFTipBox({ children }: { children: React.ReactNode }) {
  return (
    <aside className="drf-tip-box" aria-label="Dica do DRF Musical">
      <p className="inspiration-eyebrow">Dica do DRF Musical</p>
      <p>{children}</p>
    </aside>
  );
}

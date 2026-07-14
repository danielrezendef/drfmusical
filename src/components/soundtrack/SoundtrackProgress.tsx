type SoundtrackProgressProps = {
  completed: number;
  total: number;
};

export function SoundtrackProgress({ completed, total }: SoundtrackProgressProps) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="soundtrack-progress">
      <div className="soundtrack-progress-copy">
        <strong>{completed} de {total} momentos escolhidos</strong>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div
        className="soundtrack-progress-track"
        role="progressbar"
        aria-label="Progresso da trilha sonora"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={completed}
      >
        <span style={{ width: `${percentage}%` }} />
      </div>
      {completed === total && (
        <p className="soundtrack-complete">Sua trilha sonora está completa ✨</p>
      )}
    </div>
  );
}

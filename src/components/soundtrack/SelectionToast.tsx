type SelectionToastProps = {
  message: string | null;
};

export function SelectionToast({ message }: SelectionToastProps) {
  return (
    <div
      className={`selection-toast ${message ? "is-visible" : ""}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {message}
    </div>
  );
}

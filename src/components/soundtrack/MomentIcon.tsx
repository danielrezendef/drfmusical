type MomentIconProps = {
  name: string;
};

export function MomentIcon({ name }: MomentIconProps) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...commonProps}>
      {name === "rings" && (
        <>
          <circle cx="9" cy="12" r="5" />
          <circle cx="15" cy="12" r="5" />
          <path d="m7.5 5 1.5-2 1.5 2" />
        </>
      )}
      {name === "book" && (
        <>
          <path d="M4 5.5A3.5 3.5 0 0 1 7.5 4H11v15H7.5A3.5 3.5 0 0 0 4 20.5Z" />
          <path d="M20 5.5A3.5 3.5 0 0 0 16.5 4H13v15h3.5a3.5 3.5 0 0 1 3.5 1.5Z" />
        </>
      )}
      {name === "rays" && (
        <>
          <path d="M12 3v3M4.2 7.2l2.1 2.1M19.8 7.2l-2.1 2.1M3 15h3M18 15h3" />
          <path d="M8 18h8M9.5 21h5" />
          <path d="M8.5 15a4.5 4.5 0 1 1 7 0" />
        </>
      )}
      {name === "chalice" && (
        <>
          <path d="M7 4h10l-1 6a4 4 0 0 1-8 0Z" />
          <path d="M12 14v5M8.5 20h7" />
        </>
      )}
      {name === "pen" && (
        <>
          <path d="m4 20 4.2-1 10.6-10.6a2 2 0 0 0-2.8-2.8L5.4 16.2Z" />
          <path d="m14.5 7.1 2.8 2.8M4 20h7" />
        </>
      )}
      {name === "camera" && (
        <>
          <path d="M4 7h4l1.5-2h5L16 7h4v12H4Z" />
          <circle cx="12" cy="13" r="3.5" />
        </>
      )}
      {name === "celebration" && (
        <>
          <path d="m5 20 4-10 5 5Z" />
          <path d="m13 4 .5 2M18 6l-2 1M19 12l-2-.5M9 5l1.2 1.6M15.5 10.5l2-2" />
        </>
      )}
      {(name === "groom" || name === "bride") && (
        <>
          <circle cx="12" cy="7" r="3" />
          <path d="M6.5 20a5.5 5.5 0 0 1 11 0" />
          {name === "groom" ? <path d="m10 12 2 2 2-2M12 14v4" /> : <path d="M8 5c1-3 7-3 8 0" />}
        </>
      )}
    </svg>
  );
}

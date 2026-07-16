import { ImageResponse } from "next/og";

export const alt = "Inspirações para a trilha sonora do seu casamento — DRF Musical";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "linear-gradient(135deg, #fbf7ef 0%, #f2eadb 62%, #e5d1a3 100%)",
        color: "#2b2018",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "2px solid rgba(143, 108, 53, 0.32)",
          borderRadius: "38px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "54px 62px",
          width: "100%",
        }}
      >
        <div style={{ color: "#8f6c35", display: "flex", fontSize: 30, letterSpacing: 7 }}>
          DRF MUSICAL · INSPIRAÇÕES
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "serif", fontSize: 78, lineHeight: 1.03 }}>
            Inspirações para a trilha sonora do seu casamento
          </div>
          <div style={{ color: "#76572f", display: "flex", fontSize: 28, marginTop: 28 }}>
            Guias, repertórios e histórias para cada momento.
          </div>
        </div>
        <div style={{ color: "#b9934f", display: "flex", fontSize: 46 }}>♪ &nbsp; ♫ &nbsp; ♬</div>
      </div>
    </div>,
    size,
  );
}

import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — AI software agency`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0c0d0b",
          color: "#f2eee6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#3dcfc4",
          }}
        >
          AI Software Agency
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 36, maxWidth: 900, color: "#a3a399", lineHeight: 1.3 }}>
            {siteConfig.tagline}
          </div>
        </div>
        <div
          style={{
            width: 180,
            height: 12,
            background: "#d4f34a",
            borderRadius: 4,
          }}
        />
      </div>
    ),
    { ...size },
  );
}

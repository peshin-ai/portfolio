import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(135deg, #050b14 0%, #0f172a 58%, #082f49 100%)",
        color: "#f8fafc",
        padding: "64px",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 24,
          letterSpacing: 6,
          color: "#38bdf8",
        }}
      >
        UNG TA HOANG TUAN
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div
          style={{
            fontSize: 72,
            lineHeight: 1.1,
            fontWeight: 700,
            maxWidth: 900,
          }}
        >
          Frontend Developer for Web3, Fintech and
          enterprise products.
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.4,
            color: "#cbd5e1",
            maxWidth: 860,
          }}
        >
          React, Next.js and TypeScript experience
          across DeFi trading platforms, insurance
          systems and large-scale product
          interfaces.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 18,
          fontSize: 22,
          color: "#7dd3fc",
        }}
      >
        <div>4+ years</div>
        <div>200K+ users</div>
        <div>$4.5M liquidity product</div>
      </div>
    </div>,
    size,
  );
}

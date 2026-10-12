import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shahal N — Performance Marketer | Meta & Google Ads";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050508",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.15)",
            filter: "blur(120px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#3b82f6",
            }}
          />
          <span
            style={{
              color: "#3b82f6",
              fontSize: "18px",
              letterSpacing: "4px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Performance Marketer &middot; Malappuram, Kerala
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "76px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-2px",
              margin: 0,
              lineHeight: 1.05,
              textTransform: "uppercase",
            }}
          >
            Shahal N
          </h1>
          <p
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#3b82f6",
              margin: 0,
              letterSpacing: "-1px",
              textTransform: "uppercase",
            }}
          >
            Meta Ads &middot; Google Ads &middot; App Marketing
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "rgba(255, 255, 255, 0.6)",
              margin: 0,
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Turning ad spend into measurable business growth across Kerala, India, and the GCC.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "32px",
          }}
        >
          <span style={{ color: "#ffffff", fontSize: "20px", fontWeight: 600 }}>
            shahaln.vercel.app
          </span>
          <span style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "16px" }}>
            Lead Generation &middot; Conversion Tracking &middot; ROAS Optimization
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

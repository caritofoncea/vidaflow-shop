import { ImageResponse } from "next/og";

// Site-wide default social share card (1200x630). Product pages override this
// with their own product image via generateMetadata.
export const alt = "VidaFlow — Flow Into Your Best Life";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #064e3b 0%, #047857 55%, #0f766e 100%)",
          fontFamily: "sans-serif",
          color: "white",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            display: "flex",
          }}
        >
          VidaFlow
        </div>
        <div
          style={{
            fontSize: 46,
            fontWeight: 600,
            marginTop: 24,
            color: "#d1fae5",
            display: "flex",
          }}
        >
          Flow Into Your Best Life
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 36,
            color: "#a7f3d0",
            display: "flex",
          }}
        >
          Premium Wellness · Guatemala &amp; USA
        </div>
      </div>
    ),
    { ...size }
  );
}

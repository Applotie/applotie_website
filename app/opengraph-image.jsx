import { ImageResponse } from "next/og";

// Default social-share image for every page that doesn't set its own (generated at build time).
export const alt = "Applotie Technologies: web development and digital marketing in Patna";
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
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ff2d2d",
          color: "#111111",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "#111111" }} />
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>Applotie</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>
            We don&apos;t do average.
          </div>
          <div style={{ fontSize: 34, maxWidth: 900, lineHeight: 1.3 }}>
            Websites, apps, SEO, ads, reputation and branding for growing businesses.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, fontWeight: 600 }}>applotie.com · Patna, Bihar</div>
      </div>
    ),
    size
  );
}

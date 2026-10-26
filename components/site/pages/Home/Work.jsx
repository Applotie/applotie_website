import Link from "next/link";

// Work section. Server component.
export default function Work() {
  return (
    <>
      <section id="work" style={{ padding: "72px 0 104px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">(02) Selected work</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Work that moves</span>
                </span>
                <span className="mask rvm">
                  <span>the numbers.</span>
                </span>
              </h2>
            </div>
            <Link className="ul rv" href="/projects">
              All case studies{" "}
              <svg
                className="ar"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </Link>
          </div>

          <Link href="/projects" className="card wk" style={{ marginBottom: "48px" }}>
            <div
              className="clipin wk-img"
              aria-hidden="true"
              style={{
                borderRadius: "28px",
                overflow: "hidden",
                background: "#ff2d2d",
                height: "clamp(320px, 40vw, 520px)",
                position: "relative",
                display: "grid",
                placeItems: "center",
              }}
            >
              <img
                className="wk-shot"
                src="/Meddolic-Applotie.webp"
                alt=""
                width="1400"
                height="720"
                loading="lazy"
                decoding="async"
              />
              <span
                style={{
                  position: "absolute",
                  right: "24px",
                  top: "24px",
                  background: "#ffffff",
                  color: "#111111",
                  borderRadius: "20px",
                  padding: "12px 16px",
                  textAlign: "right",
                  transform: "rotate(4deg)",
                  boxShadow: "0 16px 30px -18px rgba(17,17,17,.6)",
                }}
              >
                <span
                  className="disp"
                  style={{ display: "block", fontSize: "44px", lineHeight: "1", fontWeight: "800", color: "#ff2d2d" }}
                >
                  4×
                </span>
                <span style={{ fontSize: "13px", fontWeight: "700" }}>revenue</span>
              </span>
              <span
                style={{
                  position: "absolute",
                  left: "24px",
                  bottom: "24px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                <span className="tag" style={{ background: "#ffffff" }}>
                  Brand
                </span>
                <span className="tag" style={{ background: "#ffffff" }}>
                  Website
                </span>
                <span className="tag" style={{ background: "#ffffff" }}>
                  Social
                </span>
                <span className="tag" style={{ background: "#ffffff" }}>
                  Ads
                </span>
              </span>
            </div>
            <div className="split rv" style={{ paddingTop: "28px", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div className="lbl lbl-l muted">Meddolic · Brand, website, social &amp; ads</div>
                <h3 className="h3x" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                  Built the brand from the ground up, then grew revenue 4×.
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                <p className="muted" style={{ margin: "0", maxWidth: "380px" }}>
                  Brand identity, a website built to sell, always-on social and performance marketing, run by one team
                  pulling in the same direction.
                </p>
                <span className="ul">
                  Read the story{" "}
                  <svg
                    className="ar"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          <div className="g2">
            <Link
              href="/projects"
              className="card wk"
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div
                className="clipin wk-img"
                aria-hidden="true"
                style={{
                  borderRadius: "28px",
                  overflow: "hidden",
                  background: "#2f5bff",
                  height: "360px",
                  position: "relative",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  className="wk-shot"
                  src="/SnappyIndia-Applotie.webp"
                  alt=""
                  width="1400"
                  height="720"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div
                className="rv"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px" }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div className="lbl lbl-l muted">Snappy India · Performance marketing</div>
                  <h3
                    className="h4x"
                    style={{ fontSize: "26px", lineHeight: "32px", fontWeight: "800", maxWidth: "360px" }}
                  >
                    Turned ad spend into 6× sales.
                  </h3>
                </div>
                <div style={{ textAlign: "right", flex: "none" }}>
                  <div className="num-big" style={{ fontSize: "56px", color: "#2f5bff" }}>
                    6×
                  </div>
                  <div className="muted" style={{ fontSize: "14px" }}>
                    sales
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="/projects"
              className="card wk"
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div
                className="clipin wk-img"
                aria-hidden="true"
                style={{
                  borderRadius: "28px",
                  overflow: "hidden",
                  background: "#ffe14d",
                  height: "360px",
                  position: "relative",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  className="wk-shot"
                  src="/KhakiaMetals-Applotie.webp"
                  alt=""
                  width="1400"
                  height="720"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div
                className="rv"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px" }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div className="lbl lbl-l muted">Kharakia Metals · Presence &amp; reputation</div>
                  <h3
                    className="h4x"
                    style={{ fontSize: "26px", lineHeight: "32px", fontWeight: "800", maxWidth: "380px" }}
                  >
                    Gave an established metals business the online presence it deserved.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

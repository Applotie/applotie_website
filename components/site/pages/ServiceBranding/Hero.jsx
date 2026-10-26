import Link from "next/link";

// Hero section. Server component.
export default function Hero() {
  return (
    <>
      <section style={{ padding: "56px 0 96px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>Branding in Patna</span>
          </div>
          <div className="shero">
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div className="lbl eb in">Service 06 · Branding agency in Patna</div>
              <h1 className="h1x" style={{ fontSize: "clamp(44px, 5.8vw, 86px)" }}>
                <span className="mask">
                  <span className="d1">Branding in Patna</span>
                </span>
                <span className="mask">
                  <span className="d2">for brands people</span>
                </span>
                <span className="mask">
                  <span className="d3">
                    remember<span style={{ color: "#ff2d2d" }}>.</span>
                  </span>
                </span>
              </h1>
              <p className="lead in d4">
                Strategy, logo design and a complete visual identity for Patna businesses ready to look as good as they
                are, applied everywhere from your signboard to your Instagram.
              </p>
              <div className="in d5" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a className="btn btn-z" href="#mixer">
                  Try the brand mixer{" "}
                  <svg
                    className="arr"
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
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <Link className="btn btn-o" href="/contact">
                  Talk about your brand
                </Link>
              </div>
              <div
                className="in d5 lbl lbl-l muted"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 20px",
                  borderTop: "1px solid #ececf1",
                  paddingTop: "18px",
                }}
              >
                <span>Strategy first</span>
                <span>Full guidelines</span>
                <span>You own every file</span>
              </div>
            </div>
            <div className="svisual popin d3" aria-hidden="true">
              <div
                className="bpiece"
                style={{
                  left: "8%",
                  top: "10%",
                  width: "46%",
                  height: "42%",
                  background: "#ffffff",
                  transform: "rotate(-6deg)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  src="/brand/applotie-lockup.svg"
                  alt=""
                  width="1148"
                  height="240"
                  style={{ width: "76%", height: "auto" }}
                />
              </div>
              <div
                className="bpiece"
                style={{
                  right: "8%",
                  top: "8%",
                  width: "34%",
                  height: "30%",
                  background: "#2f5bff",
                  color: "#ffffff",
                  transform: "rotate(5deg)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "18px",
                  animationDelay: "-2s",
                }}
              >
                <span
                  style={{ fontFamily: "'Fraunces', serif", fontSize: "64px", lineHeight: ".9", fontWeight: "800" }}
                >
                  Aa
                </span>
              </div>
              <div
                className="bpiece"
                style={{
                  right: "10%",
                  top: "44%",
                  width: "30%",
                  height: "18%",
                  background: "#ffe14d",
                  transform: "rotate(-3deg)",
                  animationDelay: "-3.5s",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "12px",
                }}
              >
                <span className="lbl" style={{ fontSize: "10px" }}>
                  Sun #ffe14d
                </span>
              </div>
              <div
                className="bpiece"
                style={{
                  left: "12%",
                  bottom: "10%",
                  width: "40%",
                  height: "30%",
                  background: "#4a74ff",
                  transform: "rotate(4deg)",
                  animationDelay: "-1s",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "14px",
                }}
              >
                <span className="lbl" style={{ fontSize: "10px" }}>
                  Lagoon #4a74ff
                </span>
              </div>
              <div
                className="bpiece"
                style={{
                  right: "8%",
                  bottom: "10%",
                  width: "38%",
                  height: "18%",
                  borderRadius: "999px",
                  background: "#ffffff",
                  transform: "rotate(-5deg)",
                  animationDelay: "-4.2s",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <span className="disp" style={{ fontWeight: "800", fontSize: "18px" }}>
                  Start a project
                </span>
              </div>
              <div
                className="hand fadein"
                style={{
                  position: "absolute",
                  left: "52%",
                  top: "56%",
                  fontSize: "22px",
                  color: "#111111",
                  transform: "rotate(-6deg)",
                }}
              >
                hover me
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

// Hero section. Server component.
export default function Hero() {
  return (
    <>
      <section style={{ padding: "64px 0 96px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>About</span>
          </div>
          <div className="ahero">
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <h1 className="h1x">
                <span className="mask">
                  <span className="d1">Hi, we&apos;re</span>
                </span>
                <span className="mask">
                  <span className="d2">
                    Applotie<span style={{ color: "#ff2d2d" }}>.</span>
                  </span>
                </span>
              </h1>
              <p className="lead in d4">
                A digital studio in Patna building websites, apps and marketing that earn their keep. Small enough to
                care, sharp enough to compete with anyone.
              </p>
              <div className="in d5" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link className="btn btn-z" href="/contact">
                  Work with us{" "}
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
                <a className="btn btn-o" href="#what-we-do">
                  What we do
                </a>
              </div>
            </div>
            <div className="collage" aria-hidden="true">
              <div
                className="ph popin d2"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "30px",
                  width: "58%",
                  height: "330px",
                  background: "#4a74ff",
                  transform: "rotate(-3deg)",
                }}
              >
                <img
                  src="/Studio-3.webp"
                  alt=""
                  width="840"
                  height="560"
                  decoding="async"
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="ph popin d3"
                style={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                  width: "46%",
                  height: "250px",
                  background: "#ff2d2d",
                  transform: "rotate(4deg)",
                }}
              >
                <img
                  src="/Studio-2.webp"
                  alt=""
                  width="560"
                  height="560"
                  decoding="async"
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="ph popin d4"
                style={{
                  position: "absolute",
                  right: "8%",
                  bottom: "0",
                  width: "52%",
                  height: "230px",
                  background: "#2f5bff",
                  color: "#ffffff",
                }}
              >
                <img
                  src="/Studio-photo-1.webp"
                  alt=""
                  width="760"
                  height="560"
                  decoding="async"
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="popin d6 floaty" style={{ position: "absolute", left: "6%", bottom: "40px" }}>
                <div
                  className="hand"
                  style={{
                    background: "#ffe14d",
                    borderRadius: "999px",
                    padding: "6px 18px 8px",
                    fontSize: "26px",
                    transform: "rotate(-6deg)",
                    boxShadow: "0 14px 28px -16px rgba(17,17,17,.6)",
                  }}
                >
                  made in Patna, since 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

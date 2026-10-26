import Link from "next/link";

// Case section. Server component.
export default function Case() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <Link
            href="/projects"
            className="card split box lift rv wk"
            style={{ padding: "20px", borderRadius: "30px", gap: "40px" }}
          >
            <div className="ph" style={{ background: "#f4f4f6", height: "360px" }} aria-hidden="true">
              <span
                className="wk-s1"
                style={{
                  position: "absolute",
                  left: "9%",
                  top: "12%",
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "#ff2d2d",
                }}
              ></span>
              <span
                className="wk-s2"
                style={{
                  position: "absolute",
                  right: "10%",
                  bottom: "16%",
                  width: "130px",
                  height: "44px",
                  borderRadius: "999px",
                  background: "#ffe14d",
                }}
              ></span>
              <span
                className="disp wk-wm"
                style={{
                  position: "relative",
                  fontSize: "84px",
                  fontWeight: "800",
                  letterSpacing: "-0.05em",
                  color: "#2f5bff",
                  lineHeight: ".9",
                  textAlign: "center",
                  padding: "0 20px",
                }}
              >
                T&amp;S Infra
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "12px" }}>
              <div className="lbl eb">Case study · T&amp;S Infra</div>
              <h2 className="h3x">A solid brand and website for an infrastructure company.</h2>

              <p className="muted" style={{ margin: "0" }}>
                Logo, colours, typography and a website presenting projects and capabilities. We also built the Meddolic
                brand from scratch.
              </p>
              <span className="ul" style={{ alignSelf: "flex-start" }}>
                See the work{" "}
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
          </Link>
        </div>
      </section>
    </>
  );
}

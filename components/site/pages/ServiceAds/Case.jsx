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
            <div className="ph" style={{ background: "#2f5bff", height: "360px" }} aria-hidden="true">
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
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "12px" }}>
              <div className="lbl eb">Case study · Snappy India</div>
              <h2 className="h3x">Turned ad spend into 6× sales.</h2>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                <span className="num-big" style={{ color: "#ff2d2d" }}>
                  6×
                </span>
                <span className="muted">sales · [x.x]× ROAS</span>
              </div>
              <p className="muted" style={{ margin: "0" }}>
                Full-funnel Meta and Google campaigns, constant creative testing, sharper landing pages and tracking
                from click to checkout.
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

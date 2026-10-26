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
            <div className="ph" style={{ background: "#ff2d2d", height: "360px" }} aria-hidden="true">
              <img
                className="wk-shot"
                src="/Meddolic-Applotie.webp"
                alt=""
                width="1400"
                height="720"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "12px" }}>
              <div className="lbl eb">Case study · Meddolic</div>
              <h2 className="h3x">A new brand and website that helped grow revenue 4×.</h2>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                <span className="num-big" style={{ color: "#ff2d2d" }}>
                  4×
                </span>
                <span className="muted">revenue</span>
              </div>
              <p className="muted" style={{ margin: "0" }}>
                Brand identity, a conversion-focused website, social media and performance marketing, all from one team.
                We also built websites for Fry Zone, Joy Joy and T&amp;S Infra.
              </p>
              <span className="ul" style={{ alignSelf: "flex-start" }}>
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
          </Link>
        </div>
      </section>
    </>
  );
}

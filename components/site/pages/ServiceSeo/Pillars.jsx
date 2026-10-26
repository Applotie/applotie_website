// Pillars section. Server component.
export default function Pillars() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">Three pillars</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>How we get you</span>
                </span>
                <span className="mask rvm">
                  <span>to the top.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g3">
            <div className="pillar lift rv" style={{ background: "#2f5bff", color: "#ffffff" }}>
              <span className="disp" style={{ fontSize: "56px", fontWeight: "800", lineHeight: "1", color: "#ffe14d" }}>
                T
              </span>
              <h3 className="h3x">Technical</h3>
              <p style={{ margin: "0", color: "rgba(255,255,255,.75)" }}>
                A fast, crawlable, error-free site that Google can understand and trust.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "auto" }}>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffe14d"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Speed &amp; Core Web Vitals
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffe14d"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Structured data
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffe14d"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Fixes for crawl errors
                </div>
              </div>
            </div>
            <div className="pillar lift rv" style={{ background: "#4a74ff", color: "#111111" }}>
              <span className="disp" style={{ fontSize: "56px", fontWeight: "800", lineHeight: "1" }}>
                L
              </span>
              <h3 className="h3x">Local</h3>
              <p style={{ margin: "0" }}>Show up in the map results when people nearby search for what you do.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "auto" }}>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Google Business Profile
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Reviews strategy
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Local pages &amp; citations
                </div>
              </div>
            </div>
            <div className="pillar lift rv" style={{ background: "#ffe14d", color: "#111111" }}>
              <span className="disp" style={{ fontSize: "56px", fontWeight: "800", lineHeight: "1" }}>
                C
              </span>
              <h3 className="h3x">Content</h3>
              <p style={{ margin: "0" }}>Pages and articles that answer what your customers are actually asking.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "auto" }}>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Keyword &amp; intent research
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Service &amp; landing pages
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Monthly articles
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Careers section. Server component.
export default function Careers() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div
            className="split box rv"
            style={{ padding: "clamp(28px, 4vw, 56px)", borderRadius: "32px", gap: "32px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="lbl eb">(06) Careers</div>
              <h2 className="h2x" style={{ fontSize: "clamp(34px, 4vw, 52px)" }}>
                Good learners are always welcome.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
              <p className="big-p muted">
                We don&apos;t always have an opening, but we always like meeting designers, developers and marketers who
                care about their craft. Send us your work and a few lines about you.
              </p>
              <a className="btn btn-i" href="mailto:hello@applotie.com?subject=Careers">
                Say hello{" "}
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
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

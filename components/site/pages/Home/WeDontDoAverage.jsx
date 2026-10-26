// We Don'T Do Average section. Server component.
export default function WeDontDoAverage() {
  return (
    <>
      <section className="wda" aria-label="We don't do average">
        <div className="wrap">
          <div className="wda-panel">
            <span className="wda-pill lbl">
              <span className="live" style={{ background: "#ff2d2d" }}></span>Our one rule
            </span>
            <h2 className="disp wda-h">
              <span className="wda-l">We don&apos;t do</span>
              <span className="wda-r">
                <span className="wda-avg">
                  average
                  <svg className="wda-strike" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M8 40 C 120 20, 260 46, 380 28 S 540 18, 592 32"></path>
                  </svg>
                </span>
                <span style={{ color: "#ffe14d" }}>.</span>
              </span>
            </h2>
            <div className="wda-note">
              <span className="hand" style={{ fontSize: "clamp(30px, 3.4vw, 48px)", color: "#ffffff" }}>
                so we do
              </span>
              <span className="wda-stick">exceptional.</span>
              <svg className="wda-badge" viewBox="0 0 200 200" aria-hidden="true">
                <circle cx="100" cy="100" r="98" fill="#ffe14d"></circle>
                <path id="wdaC" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" fill="none"></path>
                <text
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="15"
                  fontWeight="700"
                  letterSpacing="3"
                  fill="#111111"
                >
                  <textPath href="#wdaC">WE DON&apos;T DO AVERAGE ✱ NOT EVER ✱ </textPath>
                </text>
                <path
                  d="M100 68 L109 92 L134 92 L114 107 L121 132 L100 117 L79 132 L86 107 L66 92 L91 92 Z"
                  fill="#ff2d2d"
                ></path>
              </svg>
            </div>
            <div className="wda-cards">
              <div className="wda-card rv" style={{ background: "#ffffff", color: "#111111" }}>
                <span className="lbl" style={{ color: "#d11a1a" }}>
                  01 · Websites
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span className="wda-was" style={{ textDecorationColor: "#ff2d2d" }}>
                    Websites that get scrolled past.
                  </span>
                  <span className="wda-now">Websites people remember.</span>
                </div>
              </div>
              <div className="wda-card rv" style={{ background: "#ffe14d", color: "#111111" }}>
                <span className="lbl">02 · Marketing</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span className="wda-was" style={{ textDecorationColor: "#ff2d2d" }}>
                    Ads that quietly burn money.
                  </span>
                  <span className="wda-now">Ads that pay for themselves.</span>
                </div>
              </div>
              <div className="wda-card rv" style={{ background: "#2f5bff", color: "#ffffff" }}>
                <span className="lbl" style={{ color: "#ffe14d" }}>
                  03 · Brands
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span className="wda-was" style={{ textDecorationColor: "#ffe14d" }}>
                    Brands that blend in.
                  </span>
                  <span className="wda-now">Brands people talk about.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

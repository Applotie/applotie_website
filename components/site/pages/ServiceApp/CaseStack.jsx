import Link from "next/link";

// Case + Stack section. Server component.
export default function CaseStack() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap split" style={{ gap: "24px", alignItems: "stretch" }}>
          <Link
            href="/contact"
            className="card box lift rv"
            style={{
              background: "#ffe14d",
              borderColor: "#ffe14d",
              padding: "40px",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <div className="lbl">Your app here</div>
            <h2 className="h3x">Got an app idea? It could be our next case study.</h2>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
              <span className="hand" style={{ fontSize: "28px" }}>
                let&apos;s sketch it together
              </span>
              <span className="ul">
                Talk to us{" "}
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
          <div
            className="box rv"
            style={{ padding: "40px", borderRadius: "30px", display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div className="lbl" style={{ color: "#1f45d6" }}>
              Our toolkit
            </div>
            <h2 className="h3x">Proven tools, chosen for your problem.</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span className="tag">Flutter</span>
              <span className="tag">React Native</span>
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">Python</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Firebase</span>
              <span className="tag">App Store &amp; Play Store</span>
            </div>
            <p className="muted" style={{ margin: "0" }}>
              One codebase for iOS and Android in most cases, which means a faster launch and lower cost to maintain.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

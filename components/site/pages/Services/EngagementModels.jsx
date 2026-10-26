// Engagement Models section. Server component.
export default function EngagementModels() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">Ways to work with us</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Pick the pace</span>
                </span>
                <span className="mask rvm">
                  <span>that suits you.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g3">
            <div className="pkg lift rv">
              <span className="ic" style={{ background: "#ff2d2d" }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M3 9h18"></path>
                </svg>
              </span>
              <h3 className="h4x" style={{ fontSize: "26px", lineHeight: "32px" }}>
                Project
              </h3>
              <p className="muted" style={{ margin: "0" }}>
                A fixed scope, a fixed price and a launch date. Best for a new website, app or relaunch.
              </p>
              <div className="lbl lbl-l muted" style={{ marginTop: "auto" }}>
                Typically 2–12 weeks
              </div>
            </div>
            <div className="pkg feat lift rv">
              <span className="ic" style={{ background: "#4a74ff" }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="h4x" style={{ fontSize: "26px", lineHeight: "32px" }}>
                  Monthly growth
                </h3>
                <span className="hand" style={{ fontSize: "22px", color: "#ffe14d" }}>
                  we recommend
                </span>
              </div>
              <p style={{ margin: "0", color: "rgba(255,255,255,.75)" }}>
                An ongoing team for SEO, ads, content and improvements, with a monthly report on what moved.
              </p>
              <div className="lbl lbl-l" style={{ marginTop: "auto", color: "rgba(255,255,255,.6)" }}>
                Rolling monthly
              </div>
            </div>
            <div className="pkg lift rv">
              <span className="ic" style={{ background: "#ffe14d" }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                </svg>
              </span>
              <h3 className="h4x" style={{ fontSize: "26px", lineHeight: "32px" }}>
                Launch partner
              </h3>
              <p className="muted" style={{ margin: "0" }}>
                For startups: we build a lean first version, launch it and grow it with you, step by step.
              </p>
              <div className="lbl lbl-l muted" style={{ marginTop: "auto" }}>
                Phased
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

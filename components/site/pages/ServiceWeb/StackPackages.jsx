import Link from "next/link";

// Stack + Packages section. Server component.
export default function StackPackages() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">Packages</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Clear prices,</span>
                </span>
                <span className="mask rvm">
                  <span>no hidden extras.</span>
                </span>
              </h2>
            </div>
            <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: "8px", maxWidth: "420px" }}>
              <span className="tag">Next.js</span>
              <span className="tag">React</span>
              <span className="tag">Vue</span>
              <span className="tag">Node.js</span>
              <span className="tag">PHP</span>
              <span className="tag">Headless CMS</span>
            </div>
          </div>
          <div className="g3">
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Starter</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ price]
              </div>
              <p className="muted" style={{ margin: "0" }}>
                A sharp one-to-five page site for a new or small business.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Up to 5 pages
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Mobile-first design
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  SEO basics &amp; Google Business setup
                </div>
              </div>
              <Link className="btn btn-o" href="/contact" style={{ marginTop: "auto" }}>
                Choose Starter
              </Link>
            </div>
            <div className="pkg feat lift rv">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="lbl lbl-l" style={{ color: "rgba(255,255,255,.65)" }}>
                  Business
                </div>
                <span className="hand" style={{ fontSize: "22px", color: "#ffe14d" }}>
                  we recommend
                </span>
              </div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ price]
              </div>
              <p style={{ margin: "0", color: "rgba(255,255,255,.75)" }}>
                A full business website built to rank, convert and grow with you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Up to 15 pages + blog
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Copywriting &amp; conversion design
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Editor, tracking &amp; training
                </div>
              </div>
              <Link className="btn btn-z" href="/contact" style={{ marginTop: "auto" }}>
                Choose Business
              </Link>
            </div>
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Custom</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                Let&apos;s talk
              </div>
              <p className="muted" style={{ margin: "0" }}>
                Portals, e-commerce, bookings and web apps, scoped to your needs.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Custom features &amp; integrations
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Phased delivery
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Ongoing support
                </div>
              </div>
              <Link className="btn btn-o" href="/contact" style={{ marginTop: "auto" }}>
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

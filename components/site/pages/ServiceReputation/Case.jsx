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
            <div className="ph" style={{ background: "#ffe14d", height: "360px" }} aria-hidden="true">
              <img
                className="wk-shot"
                src="/KhakiaMetals-Applotie.webp"
                alt=""
                width="1400"
                height="720"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "12px" }}>
              <div className="lbl eb">Case study · Kharakia Metals</div>
              <h2 className="h3x">Gave an established metals business the online presence it deserved.</h2>

              <p className="muted" style={{ margin: "0" }}>
                Google Business Profile optimisation, consistent listings, a review programme and professional replies,
                so the business looks as solid online as it is offline.
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

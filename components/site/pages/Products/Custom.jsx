import Link from "next/link";

// Custom section. Server component.
export default function Custom() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div
            className="panel rv"
            style={{
              background: "#ff2d2d",
              color: "#111111",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div className="lbl">Need something specific?</div>
              <h2 className="h2x text-white" style={{ fontSize: "clamp(34px, 4vw, 56px)" }}>
                We build custom software too.
              </h2>
              <p className="big-p">
                If no product fits, we&apos;ll design and build one around your business: internal tools, portals,
                booking systems and apps.
              </p>
            </div>
            <Link className="btn btn-i" href="/services/app-development-in-patna">
              See app &amp; software development{" "}
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

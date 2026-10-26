import Link from "next/link";

// "Keep reading": other published posts. Server component.
export default function PostRelated({ posts = [] }) {
  if (!posts.length) return null;
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">Keep reading</div>
              <h2 className="h2x rv" style={{ fontSize: "clamp(34px, 4vw, 52px)" }}>
                More from the journal.
              </h2>
            </div>
            <Link className="ul rv" href="/blog">
              All articles{" "}
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
          <div className="g3">
            {posts.map((b) => (
              <Link
                key={b.slug}
                href={b.href}
                className="card rv"
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    height: "200px",
                    borderRadius: "20px",
                    background: b.bg,
                    display: "grid",
                    placeItems: "center",
                    overflow: "hidden",
                  }}
                >
                  <span
                    className="disp zoom"
                    style={{ fontSize: "110px", fontWeight: "800", lineHeight: "1", color: b.fg }}
                  >
                    {b.glyph}
                  </span>
                </div>
                <div className="lbl lbl-l">
                  <span className="eb">{b.cat}</span>
                </div>
                <h3 className="h4x">{b.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

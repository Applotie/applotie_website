import { Fragment } from "react";
import Link from "next/link";
import { dcVals } from "@/components/site/dc";
import Logic from "./logic";

// Journal section. Server component.
export default function Journal() {
  const { posts } = dcVals(Logic);
  return (
    <>
      <section style={{ padding: "104px 0", background: "#2f5bff", color: "#ffffff", borderRadius: "40px 40px 0 0" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl rv" style={{ color: "rgba(255,255,255,.72)" }}>
                (06) From the journal
              </div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Notes on getting</span>
                </span>
                <span className="mask rvm">
                  <span>found and chosen.</span>
                </span>
              </h2>
            </div>
            <Link className="ul rv" href="/blog" style={{ color: "#ffffff" }}>
              Read the journal{" "}
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
            {posts.map((b, i_b) => (
              <Fragment key={i_b}>
                <Link
                  href={b.href}
                  className="card rv"
                  style={{ color: "#ffffff", display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <div className="post-img" aria-hidden="true" style={{ background: b.bg }}>
                    <div
                      className="zoom"
                      style={{ position: "absolute", inset: "0", display: "grid", placeItems: "center" }}
                    >
                      <span
                        className="disp"
                        style={{
                          fontSize: "120px",
                          lineHeight: "1",
                          fontWeight: "800",
                          color: b.fg,
                          letterSpacing: "-0.05em",
                        }}
                      >
                        {b.glyph}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }} className="lbl lbl-l">
                    <span style={{ color: "#ffe14d" }}>{b.cat}</span>
                    <span style={{ color: "rgba(255,255,255,.6)" }}>{b.read}</span>
                  </div>
                  <h3 className="h4x" style={{ fontSize: "24px", lineHeight: "30px" }}>
                    {b.title}
                  </h3>
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { Fragment } from "react";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Testimonials section. Client component (interactive).
export default function Testimonials() {
  const { pauseQuotes, qPos, quotes, resumeQuotes } = useDC(Logic);
  return (
    <>
      <section
        aria-labelledby="t-h"
        style={{ padding: "104px 0", borderTop: "1px solid #ececf1" }}
        onMouseEnter={pauseQuotes}
        onMouseLeave={resumeQuotes}
      >
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div id="t-h" className="lbl eb rv">
              (05) In their words
            </div>
            <div className="lbl lbl-l muted">{qPos}</div>
          </div>
          <div className="stack">
            {quotes.map((q, i_q) => (
              <Fragment key={i_q}>
                <figure
                  aria-hidden={q.hidden}
                  style={{
                    margin: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "36px",
                    opacity: q.op,
                    transform: `translateY(${q.ty}px)`,
                    pointerEvents: q.pe,
                  }}
                >
                  <blockquote
                    className="disp"
                    style={{
                      margin: "0",
                      fontSize: "clamp(30px, 4vw, 56px)",
                      lineHeight: "1.12",
                      fontWeight: "500",
                      letterSpacing: "-0.025em",
                      maxWidth: "1080px",
                    }}
                  >
                    <span style={{ color: "#ff2d2d" }}>“</span>
                    {q.text}
                    <span style={{ color: "#ff2d2d" }}>”</span>
                  </blockquote>
                  <figcaption style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 32px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                      <span className="num-big" style={{ fontSize: "40px" }}>
                        {q.stat}
                      </span>
                      <span className="muted">{q.statLabel}</span>
                    </div>
                    <span className="hide-sm" style={{ width: "1px", height: "32px", background: "#ececf1" }}></span>
                    <div>
                      <strong>{q.name}</strong> <span className="muted">· {q.role}</span>
                    </div>
                  </figcaption>
                </figure>
              </Fragment>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {quotes.map((q, i_q) => (
              <Fragment key={i_q}>
                <button type="button" className={`qbtn ${q.cls}`} onClick={q.pick} aria-pressed={q.cls.includes("on")}>
                  <span
                    aria-hidden="true"
                    className="ic"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: q.bg,
                      color: q.fg,
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    {q.init}
                  </span>
                  {q.first}
                </button>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

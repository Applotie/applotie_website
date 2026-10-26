"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Filters section. Client component (interactive).
export default function Filters() {
  const { filters, items, shown } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "0 0 40px" }}>
        <div
          className="wrap"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            borderTop: "1px solid #ececf1",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }} role="group" aria-label="Filter by service">
            {filters.map((f, i_f) => (
              <Fragment key={i_f}>
                <button type="button" className={`chip ${f.cls}`} aria-pressed={f.pressed} onClick={f.pick}>
                  {f.label}{" "}
                  <span className="lbl lbl-l" style={{ opacity: ".6" }}>
                    {f.count}
                  </span>
                </button>
              </Fragment>
            ))}
          </div>
          <span className="lbl lbl-l muted">Showing {shown} of 08</span>
        </div>
      </section>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap pgrid">
          {items.map((p, i_p) => (
            <Fragment key={i_p}>
              <article className="pcard" style={{ animationDelay: p.delay }}>
                <Link
                  className="pimg"
                  href={p.href}
                  style={{ background: p.bg, boxShadow: p.ring }}
                  aria-label={`${p.client} case study`}
                >
                  {p.img ? (
                    <img
                      className="wk-shot"
                      src={p.img}
                      alt=""
                      width="1400"
                      height="720"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <>
                      <span
                        className="shape s1"
                        aria-hidden="true"
                        style={{
                          left: "8%",
                          top: "12%",
                          width: "70px",
                          height: "70px",
                          borderRadius: "50%",
                          background: p.sh1,
                        }}
                      ></span>
                      <span
                        className="shape s2"
                        aria-hidden="true"
                        style={{
                          right: "14%",
                          bottom: "22%",
                          width: "110px",
                          height: "40px",
                          borderRadius: "999px",
                          background: p.sh2,
                        }}
                      ></span>
                      <span className="wm" style={{ color: p.fg, fontSize: `${p.wmSize}px`, position: "relative" }}>
                        {p.client}
                      </span>
                    </>
                  )}
                  {p.hasMetric && (
                    <>
                      <span className="pmetric">
                        <span
                          className="disp"
                          style={{ display: "block", fontSize: "34px", lineHeight: "1", fontWeight: "800" }}
                        >
                          {p.metric}
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: "600" }}>{p.metricLabel}</span>
                      </span>
                    </>
                  )}
                  <span className="ptags">
                    {p.tags.map((t, i_t) => (
                      <Fragment key={i_t}>
                        <span>{t}</span>
                      </Fragment>
                    ))}
                  </span>
                </Link>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div className="lbl lbl-l muted">
                    {p.client} · {p.industry}
                  </div>
                  <h2 className="h4x" style={{ fontSize: "26px", lineHeight: "32px", fontWeight: "800", margin: "0" }}>
                    {p.title}
                  </h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 22px", alignItems: "center" }}>
                    <button type="button" className="sbtn2" aria-expanded={p.exp} onClick={p.toggle}>
                      {p.btn}{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        aria-hidden="true"
                        style={{ transform: `rotate(${p.rot}deg)` }}
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                    {p.hasUrl && (
                      <>
                        <Link className="ul" href={p.url} style={{ fontSize: "15px" }}>
                          Visit {p.urlLabel}{" "}
                          <svg
                            className="ar"
                            width="16"
                            height="16"
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
                      </>
                    )}
                    {p.hasPage && (
                      <>
                        <Link className="ul" href={p.href} style={{ fontSize: "15px", color: "#d11a1a" }}>
                          Full case study{" "}
                          <svg
                            className="ar"
                            width="16"
                            height="16"
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
                      </>
                    )}
                  </div>
                  <div className="xpand" style={{ gridTemplateRows: p.rows }}>
                    <div>
                      <div className="story">
                        <div>
                          <h4>The brief</h4>
                          <p>{p.brief}</p>
                        </div>
                        <div>
                          <h4>What we did</h4>
                          <p>{p.did}</p>
                        </div>
                        <div>
                          <h4>The result</h4>
                          <p>{p.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Fragment>
          ))}
          <Link href="/contact" className="yours pcard">
            <span className="hand" style={{ fontSize: "36px", lineHeight: "38px", transform: "rotate(-3deg)" }}>
              this space is saved for you
            </span>
            <span className="muted" style={{ maxWidth: "300px" }}>
              Your brand could be the next story on this page.
            </span>
            <span className="btn btn-z btn-sm">
              Start a project{" "}
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
          </Link>
        </div>
      </section>
    </>
  );
}

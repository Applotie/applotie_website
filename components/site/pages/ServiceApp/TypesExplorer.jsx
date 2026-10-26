"use client";

import { Fragment } from "react";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Types Explorer section. Client component (interactive).
export default function TypesExplorer() {
  const { cur, types } = useDC(Logic);
  return (
    <>
      <section id="types" style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="dark panel" style={{ display: "flex", flexDirection: "column", gap: "44px" }}>
            <div className="sec-hd" style={{ marginBottom: "0" }}>
              <div>
                <div className="lbl" style={{ color: "rgba(255,255,255,.72)" }}>
                  What we build
                </div>
                <h2 className="h2x" style={{ fontSize: "clamp(36px, 4.4vw, 58px)" }}>
                  Pick a kind of app.
                </h2>
              </div>
              <p style={{ margin: "0", maxWidth: "320px", color: "rgba(255,255,255,.75)" }}>
                A few of the apps businesses most often ask us for. Tap one to see what goes into it.
              </p>
            </div>
            <div className="explore">
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {types.map((t, i_t) => (
                  <Fragment key={i_t}>
                    <button type="button" className={`atab ${t.cls}`} aria-pressed={t.pressed} onClick={t.pick}>
                      {t.name}{" "}
                      <svg
                        className="arr"
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
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </Fragment>
                ))}
              </div>
              <div
                aria-hidden="true"
                style={{
                  justifySelf: "center",
                  width: "240px",
                  height: "480px",
                  borderRadius: "40px",
                  background: "#ffffff",
                  padding: "10px",
                }}
              >
                <div
                  className="stack"
                  style={{
                    height: "100%",
                    borderRadius: "31px",
                    overflow: "hidden",
                    background: cur.bg,
                    transition: "background-color .5s",
                  }}
                >
                  {types.map((t, i_t) => (
                    <Fragment key={i_t}>
                      <div
                        style={{
                          opacity: t.op,
                          transform: `translateY(${t.ty}px)`,
                          padding: "40px 16px 16px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <div className="lbl" style={{ fontSize: "10px", color: "#111111" }}>
                          {t.screen}
                        </div>
                        {t.rows.map((r, i_r) => (
                          <Fragment key={i_r}>
                            <div style={{ height: `${r.h}px`, borderRadius: "14px", background: r.c }}></div>
                          </Fragment>
                        ))}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="stack">
                {types.map((t, i_t) => (
                  <Fragment key={i_t}>
                    <div
                      aria-hidden={t.hidden}
                      style={{
                        opacity: t.op,
                        transform: `translateY(${t.ty}px)`,
                        pointerEvents: t.pe,
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                      }}
                    >
                      <h3 className="h3x">{t.name}</h3>
                      <p style={{ margin: "0", color: "rgba(255,255,255,.75)", fontSize: "17px", lineHeight: "27px" }}>
                        {t.desc}
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {t.feats.map((f, i_f) => (
                          <Fragment key={i_f}>
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
                              {f}
                            </div>
                          </Fragment>
                        ))}
                      </div>
                      <div className="lbl lbl-l" style={{ color: "rgba(255,255,255,.6)" }}>
                        Good for: {t.good}
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { Fragment } from "react";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Process section. Client component (interactive).
export default function Process() {
  const { pauseSteps, stepPanels, steps } = useDC(Logic);
  return (
    <>
      <section id="process" style={{ padding: "0 0 104px" }}>
        <div className="wrap">
          <div className="dark panel rv" style={{ display: "flex", flexDirection: "column", gap: "44px" }}>
            <div className="sec-hd" style={{ marginBottom: "0" }}>
              <div>
                <div className="lbl" style={{ color: "rgba(255,255,255,.72)" }}>
                  (03) How we work
                </div>
                <h2 className="h2x">
                  We don&apos;t just deliver.
                  <br />
                  We think.
                </h2>
              </div>
              <p style={{ margin: "0", maxWidth: "320px", color: "rgba(255,255,255,.75)" }}>
                Five steps, one team, no hand-offs between agencies. Here&apos;s what working with us looks like.
              </p>
            </div>
            <div className="steps" role="tablist" aria-label="Process steps" onMouseEnter={pauseSteps}>
              {steps.map((s, i_s) => (
                <Fragment key={i_s}>
                  <button type="button" role="tab" className={`step ${s.cls}`} aria-selected={s.sel} onClick={s.pick}>
                    <span className="lbl lbl-l" style={{ opacity: ".75" }}>
                      {s.num}
                    </span>
                    <span
                      className="disp"
                      style={{ fontSize: "28px", lineHeight: "32px", fontWeight: "800", letterSpacing: "-0.01em" }}
                    >
                      {s.name}
                    </span>
                  </button>
                </Fragment>
              ))}
            </div>
            <div role="tabpanel" className="stack">
              {stepPanels.map((sp, i_sp) => (
                <Fragment key={i_sp}>
                  <div
                    className="split"
                    aria-hidden={sp.hidden}
                    style={{ gap: "32px", opacity: sp.op, transform: `translateY(${sp.ty}px)`, pointerEvents: sp.pe }}
                  >
                    <p
                      className="disp"
                      style={{
                        margin: "0",
                        fontSize: "clamp(26px, 2.8vw, 36px)",
                        lineHeight: "1.22",
                        fontWeight: "500",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {sp.text}
                    </p>
                    <div
                      style={{
                        justifySelf: "end",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        border: "1px solid rgba(255,255,255,.22)",
                        borderRadius: "22px",
                        padding: "20px 24px",
                      }}
                    >
                      <span className="ic" style={{ width: "40px", height: "40px", background: "#4a74ff" }}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#111111"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <div>
                        <div className="lbl lbl-l" style={{ color: "rgba(255,255,255,.65)" }}>
                          You get
                        </div>
                        <div style={{ fontWeight: "600", fontSize: "18px", lineHeight: "26px" }}>{sp.get}</div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

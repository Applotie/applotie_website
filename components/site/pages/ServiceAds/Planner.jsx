"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Planner section. Client component (interactive).
export default function Planner() {
  const { bud, budLabel, kindNote, kinds, setBud, split } = useDC(Logic);
  return (
    <>
      <section id="planner" style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="dark panel">
            <div className="planner">
              <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
                <div className="lbl" style={{ color: "rgba(255,255,255,.72)" }}>
                  Budget planner
                </div>
                <h2 className="h2x" style={{ fontSize: "clamp(36px, 4.4vw, 58px)" }}>
                  Where should your money go?
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ fontWeight: "600" }}>What do you sell?</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {kinds.map((k, i_k) => (
                      <Fragment key={i_k}>
                        <button
                          type="button"
                          className={`chip chip-d ${k.cls}`}
                          aria-pressed={k.pressed}
                          onClick={k.pick}
                        >
                          {k.label}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <label htmlFor="bud" style={{ fontWeight: "600" }}>
                      Monthly ad budget
                    </label>
                    <span className="disp" style={{ fontSize: "32px", fontWeight: "800", color: "#ffe14d" }}>
                      ₹{budLabel}
                    </span>
                  </div>
                  <input
                    id="bud"
                    className="rng"
                    type="range"
                    min="10000"
                    max="200000"
                    step="5000"
                    value={bud}
                    onChange={setBud}
                  />
                  <div
                    className="lbl lbl-l"
                    style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,.55)" }}
                  >
                    <span>₹10k</span>
                    <span>₹2L</span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: "#ffffff",
                  color: "#111111",
                  borderRadius: "26px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="lbl eb">Suggested starting split</span>
                  <span className="hand" style={{ fontSize: "22px" }}>
                    {kindNote}
                  </span>
                </div>
                <div className="split-bar">
                  {split.map((s, i_s) => (
                    <Fragment key={i_s}>
                      <div style={{ flexGrow: s.pct, flexBasis: "0", background: s.bg }}>{s.pct}%</div>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {split.map((s, i_s) => (
                    <Fragment key={i_s}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "16px",
                          padding: "14px 0",
                          borderTop: "1px solid #ececf1",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span
                            style={{
                              width: "14px",
                              height: "14px",
                              borderRadius: "4px",
                              background: s.bg,
                              flex: "none",
                            }}
                          ></span>
                          <div>
                            <div style={{ fontWeight: "600" }}>{s.name}</div>
                            <div className="muted" style={{ fontSize: "14px" }}>
                              {s.why}
                            </div>
                          </div>
                        </div>
                        <span
                          className="disp"
                          style={{ fontSize: "22px", fontWeight: "800", fontVariantNumeric: "tabular-nums" }}
                        >
                          ₹{s.amt}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <p className="muted" style={{ margin: "0", fontSize: "14px" }}>
                  A starting point, not a promise. We rebalance weekly based on what actually brings in leads.
                </p>
                <Link className="btn btn-i" href="/contact" style={{ alignSelf: "flex-start" }}>
                  Get a proper plan{" "}
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

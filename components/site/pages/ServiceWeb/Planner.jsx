"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Planner section. Client component (interactive).
export default function Planner() {
  const { opts, pages, summary, weeks, weeksPct } = useDC(Logic);
  return (
    <>
      <section id="plan" style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="dark panel">
            <div className="plan">
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div className="lbl" style={{ color: "rgba(255,255,255,.72)" }}>
                  Plan your website
                </div>
                <h2 className="h2x" style={{ fontSize: "clamp(36px, 4.4vw, 58px)" }}>
                  What does your site need?
                </h2>
                <p style={{ margin: "0", color: "rgba(255,255,255,.75)", maxWidth: "460px" }}>
                  Tick what applies and we&apos;ll show you a realistic timeline. It&apos;s a starting point for our
                  first call, not a contract.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {opts.map((o, i_o) => (
                    <Fragment key={i_o}>
                      <button type="button" className={`opt ${o.cls}`} aria-pressed={o.pressed} onClick={o.pick}>
                        <span className="box2">
                          {o.on && (
                            <>
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#111111"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </>
                          )}
                        </span>
                        <span style={{ flex: "1" }}>
                          <span style={{ fontWeight: "600" }}>{o.label}</span>{" "}
                          <span style={{ color: "rgba(255,255,255,.6)", fontSize: "14px" }}>{o.note}</span>
                        </span>
                        <span className="lbl lbl-l" style={{ color: "rgba(255,255,255,.55)" }}>
                          {o.wk}
                        </span>
                      </button>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div
                style={{
                  position: "sticky",
                  top: "110px",
                  background: "#ffffff",
                  color: "#111111",
                  borderRadius: "26px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                }}
              >
                <div className="lbl eb">Your estimate</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                  <span className="num-big" style={{ fontSize: "88px" }}>
                    {weeks}
                  </span>
                  <span style={{ fontSize: "20px", fontWeight: "600" }}>weeks</span>
                </div>
                <div style={{ height: "10px", borderRadius: "999px", background: "#ececf1", overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${weeksPct}%`,
                      background: "#ff2d2d",
                      borderRadius: "999px",
                      transition: "width .7s cubic-bezier(.34,1.56,.64,1)",
                    }}
                  ></div>
                </div>
                <p className="muted" style={{ margin: "0" }}>
                  {pages} · {summary}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    borderTop: "1px solid #ececf1",
                    paddingTop: "18px",
                  }}
                >
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
                    <span>SEO foundations and tracking, always included</span>
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
                    <span>Fixed price, agreed before we start</span>
                  </div>
                </div>
                <Link className="btn btn-i" href="/contact">
                  Send this to the team{" "}
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

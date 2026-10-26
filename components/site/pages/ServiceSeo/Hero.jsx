"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Hero section. Client component (interactive).
export default function Hero() {
  const { queries, ranks } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "56px 0 96px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>SEO services in Patna</span>
          </div>
          <div className="shero">
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div className="lbl eb in">Service 03 · SEO company in Patna</div>
              <h1 className="h1x" style={{ fontSize: "clamp(44px, 5.8vw, 86px)" }}>
                <span className="mask">
                  <span className="d1">SEO services</span>
                </span>
                <span className="mask">
                  <span className="d2">in Patna that</span>
                </span>
                <span className="mask">
                  <span className="d3">
                    put you first<span style={{ color: "#ff2d2d" }}>.</span>
                  </span>
                </span>
              </h1>
              <p className="lead in d4">
                Technical SEO, local SEO and content that ranks, so people in Patna who are already looking for what you
                sell find you, not your competitor.
              </p>
              <div className="in d5" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a className="btn btn-z" href="#preview">
                  Preview your listing{" "}
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
                </a>
                <Link className="btn btn-o" href="/contact">
                  Get a free SEO check
                </Link>
              </div>
              <div
                className="in d5 lbl lbl-l muted"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 20px",
                  borderTop: "1px solid #ececf1",
                  paddingTop: "18px",
                }}
              >
                <span>Monthly reporting</span>
                <span>No lock-in</span>
                <span>Patna &amp; beyond</span>
              </div>
            </div>
            <div className="svisual popin d3" aria-hidden="true">
              <div className="svz" style={{ width: "440px", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div
                  style={{
                    height: "56px",
                    borderRadius: "999px",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "0 22px",
                    boxShadow: "0 20px 40px -24px rgba(0,0,0,.6)",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5c5c66"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <span
                    className="stack"
                    style={{ flex: "1", fontFamily: "'JetBrains Mono', monospace", fontSize: "15px" }}
                  >
                    {queries.map((q, i_q) => (
                      <Fragment key={i_q}>
                        <span style={{ opacity: q.op }}>
                          <span className={q.cls}>{q.text}</span>
                          <span className="caret"></span>
                        </span>
                      </Fragment>
                    ))}
                  </span>
                </div>
                <div style={{ position: "relative", height: "336px" }}>
                  {ranks.map((r, i_r) => (
                    <Fragment key={i_r}>
                      <div className="rank" style={{ top: `${r.top}px`, background: r.bg, color: r.fg, zIndex: r.z }}>
                        <span className="lbl" style={{ width: "28px" }}>
                          #{r.pos}
                        </span>
                        <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "6px" }}>
                          <span style={{ fontWeight: "700", fontSize: "14px" }}>{r.name}</span>
                          <span
                            style={{ height: "6px", width: `${r.w}%`, borderRadius: "4px", background: r.bar }}
                          ></span>
                        </span>
                        {r.you && (
                          <>
                            <span className="hand" style={{ fontSize: "20px" }}>
                              that&apos;s you
                            </span>
                          </>
                        )}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

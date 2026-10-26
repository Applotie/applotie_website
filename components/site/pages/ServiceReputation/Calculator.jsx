"use client";

import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Calculator section. Client component (interactive).
export default function Calculator() {
  const {
    count,
    cur10,
    curLabel,
    curPct,
    needed,
    neededLabel,
    paceText,
    setCount,
    setCur,
    setTgt,
    tgt10,
    tgtLabel,
    tgtPct,
  } = useDC(Logic);
  return (
    <>
      <section id="calc" style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="dark panel">
            <div className="calc">
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div className="lbl" style={{ color: "rgba(255,255,255,.72)" }}>
                  Review calculator
                </div>
                <h2 className="h2x" style={{ fontSize: "clamp(36px, 4.4vw, 58px)" }}>
                  How many reviews to reach your target?
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <label htmlFor="cr" style={{ fontWeight: "600" }}>
                      Your rating today
                    </label>
                    <span className="disp" style={{ fontSize: "30px", fontWeight: "800", color: "#ffe14d" }}>
                      {curLabel} ★
                    </span>
                  </div>
                  <input
                    id="cr"
                    className="rng"
                    type="range"
                    min="10"
                    max="50"
                    step="1"
                    value={cur10}
                    onChange={setCur}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <label htmlFor="cn" style={{ fontWeight: "600" }}>
                      Number of reviews
                    </label>
                    <span className="disp" style={{ fontSize: "30px", fontWeight: "800", color: "#ffe14d" }}>
                      {count}
                    </span>
                  </div>
                  <input
                    id="cn"
                    className="rng"
                    type="range"
                    min="1"
                    max="400"
                    step="1"
                    value={count}
                    onChange={setCount}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <label htmlFor="ct" style={{ fontWeight: "600" }}>
                      Target rating
                    </label>
                    <span className="disp" style={{ fontSize: "30px", fontWeight: "800", color: "#ffe14d" }}>
                      {tgtLabel} ★
                    </span>
                  </div>
                  <input
                    id="ct"
                    className="rng"
                    type="range"
                    min="30"
                    max="49"
                    step="1"
                    value={tgt10}
                    onChange={setTgt}
                  />
                </div>
              </div>
              <div
                style={{
                  background: "#ffffff",
                  color: "#111111",
                  borderRadius: "26px",
                  padding: "34px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <span className="lbl" style={{ color: "#1f45d6" }}>
                  You need
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: "14px", flexWrap: "wrap" }}>
                  <span className="num-big" style={{ fontSize: "96px" }}>
                    {needed}
                  </span>
                  <span style={{ fontSize: "20px", fontWeight: "600", maxWidth: "220px", lineHeight: "26px" }}>
                    {neededLabel}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ position: "relative", height: "14px", borderRadius: "999px", background: "#ececf1" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        bottom: "0",
                        width: `${curPct}%`,
                        borderRadius: "999px",
                        background: "#2f5bff",
                        transition: "width .6s cubic-bezier(.22,1,.36,1)",
                      }}
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        top: "-6px",
                        bottom: "-6px",
                        width: "3px",
                        borderRadius: "2px",
                        background: "#ff2d2d",
                        left: `${tgtPct}%`,
                        transition: "left .6s cubic-bezier(.22,1,.36,1)",
                      }}
                    ></div>
                  </div>
                  <div className="lbl lbl-l muted" style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>1★</span>
                    <span style={{ color: "#d11a1a" }}>target {tgtLabel}</span>
                    <span>5★</span>
                  </div>
                </div>
                <p className="muted" style={{ margin: "0" }}>
                  {paceText}
                </p>
                <span className="hand" style={{ fontSize: "24px" }}>
                  this is exactly the gap we help you close
                </span>
                <Link className="btn btn-i" href="/contact" style={{ alignSelf: "flex-start" }}>
                  Start collecting reviews{" "}
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

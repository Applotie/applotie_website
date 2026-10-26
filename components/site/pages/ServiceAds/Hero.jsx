"use client";

import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Hero section. Client component (interactive).
export default function Hero() {
  const { cpl, leads, roas } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "56px 0 96px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>Performance marketing in Patna</span>
          </div>
          <div className="shero">
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div className="lbl eb in">Service 04 · Performance marketing agency in Patna</div>
              <h1 className="h1x" style={{ fontSize: "clamp(44px, 5.8vw, 86px)" }}>
                <span className="mask">
                  <span className="d1">Performance</span>
                </span>
                <span className="mask">
                  <span className="d2">marketing in Patna.</span>
                </span>
                <span className="mask">
                  <span className="d3">
                    Every rupee, a job<span style={{ color: "#ff2d2d" }}>.</span>
                  </span>
                </span>
              </h1>
              <p className="lead in d4">
                Google Ads and Meta Ads for Patna businesses, joined up with landing pages and tracking, so you know
                exactly what your ad spend brings back.
              </p>
              <div className="in d5" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a className="btn btn-z" href="#planner">
                  Plan your budget{" "}
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
                  Audit my ads
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
                <span>Google &amp; Meta</span>
                <span>Your ad accounts</span>
                <span>Weekly optimisation</span>
              </div>
            </div>
            <div className="svisual popin d3" aria-hidden="true">
              <div className="svz" style={{ position: "relative" }}>
                <div className="dash">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="lbl" style={{ color: "rgba(255,255,255,.7)" }}>
                      Campaigns · this month
                    </span>
                    <span
                      className="lbl lbl-l"
                      style={{ display: "flex", gap: "8px", alignItems: "center", color: "rgba(255,255,255,.7)" }}
                    >
                      <span className="live"></span>Live
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>
                    <div className="kpi">
                      <span className="lbl lbl-l" style={{ fontSize: "10px", color: "rgba(255,255,255,.6)" }}>
                        Leads
                      </span>
                      <span
                        className="disp"
                        style={{ fontSize: "30px", fontWeight: "800", fontVariantNumeric: "tabular-nums" }}
                      >
                        {leads}
                      </span>
                    </div>
                    <div className="kpi">
                      <span className="lbl lbl-l" style={{ fontSize: "10px", color: "rgba(255,255,255,.6)" }}>
                        Cost / lead
                      </span>
                      <span
                        className="disp"
                        style={{ fontSize: "30px", fontWeight: "800", fontVariantNumeric: "tabular-nums" }}
                      >
                        ₹{cpl}
                      </span>
                    </div>
                    <div className="kpi">
                      <span className="lbl lbl-l" style={{ fontSize: "10px", color: "rgba(255,255,255,.6)" }}>
                        ROAS
                      </span>
                      <span
                        className="disp"
                        style={{
                          fontSize: "30px",
                          fontWeight: "800",
                          color: "#ffe14d",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {roas}×
                      </span>
                    </div>
                  </div>
                  <svg width="396" height="130" viewBox="0 0 396 130" fill="none">
                    <path d="M0 120 H396" stroke="rgba(255,255,255,.15)"></path>
                    <path
                      className="spark"
                      d="M0 110 C 40 104, 60 96, 90 92 S 140 70, 170 74 S 220 60, 250 48 S 310 34, 340 22 S 380 12, 396 8"
                      stroke="#ffe14d"
                      strokeWidth="3"
                      strokeLinecap="round"
                    ></path>
                    <path
                      className="spark"
                      d="M0 116 C 50 112, 90 108, 130 104 S 200 96, 240 92 S 320 84, 396 74"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      style={{ animationDelay: ".9s" }}
                    ></path>
                  </svg>
                  <div style={{ display: "flex", gap: "16px", fontSize: "13px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "10px", height: "3px", borderRadius: "2px", background: "#ffe14d" }}></span>
                      Revenue
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "10px", height: "3px", borderRadius: "2px", background: "#ffffff" }}></span>
                      Spend
                    </span>
                  </div>
                </div>
                <div
                  className="toast"
                  style={{
                    position: "absolute",
                    right: "-20px",
                    top: "-18px",
                    background: "#ffffff",
                    color: "#111111",
                    borderRadius: "999px",
                    padding: "8px 14px",
                    fontSize: "13px",
                    fontWeight: "700",
                    boxShadow: "0 14px 24px -14px rgba(0,0,0,.6)",
                  }}
                >
                  +1 lead from Google
                </div>
                <div
                  className="hand"
                  style={{
                    position: "absolute",
                    left: "-10px",
                    bottom: "-44px",
                    fontSize: "22px",
                    color: "#111111",
                    transform: "rotate(-3deg)",
                  }}
                >
                  example dashboard, yours will be real
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

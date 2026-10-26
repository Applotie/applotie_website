"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Hero section. Client component (interactive).
export default function Hero() {
  const { scores } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "56px 0 96px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>Web development in Patna</span>
          </div>
          <div className="shero">
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div className="lbl eb in">Service 01 · Web development company in Patna</div>
              <h1 className="h1x" style={{ fontSize: "clamp(44px, 5.8vw, 86px)" }}>
                <span className="mask">
                  <span className="d1">Web development</span>
                </span>
                <span className="mask">
                  <span className="d2">in Patna that</span>
                </span>
                <span className="mask">
                  <span className="d3">
                    brings in work<span style={{ color: "#ff2d2d" }}>.</span>
                  </span>
                </span>
              </h1>
              <p className="lead in d4">
                Fast, clear websites for Patna businesses, built around one job: turning the people who visit into
                people who call, book or buy.
              </p>
              <div className="in d5" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a className="btn btn-z" href="#plan">
                  Plan your website{" "}
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
                <Link className="btn btn-o" href="/projects">
                  See a case study
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
                <span>Typical timeline 2–6 weeks</span>
                <span>Fixed price</span>
                <span>You own everything</span>
              </div>
            </div>
            <div className="svisual popin d3" aria-hidden="true">
              <div className="svz" style={{ position: "relative", width: "460px", height: "440px" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "30px",
                    width: "400px",
                    background: "#ffffff",
                    borderRadius: "18px",
                    padding: "18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    boxShadow: "0 40px 80px -40px rgba(17,17,17,.6)",
                  }}
                >
                  <div style={{ display: "flex", gap: "6px" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ececf1" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ececf1" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ececf1" }}></span>
                    <span
                      style={{
                        marginLeft: "10px",
                        flex: "1",
                        height: "10px",
                        borderRadius: "999px",
                        background: "#ececf1",
                      }}
                    ></span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div
                      className="bb"
                      style={{ width: "80px", height: "12px", borderRadius: "4px", background: "#2f5bff" }}
                    ></div>
                    <div
                      className="bb"
                      style={{
                        width: "74px",
                        height: "26px",
                        borderRadius: "999px",
                        background: "#ff2d2d",
                        animationDelay: ".1s",
                      }}
                    ></div>
                  </div>
                  <div
                    className="bb"
                    style={{
                      height: "22px",
                      width: "76%",
                      borderRadius: "6px",
                      background: "#2f5bff",
                      animationDelay: ".2s",
                    }}
                  ></div>
                  <div
                    className="bb"
                    style={{
                      height: "22px",
                      width: "54%",
                      borderRadius: "6px",
                      background: "#2f5bff",
                      animationDelay: ".28s",
                    }}
                  ></div>
                  <div
                    className="bb"
                    style={{
                      height: "8px",
                      width: "66%",
                      borderRadius: "4px",
                      background: "#ececf1",
                      animationDelay: ".36s",
                    }}
                  ></div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: "10px",
                      marginTop: "6px",
                    }}
                  >
                    <div
                      className="bb"
                      style={{ height: "96px", borderRadius: "12px", background: "#4a74ff", animationDelay: ".5s" }}
                    ></div>
                    <div
                      className="bb"
                      style={{ height: "96px", borderRadius: "12px", background: "#ececf1", animationDelay: ".58s" }}
                    ></div>
                    <div
                      className="bb"
                      style={{ height: "96px", borderRadius: "12px", background: "#ececf1", animationDelay: ".66s" }}
                    ></div>
                  </div>
                  <div
                    className="bb"
                    style={{ height: "40px", borderRadius: "12px", background: "#ececf1", animationDelay: ".8s" }}
                  ></div>
                </div>
                <div
                  className="floaty"
                  style={{
                    position: "absolute",
                    right: "0",
                    bottom: "10px",
                    background: "#2f5bff",
                    color: "#ffffff",
                    borderRadius: "20px",
                    padding: "18px 20px",
                    display: "flex",
                    gap: "16px",
                    boxShadow: "0 30px 60px -30px rgba(17,17,17,.7)",
                  }}
                >
                  {scores.map((sc, i_sc) => (
                    <Fragment key={i_sc}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <div className="score">
                          <svg width="76" height="76" viewBox="0 0 76 76">
                            <circle
                              cx="38"
                              cy="38"
                              r="32"
                              fill="none"
                              stroke="rgba(255,255,255,.15)"
                              strokeWidth="5"
                            ></circle>
                            <circle
                              className="v"
                              cx="38"
                              cy="38"
                              r="32"
                              fill="none"
                              stroke={sc.col}
                              strokeWidth="5"
                              strokeLinecap="round"
                              transform="rotate(-90 38 38)"
                              style={{ animationDelay: sc.delay }}
                            ></circle>
                          </svg>
                          <span
                            className="disp"
                            style={{
                              position: "absolute",
                              inset: "0",
                              display: "grid",
                              placeItems: "center",
                              fontSize: "22px",
                              fontWeight: "800",
                            }}
                          >
                            {sc.v}
                          </span>
                        </div>
                        <span className="lbl lbl-l" style={{ fontSize: "10px", color: "rgba(255,255,255,.7)" }}>
                          {sc.label}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div
                  className="hand fadein"
                  style={{
                    position: "absolute",
                    right: "6px",
                    top: "0",
                    fontSize: "24px",
                    color: "#111111",
                    transform: "rotate(5deg)",
                  }}
                >
                  fast on a ₹8,000 phone too
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Hero section. Client component (interactive).
export default function Hero() {
  const { ctaLabel, greeting, inds, nextMonth, subs, toastWord, words } = useDC(Logic);
  return (
    <>
      <section id="top" style={{ padding: "30px 0 64px", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          className="hide-sm"
          style={{ position: "absolute", inset: "0", pointerEvents: "none", zIndex: "0" }}
        >
          <span
            className="floaty popin d4"
            style={{
              position: "absolute",
              left: "3%",
              top: "18%",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: "#4a74ff",
              animationDuration: "6s",
            }}
          ></span>
          <span
            className="floaty popin d5"
            style={{
              position: "absolute",
              left: "44%",
              top: "8%",
              width: "56px",
              height: "20px",
              borderRadius: "999px",
              background: "#ffe14d",
              transform: "rotate(-14deg)",
              animationDuration: "7s",
            }}
          ></span>
          <span
            className="floaty popin d6"
            style={{
              position: "absolute",
              left: "40%",
              bottom: "10%",
              width: "16px",
              height: "16px",
              borderRadius: "4px",
              background: "#ff2d2d",
              animationDuration: "5s",
            }}
          ></span>
          <span
            className="floaty popin d5"
            style={{
              position: "absolute",
              right: "3%",
              top: "6%",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "5px solid #ff2d2d",
              animationDuration: "8s",
            }}
          ></span>
          <span
            className="floaty popin d6"
            style={{
              position: "absolute",
              right: "6%",
              bottom: "8%",
              width: "26px",
              height: "26px",
              borderRadius: "8px",
              background: "#4a74ff",
              transform: "rotate(18deg)",
              animationDuration: "6.5s",
            }}
          ></span>
        </div>
        <div className="wrap hero" style={{ position: "relative", zIndex: "1" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <div
              className="in"
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: "10px",
                padding: "8px 16px 8px 12px",
                border: "1px solid #ececf1",
                borderRadius: "999px",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#5c5c66",
              }}
            >
              <span className="live"></span>
              <span>
                <strong style={{ color: "#111111", fontWeight: "600" }}>{greeting}</strong> · Booking projects for{" "}
                {nextMonth}
              </span>
            </div>
            <h1
              className="disp"
              style={{
                margin: "0",
                fontSize: "clamp(46px, 6.4vw, 92px)",
                lineHeight: ".98",
                fontWeight: "800",
                letterSpacing: "-0.035em",
              }}
            >
              <span className="mask">
                <span className="d1">Websites, Apps,</span>
              </span>
              <span className="mask">
                <span className="d2">Marketing that</span>
              </span>
              <span className="mask">
                <span className="d3">
                  bring you{" "}
                  <span className="words">
                    {words.map((w, i_w) => (
                      <Fragment key={i_w}>
                        <span className={w.cls} aria-hidden={w.hidden}>
                          {w.word}
                          <svg className="uline" aria-hidden="true" viewBox="0 0 300 20" preserveAspectRatio="none">
                            <path
                              d="M4 13 C 70 4, 150 3, 210 8 S 280 15, 296 6"
                              fill="none"
                              stroke="#ff2d2d"
                              strokeWidth="7"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </span>
                      </Fragment>
                    ))}
                  </span>
                </span>
              </span>
            </h1>
            <div className="stack in d4" style={{ maxWidth: "520px" }}>
              {subs.map((s, i_s) => (
                <Fragment key={i_s}>
                  <p
                    className="lead"
                    aria-hidden={s.hidden}
                    style={{ opacity: s.op, transform: `translateY(${s.ty}px)` }}
                  >
                    {s.text}
                  </p>
                </Fragment>
              ))}
            </div>
            <div className="in d4" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="lbl lbl-l muted">Made for</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {inds.map((c, i_c) => (
                  <Fragment key={i_c}>
                    <button
                      type="button"
                      className={`chip ${c.cls}`}
                      aria-pressed={c.pressed}
                      onClick={c.pick}
                      style={{ minHeight: "40px", padding: "0 14px", fontSize: "14px" }}
                    >
                      {c.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="in d5" style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <Link className="btn btn-z" href="/contact">
                {ctaLabel}{" "}
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
              </Link>
              <Link className="btn btn-o" href="/projects">
                See our work
              </Link>
            </div>
          </div>

          {/* engine */}
          <div className="engine-wrap popin d3" style={{ position: "relative", justifySelf: "center" }}>
            <div
              className="hide-sm fadein"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-96px",
                bottom: "-66px",
                width: "210px",
                transform: "rotate(-4deg)",
                zIndex: "2",
              }}
            >
              <svg
                width="70"
                height="48"
                viewBox="0 0 70 48"
                fill="none"
                style={{ display: "block", marginLeft: "96px" }}
              >
                <path
                  className="draw2"
                  d="M6 44 C 18 30, 34 16, 60 8"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
                <path
                  className="draw2"
                  d="M48 4 L 61 8 L 55 20"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="hand" style={{ fontSize: "26px", lineHeight: "26px" }}>
                this is the bit that makes your phone ring
              </div>
            </div>
            <div className="floaty" style={{ animationDuration: "7s" }}>
              <div
                style={{
                  background: "#2f5bff",
                  borderRadius: "30px",
                  padding: "28px 30px 30px",
                  color: "#ffffff",
                  boxShadow: "0 40px 80px -40px rgba(17,17,17,.55)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "22px",
                  }}
                >
                  <div className="lbl" style={{ color: "rgba(255,255,255,.72)" }}>
                    Your growth engine
                  </div>
                  <div
                    className="lbl lbl-l"
                    style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,.72)" }}
                  >
                    <span className="live"></span>Live
                  </div>
                </div>
                <div aria-hidden="true" style={{ position: "relative", width: "480px", height: "380px" }}>
                  <svg
                    width="480"
                    height="380"
                    viewBox="0 0 480 380"
                    fill="none"
                    style={{ position: "absolute", inset: "0" }}
                  >
                    <path
                      d="M128 60 C148 60 148 190 168 190"
                      stroke="rgba(255,255,255,.22)"
                      strokeWidth="1.5"
                      strokeDasharray="3 5"
                    ></path>
                    <path
                      d="M128 190 L168 190"
                      stroke="rgba(255,255,255,.22)"
                      strokeWidth="1.5"
                      strokeDasharray="3 5"
                    ></path>
                    <path
                      d="M128 320 C148 320 148 190 168 190"
                      stroke="rgba(255,255,255,.22)"
                      strokeWidth="1.5"
                      strokeDasharray="3 5"
                    ></path>
                    <path
                      d="M328 190 L360 190"
                      stroke="rgba(255,255,255,.22)"
                      strokeWidth="1.5"
                      strokeDasharray="3 5"
                    ></path>
                  </svg>
                  <span className="flow" style={{ offsetPath: "path('M128 60 C148 60 148 190 168 190')" }}></span>
                  <span
                    className="flow"
                    style={{ offsetPath: "path('M128 190 L168 190')", animationDelay: ".25s" }}
                  ></span>
                  <span
                    className="flow"
                    style={{ offsetPath: "path('M128 320 C148 320 148 190 168 190')", animationDelay: ".5s" }}
                  ></span>
                  <span
                    className="flow"
                    style={{
                      offsetPath: "path('M328 190 L360 190')",
                      animationDelay: "1.2s",
                      background: "#ffe14d",
                      boxShadow: "0 0 0 4px rgba(255,225,77,.3)",
                    }}
                  ></span>
                  <div
                    className="lbl lbl-l"
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      fontSize: "10px",
                      color: "rgba(255,255,255,.55)",
                    }}
                  >
                    Channels
                  </div>
                  <div
                    className="lbl lbl-l"
                    style={{
                      position: "absolute",
                      left: "360px",
                      top: "118px",
                      fontSize: "10px",
                      color: "rgba(255,255,255,.55)",
                    }}
                  >
                    Result
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "40px",
                      width: "128px",
                      height: "40px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,.08)",
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,.18)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "0 14px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff2d2d" }}></span>
                    Google Ads
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "170px",
                      width: "128px",
                      height: "40px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,.08)",
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,.18)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "0 14px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4a74ff" }}></span>SEO
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "300px",
                      width: "128px",
                      height: "40px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,.08)",
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,.18)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "0 14px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffffff" }}></span>
                    Social
                  </div>
                  <div
                    className="site"
                    style={{
                      position: "absolute",
                      left: "168px",
                      top: "104px",
                      width: "160px",
                      height: "172px",
                      borderRadius: "16px",
                      background: "#ffffff",
                      color: "#111111",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "4px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ececf1" }}></span>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ececf1" }}></span>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ececf1" }}></span>
                    </div>
                    <div style={{ height: "34px", borderRadius: "8px", background: "#ff2d2d" }}></div>
                    <div style={{ height: "6px", width: "90%", borderRadius: "4px", background: "#ececf1" }}></div>
                    <div style={{ height: "6px", width: "70%", borderRadius: "4px", background: "#ececf1" }}></div>
                    <div style={{ display: "flex", gap: "6px", marginTop: "2px" }}>
                      <div style={{ flex: "1", height: "34px", borderRadius: "8px", background: "#ececf1" }}></div>
                      <div style={{ flex: "1", height: "34px", borderRadius: "8px", background: "#ececf1" }}></div>
                    </div>
                    <div style={{ height: "18px", width: "60%", borderRadius: "999px", background: "#4a74ff" }}></div>
                    <div className="lbl" style={{ fontSize: "9px", lineHeight: "12px", color: "#5c5c66" }}>
                      Your website
                    </div>
                  </div>
                  <div
                    className="toast"
                    style={{
                      position: "absolute",
                      left: "330px",
                      top: "240px",
                      background: "#ffffff",
                      color: "#111111",
                      borderRadius: "999px",
                      padding: "6px 12px",
                      fontSize: "13px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                      boxShadow: "0 10px 20px -10px rgba(0,0,0,.5)",
                    }}
                  >
                    +1 new {toastWord}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "360px",
                      top: "150px",
                      width: "120px",
                      height: "80px",
                      borderRadius: "16px",
                      background: "#ff2d2d",
                      color: "#111111",
                      padding: "12px 14px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <svg
                      className="wig"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div style={{ fontSize: "14px", fontWeight: "700", lineHeight: "18px" }}>Enquiries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

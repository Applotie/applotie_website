"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Hero section. Client component (interactive).
export default function Hero() {
  const { nH, nR, nW, platNote, plats, rInner, rOuter } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "56px 0 96px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>App development in Patna</span>
          </div>
          <div className="shero">
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div className="lbl in" style={{ color: "#1f45d6" }}>
                Service 02 · App development company in Patna
              </div>
              <h1 className="h1x" style={{ fontSize: "clamp(44px, 5.8vw, 86px)" }}>
                <span className="mask">
                  <span className="d1">App development</span>
                </span>
                <span className="mask">
                  <span className="d2">in Patna for apps</span>
                </span>
                <span className="mask">
                  <span className="d3">
                    people keep opening<span style={{ color: "#4a74ff" }}>.</span>
                  </span>
                </span>
              </h1>
              <p className="lead in d4">
                Android and iOS apps designed in Patna, from a first sketch to the app store and every update after.
                Built around real users, ready to scale as you grow.
              </p>
              <div className="in d5" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link className="btn btn-z" href="/contact">
                  Talk about your app{" "}
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
                <a className="btn btn-o" href="#types">
                  What can we build?
                </a>
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
                <span>iOS &amp; Android</span>
                <span>One codebase</span>
                <span>Phased delivery</span>
              </div>
            </div>
            <div className="svisual popin d3">
              <div
                className="svz"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "26px" }}
              >
                <div className="seg" role="group" aria-label="Preview platform">
                  {plats.map((p, i_p) => (
                    <Fragment key={i_p}>
                      <button type="button" className={p.cls} aria-pressed={p.pressed} onClick={p.pick}>
                        {p.label}
                      </button>
                    </Fragment>
                  ))}
                </div>
                <div aria-hidden="true" style={{ display: "flex", gap: "22px", alignItems: "flex-end" }}>
                  <div className="phone floaty" style={{ width: "200px", height: "400px", borderRadius: rOuter }}>
                    <div className="scr" style={{ borderRadius: rInner }}>
                      <span className="notch" style={{ width: nW, height: nH, borderRadius: nR }}></span>
                      <div style={{ padding: "38px 14px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div
                            style={{ width: "70px", height: "10px", borderRadius: "4px", background: "#2f5bff" }}
                          ></div>
                          <span
                            style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#ffe14d" }}
                          ></span>
                        </div>
                        <div
                          style={{
                            height: "120px",
                            borderRadius: "16px",
                            background: "#4a74ff",
                            padding: "14px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            gap: "6px",
                          }}
                        >
                          <div
                            style={{ height: "10px", width: "60%", borderRadius: "4px", background: "#2f5bff" }}
                          ></div>
                          <div
                            style={{
                              height: "8px",
                              width: "40%",
                              borderRadius: "4px",
                              background: "rgba(17,17,17,.4)",
                            }}
                          ></div>
                        </div>
                        <div className="ps" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <div
                            style={{
                              height: "54px",
                              borderRadius: "12px",
                              background: "#ececf1",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              padding: "0 10px",
                            }}
                          >
                            <span
                              style={{ width: "32px", height: "32px", borderRadius: "10px", background: "#ff2d2d" }}
                            ></span>
                            <div style={{ flex: "1", height: "8px", borderRadius: "4px", background: "#2f5bff" }}></div>
                          </div>
                          <div
                            style={{
                              height: "54px",
                              borderRadius: "12px",
                              background: "#ececf1",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              padding: "0 10px",
                            }}
                          >
                            <span
                              style={{ width: "32px", height: "32px", borderRadius: "10px", background: "#4a74ff" }}
                            ></span>
                            <div style={{ flex: "1", height: "8px", borderRadius: "4px", background: "#2f5bff" }}></div>
                          </div>
                          <div
                            style={{
                              height: "54px",
                              borderRadius: "12px",
                              background: "#ececf1",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              padding: "0 10px",
                            }}
                          >
                            <span
                              style={{ width: "32px", height: "32px", borderRadius: "10px", background: "#ffe14d" }}
                            ></span>
                            <div style={{ flex: "1", height: "8px", borderRadius: "4px", background: "#2f5bff" }}></div>
                          </div>
                          <div
                            style={{
                              height: "54px",
                              borderRadius: "12px",
                              background: "#ececf1",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              padding: "0 10px",
                            }}
                          >
                            <span
                              style={{ width: "32px", height: "32px", borderRadius: "10px", background: "#ff2d2d" }}
                            ></span>
                            <div style={{ flex: "1", height: "8px", borderRadius: "4px", background: "#2f5bff" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="phone floaty"
                    style={{
                      width: "160px",
                      height: "320px",
                      borderRadius: rOuter,
                      animationDelay: "-2.5s",
                      background: "#ffffff",
                    }}
                  >
                    <div className="scr" style={{ borderRadius: rInner, background: "#2f5bff" }}>
                      <span
                        className="notch"
                        style={{ width: nW, height: nH, borderRadius: nR, background: "#ffffff" }}
                      ></span>
                      <div
                        style={{
                          padding: "36px 12px 12px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          height: "100%",
                        }}
                      >
                        <div className="lbl" style={{ fontSize: "9px", color: "rgba(255,255,255,.6)" }}>
                          Booking confirmed
                        </div>
                        <div style={{ height: "90px", borderRadius: "14px", background: "#ffe14d" }}></div>
                        <div
                          style={{
                            height: "8px",
                            width: "70%",
                            borderRadius: "4px",
                            background: "rgba(255,255,255,.3)",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "8px",
                            width: "50%",
                            borderRadius: "4px",
                            background: "rgba(255,255,255,.3)",
                          }}
                        ></div>
                        <div
                          style={{
                            marginTop: "auto",
                            height: "38px",
                            borderRadius: "999px",
                            background: "#4a74ff",
                            display: "grid",
                            placeItems: "center",
                            fontSize: "12px",
                            fontWeight: "700",
                            color: "#111111",
                          }}
                        >
                          Done ✓
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="hand" style={{ fontSize: "24px", color: "#111111", transform: "rotate(-3deg)" }}>
                  {platNote}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

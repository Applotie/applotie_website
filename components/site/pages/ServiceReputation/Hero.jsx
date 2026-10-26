"use client";

import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Hero section. Client component (interactive).
export default function Hero() {
  const { heroCount, heroPct, heroRating } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "56px 0 96px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>Reputation management in Patna</span>
          </div>
          <div className="shero">
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div className="lbl in" style={{ color: "#1f45d6" }}>
                Service 05 · Online reputation management in Patna
              </div>
              <h1 className="h1x" style={{ fontSize: "clamp(44px, 5.8vw, 86px)" }}>
                <span className="mask">
                  <span className="d1">Reputation</span>
                </span>
                <span className="mask">
                  <span className="d2">management in Patna</span>
                </span>
                <span className="mask">
                  <span className="d3">
                    that earns trust<span style={{ color: "#4a74ff" }}>.</span>
                  </span>
                </span>
              </h1>
              <p className="lead in d4">
                People read your reviews before they ever call you. We help Patna businesses earn more genuine five-star
                reviews, reply to every one, and look trustworthy everywhere they&apos;re found.
              </p>
              <div className="in d5" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a className="btn btn-z" href="#calc">
                  How many reviews do I need?{" "}
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
                  Get a free review audit
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
                <span>Genuine reviews only</span>
                <span>A reply to every review</span>
                <span>Monthly report</span>
              </div>
            </div>
            <div className="svisual popin d3" aria-hidden="true">
              <div className="svz" style={{ position: "relative" }}>
                <div className="gcard">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: "700", fontSize: "18px" }}>Your Business</div>
                      <div className="muted" style={{ fontSize: "13px" }}>
                        Clinic · Boring Road, Patna
                      </div>
                    </div>
                    <span
                      className="ic"
                      style={{ width: "40px", height: "40px", background: "#ececf1", fontWeight: "700" }}
                    >
                      Y
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span
                      className="disp"
                      style={{
                        fontSize: "54px",
                        lineHeight: "1",
                        fontWeight: "800",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {heroRating}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span className="starbar">
                        <span className="base">★★★★★</span>
                        <span className="top" style={{ width: `${heroPct}%` }}>
                          ★★★★★
                        </span>
                      </span>
                      <span className="muted" style={{ fontSize: "13px" }}>
                        {heroCount} Google reviews
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div className="rev" style={{ animationDelay: ".9s" }}>
                      <span
                        className="ic"
                        style={{
                          width: "34px",
                          height: "34px",
                          background: "#4a74ff",
                          fontSize: "13px",
                          fontWeight: "700",
                        }}
                      >
                        R
                      </span>
                      <div style={{ flex: "1" }}>
                        <div style={{ color: "#ffe14d", fontSize: "14px" }}>★★★★★</div>
                        <div style={{ fontSize: "14px", lineHeight: "20px" }}>
                          Doctor explained everything patiently. Booking was easy too.
                        </div>
                      </div>
                    </div>
                    <div className="rev" style={{ animationDelay: "1.3s" }}>
                      <span
                        className="ic"
                        style={{
                          width: "34px",
                          height: "34px",
                          background: "#ff2d2d",
                          fontSize: "13px",
                          fontWeight: "700",
                        }}
                      >
                        A
                      </span>
                      <div style={{ flex: "1" }}>
                        <div style={{ color: "#ffe14d", fontSize: "14px" }}>★★★★★</div>
                        <div style={{ fontSize: "14px", lineHeight: "20px" }}>
                          Clean clinic, short wait. Highly recommend.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: "flex-end",
                      background: "#2f5bff",
                      color: "#ffffff",
                      borderRadius: "14px 14px 4px 14px",
                      padding: "10px 14px",
                      fontSize: "13px",
                      animation: "up .6s cubic-bezier(.22,1,.36,1) 1.7s both",
                    }}
                  >
                    Thank you, Anjali! We&apos;re glad the visit went smoothly.
                  </div>
                </div>
                <div
                  className="hand fadein"
                  style={{
                    position: "absolute",
                    left: "-30px",
                    bottom: "-48px",
                    fontSize: "22px",
                    transform: "rotate(-3deg)",
                  }}
                >
                  example profile, illustrative reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Hero section. Client component (interactive).
export default function Hero() {
  const { statusDot, statusText, statusTitle } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "64px 0 48px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>Contact</span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "32px",
            }}
          >
            <h1 className="h1x">
              <span className="mask">
                <span className="d1">
                  Let&apos;s talk<span style={{ color: "#ff2d2d" }}>.</span>
                </span>
              </span>
            </h1>
            <div
              className="in d4"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 20px 14px 16px",
                borderRadius: "20px",
                border: "1px solid #ececf1",
                maxWidth: "440px",
              }}
            >
              <span style={{ position: "relative", width: "12px", height: "12px", flex: "none" }}>
                <span className="live" style={{ width: "12px", height: "12px", background: statusDot }}></span>
              </span>
              <div>
                <div style={{ fontWeight: "600" }}>{statusTitle}</div>
                <div className="muted" style={{ fontSize: "14px", lineHeight: "20px" }}>
                  {statusText}
                </div>
              </div>
            </div>
          </div>
          <p className="lead in d4">
            Tell us a little about what you&apos;re building. Two quick steps, under a minute. You don&apos;t need to
            have it all figured out.
          </p>
        </div>
      </section>
    </>
  );
}

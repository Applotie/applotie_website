"use client";

import { Fragment } from "react";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Mixer section. Client component (interactive).
export default function Mixer() {
  const { bname, bnameShow, p, setName, sliders } = useDC(Logic);
  return (
    <>
      <section id="mixer" style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="dark panel">
            <div className="mixer">
              <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
                <div className="lbl" style={{ color: "rgba(255,255,255,.72)" }}>
                  Brand personality mixer
                </div>
                <h2 className="h2x" style={{ fontSize: "clamp(36px, 4.4vw, 58px)" }}>
                  What should your brand feel like?
                </h2>
                <label
                  className="dfield"
                  style={{ display: "flex", flexDirection: "column", gap: "6px", fontWeight: "600" }}
                >
                  Your business name
                  <input type="text" value={bname} onChange={setName} placeholder="e.g. Sunrise Dental" />
                </label>
                {sliders.map((sl, i_sl) => (
                  <Fragment key={i_sl}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        <span style={{ opacity: sl.lo }}>{sl.left}</span>
                        <span style={{ opacity: sl.hi }}>{sl.right}</span>
                      </div>
                      <input
                        className="rng"
                        type="range"
                        min="0"
                        max="100"
                        value={sl.v}
                        onChange={sl.set}
                        aria-label={`${sl.left} to ${sl.right}`}
                      />
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div
                  className="prev"
                  style={{
                    background: p.bg,
                    color: p.fg,
                    borderRadius: "26px",
                    padding: "40px 32px",
                    minHeight: "280px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "32px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: p.markR,
                        background: p.accent,
                        display: "grid",
                        placeItems: "center",
                        flex: "none",
                        transform: `rotate(${p.markRot}deg)`,
                      }}
                    >
                      <span style={{ width: "24px", height: "24px", borderRadius: p.dotR, background: p.bg }}></span>
                    </span>
                    <span
                      style={{
                        fontFamily: p.font,
                        fontWeight: p.weight,
                        fontSize: `${p.size}px`,
                        lineHeight: "1",
                        letterSpacing: `${p.track}em`,
                        textTransform: p.case,
                      }}
                    >
                      {bnameShow}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: p.font,
                      fontSize: "26px",
                      lineHeight: "1.2",
                      fontWeight: p.weight2,
                      maxWidth: "420px",
                    }}
                  >
                    {p.line}
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ width: "44px", height: "44px", borderRadius: p.chipR, background: p.accent }}></span>
                    <span
                      style={{ width: "44px", height: "44px", borderRadius: p.chipR, background: p.accent2 }}
                    ></span>
                    <span style={{ width: "44px", height: "44px", borderRadius: p.chipR, background: p.fg }}></span>
                  </div>
                </div>
                <div className="g3" style={{ gap: "12px" }}>
                  <div className="app" style={{ background: p.accent, color: p.onAccent }}>
                    <span className="lbl" style={{ fontSize: "10px", opacity: ".8" }}>
                      Business card
                    </span>
                    <span style={{ fontFamily: p.font, fontWeight: p.weight, fontSize: "18px", textTransform: p.case }}>
                      {bnameShow}
                    </span>
                  </div>
                  <div
                    className="app"
                    style={{ background: p.bg, color: p.fg, border: "1px solid rgba(255,255,255,.18)" }}
                  >
                    <span className="lbl" style={{ fontSize: "10px", opacity: ".8" }}>
                      Instagram post
                    </span>
                    <span style={{ fontFamily: p.font, fontWeight: p.weight2, fontSize: "18px", lineHeight: "1.2" }}>
                      Now open in Patna
                    </span>
                  </div>
                  <div className="app" style={{ background: p.accent2, color: "#111111" }}>
                    <span className="lbl" style={{ fontSize: "10px", opacity: ".8" }}>
                      Signboard
                    </span>
                    <span style={{ fontFamily: p.font, fontWeight: p.weight, fontSize: "18px", textTransform: p.case }}>
                      {bnameShow}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span className="lbl" style={{ color: "rgba(255,255,255,.75)" }}>
                    {p.words}
                  </span>
                  <span className="hand" style={{ fontSize: "22px", color: "#ffe14d" }}>
                    a sketch, not a logo, real work starts with strategy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

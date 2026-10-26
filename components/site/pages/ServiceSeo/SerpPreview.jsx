"use client";

import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Serp Preview section. Client component (interactive).
export default function SerpPreview() {
  const {
    bizCity,
    bizName,
    bizShow,
    bizWhat,
    dCol,
    dLen,
    dPct,
    initial,
    serpDesc,
    serpTitle,
    setBiz,
    setCity,
    setWhat,
    tCol,
    tLen,
    tPct,
    url,
  } = useDC(Logic);
  return (
    <>
      <section id="preview" style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="dark panel">
            <div className="serp">
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <div className="lbl" style={{ color: "rgba(255,255,255,.72)" }}>
                  Try it
                </div>
                <h2 className="h2x" style={{ fontSize: "clamp(36px, 4.4vw, 58px)" }}>
                  See how you could show up on Google.
                </h2>
                <p style={{ margin: "0", color: "rgba(255,255,255,.75)" }}>
                  Type in your details. We&apos;ll write a search listing the way we would for a client.
                </p>
                <label className="dfield">
                  Business name
                  <input type="text" value={bizName} onChange={setBiz} placeholder="e.g. Sunrise Dental" />
                </label>
                <label className="dfield">
                  What you do
                  <input type="text" value={bizWhat} onChange={setWhat} placeholder="e.g. Dental clinic" />
                </label>
                <label className="dfield">
                  City or area
                  <input type="text" value={bizCity} onChange={setCity} placeholder="e.g. Patna" />
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "sticky", top: "110px" }}>
                <div
                  style={{
                    background: "#ffffff",
                    color: "#111111",
                    borderRadius: "22px",
                    padding: "26px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    boxShadow: "0 30px 60px -30px rgba(0,0,0,.6)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      className="ic"
                      style={{
                        width: "30px",
                        height: "30px",
                        background: "#ececf1",
                        fontSize: "13px",
                        fontWeight: "700",
                      }}
                    >
                      {initial}
                    </span>
                    <div style={{ fontSize: "13px", lineHeight: "18px" }}>
                      <div style={{ fontWeight: "600" }}>{bizShow}</div>
                      <div className="muted">{url}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: "21px", lineHeight: "27px", color: "#1a0dab" }}>{serpTitle}</div>
                  <div style={{ fontSize: "14px", lineHeight: "22px", color: "#4d5156" }}>{serpDesc}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                    <span className="tag" style={{ fontSize: "12px" }}>
                      Call now
                    </span>
                    <span className="tag" style={{ fontSize: "12px" }}>
                      Directions
                    </span>
                    <span className="tag" style={{ fontSize: "12px" }}>
                      Book online
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    background: "#ffffff",
                    color: "#111111",
                    borderRadius: "18px",
                    padding: "18px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600" }}
                  >
                    <span>Title length</span>
                    <span>{tLen} / 60</span>
                  </div>
                  <div className="meter">
                    <div style={{ width: `${tPct}%`, background: tCol }}></div>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600" }}
                  >
                    <span>Description length</span>
                    <span>{dLen} / 155</span>
                  </div>
                  <div className="meter">
                    <div style={{ width: `${dPct}%`, background: dCol }}></div>
                  </div>
                </div>
                <span className="hand" style={{ fontSize: "24px", color: "#ffe14d" }}>
                  this is just the start, we do this for every page
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

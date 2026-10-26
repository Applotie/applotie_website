"use client";

import { Fragment } from "react";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Tour section. Client component (interactive).
export default function Tour() {
  const { tabs } = useDC(Logic);
  return (
    <>
      <section id="tour" style={{ padding: "112px 0" }}>
        <div className="wrap">
          <div className="dark panel" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div className="sec-hd" style={{ marginBottom: "0" }}>
              <div>
                <div className="lbl" style={{ color: "rgba(255,255,255,.72)" }}>
                  Product tour
                </div>
                <h2 className="h2x" style={{ fontSize: "clamp(36px, 4.4vw, 58px)" }}>
                  Your whole clinic, one screen at a time.
                </h2>
              </div>
              <span className="hand" style={{ fontSize: "24px", color: "#ffe14d" }}>
                click around, it doesn&apos;t bite
              </span>
            </div>
            <div className="tour">
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {tabs.map((t, i_t) => (
                  <Fragment key={i_t}>
                    <button type="button" className={`ttab ${t.cls}`} aria-pressed={t.pressed} onClick={t.pick}>
                      <span style={{ fontWeight: "700", fontSize: "17px" }}>{t.name}</span>
                      <span style={{ fontSize: "13px", opacity: ".8" }}>{t.sub}</span>
                    </button>
                  </Fragment>
                ))}
              </div>
              <div className="stack">
                {tabs.map((t, i_t) => (
                  <Fragment key={i_t}>
                    <div
                      className="scr"
                      aria-hidden={t.hidden}
                      style={{ opacity: t.op, transform: `translateY(${t.ty}px)`, pointerEvents: t.pe }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <strong style={{ fontSize: "18px" }}>{t.title}</strong>
                        <span
                          style={{
                            background: t.badgeBg,
                            borderRadius: "999px",
                            padding: "4px 12px",
                            fontSize: "12px",
                            fontWeight: "700",
                          }}
                        >
                          {t.badge}
                        </span>
                      </div>
                      {t.rows.map((r, i_r) => (
                        <Fragment key={i_r}>
                          <div className="row">
                            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                              <span
                                style={{ width: "10px", height: "10px", borderRadius: "50%", background: r.c }}
                              ></span>
                              {r.a}
                            </span>
                            <span className="muted" style={{ fontSize: "13px" }}>
                              {r.b}
                            </span>
                          </div>
                        </Fragment>
                      ))}
                      <p className="muted" style={{ margin: "6px 0 0", fontSize: "15px" }}>
                        {t.desc}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

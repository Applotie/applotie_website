"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Recommender section. Client component (interactive).
export default function Recommender() {
  const { goals, recs } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="dark panel">
            <div className="rec">
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <div className="lbl" style={{ color: "rgba(255,255,255,.72)" }}>
                  Not sure where to start?
                </div>
                <h2 className="h2x" style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}>
                  Tell us what you want more of.
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {goals.map((g, i_g) => (
                    <Fragment key={i_g}>
                      <button
                        type="button"
                        className={`chip chip-d ${g.cls}`}
                        aria-pressed={g.pressed}
                        onClick={g.pick}
                      >
                        {g.label}
                      </button>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="stack">
                {recs.map((r, i_r) => (
                  <Fragment key={i_r}>
                    <div
                      aria-hidden={r.hidden}
                      style={{
                        opacity: r.op,
                        transform: `translateY(${r.ty}px)`,
                        pointerEvents: r.pe,
                        background: "#ffffff",
                        color: "#111111",
                        borderRadius: "26px",
                        padding: "32px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span className="lbl eb">We&apos;d start with</span>
                        <span className="hand" style={{ fontSize: "22px" }}>
                          {r.note}
                        </span>
                      </div>
                      <h3 className="h3x">{r.name}</h3>
                      <p className="muted" style={{ margin: "0", fontSize: "17px", lineHeight: "27px" }}>
                        {r.why}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {r.plus.map((pl, i_pl) => (
                          <Fragment key={i_pl}>
                            <span className="tag">+ {pl}</span>
                          </Fragment>
                        ))}
                      </div>
                      <Link className="btn btn-z" href={r.href} style={{ alignSelf: "flex-start" }}>
                        See how it works{" "}
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

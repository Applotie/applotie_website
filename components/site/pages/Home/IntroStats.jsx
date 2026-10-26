"use client";

import { Fragment } from "react";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Intro + Stats section. Client component (interactive).
export default function IntroStats() {
  const { stats, statsRef } = useDC(Logic);
  return (
    <>
      <section aria-label="Results" style={{ padding: "112px 0 40px" }}>
        <div className="wrap">
          <p className="stmt rv" style={{ marginBottom: "72px", maxWidth: "1060px" }}>
            We&apos;re a web development and digital marketing studio in Patna. We help growing businesses{" "}
            <span className="muted">stop guessing online and start</span> getting found, getting chosen and getting
            calls.
          </p>
          <div className="num-row" ref={statsRef}>
            {stats.map((s, i_s) => (
              <Fragment key={i_s}>
                <div className="num-cell rv">
                  <div className="lbl lbl-l muted">{s.num}</div>
                  <div className="num-big">
                    {s.shown}
                    <span style={{ color: "#ff2d2d" }}>{s.suf}</span>
                  </div>
                  <div className="muted" style={{ fontSize: "15px" }}>
                    {s.label}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

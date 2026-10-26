import { Fragment } from "react";
import { dcVals } from "@/components/site/dc";
import Logic from "./logic";

// What You Get section. Server component.
export default function WhatYouGet() {
  const { feats } = dcVals(Logic);
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">What&apos;s included</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Everything a website</span>
                </span>
                <span className="mask rvm">
                  <span>needs to perform.</span>
                </span>
              </h2>
            </div>
            <p className="rv muted" style={{ margin: "0", maxWidth: "340px" }}>
              Not just design and code. The thinking before it and the tracking after it.
            </p>
          </div>
          <div className="g3">
            {feats.map((f, i_f) => (
              <Fragment key={i_f}>
                <div className="feat-i rv">
                  <span className="ic" style={{ background: f.bg }}>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#111111"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={f.d}></path>
                    </svg>
                  </span>
                  <h3 className="h4x">{f.t}</h3>
                  <p className="muted" style={{ margin: "0", fontSize: "15px", lineHeight: "23px" }}>
                    {f.x}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

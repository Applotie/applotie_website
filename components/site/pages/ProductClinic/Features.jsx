import { Fragment } from "react";
import { dcVals } from "@/components/site/dc";
import Logic from "./logic";

// Features section. Server component.
export default function Features() {
  const { feats } = dcVals(Logic);
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl rv" style={{ color: "#1f45d6" }}>
                Everything included
              </div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Less paperwork.</span>
                </span>
                <span className="mask rvm">
                  <span>More medicine.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g4">
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
                  <h3 className="h4x" style={{ fontSize: "20px" }}>
                    {f.t}
                  </h3>
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

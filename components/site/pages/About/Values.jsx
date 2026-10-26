import { Fragment } from "react";
import { dcVals } from "@/components/site/dc";
import Logic from "./logic";

// Values section. Server component.
export default function Values() {
  const { values } = dcVals(Logic);
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="dark panel">
            <div className="sec-hd">
              <div>
                <div className="lbl rv" style={{ color: "rgba(255,255,255,.72)" }}>
                  (03) What we believe
                </div>
                <h2 className="h2x">
                  <span className="mask rvm">
                    <span>How we like</span>
                  </span>
                  <span className="mask rvm">
                    <span>to work.</span>
                  </span>
                </h2>
              </div>
            </div>
            <div className="g4" style={{ gap: "32px" }}>
              {values.map((v, i_v) => (
                <Fragment key={i_v}>
                  <div className="val rv">
                    <span
                      className="disp vn"
                      style={{ fontSize: "44px", lineHeight: "1", fontWeight: "800", color: "rgba(255,255,255,.35)" }}
                    >
                      {v.n}
                    </span>
                    <h3 className="h4x" style={{ fontSize: "24px", lineHeight: "30px" }}>
                      {v.title}
                    </h3>
                    <p style={{ margin: "0", color: "rgba(255,255,255,.75)", fontSize: "16px", lineHeight: "25px" }}>
                      {v.text}
                    </p>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

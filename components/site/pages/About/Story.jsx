import { Fragment } from "react";
import { dcVals } from "@/components/site/dc";
import Logic from "./logic";

// Story section. Server component.
export default function Story() {
  const { timeline } = dcVals(Logic);
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">(01) Our story</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Seven years,</span>
                </span>
                <span className="mask rvm">
                  <span>one idea.</span>
                </span>
              </h2>
            </div>
            <p className="rv muted" style={{ margin: "0", maxWidth: "360px" }}>
              We didn&apos;t set out to be an agency. We set out to make good digital work accessible. The agency
              happened along the way.
            </p>
          </div>
          <div style={{ borderBottom: "1px solid #ececf1" }}>
            {timeline.map((t, i_t) => (
              <Fragment key={i_t}>
                <div className="tl-row rv">
                  <div
                    className="disp tl-y"
                    style={{ fontSize: "64px", lineHeight: "1", fontWeight: "800", letterSpacing: "-0.04em" }}
                  >
                    {t.year}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span className="lbl eb">{t.tag}</span>
                    <h3 className="h4x" style={{ fontSize: "26px", lineHeight: "32px" }}>
                      {t.title}
                    </h3>
                  </div>
                  <p className="muted" style={{ margin: "0", fontSize: "17px", lineHeight: "27px" }}>
                    {t.text}
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

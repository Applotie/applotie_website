"use client";

import { Fragment } from "react";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Demo section. Client component (interactive).
export default function Demo() {
  const { docOpts, notSent, reset, sent, sentClinic, sentName, setClinic, setName, submit } = useDC(Logic);
  return (
    <>
      <section id="demo" style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="demo panel rv" style={{ background: "#ff2d2d", color: "#111111" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="lbl">Free demo</div>
              <h2
                className="disp"
                style={{
                  margin: "0",
                  fontSize: "clamp(44px, 5.6vw, 84px)",
                  lineHeight: ".95",
                  fontWeight: "800",
                  letterSpacing: "-0.04em",
                }}
              >
                See it running in your clinic.
              </h2>
              <p className="big-p" style={{ maxWidth: "440px" }}>
                A 20-minute walkthrough on your phone or at your clinic in Patna. Bring your questions, and your
                receptionist.
              </p>
            </div>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "26px",
                padding: "30px",
                boxShadow: "0 40px 80px -40px rgba(17,17,17,.55)",
              }}
            >
              {sent && (
                <>
                  <div
                    className="popin"
                    style={{
                      minHeight: "360px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "14px",
                      textAlign: "center",
                    }}
                  >
                    <span className="ic" style={{ width: "72px", height: "72px", background: "#4a74ff" }}>
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#111111"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path className="draw2" d="M20 6 9 17l-5-5" style={{ animationDelay: ".2s" }}></path>
                      </svg>
                    </span>
                    <h3 className="h3x">Demo requested{sentName}.</h3>
                    <p className="muted" style={{ margin: "0", maxWidth: "320px" }}>
                      We&apos;ll WhatsApp you to fix a time that suits {sentClinic}.
                    </p>
                    <button type="button" className="btn btn-o btn-sm" onClick={reset}>
                      Request another
                    </button>
                  </div>
                </>
              )}
              {notSent && (
                <>
                  <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <h3 className="h4x" style={{ fontSize: "24px", lineHeight: "30px", fontWeight: "800" }}>
                      Book your free demo
                    </h3>
                    <div className="g2" style={{ gap: "14px" }}>
                      <label className="field">
                        Your name
                        <input type="text" autoComplete="name" required onInput={setName} />
                      </label>
                      <label className="field">
                        Clinic name
                        <input type="text" autoComplete="organization" onInput={setClinic} />
                      </label>
                    </div>
                    <label className="field">
                      Phone or WhatsApp
                      <input type="tel" autoComplete="tel" required />
                    </label>
                    <fieldset
                      style={{
                        border: "0",
                        margin: "0",
                        padding: "0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <legend className="field" style={{ padding: "0", marginBottom: "8px" }}>
                        How many doctors?
                      </legend>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {docOpts.map((o, i_o) => (
                          <Fragment key={i_o}>
                            <button
                              type="button"
                              className={`chip ${o.cls}`}
                              aria-pressed={o.pressed}
                              onClick={o.pick}
                              style={{ minHeight: "40px" }}
                            >
                              {o.label}
                            </button>
                          </Fragment>
                        ))}
                      </div>
                    </fieldset>
                    <button type="submit" className="btn btn-i" style={{ width: "100%", marginTop: "4px" }}>
                      Book my demo{" "}
                      <svg
                        className="arr"
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
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

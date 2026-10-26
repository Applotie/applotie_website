"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Section section. Client component (interactive).
export default function Section() {
  const {
    back,
    budOpts,
    copyEmail,
    copyLabel,
    firstName,
    hint1,
    isStep1,
    isStep2,
    next,
    notSent,
    replyWay,
    replyWhen,
    restart,
    sent,
    setName,
    stepName,
    stepNo,
    stepPct,
    submit,
    svcOpts,
    svcSummary,
    toggleWa,
    whenOpts,
  } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap cgrid">
          {/* FORM */}
          <div className="formcard in d5">
            {sent && (
              <>
                <div
                  className="popin"
                  style={{
                    minHeight: "520px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "20px",
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
                  <h2 className="h2x" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
                    Thanks{firstName}. We&apos;re on it.
                  </h2>
                  <p className="big-p muted" style={{ maxWidth: "480px" }}>
                    We&apos;ll {replyWay} about your {svcSummary} project{replyWhen}. In the meantime, have a look at
                    some of our work.
                  </p>
                  <div className="hand" style={{ fontSize: "26px" }}>
                    — the Applotie team
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    <Link className="btn btn-i" href="/projects">
                      See our work{" "}
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
                    <button type="button" className="btn btn-o" onClick={restart}>
                      Start over
                    </button>
                  </div>
                </div>
              </>
            )}
            {notSent && (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className="lbl eb">Step {stepNo} of 2</span>
                      <span className="lbl lbl-l muted">{stepName}</span>
                    </div>
                    <div className="stepbar">
                      <div style={{ width: `${stepPct}%` }}></div>
                    </div>
                  </div>

                  {isStep1 && (
                    <>
                      <div
                        className="in"
                        style={{ display: "flex", flexDirection: "column", gap: "30px", animationDuration: ".5s" }}
                      >
                        <fieldset className="qgroup">
                          <legend>
                            What can we help with?{" "}
                            <span className="muted" style={{ fontWeight: "400" }}>
                              Pick any.
                            </span>
                          </legend>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {svcOpts.map((o, i_o) => (
                              <Fragment key={i_o}>
                                <button
                                  type="button"
                                  className={`chip ${o.cls}`}
                                  aria-pressed={o.pressed}
                                  onClick={o.pick}
                                >
                                  {o.label}
                                </button>
                              </Fragment>
                            ))}
                          </div>
                        </fieldset>
                        <fieldset className="qgroup">
                          <legend>Rough budget</legend>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {budOpts.map((o, i_o) => (
                              <Fragment key={i_o}>
                                <button
                                  type="button"
                                  className={`chip ${o.cls}`}
                                  aria-pressed={o.pressed}
                                  onClick={o.pick}
                                >
                                  {o.label}
                                </button>
                              </Fragment>
                            ))}
                          </div>
                        </fieldset>
                        <fieldset className="qgroup">
                          <legend>When would you like to start?</legend>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {whenOpts.map((o, i_o) => (
                              <Fragment key={i_o}>
                                <button
                                  type="button"
                                  className={`chip ${o.cls}`}
                                  aria-pressed={o.pressed}
                                  onClick={o.pick}
                                >
                                  {o.label}
                                </button>
                              </Fragment>
                            ))}
                          </div>
                        </fieldset>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "16px",
                            flexWrap: "wrap",
                            borderTop: "1px solid #ececf1",
                            paddingTop: "24px",
                          }}
                        >
                          <span className="muted" style={{ fontSize: "14px" }}>
                            {hint1}
                          </span>
                          <button type="button" className="btn btn-i" onClick={next}>
                            Next step{" "}
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
                        </div>
                      </div>
                    </>
                  )}

                  {isStep2 && (
                    <>
                      <form
                        className="in"
                        onSubmit={submit}
                        style={{ display: "flex", flexDirection: "column", gap: "18px", animationDuration: ".5s" }}
                      >
                        <div className="g2" style={{ gap: "16px" }}>
                          <label className="field">
                            Your name
                            <input type="text" name="name" autoComplete="name" required onInput={setName} />
                          </label>
                          <label className="field">
                            Company{" "}
                            <span className="muted" style={{ fontWeight: "400" }}>
                              (optional)
                            </span>
                            <input type="text" name="company" autoComplete="organization" />
                          </label>
                          <label className="field">
                            Phone or WhatsApp
                            <input type="tel" name="phone" autoComplete="tel" required />
                          </label>
                          <label className="field">
                            Email
                            <input type="email" name="email" autoComplete="email" />
                          </label>
                        </div>
                        <label className="field">
                          Tell us about it
                          <textarea
                            name="message"
                            rows="4"
                            style={{ resize: "vertical" }}
                            placeholder="What you do, what you need, and anything that's not working today."
                          ></textarea>
                        </label>
                        <label
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                            fontSize: "15px",
                            cursor: "pointer",
                          }}
                        >
                          <input
                            type="checkbox"
                            defaultChecked
                            onChange={toggleWa}
                            style={{ width: "20px", height: "20px", accentColor: "#111111" }}
                          />{" "}
                          Reply on WhatsApp instead of a call
                        </label>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "16px",
                            flexWrap: "wrap",
                            borderTop: "1px solid #ececf1",
                            paddingTop: "24px",
                          }}
                        >
                          <button type="button" className="btn btn-o" onClick={back}>
                            Back
                          </button>
                          <button type="submit" className="btn btn-z">
                            Send to the team{" "}
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
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </>
            )}
          </div>

          {/* SIDE */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div className="rv" style={{ display: "flex", flexDirection: "column" }}>
              <div className="lbl eb" style={{ marginBottom: "8px" }}>
                Or reach us directly
              </div>
              <a className="method" href="https://wa.me/917250204488">
                <span className="ic" style={{ background: "#4a74ff" }}>
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
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                </span>
                <div style={{ flex: "1" }}>
                  <div style={{ fontWeight: "600", fontSize: "18px" }}>WhatsApp</div>
                  <div className="muted" style={{ fontSize: "14px" }}>
                    Usually the fastest way to reach us
                  </div>
                </div>
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
              </a>
              <a className="method" href="tel:+917250204488">
                <span className="ic" style={{ background: "#ff2d2d" }}>
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <div style={{ flex: "1" }}>
                  <div style={{ fontWeight: "600", fontSize: "18px" }}>+91 7250 20 4488</div>
                  <div className="muted" style={{ fontSize: "14px" }}>
                    Call during studio hours
                  </div>
                </div>
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
              </a>
              <div className="method" style={{ borderBottom: "1px solid #ececf1" }}>
                <span className="ic" style={{ background: "#ffe14d" }}>
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
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
                <div style={{ flex: "1" }}>
                  <div style={{ fontWeight: "600", fontSize: "18px" }}>hello@applotie.com</div>
                  <div className="muted" style={{ fontSize: "14px" }}>
                    For briefs, files and longer notes
                  </div>
                </div>
                <button
                  type="button"
                  className="copy copy-dk"
                  onClick={copyEmail}
                  style={{ padding: "0 6px 0 6px", minHeight: "40px" }}
                >
                  <span className="copy-l">{copyLabel}</span>
                </button>
              </div>
            </div>

            {/* map */}
            <div
              className="rv"
              style={{
                borderRadius: "26px",
                overflow: "hidden",
                background: "#ececf1",
                position: "relative",
                height: "300px",
              }}
              aria-label="Map showing Patna, Bihar"
              role="img"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 520 300"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
                style={{ position: "absolute", inset: "0" }}
              >
                <g stroke="#ffffff" strokeWidth="1">
                  <path d="M0 60 H520 M0 130 H520 M0 200 H520 M0 260 H520 M80 0 V300 M190 0 V300 M300 0 V300 M410 0 V300"></path>
                </g>
                <g stroke="#ffffff" strokeWidth="6" strokeLinecap="round" fill="none">
                  <path d="M0 170 C 120 150, 200 190, 300 160 S 460 120, 520 140"></path>
                  <path d="M240 0 C 250 80, 230 160, 260 300"></path>
                </g>
                <path
                  d="M-10 96 C 90 70, 180 112, 280 84 S 440 40, 540 66 L 540 34 C 440 10, 360 52, 280 54 S 90 40, -10 64 Z"
                  fill="#4a74ff"
                  opacity=".85"
                ></path>
                <text
                  x="400"
                  y="30"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="10"
                  letterSpacing="1.5"
                  fill="#111111"
                  opacity=".7"
                >
                  GANGA
                </text>
              </svg>
              <div
                style={{
                  position: "absolute",
                  left: "47%",
                  top: "52%",
                  width: "20px",
                  height: "20px",
                  margin: "-10px 0 0 -10px",
                }}
              >
                <span className="ping"></span>
                <span
                  style={{
                    position: "absolute",
                    inset: "3px",
                    borderRadius: "50%",
                    background: "#ff2d2d",
                    boxShadow: "0 0 0 3px #ffffff",
                  }}
                ></span>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  bottom: "20px",
                  right: "20px",
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "14px 18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div>
                  <div style={{ fontWeight: "600" }}>Applotie studio</div>
                  <div className="muted" style={{ fontSize: "14px" }}>
                    Patna, Bihar
                  </div>
                </div>
                <a className="ul" href="https://maps.google.com/?q=Patna" style={{ fontSize: "14px" }}>
                  Directions{" "}
                  <svg
                    className="ar"
                    width="16"
                    height="16"
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
                </a>
              </div>
              <div
                className="hand"
                style={{ position: "absolute", left: "54%", top: "22%", fontSize: "22px", transform: "rotate(-5deg)" }}
              >
                we&apos;re here!
              </div>
            </div>
            <div className="lbl lbl-l muted rv">Studio hours: [Mon–Sat, 10am–7pm IST]</div>
          </div>
        </div>
      </section>
    </>
  );
}

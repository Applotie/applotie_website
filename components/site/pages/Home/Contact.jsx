"use client";

import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Contact section. Client component (interactive).
export default function Contact() {
  const { notSent, reset, sent, sentName, setName, submit } = useDC(Logic);
  return (
    <>
      <section id="contact" style={{ padding: "0 0 104px" }}>
        <div className="wrap">
          <div className="cta panel rv" style={{ background: "#ff2d2d", color: "#111111" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div className="lbl">(08) Let&apos;s talk</div>
              <h2
                className="disp text-white"
                style={{
                  margin: "0",
                  fontSize: "clamp(48px, 6.2vw, 92px)",
                  lineHeight: ".95",
                  fontWeight: "800",
                  letterSpacing: "-0.04em",
                }}
              >
                Have an idea? Let&apos;s build it.
              </h2>
              <p className="big-p text-white" style={{ maxWidth: "440px" }}>
                Tell us a little about what you need. We&apos;ll come back with questions, next steps and a clear
                proposal.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "6px" }}>
                <a
                  className="ul"
                  href="tel:+917250204488"
                  style={{ fontSize: "20px", padding: "8px 0", alignSelf: "flex-start" }}
                >
                  +91 7250 20 4488
                </a>
                <a
                  className="ul"
                  href="mailto:hello@applotie.com"
                  style={{ fontSize: "20px", padding: "8px 0", alignSelf: "flex-start" }}
                >
                  hello@applotie.com
                </a>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div
                className="hand hide-sm bg-yellow-300 rounded-2xl"
                style={{
                  position: "absolute",
                  top: "-34px",
                  right: "24px",
                  fontSize: "26px",
                  transform: "rotate(3deg)",
                  zIndex: "2",
                }}
              >
                we read every single one
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
                        minHeight: "400px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "16px",
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
                      <h3 className="h3x">Thanks{sentName}, we&apos;ve got it.</h3>
                      <p className="muted" style={{ margin: "0", maxWidth: "300px" }}>
                        Someone from the team will call or WhatsApp you soon to talk it through.
                      </p>
                      <button type="button" className="btn btn-o btn-sm" onClick={reset}>
                        Send another
                      </button>
                    </div>
                  </>
                )}
                {notSent && (
                  <>
                    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <h3 className="h4x" style={{ fontSize: "26px", lineHeight: "32px", fontWeight: "800" }}>
                        Start a project
                      </h3>
                      <label className="field">
                        Your name
                        <input type="text" name="name" autoComplete="name" required onInput={setName} />
                      </label>
                      <label className="field">
                        Phone or WhatsApp
                        <input type="tel" name="phone" autoComplete="tel" required />
                      </label>
                      <label className="field">
                        What do you need?
                        <select name="service">
                          <option>Website</option>
                          <option>Mobile app</option>
                          <option>SEO</option>
                          <option>Google / Meta ads</option>
                          <option>Not sure yet</option>
                        </select>
                      </label>
                      <label className="field">
                        Anything else we should know?
                        <textarea name="message" rows="3" style={{ resize: "vertical" }}></textarea>
                      </label>
                      <button type="submit" className="btn btn-i" style={{ width: "100%", marginTop: "4px" }}>
                        Send enquiry{" "}
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
        </div>
      </section>
    </>
  );
}

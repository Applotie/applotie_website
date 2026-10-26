"use client";

import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Newsletter section. Client component (interactive).
export default function Newsletter() {
  const { notSubbed, subbed, subscribe: markSubbed } = useDC(Logic);
  // No mailing-list service is connected yet, so sign-ups reach the team on WhatsApp.
  const subscribe = (e) => {
    const email = e?.currentTarget?.querySelector('input[type="email"]')?.value || "";
    if (email) {
      const text = encodeURIComponent(`Hi Applotie, please add me to the monthly note: ${email}`);
      window.open(`https://wa.me/917250204488?text=${text}`, "_blank", "noopener,noreferrer");
    }
    markSubbed(e);
  };
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="news panel rv" style={{ background: "#4a74ff", color: "#111111" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="lbl">The monthly note</div>
              <h2 className="h2x" style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}>
                One useful email a month. That&apos;s it.
              </h2>
              <p className="big-p" style={{ maxWidth: "440px" }}>
                What&apos;s working in search, ads and websites right now, written for business owners. No spam,
                unsubscribe any time.
              </p>
            </div>
            <div>
              {subbed && (
                <>
                  <div
                    className="popin"
                    style={{
                      background: "#ffffff",
                      borderRadius: "24px",
                      padding: "32px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <span className="hand" style={{ fontSize: "32px" }}>
                      you&apos;re in!
                    </span>
                    <p className="muted" style={{ margin: "0" }}>
                      Watch your inbox for the next note. We promise to keep it short.
                    </p>
                  </div>
                </>
              )}
              {notSubbed && (
                <>
                  <form
                    onSubmit={subscribe}
                    style={{
                      background: "#ffffff",
                      borderRadius: "24px",
                      padding: "12px",
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <label style={{ flex: "1 1 220px", display: "flex" }}>
                      <span
                        style={{
                          position: "absolute",
                          width: "1px",
                          height: "1px",
                          overflow: "hidden",
                          clip: "rect(0 0 0 0)",
                        }}
                      >
                        Email address
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="you@business.com"
                        autoComplete="email"
                        style={{
                          flex: "1",
                          minHeight: "54px",
                          border: "0",
                          outline: "none",
                          background: "transparent",
                          font: "inherit",
                          fontSize: "17px",
                          padding: "0 14px",
                          color: "#111111",
                        }}
                      />
                    </label>
                    <button type="submit" className="btn btn-i">
                      Subscribe{" "}
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

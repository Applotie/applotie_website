"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Vote section. Client component (interactive).
export default function Vote() {
  const { ideas, notVoted, revote, voted, votedLabel } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap split" style={{ alignItems: "start", gap: "56px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="lbl eb rv">What&apos;s next</div>
            <h2 className="h2x rv" style={{ fontSize: "clamp(36px, 4.4vw, 56px)" }}>
              Help us decide what to build next.
            </h2>
            <p className="big-p muted rv">
              We build products for problems we keep hearing about from businesses around us. Tell us which one
              you&apos;d use.
            </p>
            <span className="hand rv" style={{ fontSize: "26px" }}>
              yes, we actually read these
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {notVoted && (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {ideas.map((i, i_i) => (
                    <Fragment key={i_i}>
                      <button type="button" className={`vote ${i.cls}`} aria-pressed={i.pressed} onClick={i.pick}>
                        <span>{i.label}</span>
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
                    </Fragment>
                  ))}
                </div>
              </>
            )}
            {voted && (
              <>
                <div
                  className="popin box"
                  style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "32px" }}
                >
                  <span className="ic" style={{ background: "#4a74ff", width: "56px", height: "56px" }}>
                    <svg
                      width="26"
                      height="26"
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
                  <h3 className="h3x">Noted: {votedLabel}.</h3>
                  <p className="muted" style={{ margin: "0" }}>
                    Thanks for the nudge. Want to be the first to try it? Drop us a line and we&apos;ll keep you posted.
                  </p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <Link className="btn btn-i btn-sm" href="/contact">
                      Keep me posted
                    </Link>
                    <button type="button" className="btn btn-o btn-sm" onClick={revote}>
                      Change my vote
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

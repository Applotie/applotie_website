"use client";

import { Fragment } from "react";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Reply Preview section. Client component (interactive).
export default function ReplyPreview() {
  const { replies, starBtns } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap split" style={{ alignItems: "start", gap: "56px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="lbl rv" style={{ color: "#1f45d6" }}>
              Every review gets a reply
            </div>
            <h2 className="h2x rv" style={{ fontSize: "clamp(36px, 4.4vw, 56px)" }}>
              Pick a star rating. See how we&apos;d reply.
            </h2>
            <p className="big-p muted rv">
              Good replies thank people by name. Great replies to bad reviews win back the reader, not just the
              reviewer.
            </p>
            <div className="rv" style={{ display: "flex", gap: "8px" }} role="group" aria-label="Choose a star rating">
              {starBtns.map((b, i_b) => (
                <Fragment key={i_b}>
                  <button
                    type="button"
                    className={`sbtn ${b.cls}`}
                    aria-pressed={b.pressed}
                    aria-label={`${b.n} stars`}
                    onClick={b.pick}
                  >
                    ★
                  </button>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="stack">
            {replies.map((r, i_r) => (
              <Fragment key={i_r}>
                <div
                  aria-hidden={r.hidden}
                  style={{
                    opacity: r.op,
                    transform: `translateY(${r.ty}px)`,
                    pointerEvents: r.pe,
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <div className="chat">
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <strong>{r.who}</strong>
                      <span style={{ color: "#ffe14d" }}>{r.stars}</span>
                    </div>
                    <div style={{ fontSize: "16px", lineHeight: "25px" }}>{r.review}</div>
                  </div>
                  <div className="reply">
                    <div className="lbl" style={{ color: "rgba(255,255,255,.6)", marginBottom: "8px" }}>
                      Reply from the owner
                    </div>
                    <div style={{ fontSize: "16px", lineHeight: "25px" }}>{r.reply}</div>
                  </div>
                  <span className="hand" style={{ fontSize: "22px", alignSelf: "flex-end" }}>
                    {r.note}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

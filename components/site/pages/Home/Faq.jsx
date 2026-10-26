"use client";

import { Fragment } from "react";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Faq section. Client component (interactive).
export default function Faq() {
  const { faqs } = useDC(Logic);
  return (
    <>
      <section id="faq" style={{ padding: "112px 0 104px" }}>
        <div className="wrap split" style={{ alignItems: "start", gap: "56px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", position: "sticky", top: "110px" }}>
            <div className="lbl eb rv">(07) Questions</div>
            <h2 className="h2x">
              <span className="mask rvm">
                <span>Good questions,</span>
              </span>
              <span className="mask rvm">
                <span>straight answers.</span>
              </span>
            </h2>
            <p className="rv muted" style={{ margin: "0", maxWidth: "380px" }}>
              Can&apos;t find yours?{" "}
              <a className="ul ul-s" href="https://wa.me/917250204488" style={{ color: "#111111" }}>
                Message us on WhatsApp
              </a>{" "}
              and a real person will reply.
            </p>
          </div>
          <div className="rv" style={{ borderTop: "1px solid #111111" }}>
            {faqs.map((f, i_f) => (
              <Fragment key={i_f}>
                <div style={{ borderBottom: "1px solid #ececf1" }}>
                  <button type="button" className="faqq" aria-expanded={f.exp} onClick={f.toggle}>
                    <span>{f.q}</span>
                    <span className="faqi">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden="true"
                        style={{ transform: `rotate(${f.rot}deg)` }}
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </span>
                  </button>
                  <div className="xpand" style={{ gridTemplateRows: f.rows }}>
                    <div>
                      <p
                        className="muted"
                        style={{ margin: "0", padding: "0 56px 26px 0", fontSize: "17px", lineHeight: "27px" }}
                      >
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

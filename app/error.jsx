"use client";

import Link from "next/link";

// Shown when a page fails to render (for example, the blog database is unreachable).
export default function Error({ reset }) {
  return (
    <section
      className="wrap"
      style={{
        padding: "clamp(64px, 12vw, 140px) 28px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "flex-start",
      }}
    >
      <span className="lbl" style={{ color: "#ff2d2d" }}>
        Something went wrong
      </span>
      <h1
        className="disp"
        style={{ fontSize: "clamp(36px, 7vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.04em", fontWeight: 800 }}
      >
        We couldn&apos;t load this page.
      </h1>
      <p style={{ maxWidth: "560px", fontSize: "18px", lineHeight: "28px", color: "#55555f" }}>
        This is on our side. Please try again in a moment.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <button type="button" className="btn btn-z" onClick={reset}>
          Try again
        </button>
        <Link className="btn btn-o" href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}

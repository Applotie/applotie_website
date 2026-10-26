"use client";

import { useState } from "react";

// "Was this useful?" buttons at the end of an article.
export default function Feedback() {
  const [fb, setFb] = useState("");
  const fbQ =
    fb === "yes"
      ? "Thanks! That made our day."
      : fb === "no"
        ? "Thanks for the honesty. We’ll do better."
        : "Was this useful?";
  return (
    <div
      style={{
        marginTop: "48px",
        paddingTop: "28px",
        borderTop: "1px solid #ececf1",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <span style={{ fontWeight: "600" }}>{fbQ}</span>
      <div style={{ display: "flex", gap: "8px" }}>
        <button type="button" className={`fb ${fb === "yes" ? "on" : ""}`} onClick={() => setFb("yes")}>
          Yes, helpful
        </button>
        <button type="button" className={`fb ${fb === "no" ? "on" : ""}`} onClick={() => setFb("no")}>
          Not really
        </button>
      </div>
    </div>
  );
}

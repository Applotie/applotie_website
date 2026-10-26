"use client";

import { useEffect, useRef, useState } from "react";

// Copies the current article URL.
export default function CopyLink() {
  const [linked, setLinked] = useState(false);
  const t = useRef(null);
  useEffect(() => () => clearTimeout(t.current), []);
  const copy = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
    } catch {}
    setLinked(true);
    clearTimeout(t.current);
    t.current = setTimeout(() => setLinked(false), 1800);
  };
  return (
    <button type="button" className="fb" onClick={copy}>
      <svg
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
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
      {linked ? "Link copied ✓" : "Copy link"}
    </button>
  );
}

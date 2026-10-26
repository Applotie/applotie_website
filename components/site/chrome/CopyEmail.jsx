"use client";

import { useEffect, useRef, useState } from "react";

// Copies the studio email address and confirms for a moment.
export default function CopyEmail({ email = "hello@applotie.com", className = "copy" }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = () => {
    try {
      navigator.clipboard.writeText(email);
    } catch {}
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button type="button" className={className} onClick={copy}>
      {email}
      <span className="copy-l">{copied ? "Copied ✓" : "Copy"}</span>
    </button>
  );
}

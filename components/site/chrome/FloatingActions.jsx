"use client";

import { useEffect, useState } from "react";
import { scrollToTop } from "./BackToTop";

// WhatsApp + back-to-top buttons, shown after the visitor scrolls past the first screen.
// The ring around the back-to-top arrow fills with scroll progress.
const RING = 163.4;

export default function FloatingActions() {
  const [scrolled, setScrolled] = useState(false);
  const [ring, setRing] = useState(RING);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setScrolled(y > 480);
      setRing(RING * (1 - Math.min(1, y / max)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toTop = scrollToTop;

  return (
    <>
      {scrolled && (
        <>
          <div className="float">
            <a className="btn wa popin" href="https://wa.me/917250204488">
              <span className="live"></span>WhatsApp us
            </a>
            <button type="button" className="totop popin" onClick={toTop} aria-label="Back to top">
              <svg className="ring" viewBox="0 0 56 56" aria-hidden="true">
                <circle cx="28" cy="28" r="26" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="2"></circle>
                <circle
                  className="ringc"
                  style={{ strokeDashoffset: ring }}
                  cx="28"
                  cy="28"
                  r="26"
                  fill="none"
                  stroke="#ff2d2d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  transform="rotate(-90 28 28)"
                ></circle>
              </svg>
              <svg
                className="ua"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  );
}

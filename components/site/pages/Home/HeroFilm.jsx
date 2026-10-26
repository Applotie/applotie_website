"use client";

import { useEffect, useRef, useState } from "react";

// Hero film, right under the hero. Client component: plays muted while on screen, with pause and sound toggles.
export default function HeroFilm() {
  const ref = useRef(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Visitors who prefer reduced motion start paused and can press play themselves.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) userPaused.current = true;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !userPaused.current) v.play().catch(() => {});
        else if (!e.isIntersecting) v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const togglePlay = () => {
    const v = ref.current;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };
  const toggleSound = () => {
    const v = ref.current;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const pill = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    minHeight: "40px",
    padding: "0 16px",
    border: "0",
    borderRadius: "999px",
    background: "#ffffff",
    color: "#111111",
    fontFamily: "inherit",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 10px 20px -10px rgba(0,0,0,.5)",
  };

  return (
    <>
      <section aria-label="Applotie hero film" style={{ padding: "0 0 64px" }}>
        <div className="wrap">
          <div
            className="clipin"
            style={{
              position: "relative",
              borderRadius: "28px",
              overflow: "hidden",
              background: "#111111",
              aspectRatio: "16 / 9",
            }}
          >
            <video
              ref={ref}
              width="1920"
              height="1080"
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              style={{
                position: "absolute",
                inset: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source src="/Applotie-Hero-Film-v2-1080p60.mp4" type="video/mp4" />
            </video>
            <div
              style={{
                position: "absolute",
                left: "20px",
                bottom: "20px",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <button type="button" style={pill} onClick={togglePlay} aria-label={playing ? "Pause film" : "Play film"}>
                {playing ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="5" y="4" width="5" height="16" rx="1"></rect>
                    <rect x="14" y="4" width="5" height="16" rx="1"></rect>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z"></path>
                  </svg>
                )}
                {playing ? "Pause" : "Play"}
              </button>
              <button type="button" style={pill} onClick={toggleSound} aria-pressed={!muted}>
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
                  <path d="M11 5 6 9H2v6h4l5 4V5z"></path>
                  {muted ? (
                    <>
                      <path d="m23 9-6 6"></path>
                      <path d="m17 9 6 6"></path>
                    </>
                  ) : (
                    <>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                    </>
                  )}
                </svg>
                {muted ? "Sound off" : "Sound on"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

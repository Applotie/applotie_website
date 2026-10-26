"use client";

import { useEffect, useState } from "react";

// Sticky "In this article" list: highlights the current heading and counts down reading time.
export default function PostToc({ toc = [], minutes = 5 }) {
  const [active, setActive] = useState(0);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      setProg(Math.min(1, (window.scrollY || 0) / max));
      let a = 0;
      toc.forEach((t, i) => {
        const el = document.getElementById(t.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) a = i;
      });
      setActive(a);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  const left = Math.max(0, Math.ceil(minutes * (1 - prog)));
  const minsLeft = left > 0 ? `${left} min left` : "Finished. Nice one.";
  const progPct = Math.round(prog * 100);

  return (
    <div className="toc-wrap">
      <nav className="toc" aria-label="In this article">
        {toc.length > 0 && (
          <>
            <div className="lbl lbl-l muted" style={{ marginBottom: "10px" }}>
              In this article
            </div>
            {toc.map((t, i) => (
              <a key={t.id + i} href={`#${t.id}`} className={i === active ? "on" : ""}>
                <span className="dot"></span>
                {t.label}
              </a>
            ))}
          </>
        )}
        <div
          style={{
            marginTop: toc.length ? "20px" : 0,
            paddingTop: toc.length ? "16px" : 0,
            borderTop: toc.length ? "1px solid #ececf1" : 0,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div className="lbl lbl-l muted">{minsLeft}</div>
          <div style={{ height: "4px", borderRadius: "999px", background: "#ececf1", overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${progPct}%`,
                background: "#ff2d2d",
                borderRadius: "999px",
                transition: "width .3s",
              }}
            ></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

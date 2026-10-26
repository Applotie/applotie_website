"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useMemo, useState } from "react";

// Article list with topic filter and search. Client component; posts come from the server (MongoDB).
export default function List({ posts: all = [] }) {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const cats = useMemo(() => {
    const names = ["All", ...Array.from(new Set(all.map((p) => p.cat).filter(Boolean)))];
    return names.map((l) => ({
      label: l,
      cls: l === cat ? "on" : "",
      pressed: l === cat ? "true" : "false",
      pick: () => setCat(l),
    }));
  }, [all, cat]);

  const query = q.toLowerCase().trim();
  const posts = all
    .filter((p) => (cat === "All" || p.cat === cat) && (!query || `${p.title} ${p.dek}`.toLowerCase().includes(query)))
    .map((p, i) => ({ ...p, delay: `${i * 0.06}s` }));
  const empty = posts.length === 0;
  const onSearch = (e) => setQ(e?.target?.value || "");

  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              borderTop: "1px solid #111111",
              paddingTop: "24px",
              marginBottom: "40px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }} role="group" aria-label="Filter by topic">
              {cats.map((c, i_c) => (
                <Fragment key={i_c}>
                  <button type="button" className={`chip ${c.cls}`} aria-pressed={c.pressed} onClick={c.pick}>
                    {c.label}
                  </button>
                </Fragment>
              ))}
            </div>
            <label className="search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5c5c66"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span
                className="hide-sm"
                style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}
              >
                Search articles
              </span>
              <input type="search" placeholder="Search articles" onInput={onSearch} />
            </label>
          </div>
          <div className="g3" style={{ gap: "48px 24px" }}>
            {posts.map((b) => (
              <Fragment key={b.slug}>
                <Link
                  href={b.href}
                  className="card bcard"
                  style={{ display: "flex", flexDirection: "column", gap: "18px", animationDelay: b.delay }}
                >
                  <div className="bimg" aria-hidden="true" style={{ background: b.bg }}>
                    {b.image ? (
                      <img
                        className="zoom"
                        src={b.image}
                        alt=""
                        loading="lazy"
                        style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <div
                        className="zoom"
                        style={{ position: "absolute", inset: "0", display: "grid", placeItems: "center" }}
                      >
                        <span
                          className="disp"
                          style={{
                            fontSize: "120px",
                            lineHeight: "1",
                            fontWeight: "800",
                            color: b.fg,
                            letterSpacing: "-0.05em",
                          }}
                        >
                          {b.glyph}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="lbl lbl-l" style={{ display: "flex", gap: "12px" }}>
                    <span className="eb">{b.cat}</span>
                    <span className="muted">{b.read}</span>
                  </div>
                  <h3 className="h4x" style={{ fontSize: "24px", lineHeight: "30px" }}>
                    {b.title}
                  </h3>
                  <p className="muted" style={{ margin: "0", fontSize: "15px", lineHeight: "23px" }}>
                    {b.dek}
                  </p>
                </Link>
              </Fragment>
            ))}
          </div>
          {empty && (
            <>
              <div
                className="popin"
                style={{
                  textAlign: "center",
                  padding: "64px 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span className="hand" style={{ fontSize: "34px" }}>
                  {all.length ? "nothing on that yet…" : "first articles coming soon…"}
                </span>
                <p className="muted" style={{ margin: "0" }}>
                  but it sounds like a good topic.{" "}
                  <Link className="ul ul-s" href="/contact" style={{ color: "#111111" }}>
                    Tell us what you&apos;d like us to write about.
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

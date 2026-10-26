import Link from "next/link";
import CopyLink from "./CopyLink";

// Article header. Server component; only the copy-link button hydrates.
export default function PostHeader({ post, url }) {
  return (
    <>
      <section style={{ padding: "56px 0 48px" }}>
        <div className="narrow" style={{ maxWidth: "980px", display: "flex", flexDirection: "column", gap: "28px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Journal</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>{post.cat}</span>
          </div>
          <div className="lbl lbl-l in" style={{ display: "flex", gap: "14px" }}>
            <span className="eb">{post.cat}</span>
            <span className="muted">{post.read}</span>
          </div>
          <h1
            className="disp"
            style={{
              margin: "0",
              fontSize: "clamp(40px, 5.6vw, 76px)",
              lineHeight: "1.02",
              fontWeight: "800",
              letterSpacing: "-0.035em",
            }}
          >
            <span className="mask">
              <span className="d1">{post.title}</span>
            </span>
          </h1>
          {post.dek && (
            <p className="lead in d4" style={{ maxWidth: "720px" }}>
              {post.dek}
            </p>
          )}
          <div
            className="in d5"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              borderTop: "1px solid #ececf1",
              paddingTop: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span className="ic" style={{ width: "44px", height: "44px", background: "#4a74ff", fontWeight: "700" }}>
                {(post.author || "A")[0]}
              </span>
              <div style={{ fontSize: "15px", lineHeight: "21px" }}>
                <strong>{post.author}</strong>
                <div className="muted">Applotie{post.date ? ` · ${post.date}` : ""}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <CopyLink />
              <a
                className="fb"
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}`}
                style={{ textDecoration: "none" }}
              >
                Share on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

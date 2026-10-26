import Link from "next/link";

// Featured (latest) article. Server component.
export default function Featured({ post }) {
  if (!post) return null;
  return (
    <>
      <section style={{ padding: "0 0 96px" }}>
        <div className="wrap">
          <Link href={post.href} className="card feat">
            <div className="fimg clipin" aria-hidden="true" style={{ background: "#ff2d2d" }}>
              {post.image ? (
                <img
                  className="zoom"
                  src={post.image}
                  alt=""
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div
                  className="zoom"
                  style={{ position: "absolute", inset: "0", display: "grid", placeItems: "center" }}
                >
                  <div style={{ position: "relative", width: "280px", height: "280px" }}>
                    <div
                      className="floaty"
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "30px",
                        width: "170px",
                        height: "170px",
                        borderRadius: "50%",
                        background: "#2f5bff",
                      }}
                    ></div>
                    <div
                      className="floaty"
                      style={{
                        position: "absolute",
                        right: "0",
                        top: "0",
                        width: "140px",
                        height: "140px",
                        borderRadius: "28px",
                        background: "#ffffff",
                        animationDelay: "-2s",
                      }}
                    ></div>
                    <div
                      className="floaty"
                      style={{
                        position: "absolute",
                        right: "20px",
                        bottom: "0",
                        width: "200px",
                        height: "70px",
                        borderRadius: "999px",
                        background: "#4a74ff",
                        animationDelay: "-3.5s",
                      }}
                    ></div>
                  </div>
                </div>
              )}
              <span
                className="hand"
                style={{
                  position: "absolute",
                  left: "24px",
                  top: "20px",
                  background: "#ffe14d",
                  borderRadius: "999px",
                  padding: "4px 16px 6px",
                  fontSize: "22px",
                  transform: "rotate(-4deg)",
                }}
              >
                start here
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="lbl lbl-l" style={{ display: "flex", gap: "14px" }}>
                <span className="eb">Featured · {post.cat}</span>
                <span className="muted">{post.read}</span>
              </div>
              <h2 className="h2x" style={{ fontSize: "clamp(34px, 4vw, 54px)" }}>
                {post.title}
              </h2>
              {post.dek && <p className="big-p muted">{post.dek}</p>}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  className="ic"
                  style={{ width: "40px", height: "40px", background: "#4a74ff", fontSize: "13px", fontWeight: "700" }}
                >
                  {(post.author || "A")[0]}
                </span>
                <div style={{ fontSize: "14px", lineHeight: "20px" }}>
                  <strong>{post.author}</strong>
                  <div className="muted">{post.date}</div>
                </div>
              </div>
              <span className="ul" style={{ alignSelf: "flex-start" }}>
                Read the article{" "}
                <svg
                  className="ar"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

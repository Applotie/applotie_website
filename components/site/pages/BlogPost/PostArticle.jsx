import Link from "next/link";
import PostBody from "./PostBody";
import PostToc from "./PostToc";
import Feedback from "./Feedback";

// Article layout: sticky contents list (client), markdown body (server), feedback (client).
export default function PostArticle({ content, toc, minutes }) {
  return (
    <>
      <section style={{ padding: "0 0 96px" }}>
        <div className="wrap art">
          <PostToc toc={toc} minutes={minutes} />
          <article className="body">
            <PostBody content={content} />
            <div
              style={{
                margin: "40px 0",
                borderRadius: "24px",
                background: "#2f5bff",
                color: "#ffffff",
                padding: "28px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div style={{ maxWidth: "400px" }}>
                <div className="lbl" style={{ color: "rgba(255,255,255,.65)", marginBottom: "8px" }}>
                  Planning a project?
                </div>
                <div className="disp" style={{ fontSize: "24px", lineHeight: "30px", fontWeight: "700" }}>
                  We&apos;ll tell you honestly what it should include, and what to leave out.
                </div>
              </div>
              <Link className="btn btn-z" href="/contact">
                Talk to us{" "}
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
              </Link>
            </div>
            <Feedback />
          </article>

          <div className="side-r"></div>
        </div>
      </section>
    </>
  );
}

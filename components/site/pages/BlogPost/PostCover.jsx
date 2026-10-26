// Cover: the post's featured image, or the design's illustration when there isn't one. Server component.
export default function PostCover({ post }) {
  return (
    <>
      <section style={{ padding: "0 0 64px" }}>
        <div className="wrap">
          <div
            className="clipin"
            aria-hidden={post.image ? undefined : "true"}
            style={{
              borderRadius: "28px",
              height: "clamp(300px, 40vw, 520px)",
              background: "#4a74ff",
              display: "grid",
              placeItems: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                fetchPriority="high"
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div style={{ display: "flex", gap: "24px", alignItems: "flex-end" }}>
                <div
                  className="floaty"
                  style={{
                    width: "170px",
                    height: "340px",
                    borderRadius: "34px",
                    background: "#2f5bff",
                    padding: "9px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: "26px",
                      background: "#ffffff",
                      padding: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div style={{ height: "100px", borderRadius: "14px", background: "#ff2d2d" }}></div>
                    <div style={{ height: "10px", width: "70%", borderRadius: "4px", background: "#2f5bff" }}></div>
                    <div style={{ height: "50px", borderRadius: "12px", background: "#ececf1" }}></div>
                    <div style={{ height: "50px", borderRadius: "12px", background: "#ececf1" }}></div>
                  </div>
                </div>
                <div
                  className="floaty"
                  style={{
                    width: "130px",
                    height: "260px",
                    borderRadius: "28px",
                    background: "#ffffff",
                    padding: "8px",
                    animationDelay: "-2.5s",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: "21px",
                      background: "#2f5bff",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <div style={{ height: "70px", borderRadius: "10px", background: "#ffe14d" }}></div>
                    <div
                      style={{ marginTop: "auto", height: "34px", borderRadius: "999px", background: "#4a74ff" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

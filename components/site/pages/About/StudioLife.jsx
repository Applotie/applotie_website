// Studio Life section. Server component.
export default function StudioLife() {
  return (
    <>
      <section style={{ padding: "0 0 112px", overflow: "hidden" }}>
        <div
          className="wrap"
          style={{
            marginBottom: "36px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="lbl eb rv">(05) Life at the studio</div>
            <h2 className="h2x rv" style={{ fontSize: "clamp(34px, 4vw, 52px)" }}>
              Where the work happens.
            </h2>
          </div>
          <span className="hand rv" style={{ fontSize: "28px", transform: "rotate(-3deg)" }}>
            yes, there&apos;s always chai
          </span>
        </div>
        <div className="mqbox" style={{ overflow: "hidden" }}>
          <div className="mq" style={{ animationDuration: "60s" }}>
            <div className="mqg" style={{ gap: "20px", paddingRight: "20px" }}>
              <div className="ph" style={{ width: "380px", height: "280px", background: "#ececf1", flex: "none" }}>
                <img
                  src="/Studio-photo-1.webp"
                  alt="Reception corridor with red and yellow chairs at the Applotie studio"
                  width="760"
                  height="560"
                  loading="lazy"
                  decoding="async"
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="ph" style={{ width: "280px", height: "280px", background: "#4a74ff", flex: "none" }}>
                <img
                  src="/Studio-2.webp"
                  alt="Meeting room at the Applotie studio"
                  width="560"
                  height="560"
                  loading="lazy"
                  decoding="async"
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="ph" style={{ width: "420px", height: "280px", background: "#ff2d2d", flex: "none" }}>
                <img
                  src="/Studio-3.webp"
                  alt="Open-plan workspace at the Applotie studio"
                  width="840"
                  height="560"
                  loading="lazy"
                  decoding="async"
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="ph"
                style={{ width: "300px", height: "280px", background: "#2f5bff", color: "#ffffff", flex: "none" }}
              >
                <img
                  src="/Studio-4.webp"
                  alt="Collage of the Applotie studio"
                  width="600"
                  height="560"
                  loading="lazy"
                  decoding="async"
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="mqg" aria-hidden="true" style={{ gap: "20px", paddingRight: "20px" }}>
              <div className="ph" style={{ width: "380px", height: "280px", background: "#ececf1", flex: "none" }}>
                <img
                  src="/Studio-photo-1.webp"
                  alt=""
                  width="760"
                  height="560"
                  loading="lazy"
                  decoding="async"
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="ph" style={{ width: "280px", height: "280px", background: "#4a74ff", flex: "none" }}>
                <img
                  src="/Studio-2.webp"
                  alt=""
                  width="560"
                  height="560"
                  loading="lazy"
                  decoding="async"
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="ph" style={{ width: "420px", height: "280px", background: "#ff2d2d", flex: "none" }}>
                <img
                  src="/Studio-3.webp"
                  alt=""
                  width="840"
                  height="560"
                  loading="lazy"
                  decoding="async"
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="ph"
                style={{ width: "300px", height: "280px", background: "#2f5bff", color: "#ffffff", flex: "none" }}
              >
                <img
                  src="/Studio-4.webp"
                  alt=""
                  width="600"
                  height="560"
                  loading="lazy"
                  decoding="async"
                  style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

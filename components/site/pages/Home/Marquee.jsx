// Marquee section. Server component.
export default function Marquee() {
  return (
    <>
      <section
        aria-label="Clients"
        style={{ borderTop: "1px solid #ececf1", borderBottom: "1px solid #ececf1", padding: "26px 0" }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <div className="lbl lbl-l hide-sm muted" style={{ flex: "none" }}>
            Trusted by
          </div>
          <div className="mqbox" style={{ overflow: "hidden", flex: "1", minWidth: "0" }}>
            <div className="mq">
              <div
                className="mqg disp"
                style={{
                  fontSize: "26px",
                  fontWeight: "700",
                  color: "#5c5c66",
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.01em",
                }}
              >
                <span>Meddolic</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>Snappy India</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>Kharakia Metals</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>Surangan</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>JMD Sales</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>Fry Zone</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>Joy Joy</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>T&amp;S Infra</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
              </div>
              <div
                className="mqg disp"
                aria-hidden="true"
                style={{
                  fontSize: "26px",
                  fontWeight: "700",
                  color: "#5c5c66",
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.01em",
                }}
              >
                <span>Meddolic</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>Snappy India</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>Kharakia Metals</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>Surangan</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>JMD Sales</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>Fry Zone</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>Joy Joy</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
                <span>T&amp;S Infra</span>
                <span style={{ color: "#ff2d2d" }}>✱</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

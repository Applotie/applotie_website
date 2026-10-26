// Highlights section. Server component.
export default function Highlights() {
  return (
    <>
      <section style={{ padding: "0 0 72px" }}>
        <div className="wrap hl-row">
          <div className="hl in d2" style={{ background: "#ff2d2d", color: "#ffffff" }}>
            <span className="num-big" style={{ fontSize: "64px" }}>
              4×
            </span>
            <span style={{ fontWeight: "600" }}>revenue for Meddolic</span>
          </div>
          <div className="hl in d3" style={{ background: "#2f5bff", color: "#ffffff" }}>
            <span className="num-big" style={{ fontSize: "64px" }}>
              6×
            </span>
            <span style={{ fontWeight: "600" }}>sales for Snappy India</span>
          </div>
          <div className="hl in d4" style={{ background: "#ffe14d", color: "#111111" }}>
            <span className="num-big" style={{ fontSize: "64px" }}>
              1959
            </span>
            <span style={{ fontWeight: "600" }}>Surangan&apos;s legacy, now online</span>
          </div>
          <div className="hl in d5" style={{ background: "#f4f4f6", color: "#111111" }}>
            <span className="num-big" style={{ fontSize: "64px" }}>
              06
            </span>
            <span style={{ fontWeight: "600" }}>services across 8 brands</span>
          </div>
        </div>
      </section>
    </>
  );
}

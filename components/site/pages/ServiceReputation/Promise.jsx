// Promise section. Server component.
export default function Promise() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div
            className="panel rv"
            style={{
              background: "#ffe14d",
              color: "#111111",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div className="lbl">Our promise</div>
              <h2 className="h2x" style={{ fontSize: "clamp(34px, 4vw, 54px)" }}>
                We never post fake reviews. Ever.
              </h2>
              <p className="big-p" style={{ margin: "0" }}>
                Fake reviews break Google&apos;s rules and can get your profile penalised. We only help real customers
                share real experiences, and that&apos;s what makes it last.
              </p>
            </div>
            <span className="hand wig" style={{ fontSize: "34px" }}>
              real &gt; fake
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

// Hero section. Server component.
export default function Hero() {
  return (
    <>
      <section style={{ padding: "64px 0 56px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>Journal</span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "32px",
            }}
          >
            <h1 className="h1x">
              <span className="mask">
                <span className="d1">
                  The journal<span style={{ color: "#ff2d2d" }}>.</span>
                </span>
              </span>
            </h1>
            <p className="lead in d4" style={{ maxWidth: "420px" }}>
              Practical notes on websites, apps, search and marketing. Written by the people doing the work, for people
              running businesses.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

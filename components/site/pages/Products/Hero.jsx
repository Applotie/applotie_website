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
            <span style={{ color: "#111111" }}>Products</span>
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
                <span className="d1">Software we built</span>
              </span>
              <span className="mask">
                <span className="d2">so you don&apos;t</span>
              </span>
              <span className="mask">
                <span className="d3">
                  have to<span style={{ color: "#ff2d2d" }}>.</span>
                </span>
              </span>
            </h1>
            <div className="in d4" style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
              <p className="lead">
                Ready-to-use software from the Applotie studio in Patna, designed for how businesses in India actually
                work.
              </p>
              <span className="hand bg-yellow-300" style={{ fontSize: "26px" }}>
                same team, same standards. we don&apos;t do average here either.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

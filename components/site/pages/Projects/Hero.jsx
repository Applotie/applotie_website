import Link from "next/link";

// Hero section. Server component.
export default function Hero() {
  return (
    <>
      <section style={{ padding: "64px 0 48px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>Work</span>
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
                <span className="d1">Work that moves</span>
              </span>
              <span className="mask">
                <span className="d2">
                  the numbers<span style={{ color: "#ff2d2d" }}>.</span>
                </span>
              </span>
            </h1>
            <div className="in d4" style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "400px" }}>
              <p className="lead">
                Brands, websites, social media and campaigns for businesses in Patna and beyond. Here are some of the
                stories we&apos;re proudest of.
              </p>
              <span className="hand" style={{ fontSize: "26px", color: "#d11a1a" }}>
                tap “read the story” on any project
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

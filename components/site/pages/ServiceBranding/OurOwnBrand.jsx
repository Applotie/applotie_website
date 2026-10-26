import Link from "next/link";

// Our Own Brand section. Server component.
export default function OurOwnBrand() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap split" style={{ gap: "56px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="lbl eb rv">Proof, close to home</div>
            <h2 className="h2x rv" style={{ fontSize: "clamp(36px, 4.4vw, 56px)" }}>
              We built our own brand the same way.
            </h2>
            <p className="big-p muted rv">
              The Applotie identity is a little app screen made of three shapes: a rounded square, a sun and a pill.
              Friendly, vibrant and built to work everywhere, from a favicon to a full-bleed poster. Every colour,
              typeface and spacing rule lives in one design system.
            </p>
            <Link className="ul rv" href="/about" style={{ alignSelf: "flex-start" }}>
              More about us{" "}
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
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div
              className="box rv"
              style={{ padding: "40px", display: "grid", placeItems: "center", minHeight: "200px" }}
            >
              <img
                src="/brand/applotie-lockup.svg"
                alt="Applotie logo"
                width="1148"
                height="240"
                style={{ width: "70%", maxWidth: "340px", height: "auto" }}
              />
            </div>
            <div className="g4" style={{ gap: "10px" }}>
              <div className="sw rv" style={{ background: "#ff2d2d" }}>
                <span className="lbl" style={{ fontSize: "10px" }}>
                  Red
                </span>
              </div>
              <div className="sw rv" style={{ background: "#4a74ff" }}>
                <span className="lbl" style={{ fontSize: "10px" }}>
                  Cobalt
                </span>
              </div>
              <div className="sw rv" style={{ background: "#ffe14d" }}>
                <span className="lbl" style={{ fontSize: "10px" }}>
                  Yellow
                </span>
              </div>
              <div className="sw rv" style={{ background: "#2f5bff", color: "#ffffff" }}>
                <span className="lbl" style={{ fontSize: "10px" }}>
                  Ink
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

// Packages section. Server component.
export default function Packages() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">Packages</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>From a logo</span>
                </span>
                <span className="mask rvm">
                  <span>to a full brand.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g3">
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Logo</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ price]
              </div>
              <p className="muted" style={{ margin: "0" }}>
                A distinctive logo with colour and mono versions, ready for print and screen.
              </p>
              <Link className="btn btn-o" href="/contact" style={{ marginTop: "auto" }}>
                Choose Logo
              </Link>
            </div>
            <div className="pkg feat lift rv">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="lbl lbl-l" style={{ color: "rgba(255,255,255,.65)" }}>
                  Identity
                </div>
                <span className="hand" style={{ fontSize: "22px", color: "#ffe14d" }}>
                  we recommend
                </span>
              </div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ price]
              </div>
              <p style={{ margin: "0", color: "rgba(255,255,255,.75)" }}>
                Logo, colours, typography, social templates and a guidelines document.
              </p>
              <Link className="btn btn-z" href="/contact" style={{ marginTop: "auto" }}>
                Choose Identity
              </Link>
            </div>
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Full brand</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                Let&apos;s talk
              </div>
              <p className="muted" style={{ margin: "0" }}>
                Strategy, naming, identity, packaging and a website, all designed together.
              </p>
              <Link className="btn btn-o" href="/contact" style={{ marginTop: "auto" }}>
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

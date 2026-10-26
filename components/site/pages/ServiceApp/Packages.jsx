import Link from "next/link";

// Packages section. Server component.
export default function Packages() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl rv" style={{ color: "#1f45d6" }}>
                Ways to start
              </div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Start lean.</span>
                </span>
                <span className="mask rvm">
                  <span>Grow from there.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g3">
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Prototype</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ price]
              </div>
              <p className="muted" style={{ margin: "0" }}>
                A clickable prototype to test your idea, pitch investors or brief a build.
              </p>
              <div className="lbl lbl-l muted" style={{ marginTop: "auto" }}>
                2–3 weeks
              </div>
              <Link className="btn btn-o" href="/contact">
                Start with a prototype
              </Link>
            </div>
            <div className="pkg feat lift rv">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="lbl lbl-l" style={{ color: "rgba(255,255,255,.65)" }}>
                  Version one
                </div>
                <span className="hand" style={{ fontSize: "22px", color: "#ffe14d" }}>
                  we recommend
                </span>
              </div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ price]
              </div>
              <p style={{ margin: "0", color: "rgba(255,255,255,.75)" }}>
                A lean, launch-ready app on iOS and Android with the features that matter most.
              </p>
              <div className="lbl lbl-l" style={{ marginTop: "auto", color: "rgba(255,255,255,.6)" }}>
                [8–12] weeks
              </div>
              <Link className="btn btn-z" href="/contact">
                Plan version one
              </Link>
            </div>
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Ongoing</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ / month]
              </div>
              <p className="muted" style={{ margin: "0" }}>
                Updates, new features, monitoring and app store care after launch.
              </p>
              <div className="lbl lbl-l muted" style={{ marginTop: "auto" }}>
                Rolling monthly
              </div>
              <Link className="btn btn-o" href="/contact">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

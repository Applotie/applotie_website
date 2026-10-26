import Link from "next/link";

// Packages section. Server component.
export default function Packages() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">Monthly plans</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Pick a pace.</span>
                </span>
                <span className="mask rvm">
                  <span>Change it any time.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g3">
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Local</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ / month]
              </div>
              <p className="muted" style={{ margin: "0" }}>
                For businesses that serve one city. Win the map pack and “near me” searches.
              </p>
              <Link className="btn btn-o" href="/contact" style={{ marginTop: "auto" }}>
                Choose Local
              </Link>
            </div>
            <div className="pkg feat lift rv">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="lbl lbl-l" style={{ color: "rgba(255,255,255,.65)" }}>
                  Growth
                </div>
                <span className="hand" style={{ fontSize: "22px", color: "#ffe14d" }}>
                  we recommend
                </span>
              </div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ / month]
              </div>
              <p style={{ margin: "0", color: "rgba(255,255,255,.75)" }}>
                Technical, local and content together, with new pages every month.
              </p>
              <Link className="btn btn-z" href="/contact" style={{ marginTop: "auto" }}>
                Choose Growth
              </Link>
            </div>
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Audit only</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ once]
              </div>
              <p className="muted" style={{ margin: "0" }}>
                A detailed audit and action plan your own team can follow.
              </p>
              <Link className="btn btn-o" href="/contact" style={{ marginTop: "auto" }}>
                Get an audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
                Monthly plans
              </div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Simple plans.</span>
                </span>
                <span className="mask rvm">
                  <span>Cancel any time.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g3">
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Starter</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ / month]
              </div>
              <p className="muted" style={{ margin: "0" }}>
                Google profile care, review requests and replies for one location.
              </p>
              <Link className="btn btn-o" href="/contact" style={{ marginTop: "auto" }}>
                Choose Starter
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
                Everything in Starter plus monitoring across platforms, alerts and monthly reports.
              </p>
              <Link className="btn btn-z" href="/contact" style={{ marginTop: "auto" }}>
                Choose Growth
              </Link>
            </div>
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Multi-location</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                Let&apos;s talk
              </div>
              <p className="muted" style={{ margin: "0" }}>
                For chains, hospitals and franchises with several branches.
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

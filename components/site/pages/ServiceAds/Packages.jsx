import Link from "next/link";

// Packages section. Server component.
export default function Packages() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">Management plans</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Simple fees.</span>
                </span>
                <span className="mask rvm">
                  <span>Your ad accounts.</span>
                </span>
              </h2>
            </div>
            <p className="rv muted" style={{ margin: "0", maxWidth: "340px" }}>
              Ad spend is paid directly to Google and Meta from your own accounts. Our fee is separate and fixed.
            </p>
          </div>
          <div className="g3">
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">One channel</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ / month]
              </div>
              <p className="muted" style={{ margin: "0" }}>
                Google Search or Meta, set up and managed with monthly reporting.
              </p>
              <Link className="btn btn-o" href="/contact" style={{ marginTop: "auto" }}>
                Get started
              </Link>
            </div>
            <div className="pkg feat lift rv">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="lbl lbl-l" style={{ color: "rgba(255,255,255,.65)" }}>
                  Full funnel
                </div>
                <span className="hand" style={{ fontSize: "22px", color: "#ffe14d" }}>
                  we recommend
                </span>
              </div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ / month]
              </div>
              <p style={{ margin: "0", color: "rgba(255,255,255,.75)" }}>
                Google, Meta and retargeting together, plus a landing page and weekly optimisation.
              </p>
              <Link className="btn btn-z" href="/contact" style={{ marginTop: "auto" }}>
                Choose Full funnel
              </Link>
            </div>
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Ads audit</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ once]
              </div>
              <p className="muted" style={{ margin: "0" }}>
                A review of your current campaigns with a clear list of what to fix first.
              </p>
              <Link className="btn btn-o" href="/contact" style={{ marginTop: "auto" }}>
                Book an audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

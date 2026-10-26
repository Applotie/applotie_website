// Pricing section. Server component.
export default function Pricing() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl rv" style={{ color: "#1f45d6" }}>
                Pricing
              </div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Simple plans.</span>
                </span>
                <span className="mask rvm">
                  <span>Try it free first.</span>
                </span>
              </h2>
            </div>
            <p className="rv muted" style={{ margin: "0", maxWidth: "340px" }}>
              Every plan includes setup, training and support from our team in Patna. [x]-day free trial, no card
              needed.
            </p>
          </div>
          <div className="g3">
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Solo</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ / month]
              </div>
              <p className="muted" style={{ margin: "0" }}>
                For a single doctor with a front desk.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  1 doctor, 2 staff logins
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Appointments, records, billing
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  WhatsApp reminders
                </div>
              </div>
              <a className="btn btn-o" href="#demo" style={{ marginTop: "auto" }}>
                Start free trial
              </a>
            </div>
            <div className="pkg feat lift rv">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="lbl lbl-l" style={{ color: "rgba(255,255,255,.65)" }}>
                  Clinic
                </div>
                <span className="hand" style={{ fontSize: "22px", color: "#ffe14d" }}>
                  we recommend
                </span>
              </div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                [₹ / month]
              </div>
              <p style={{ margin: "0", color: "rgba(255,255,255,.75)" }}>For growing clinics with a few doctors.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Up to 5 doctors
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Pharmacy &amp; inventory
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Online booking page
                </div>
              </div>
              <a className="btn btn-z" href="#demo" style={{ marginTop: "auto" }}>
                Start free trial
              </a>
            </div>
            <div className="pkg lift rv">
              <div className="lbl lbl-l muted">Hospital</div>
              <div className="disp" style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                Let&apos;s talk
              </div>
              <p className="muted" style={{ margin: "0" }}>
                For multi-specialty centres and chains.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Unlimited doctors &amp; branches
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Custom workflows
                </div>
                <div className="check">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a74ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Priority support
                </div>
              </div>
              <a className="btn btn-o" href="#demo" style={{ marginTop: "auto" }}>
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

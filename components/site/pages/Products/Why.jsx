// Why section. Server component.
export default function Why() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">Why our products</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Built by a studio,</span>
                </span>
                <span className="mask rvm">
                  <span>not a call centre.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g3">
            <div className="box lift rv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="ic" style={{ background: "#ff2d2d" }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <h3 className="h4x">Made and supported in Patna</h3>
              <p className="muted" style={{ margin: "0" }}>
                When you need help, you talk to the people who built it, not a ticket queue in another time zone.
              </p>
            </div>
            <div className="box lift rv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="ic" style={{ background: "#4a74ff" }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                </svg>
              </span>
              <h3 className="h4x">Tailored when you need it</h3>
              <p className="muted" style={{ margin: "0" }}>
                Because we build the product, we can adapt it to your workflow instead of forcing you to adapt to it.
              </p>
            </div>
            <div className="box lift rv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="ic" style={{ background: "#ffe14d" }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </span>
              <h3 className="h4x">Fair, simple pricing</h3>
              <p className="muted" style={{ margin: "0" }}>
                A clear monthly plan priced for Indian businesses. No hidden setup fees, no lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

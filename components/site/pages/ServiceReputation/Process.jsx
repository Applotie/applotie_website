// Process section. Server component.
export default function Process() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl rv" style={{ color: "#1f45d6" }}>
                How it works
              </div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Four steps to a</span>
                </span>
                <span className="mask rvm">
                  <span>better reputation.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="tl">
            <div className="rv">
              <span className="lbl lbl-l muted">Week 1</span>
              <h3 className="h4x">Audit</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Where you&apos;re listed, what people say, and how you compare to competitors nearby.
              </p>
            </div>
            <div className="rv">
              <span className="lbl lbl-l muted">Week 2</span>
              <h3 className="h4x">Set up</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Google Business Profile tuned, review links, QR cards and WhatsApp requests ready.
              </p>
            </div>
            <div className="rv">
              <span className="lbl lbl-l muted">Every day</span>
              <h3 className="h4x">Respond</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Every review gets a thoughtful reply, and you&apos;re alerted to anything sensitive.
              </p>
            </div>
            <div className="rv">
              <span className="lbl lbl-l muted">Every month</span>
              <h3 className="h4x">Report</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Rating, review count, response time and what customers keep mentioning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

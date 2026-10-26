// Process section. Server component.
export default function Process() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl rv" style={{ color: "#1f45d6" }}>
                How we build apps
              </div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Small steps,</span>
                </span>
                <span className="mask rvm">
                  <span>real feedback.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="tl">
            <div className="rv">
              <span className="lbl lbl-l muted">01</span>
              <h3 className="h4x">Sketch</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Who uses it, what problem it solves, what version one must do.
              </p>
            </div>
            <div className="rv">
              <span className="lbl lbl-l muted">02</span>
              <h3 className="h4x">Prototype</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                A clickable app on your phone, tested with real users.
              </p>
            </div>
            <div className="rv">
              <span className="lbl lbl-l muted">03</span>
              <h3 className="h4x">Build</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Two-week sprints with a working build you can try each time.
              </p>
            </div>
            <div className="rv">
              <span className="lbl lbl-l muted">04</span>
              <h3 className="h4x">Launch</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                App store setup, release and launch marketing.
              </p>
            </div>
            <div className="rv">
              <span className="lbl lbl-l muted">05</span>
              <h3 className="h4x">Grow</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Analytics, updates and new features from real usage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

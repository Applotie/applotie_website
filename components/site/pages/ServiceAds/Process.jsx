// Process section. Server component.
export default function Process() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">How it runs</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Launched in a week,</span>
                </span>
                <span className="mask rvm">
                  <span>improved every week.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="tl">
            <div className="rv">
              <span className="lbl lbl-l muted">Week 1</span>
              <h3 className="h4x">Set up</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Tracking, audiences, landing page and the first campaigns.
              </p>
            </div>
            <div className="rv">
              <span className="lbl lbl-l muted">Week 2</span>
              <h3 className="h4x">Launch</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Campaigns go live with a few angles to test against each other.
              </p>
            </div>
            <div className="rv">
              <span className="lbl lbl-l muted">Every week</span>
              <h3 className="h4x">Optimise</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Cut what&apos;s not working, scale what is, refresh creative.
              </p>
            </div>
            <div className="rv">
              <span className="lbl lbl-l muted">Every month</span>
              <h3 className="h4x">Report</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Leads, cost per lead and revenue, with a call to plan next month.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Pains section. Server component.
export default function Pains() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">Sound familiar?</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Spending on ads,</span>
                </span>
                <span className="mask rvm">
                  <span>guessing on results?</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g3" style={{ gap: "40px" }}>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#ff2d2d" }}>
                01
              </span>
              <h3 className="h4x">“We boost posts and hope.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                Boosting is not a strategy. We build campaigns around the customers you want and what they search for.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#ff2d2d" }}>
                02
              </span>
              <h3 className="h4x">“Clicks are up, calls aren&apos;t.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                Usually the landing page is the leak. We fix the page and the ad together.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#ff2d2d" }}>
                03
              </span>
              <h3 className="h4x">“Our agency just sends screenshots.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                You get conversion tracking and a report that shows leads, cost per lead and revenue, not just
                impressions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

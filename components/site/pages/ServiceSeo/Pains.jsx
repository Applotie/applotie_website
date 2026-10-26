// Pains section. Server component.
export default function Pains() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">Why it matters</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>If you&apos;re not on page one,</span>
                </span>
                <span className="mask rvm">
                  <span>you&apos;re invisible.</span>
                </span>
              </h2>
            </div>
            <p className="rv muted" style={{ margin: "0", maxWidth: "340px" }}>
              Most people never scroll past the first few results. Ads stop when the budget stops. Rankings keep
              working.
            </p>
          </div>
          <div className="g3" style={{ gap: "40px" }}>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800" }}>
                01
              </span>
              <h3 className="h4x">“Competitors show up. We don&apos;t.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                Usually a mix of technical issues, thin pages and a neglected Google Business Profile. All fixable.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800" }}>
                02
              </span>
              <h3 className="h4x">“We tried SEO. Nothing happened.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                Keywords stuffed into pages is not SEO. We focus on searches that turn into customers.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800" }}>
                03
              </span>
              <h3 className="h4x">“We have no idea what&apos;s working.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                You get a plain-English monthly report: rankings, traffic and the calls and forms that came from it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

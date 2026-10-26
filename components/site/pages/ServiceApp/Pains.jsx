// Pains section. Server component.
export default function Pains() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl rv" style={{ color: "#1f45d6" }}>
                Before you build
              </div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Most apps fail quietly.</span>
                </span>
                <span className="mask rvm">
                  <span>Yours won&apos;t.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g3" style={{ gap: "40px" }}>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#4a74ff" }}>
                01
              </span>
              <h3 className="h4x">Built before anyone tested it</h3>
              <p className="muted" style={{ margin: "0" }}>
                We put a clickable prototype in real users&apos; hands before writing code, so you build the right
                thing.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#4a74ff" }}>
                02
              </span>
              <h3 className="h4x">Too big for version one</h3>
              <p className="muted" style={{ margin: "0" }}>
                We help you cut to a lean first release that launches sooner and costs less.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#4a74ff" }}>
                03
              </span>
              <h3 className="h4x">Launched, then abandoned</h3>
              <p className="muted" style={{ margin: "0" }}>
                We stay for updates, analytics and improvements, so the app keeps getting better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

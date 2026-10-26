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
                  <span>Most websites look fine.</span>
                </span>
                <span className="mask rvm">
                  <span>They just don&apos;t work.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g3" style={{ gap: "40px" }}>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#ff2d2d" }}>
                01
              </span>
              <h3 className="h4x">“People visit, but nobody calls.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                Visitors can&apos;t tell what you do, or how to take the next step. We fix the message and the path.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#ff2d2d" }}>
                02
              </span>
              <h3 className="h4x">“It&apos;s painfully slow on phones.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                Most of your visitors are on mobile data. Every extra second loses some of them. We build fast by
                default.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#ff2d2d" }}>
                03
              </span>
              <h3 className="h4x">“I can&apos;t even change a phone number.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                You get a simple editor and a short training, so small changes never need a developer again.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
                  <span>If you look like everyone,</span>
                </span>
                <span className="mask rvm">
                  <span>you compete on price.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g3" style={{ gap: "40px" }}>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#ff2d2d" }}>
                01
              </span>
              <h3 className="h4x">“Our logo was made in an afternoon.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                It got you started. Now it&apos;s holding you back from charging what you&apos;re worth.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#ff2d2d" }}>
                02
              </span>
              <h3 className="h4x">“Every flyer looks different.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                Without a system, every designer guesses. We give you rules anyone can follow.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#ff2d2d" }}>
                03
              </span>
              <h3 className="h4x">“People confuse us with competitors.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                A distinct name, look and voice gives customers a reason to remember and pick you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

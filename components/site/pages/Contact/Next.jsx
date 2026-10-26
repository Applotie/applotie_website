// Next section. Server component.
export default function Next() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">What happens next</div>
              <h2 className="h2x rv" style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}>
                No sales script. Just a conversation.
              </h2>
            </div>
          </div>
          <div className="g3">
            <div className="box lift rv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="num-big" style={{ fontSize: "56px", color: "#ff2d2d" }}>
                01
              </span>
              <h3 className="h4x">We read your note</h3>
              <p className="muted" style={{ margin: "0" }}>
                A real person on the team reads it and gets back to you, usually on the same working day.
              </p>
            </div>
            <div className="box lift rv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="num-big" style={{ fontSize: "56px", color: "#ff2d2d" }}>
                02
              </span>
              <h3 className="h4x">A 30-minute call</h3>
              <p className="muted" style={{ margin: "0" }}>
                We ask a lot of questions about your business, customers and goals. Free, and no obligation.
              </p>
            </div>
            <div className="box lift rv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="num-big" style={{ fontSize: "56px", color: "#ff2d2d" }}>
                03
              </span>
              <h3 className="h4x">A clear proposal</h3>
              <p className="muted" style={{ margin: "0" }}>
                Scope, timeline and a fixed price in plain English. You decide if it makes sense.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

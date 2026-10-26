// Pains section. Server component.
export default function Pains() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl rv" style={{ color: "#1f45d6" }}>
                Sound familiar?
              </div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Your reviews are</span>
                </span>
                <span className="mask rvm">
                  <span>doing your selling.</span>
                </span>
              </h2>
            </div>
            <p className="rv muted" style={{ margin: "0", maxWidth: "340px" }}>
              Or quietly losing you customers. Most people compare a few businesses&apos; ratings before they call any
              of them.
            </p>
          </div>
          <div className="g3" style={{ gap: "40px" }}>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#4a74ff" }}>
                01
              </span>
              <h3 className="h4x">“One bad review is all people see.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                A single unanswered complaint can outweigh dozens of happy customers who never left a review.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#4a74ff" }}>
                02
              </span>
              <h3 className="h4x">“Competitors have five times our reviews.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                Happy customers rarely review on their own. A simple, well-timed request changes that.
              </p>
            </div>
            <div className="pain rv">
              <span className="disp" style={{ fontSize: "40px", fontWeight: "800", color: "#4a74ff" }}>
                03
              </span>
              <h3 className="h4x">“We never know what people are saying.”</h3>
              <p className="muted" style={{ margin: "0" }}>
                We monitor Google, Facebook and the places your customers talk, and alert you when it matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

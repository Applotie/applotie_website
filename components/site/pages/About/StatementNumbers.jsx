// Statement + Numbers section. Server component.
export default function StatementNumbers() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <p className="stmt rv" style={{ maxWidth: "1060px", marginBottom: "72px" }}>
            We believe a business in Patna deserves the same quality of digital work as one in Bengaluru or London.{" "}
            <span className="muted">So that&apos;s what we build, for clients here and well beyond.</span>
          </p>
          <div className="num-row">
            <div className="num-cell rv">
              <div className="lbl lbl-l muted">Founded</div>
              <div className="num-big">2019</div>
              <div className="muted" style={{ fontSize: "15px" }}>
                In Patna, Bihar
              </div>
            </div>
            <div className="num-cell rv">
              <div className="lbl lbl-l muted">Shipped</div>
              <div className="num-big">
                178<span style={{ color: "#ff2d2d" }}>+</span>
              </div>
              <div className="muted" style={{ fontSize: "15px" }}>
                Websites, apps and campaigns
              </div>
            </div>
            <div className="num-cell rv">
              <div className="lbl lbl-l muted">Partners</div>
              <div className="num-big">
                20<span style={{ color: "#ff2d2d" }}>+</span>
              </div>
              <div className="muted" style={{ fontSize: "15px" }}>
                Businesses we grow with
              </div>
            </div>
            <div className="num-cell rv">
              <div className="lbl lbl-l muted">Retention</div>
              <div className="num-big">
                95<span style={{ color: "#ff2d2d" }}>%</span>
              </div>
              <div className="muted" style={{ fontSize: "15px" }}>
                Clients who stay with us
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

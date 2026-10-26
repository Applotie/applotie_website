// Built For section. Server component.
export default function BuiltFor() {
  return (
    <>
      <section
        aria-label="Built for"
        style={{
          borderTop: "1px solid #ececf1",
          borderBottom: "1px solid #ececf1",
          padding: "24px 0",
          marginTop: "40px",
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div className="lbl lbl-l hide-sm muted" style={{ flex: "none" }}>
            Built for
          </div>
          <div className="mqbox" style={{ overflow: "hidden", flex: "1", minWidth: "0" }}>
            <div className="mq" style={{ animationDuration: "34s" }}>
              <div
                className="mqg disp"
                style={{ fontSize: "24px", fontWeight: "700", color: "#5c5c66", whiteSpace: "nowrap" }}
              >
                <span>General clinics</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Dental clinics</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Eye care</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Physiotherapy</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Paediatrics</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Diagnostic centres</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Multi-specialty</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
              </div>
              <div
                className="mqg disp"
                aria-hidden="true"
                style={{ fontSize: "24px", fontWeight: "700", color: "#5c5c66", whiteSpace: "nowrap" }}
              >
                <span>General clinics</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Dental clinics</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Eye care</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Physiotherapy</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Paediatrics</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Diagnostic centres</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
                <span>Multi-specialty</span>
                <span style={{ color: "#4a74ff" }}>✱</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

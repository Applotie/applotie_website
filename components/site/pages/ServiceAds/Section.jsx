import Link from "next/link";

// Section section. Server component.
export default function Section() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <Link
            href="/services/reputation-management-in-patna"
            className="card rv nextcard"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
              borderTop: "1px solid #111111",
              borderBottom: "1px solid #111111",
              padding: "40px 0",
            }}
          >
            <div>
              <div className="lbl lbl-l muted">Next service</div>
              <div className="h2x" style={{ marginTop: "8px" }}>
                Reputation management
              </div>
            </div>
            <span className="ic" style={{ width: "72px", height: "72px", background: "#4a74ff" }}>
              <svg
                className="arr"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}

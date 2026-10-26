import Link from "next/link";

// Studio section. Server component.
export default function Studio() {
  return (
    <>
      <section id="studio" style={{ padding: "0 0 112px" }}>
        <div className="wrap split" style={{ gap: "64px" }}>
          <div style={{ position: "relative" }}>
            <div className="ph clipin" style={{ background: "#4a74ff", aspectRatio: "4 / 5", maxHeight: "620px" }}>
              <div className="ph-in">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                  <circle cx="12" cy="13" r="3"></circle>
                </svg>
                <span className="lbl">[Team photo]</span>
                <span style={{ fontSize: "14px", maxWidth: "220px" }}>
                  A candid shot of the team at work in the studio. Real faces, not stock.
                </span>
              </div>
            </div>
            <div
              className="popin"
              style={{ position: "absolute", right: "-18px", bottom: "40px", transform: "rotate(-5deg)" }}
            >
              <div
                className="hand"
                style={{
                  background: "#ffe14d",
                  color: "#111111",
                  borderRadius: "999px",
                  padding: "6px 20px 8px",
                  fontSize: "26px",
                  lineHeight: "30px",
                  boxShadow: "0 14px 28px -16px rgba(17,17,17,.6)",
                }}
              >
                our studio, Patna
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            <div className="lbl eb rv">(04) The people behind it</div>
            <h2 className="h2x">
              <span className="mask rvm">
                <span>From Patna</span>
              </span>
              <span className="mask rvm">
                <span>to the wider web.</span>
              </span>
            </h2>
            <p className="big-p rv" style={{ maxWidth: "500px" }}>
              We started Applotie in 2019 with a simple belief: serious digital work shouldn&apos;t only be for big-city
              companies with big-city budgets.
            </p>
            <p className="big-p rv muted" style={{ maxWidth: "500px" }}>
              You shouldn&apos;t need five different partners to build, launch and grow. So strategy, design,
              development and marketing sit in one team, and you talk to the people actually doing the work.
            </p>
            <div
              className="rv"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                paddingTop: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span
                  className="ic"
                  style={{ width: "56px", height: "56px", background: "#ececf1", color: "#5c5c66", fontWeight: "700" }}
                  aria-hidden="true"
                >
                  [ ]
                </span>
                <div>
                  <div className="hand" style={{ fontSize: "32px", lineHeight: "32px" }}>
                    [Founder name]
                  </div>
                  <div className="muted" style={{ fontSize: "14px" }}>
                    Founder, Applotie Technologies
                  </div>
                </div>
              </div>
              <Link className="ul" href="/about">
                Meet the team{" "}
                <svg
                  className="ar"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

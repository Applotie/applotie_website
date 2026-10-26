// Channels section. Server component.
export default function Channels() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">What we run</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>The right channel</span>
                </span>
                <span className="mask rvm">
                  <span>for the right moment.</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="g4">
            <div className="chan rv">
              <span className="ic" style={{ background: "#ff2d2d" }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </span>
              <h3 className="h4x">Google Search</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Catch people at the exact moment they search for what you sell.
              </p>
            </div>
            <div className="chan rv">
              <span className="ic" style={{ background: "#4a74ff" }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </span>
              <h3 className="h4x">Meta Ads</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Instagram and Facebook ads that create demand with the right audience.
              </p>
            </div>
            <div className="chan rv">
              <span className="ic" style={{ background: "#ffe14d" }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12a9 9 0 1 1-3-6.7L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                </svg>
              </span>
              <h3 className="h4x">Retargeting</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Bring back the people who visited but didn&apos;t enquire. Usually the cheapest leads.
              </p>
            </div>
            <div className="chan rv">
              <span className="ic" style={{ background: "#2f5bff" }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M3 9h18 M9 21V9"></path>
                </svg>
              </span>
              <h3 className="h4x">Landing pages</h3>
              <p className="muted" style={{ margin: "0", fontSize: "15px" }}>
                Focused pages built for one offer and one action, tested and improved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

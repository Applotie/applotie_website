"use client";

import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Calculator section. Client component (interactive).
export default function Calculator() {
  const { daysOff, extra, hours, mins, ppd, setMins, setPpd } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="panel rv" style={{ background: "#4a74ff", color: "#111111" }}>
            <div className="split" style={{ gap: "48px", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
                <div className="lbl">Time-saved calculator</div>
                <h2 className="h2x" style={{ fontSize: "clamp(36px, 4.4vw, 58px)" }}>
                  How much time could you get back?
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <label htmlFor="pd" style={{ fontWeight: "600" }}>
                      Patients per day
                    </label>
                    <span className="disp" style={{ fontSize: "30px", fontWeight: "800" }}>
                      {ppd}
                    </span>
                  </div>
                  <input
                    id="pd"
                    className="rng"
                    type="range"
                    min="5"
                    max="150"
                    step="1"
                    value={ppd}
                    onChange={setPpd}
                    style={{ background: "rgba(17,17,17,.2)" }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <label htmlFor="ms" style={{ fontWeight: "600" }}>
                      Minutes of admin saved per patient
                    </label>
                    <span className="disp" style={{ fontSize: "30px", fontWeight: "800" }}>
                      {mins}
                    </span>
                  </div>
                  <input
                    id="ms"
                    className="rng"
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={mins}
                    onChange={setMins}
                    style={{ background: "rgba(17,17,17,.2)" }}
                  />
                  <span style={{ fontSize: "14px" }}>
                    Typing prescriptions, finding old records, writing bills, calling to remind.
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "26px",
                  padding: "34px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <span className="lbl" style={{ color: "#1f45d6" }}>
                  Every month, you&apos;d save about
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                  <span className="num-big" style={{ fontSize: "104px" }}>
                    {hours}
                  </span>
                  <span style={{ fontSize: "22px", fontWeight: "600" }}>hours</span>
                </div>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "28px" }}>
                  That&apos;s roughly <strong>{extra} more consultations</strong> a month at 10 minutes each, or{" "}
                  <strong>{daysOff}</strong> of your life back.
                </p>
                <p className="muted" style={{ margin: "0", fontSize: "14px" }}>
                  Estimate based on 26 working days a month. Your numbers will vary.
                </p>
                <a className="btn btn-i" href="#demo" style={{ alignSelf: "flex-start" }}>
                  See it in a demo{" "}
                  <svg
                    className="arr"
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
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

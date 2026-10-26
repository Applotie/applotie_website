"use client";

import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Hero section. Client component (interactive).
export default function Hero() {
  const { token } = useDC(Logic);
  return (
    <>
      <section style={{ padding: "56px 0 80px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>Applotie Clinic</span>
          </div>
          <div className="phero">
            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
              <div className="in" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span className="dd-new lbl" style={{ fontSize: "11px", minHeight: "24px" }}>
                  New
                </span>
                <span className="lbl" style={{ color: "#1f45d6" }}>
                  Applotie Clinic · Clinic management software
                </span>
              </div>
              <h1 className="h1x" style={{ fontSize: "clamp(44px, 5.6vw, 84px)" }}>
                <span className="mask">
                  <span className="d1">Clinic software</span>
                </span>
                <span className="mask">
                  <span className="d2">that gives you</span>
                </span>
                <span className="mask">
                  <span className="d3">
                    time back<span style={{ color: "#4a74ff" }}>.</span>
                  </span>
                </span>
              </h1>
              <p className="lead in d4">
                Applotie Clinic is clinic management software made in Patna. Appointments, patient records,
                prescriptions, billing and WhatsApp reminders in one simple app, so you spend less time on paperwork and
                more with patients.
              </p>
              <div className="in d5" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a className="btn btn-z" href="#demo">
                  Book a free demo{" "}
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
                <a className="btn btn-o" href="#tour">
                  Take the tour
                </a>
              </div>
              <div
                className="in d5 lbl lbl-l muted"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 20px",
                  borderTop: "1px solid #ececf1",
                  paddingTop: "18px",
                }}
              >
                <span>Phone, tablet &amp; PC</span>
                <span>Hindi &amp; English</span>
                <span>Setup &amp; training in Patna</span>
              </div>
            </div>
            <div className="popin d3" aria-hidden="true" style={{ position: "relative" }}>
              <div className="appwin">
                <div className="side">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                    <img src="/brand/applotie-mark.svg" alt="" style={{ width: "24px", height: "24px" }} />
                    <span style={{ padding: "0", color: "#ffffff", fontWeight: "700", fontSize: "13px" }}>Clinic</span>
                  </div>
                  <span className="on">● Today</span>
                  <span>○ Patients</span>
                  <span>○ Prescriptions</span>
                  <span>○ Billing</span>
                  <span>○ Pharmacy</span>
                  <span>○ Reports</span>
                </div>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: "700", fontSize: "16px" }}>Good morning, Doctor</div>
                      <div className="muted" style={{ fontSize: "12px" }}>
                        18 appointments today
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#2f5bff",
                        color: "#ffffff",
                        borderRadius: "14px",
                        padding: "8px 14px",
                        textAlign: "center",
                      }}
                    >
                      <div className="lbl" style={{ fontSize: "9px", color: "rgba(255,255,255,.7)" }}>
                        Now seeing
                      </div>
                      <div className="disp token" style={{ fontSize: "26px", fontWeight: "800", lineHeight: "1" }}>
                        #{token}
                      </div>
                    </div>
                  </div>
                  <div className="appt newp">
                    <span className="lbl" style={{ fontSize: "11px" }}>
                      10:30
                    </span>
                    <span>New booking · from your website</span>
                    <span
                      style={{
                        background: "#4a74ff",
                        borderRadius: "6px",
                        padding: "2px 8px",
                        fontSize: "11px",
                        fontWeight: "700",
                      }}
                    >
                      New
                    </span>
                  </div>
                  <div className="appt">
                    <span className="lbl" style={{ fontSize: "11px" }}>
                      10:15
                    </span>
                    <span>Follow-up · Fever</span>
                    <span
                      style={{
                        background: "#ffe14d",
                        borderRadius: "6px",
                        padding: "2px 8px",
                        fontSize: "11px",
                        fontWeight: "700",
                      }}
                    >
                      Waiting
                    </span>
                  </div>
                  <div className="appt">
                    <span className="lbl" style={{ fontSize: "11px" }}>
                      10:00
                    </span>
                    <span>Consultation · Knee pain</span>
                    <span
                      style={{
                        background: "#ffe14d",
                        borderRadius: "6px",
                        padding: "2px 8px",
                        fontSize: "11px",
                        fontWeight: "700",
                      }}
                    >
                      Waiting
                    </span>
                  </div>
                  <div className="appt">
                    <span className="lbl" style={{ fontSize: "11px" }}>
                      09:45
                    </span>
                    <span>Consultation · BP check</span>
                    <span
                      style={{
                        background: "#ececf1",
                        borderRadius: "6px",
                        padding: "2px 8px",
                        fontSize: "11px",
                        fontWeight: "700",
                      }}
                    >
                      Done
                    </span>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: "8px",
                      marginTop: "6px",
                    }}
                  >
                    <div style={{ background: "#ececf1", borderRadius: "12px", padding: "10px" }}>
                      <div className="lbl" style={{ fontSize: "9px" }}>
                        Patients
                      </div>
                      <div className="disp" style={{ fontSize: "22px", fontWeight: "800" }}>
                        18
                      </div>
                    </div>
                    <div style={{ background: "#ececf1", borderRadius: "12px", padding: "10px" }}>
                      <div className="lbl" style={{ fontSize: "9px" }}>
                        Collected
                      </div>
                      <div className="disp" style={{ fontSize: "22px", fontWeight: "800" }}>
                        ₹9.4k
                      </div>
                    </div>
                    <div style={{ background: "#ececf1", borderRadius: "12px", padding: "10px" }}>
                      <div className="lbl" style={{ fontSize: "9px" }}>
                        Reminders
                      </div>
                      <div className="disp" style={{ fontSize: "22px", fontWeight: "800" }}>
                        24
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="floaty"
                style={{
                  position: "absolute",
                  right: "-18px",
                  bottom: "-36px",
                  width: "170px",
                  height: "300px",
                  borderRadius: "30px",
                  background: "#2f5bff",
                  padding: "8px",
                  boxShadow: "0 30px 60px -30px rgba(17,17,17,.7)",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: "23px",
                    background: "#ececf1",
                    padding: "30px 10px 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div className="lbl" style={{ fontSize: "9px", textAlign: "center" }}>
                    WhatsApp
                  </div>
                  <div
                    className="toast"
                    style={{
                      background: "#ffffff",
                      borderRadius: "12px 12px 12px 4px",
                      padding: "10px",
                      fontSize: "11px",
                      lineHeight: "15px",
                      animationDuration: "5s",
                    }}
                  >
                    Reminder: your appointment is tomorrow at 10:30 AM. Reply 1 to confirm.
                  </div>
                  <div
                    className="toast"
                    style={{
                      alignSelf: "flex-end",
                      background: "#4a74ff",
                      borderRadius: "12px 12px 4px 12px",
                      padding: "6px 12px",
                      fontSize: "12px",
                      fontWeight: "700",
                      animationDuration: "5s",
                      animationDelay: ".8s",
                    }}
                  >
                    1
                  </div>
                </div>
              </div>
              <span
                className="hand fadein"
                style={{
                  position: "absolute",
                  left: "-24px",
                  bottom: "-54px",
                  fontSize: "22px",
                  transform: "rotate(-4deg)",
                }}
              >
                fewer no-shows, automatically
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

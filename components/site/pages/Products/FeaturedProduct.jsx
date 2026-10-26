import Link from "next/link";

// Featured Product section. Server component.
export default function FeaturedProduct() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="dark panel featp">
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span className="dd-new lbl" style={{ fontSize: "11px", minHeight: "24px" }}>
                  New
                </span>
                <span className="lbl" style={{ color: "rgba(255,255,255,.65)" }}>
                  Product 01 · Healthcare
                </span>
              </div>
              <h2 className="h2x" style={{ fontSize: "clamp(44px, 5.4vw, 76px)" }}>
                Applotie Clinic
              </h2>
              <p
                style={{
                  margin: "0",
                  fontSize: "21px",
                  lineHeight: "31px",
                  color: "rgba(255,255,255,.85)",
                  maxWidth: "480px",
                }}
              >
                Clinic management software for appointments, patient records, prescriptions, billing and WhatsApp
                reminders. All in one place, on any device.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="chip chip-d" style={{ minHeight: "36px", fontSize: "13px", cursor: "default" }}>
                  Appointments
                </span>
                <span className="chip chip-d" style={{ minHeight: "36px", fontSize: "13px", cursor: "default" }}>
                  Patient records
                </span>
                <span className="chip chip-d" style={{ minHeight: "36px", fontSize: "13px", cursor: "default" }}>
                  Billing &amp; GST
                </span>
                <span className="chip chip-d" style={{ minHeight: "36px", fontSize: "13px", cursor: "default" }}>
                  WhatsApp reminders
                </span>
                <span className="chip chip-d" style={{ minHeight: "36px", fontSize: "13px", cursor: "default" }}>
                  Reports
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "6px" }}>
                <Link className="btn btn-z" href="/products/clinic-management-software">
                  Explore Applotie Clinic{" "}
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
                <Link className="btn btn-p" href="/products/clinic-management-software">
                  Book a free demo
                </Link>
              </div>
            </div>
            <Link
              href="/products/clinic-management-software"
              aria-label="See Applotie Clinic"
              style={{ textDecoration: "none", position: "relative" }}
            >
              <div className="appwin" aria-hidden="true">
                <div className="side">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <img src="/brand/applotie-mark.svg" alt="" style={{ width: "22px", height: "22px" }} />
                    <span style={{ padding: "0", color: "#ffffff", fontWeight: "700", fontSize: "13px" }}>Clinic</span>
                  </div>
                  <span className="on">● Today</span>
                  <span>○ Patients</span>
                  <span>○ Prescriptions</span>
                  <span>○ Billing</span>
                  <span>○ Reports</span>
                </div>
                <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: "700" }}>Today&apos;s appointments</div>
                      <div className="muted" style={{ fontSize: "12px" }}>
                        Dr. [Name] · 18 booked
                      </div>
                    </div>
                    <span
                      style={{
                        background: "#4a74ff",
                        borderRadius: "999px",
                        padding: "4px 10px",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      + New
                    </span>
                  </div>
                  <div className="appt newp">
                    <span className="lbl" style={{ fontSize: "11px" }}>
                      10:30
                    </span>
                    <span>New booking · Online</span>
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
                      10:00
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
                  <div className="appt">
                    <span className="lbl" style={{ fontSize: "11px" }}>
                      09:30
                    </span>
                    <span>Consultation · Diabetes</span>
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
                      marginTop: "4px",
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
                className="toast"
                style={{
                  position: "absolute",
                  right: "-14px",
                  bottom: "28px",
                  background: "#4a74ff",
                  color: "#111111",
                  borderRadius: "14px",
                  padding: "10px 14px",
                  fontSize: "13px",
                  fontWeight: "700",
                  boxShadow: "0 16px 30px -14px rgba(0,0,0,.6)",
                }}
              >
                WhatsApp reminder sent ✓
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

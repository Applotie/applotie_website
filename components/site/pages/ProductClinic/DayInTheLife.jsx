// Day In The Life section. Server component.
export default function DayInTheLife() {
  return (
    <>
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap split" style={{ alignItems: "start", gap: "56px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", position: "sticky", top: "110px" }}>
            <div className="lbl rv" style={{ color: "#1f45d6" }}>
              A day with Applotie Clinic
            </div>
            <h2 className="h2x rv" style={{ fontSize: "clamp(36px, 4.4vw, 56px)" }}>
              What your day looks like.
            </h2>
            <span className="hand rv" style={{ fontSize: "26px" }}>
              spoiler: calmer
            </span>
          </div>
          <div style={{ borderBottom: "1px solid #ececf1" }}>
            <div className="day rv">
              <span className="disp dt" style={{ fontSize: "32px", fontWeight: "800" }}>
                8:00
              </span>
              <div>
                <h3 className="h4x">Reminders go out by themselves</h3>
                <p className="muted" style={{ margin: "6px 0 0" }}>
                  Every patient booked today gets a WhatsApp reminder. Confirmations arrive before you&apos;ve had chai.
                </p>
              </div>
            </div>
            <div className="day rv">
              <span className="disp dt" style={{ fontSize: "32px", fontWeight: "800" }}>
                10:00
              </span>
              <div>
                <h3 className="h4x">The queue runs itself</h3>
                <p className="muted" style={{ margin: "6px 0 0" }}>
                  Your receptionist checks patients in; you see who&apos;s next and their history in one tap.
                </p>
              </div>
            </div>
            <div className="day rv">
              <span className="disp dt" style={{ fontSize: "32px", fontWeight: "800" }}>
                1:00
              </span>
              <div>
                <h3 className="h4x">Prescriptions in seconds</h3>
                <p className="muted" style={{ margin: "6px 0 0" }}>
                  Pick from your saved templates, adjust, print or send on WhatsApp in Hindi or English.
                </p>
              </div>
            </div>
            <div className="day rv">
              <span className="disp dt" style={{ fontSize: "32px", fontWeight: "800" }}>
                5:00
              </span>
              <div>
                <h3 className="h4x">Billing is already done</h3>
                <p className="muted" style={{ margin: "6px 0 0" }}>
                  GST-ready invoices were created with each visit. Cash, UPI and card all reconcile.
                </p>
              </div>
            </div>
            <div className="day rv">
              <span className="disp dt" style={{ fontSize: "32px", fontWeight: "800" }}>
                8:00
              </span>
              <div>
                <h3 className="h4x">Today, at a glance</h3>
                <p className="muted" style={{ margin: "6px 0 0" }}>
                  Patients seen, revenue collected and tomorrow&apos;s bookings, on your phone, from home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

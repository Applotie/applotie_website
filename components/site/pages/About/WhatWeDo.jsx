import Link from "next/link";
import { dcVals } from "@/components/site/dc";
import HomeLogic from "@/components/site/pages/Home/logic";

const arrow = (
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
);

// What we do section. Server component. Service names, tags and descriptions come from the home page's
// data, so the two pages never describe a service differently.
export default function WhatWeDo() {
  const { services } = dcVals(HomeLogic);
  return (
    <>
      <section id="what-we-do" style={{ padding: "0 0 112px", scrollMarginTop: "90px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">(02) What we do</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>Six crafts,</span>
                </span>
                <span className="mask rvm">
                  <span>one team.</span>
                </span>
              </h2>
            </div>
            <p className="rv muted" style={{ margin: "0", maxWidth: "380px" }}>
              Most businesses juggle a web developer, an ad agency and a designer who never talk to each other. We do
              all of it under one roof, so every piece pulls in the same direction.
            </p>
          </div>
          <div className="g3 wwd">
            {services.map((s) => (
              <div className="rv" key={s.href}>
                {/* the reveal animation sets inline transforms, so it wraps the card instead of sitting on it */}
                <Link className="wwd-card" href={s.href} style={{ "--acc": s.bg }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="lbl lbl-l muted">{s.num}</span>
                    <span className="wwd-dot" aria-hidden="true"></span>
                  </div>
                  <h3 className="h4x">{s.name}</h3>
                  <p className="muted" style={{ margin: "0", fontSize: "15px", lineHeight: "24px" }}>
                    {s.desc}
                  </p>
                  <span className="lbl lbl-l wwd-tags">{s.tags}</span>
                  <span className="wwd-more">Explore {arrow}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="wwd-product rv">
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="lbl" style={{ color: "#ffe14d" }}>
                And our own product
              </span>
              <h3 className="h3x">Applotie Clinic</h3>
              <p style={{ margin: "0", color: "rgba(255,255,255,.78)", fontSize: "17px", lineHeight: "27px" }}>
                Clinic management software made in Patna. Appointments, patient records, prescriptions, billing and
                WhatsApp reminders in one simple app. Built by the same team that builds for our clients.
              </p>
            </div>
            <Link className="btn btn-p" href="/products/clinic-management-software">
              See Applotie Clinic {arrow}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

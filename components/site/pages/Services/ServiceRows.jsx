import Link from "next/link";

// Service Rows section. Server component.
export default function ServiceRows() {
  return (
    <>
      <section style={{ padding: "32px 0 80px" }}>
        <div className="wrap" style={{ borderBottom: "1px solid #ececf1" }}>
          <div className="srow">
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <span className="lbl lbl-l muted rv">01 / Web development</span>
              <h2 className="h2x rv">Websites that turn visitors into enquiries.</h2>
              <p className="big-p muted rv" style={{ maxWidth: "480px" }}>
                Business websites, landing pages and web platforms that load fast, read clearly and are built to rank
                and convert from day one.
              </p>
              <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="tag">Business websites</span>
                <span className="tag">Landing pages</span>
                <span className="tag">Web apps</span>
                <span className="tag">CMS</span>
                <span className="tag">E-commerce</span>
              </div>
              <Link
                className="btn btn-i rv"
                href="/services/web-development-in-patna"
                style={{ alignSelf: "flex-start" }}
              >
                Explore web development{" "}
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
            <Link
              href="/services/web-development-in-patna"
              className="svis clipin"
              aria-label="Web development"
              style={{ background: "#ff2d2d" }}
            >
              <div className="zoom" style={{ transition: "transform 1s cubic-bezier(.22,1,.36,1)" }}>
                <div
                  style={{
                    width: "340px",
                    background: "#ffffff",
                    borderRadius: "16px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    boxShadow: "0 30px 60px -30px rgba(17,17,17,.5)",
                  }}
                >
                  <div style={{ display: "flex", gap: "5px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ececf1" }}></span>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ececf1" }}></span>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ececf1" }}></span>
                  </div>
                  <div className="bb" style={{ height: "64px", borderRadius: "10px", background: "#2f5bff" }}></div>
                  <div
                    className="bb"
                    style={{
                      height: "9px",
                      width: "80%",
                      borderRadius: "4px",
                      background: "#ececf1",
                      animationDelay: ".15s",
                    }}
                  ></div>
                  <div
                    className="bb"
                    style={{
                      height: "9px",
                      width: "60%",
                      borderRadius: "4px",
                      background: "#ececf1",
                      animationDelay: ".25s",
                    }}
                  ></div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div
                      className="bb"
                      style={{
                        flex: "1",
                        height: "56px",
                        borderRadius: "10px",
                        background: "#4a74ff",
                        animationDelay: ".4s",
                      }}
                    ></div>
                    <div
                      className="bb"
                      style={{
                        flex: "1",
                        height: "56px",
                        borderRadius: "10px",
                        background: "#ececf1",
                        animationDelay: ".5s",
                      }}
                    ></div>
                  </div>
                  <div
                    className="bb"
                    style={{
                      height: "30px",
                      width: "40%",
                      borderRadius: "999px",
                      background: "#ff2d2d",
                      animationDelay: ".65s",
                    }}
                  ></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="srow flip">
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <span className="lbl lbl-l muted rv">02 / App development</span>
              <h2 className="h2x rv">Apps people actually enjoy using.</h2>
              <p className="big-p muted rv" style={{ maxWidth: "480px" }}>
                iOS and Android apps, internal tools and platforms, designed around real users and built to scale as you
                grow.
              </p>
              <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="tag">iOS &amp; Android</span>
                <span className="tag">Flutter</span>
                <span className="tag">React Native</span>
                <span className="tag">Internal tools</span>
                <span className="tag">MVPs</span>
              </div>
              <Link
                className="btn btn-i rv"
                href="/services/app-development-in-patna"
                style={{ alignSelf: "flex-start" }}
              >
                Explore app development{" "}
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
            <Link
              href="/services/app-development-in-patna"
              className="svis clipin"
              aria-label="App development"
              style={{ background: "#4a74ff" }}
            >
              <div
                className="zoom"
                style={{
                  transition: "transform 1s cubic-bezier(.22,1,.36,1)",
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <div
                  className="floaty"
                  style={{
                    width: "140px",
                    height: "270px",
                    borderRadius: "30px",
                    background: "#2f5bff",
                    padding: "9px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: "22px",
                      background: "#ffffff",
                      overflow: "hidden",
                      padding: "10px",
                    }}
                  >
                    <div className="ps" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ height: "54px", borderRadius: "10px", background: "#ff2d2d" }}></div>
                      <div style={{ height: "54px", borderRadius: "10px", background: "#ececf1" }}></div>
                      <div style={{ height: "54px", borderRadius: "10px", background: "#4a74ff" }}></div>
                      <div style={{ height: "54px", borderRadius: "10px", background: "#ececf1" }}></div>
                      <div style={{ height: "54px", borderRadius: "10px", background: "#ff2d2d" }}></div>
                      <div style={{ height: "54px", borderRadius: "10px", background: "#ececf1" }}></div>
                    </div>
                  </div>
                </div>
                <div
                  className="floaty"
                  style={{
                    width: "120px",
                    height: "230px",
                    borderRadius: "26px",
                    background: "#ffffff",
                    padding: "8px",
                    animationDelay: "-2.5s",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: "19px",
                      background: "#2f5bff",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <div style={{ height: "70px", borderRadius: "10px", background: "#ffe14d" }}></div>
                    <div
                      style={{ height: "8px", width: "70%", borderRadius: "4px", background: "rgba(255,255,255,.3)" }}
                    ></div>
                    <div
                      style={{ height: "8px", width: "50%", borderRadius: "4px", background: "rgba(255,255,255,.3)" }}
                    ></div>
                    <div
                      style={{ marginTop: "auto", height: "32px", borderRadius: "999px", background: "#ff2d2d" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="srow">
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <span className="lbl lbl-l muted rv">03 / SEO &amp; growth</span>
              <h2 className="h2x rv">Get found by people already searching.</h2>
              <p className="big-p muted rv" style={{ maxWidth: "480px" }}>
                Technical SEO, local search and content that ranks, so the right people find you without you paying for
                every click.
              </p>
              <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="tag">Technical SEO</span>
                <span className="tag">Local SEO</span>
                <span className="tag">Content</span>
                <span className="tag">Google Business Profile</span>
              </div>
              <Link className="btn btn-i rv" href="/services/seo-services-in-patna" style={{ alignSelf: "flex-start" }}>
                Explore SEO &amp; growth{" "}
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
            <Link
              href="/services/seo-services-in-patna"
              className="svis clipin"
              aria-label="SEO and growth"
              style={{ background: "#ececf1" }}
            >
              <div
                className="zoom"
                style={{
                  transition: "transform 1s cubic-bezier(.22,1,.36,1)",
                  width: "360px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    height: "50px",
                    borderRadius: "999px",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "0 18px",
                    boxShadow: "0 16px 30px -20px rgba(17,17,17,.5)",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5c5c66"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <span style={{ fontSize: "15px" }}>best clinic near me</span>
                  <span className="caret"></span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "12px",
                    height: "170px",
                    borderBottom: "1.5px solid #111111",
                  }}
                >
                  <div
                    className="bar"
                    style={{ flex: "1", height: "28%", borderRadius: "8px 8px 0 0", background: "#ffffff" }}
                  ></div>
                  <div
                    className="bar"
                    style={{
                      flex: "1",
                      height: "44%",
                      borderRadius: "8px 8px 0 0",
                      background: "#ffffff",
                      animationDelay: ".1s",
                    }}
                  ></div>
                  <div
                    className="bar"
                    style={{
                      flex: "1",
                      height: "62%",
                      borderRadius: "8px 8px 0 0",
                      background: "#4a74ff",
                      animationDelay: ".2s",
                    }}
                  ></div>
                  <div
                    className="bar"
                    style={{
                      flex: "1",
                      height: "80%",
                      borderRadius: "8px 8px 0 0",
                      background: "#4a74ff",
                      animationDelay: ".3s",
                    }}
                  ></div>
                  <div
                    className="bar"
                    style={{
                      flex: "1",
                      height: "100%",
                      borderRadius: "8px 8px 0 0",
                      background: "#ff2d2d",
                      animationDelay: ".4s",
                    }}
                  ></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="srow flip">
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <span className="lbl lbl-l muted rv">04 / Performance marketing</span>
              <h2 className="h2x rv">Ads that pay for themselves.</h2>
              <p className="big-p muted rv" style={{ maxWidth: "480px" }}>
                Google and Meta campaigns joined up with landing pages and tracking, so every rupee has a job and you
                can see it doing it.
              </p>
              <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="tag">Google Ads</span>
                <span className="tag">Meta Ads</span>
                <span className="tag">Landing pages</span>
                <span className="tag">Conversion tracking</span>
                <span className="tag">CRO</span>
              </div>
              <Link
                className="btn btn-i rv"
                href="/services/performance-marketing-in-patna"
                style={{ alignSelf: "flex-start" }}
              >
                Explore performance marketing{" "}
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
            <Link
              href="/services/performance-marketing-in-patna"
              className="svis clipin"
              aria-label="Performance marketing"
              style={{ background: "#2f5bff" }}
            >
              <div
                className="zoom"
                style={{
                  transition: "transform 1s cubic-bezier(.22,1,.36,1)",
                  width: "340px",
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div className="lbl lbl-l muted">Campaign results</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600" }}
                  >
                    <span>Google Ads</span>
                    <span>Leads</span>
                  </div>
                  <div style={{ height: "10px", borderRadius: "999px", background: "#ececf1", overflow: "hidden" }}>
                    <div
                      className="fill"
                      style={{ height: "100%", width: "82%", borderRadius: "999px", background: "#ff2d2d" }}
                    ></div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600" }}
                  >
                    <span>Meta Ads</span>
                    <span>Leads</span>
                  </div>
                  <div style={{ height: "10px", borderRadius: "999px", background: "#ececf1", overflow: "hidden" }}>
                    <div
                      className="fill"
                      style={{
                        height: "100%",
                        width: "64%",
                        borderRadius: "999px",
                        background: "#4a74ff",
                        animationDelay: ".2s",
                      }}
                    ></div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600" }}
                  >
                    <span>Landing page</span>
                    <span>Conversion</span>
                  </div>
                  <div style={{ height: "10px", borderRadius: "999px", background: "#ececf1", overflow: "hidden" }}>
                    <div
                      className="fill"
                      style={{
                        height: "100%",
                        width: "48%",
                        borderRadius: "999px",
                        background: "#2f5bff",
                        animationDelay: ".4s",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="srow">
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <span className="lbl lbl-l muted rv">05 / Reputation management</span>
              <h2 className="h2x rv">Be the business with the better reviews.</h2>
              <p className="big-p muted rv" style={{ maxWidth: "480px" }}>
                Online reputation management in Patna: more genuine five-star reviews, a reply to every one, and a
                Google profile that makes people trust you before they call.
              </p>
              <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="tag">Review generation</span>
                <span className="tag">Review replies</span>
                <span className="tag">Google Business Profile</span>
                <span className="tag">Monitoring</span>
              </div>
              <Link
                className="btn btn-i rv"
                href="/services/reputation-management-in-patna"
                style={{ alignSelf: "flex-start" }}
              >
                Explore reputation management{" "}
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
            <Link
              href="/services/reputation-management-in-patna"
              className="svis clipin"
              aria-label="Reputation management"
              style={{ background: "#ffe14d" }}
            >
              <div
                className="zoom"
                style={{
                  transition: "transform 1s cubic-bezier(.22,1,.36,1)",
                  width: "340px",
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  boxShadow: "0 30px 60px -30px rgba(17,17,17,.5)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span className="disp" style={{ fontSize: "56px", lineHeight: "1", fontWeight: "800" }}>
                    4.8
                  </span>
                  <span style={{ display: "flex", gap: "2px", color: "#ff2d2d", fontSize: "24px" }}>
                    <span className="popin">★</span>
                    <span className="popin d1">★</span>
                    <span className="popin d2">★</span>
                    <span className="popin d3">★</span>
                    <span className="popin d4">★</span>
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span
                    style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#4a74ff", flex: "none" }}
                  ></span>
                  <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ height: "8px", width: "80%", borderRadius: "4px", background: "#2f5bff" }}></div>
                    <div style={{ height: "8px", width: "55%", borderRadius: "4px", background: "#ececf1" }}></div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span
                    style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#ff2d2d", flex: "none" }}
                  ></span>
                  <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ height: "8px", width: "70%", borderRadius: "4px", background: "#2f5bff" }}></div>
                    <div style={{ height: "8px", width: "60%", borderRadius: "4px", background: "#ececf1" }}></div>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "flex-end",
                    background: "#2f5bff",
                    color: "#ffffff",
                    borderRadius: "12px 12px 4px 12px",
                    padding: "8px 12px",
                    fontSize: "13px",
                  }}
                >
                  Thank you, Ritu! See you soon.
                </div>
              </div>
            </Link>
          </div>

          <div className="srow flip">
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <span className="lbl lbl-l muted rv">06 / Branding &amp; design</span>
              <h2 className="h2x rv">A brand people remember.</h2>
              <p className="big-p muted rv" style={{ maxWidth: "480px" }}>
                Branding in Patna for businesses ready to look as good as they are: strategy, logo, colours, type and
                guidelines, applied everywhere.
              </p>
              <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="tag">Brand strategy</span>
                <span className="tag">Logo design</span>
                <span className="tag">Visual identity</span>
                <span className="tag">Guidelines</span>
                <span className="tag">Packaging</span>
              </div>
              <Link
                className="btn btn-i rv"
                href="/services/branding-agency-in-patna"
                style={{ alignSelf: "flex-start" }}
              >
                Explore branding{" "}
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
            <Link
              href="/services/branding-agency-in-patna"
              className="svis clipin"
              aria-label="Branding and design"
              style={{ background: "#ff2d2d" }}
            >
              <div
                className="zoom"
                style={{
                  transition: "transform 1s cubic-bezier(.22,1,.36,1)",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 120px)",
                  gap: "16px",
                }}
              >
                <div className="floaty" style={{ height: "120px", borderRadius: "32px", background: "#2f5bff" }}></div>
                <div
                  className="floaty"
                  style={{ height: "120px", borderRadius: "50%", background: "#ffe14d", animationDelay: "-1.6s" }}
                ></div>
                <div
                  className="floaty"
                  style={{
                    gridColumn: "span 2",
                    height: "72px",
                    borderRadius: "999px",
                    background: "#ffffff",
                    animationDelay: "-3.2s",
                  }}
                ></div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

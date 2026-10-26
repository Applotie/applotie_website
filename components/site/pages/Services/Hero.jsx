import Link from "next/link";

// Hero section. Server component.
export default function Hero() {
  return (
    <>
      <section style={{ padding: "64px 0 40px" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="crumb lbl in">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#111111" }}>Services</span>
          </div>
          <h1 className="h1x" style={{ maxWidth: "1100px" }}>
            <span className="mask">
              <span className="d1">Everything you need</span>
            </span>
            <span className="mask">
              <span className="d2">
                to grow online<span style={{ color: "#ff2d2d" }}>.</span>
              </span>
            </span>
          </h1>
          <div
            className="in d4"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "28px",
            }}
          >
            <p className="lead">
              Six digital services from one team in Patna. Use one on its own, or connect them into a system that keeps
              bringing in work.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <Link className="chip" href="/services/web-development-in-patna">
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff2d2d" }}></span>Web
              </Link>
              <Link className="chip" href="/services/app-development-in-patna">
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4a74ff" }}></span>Apps
              </Link>
              <Link className="chip" href="/services/seo-services-in-patna">
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2f5bff" }}></span>SEO
              </Link>
              <Link className="chip" href="/services/performance-marketing-in-patna">
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffe14d" }}></span>Ads
              </Link>
              <Link className="chip" href="/services/reputation-management-in-patna">
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4a74ff" }}></span>Reviews
              </Link>
              <Link className="chip" href="/services/branding-agency-in-patna">
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff2d2d" }}></span>
                Branding
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

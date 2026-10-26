import Link from "next/link";

export const metadata = {
  title: { absolute: "Page not found | Applotie" },
  description: "The page you were looking for doesn't exist or has moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section
      className="wrap"
      style={{
        padding: "clamp(64px, 12vw, 140px) 28px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "flex-start",
      }}
    >
      <span className="lbl" style={{ color: "#ff2d2d" }}>
        Error 404
      </span>
      <h1
        className="disp"
        style={{ fontSize: "clamp(40px, 8vw, 88px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 800 }}
      >
        This page took a wrong turn.
      </h1>
      <p style={{ maxWidth: "560px", fontSize: "18px", lineHeight: "28px", color: "#55555f" }}>
        The link may be old or mistyped. Try one of these instead, or tell us what you were looking for.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <Link className="btn btn-z" href="/">
          Back to home
        </Link>
        <Link className="btn btn-o" href="/services">
          Our services
        </Link>
        <Link className="btn btn-o" href="/blog">
          Journal
        </Link>
        <Link className="btn btn-o" href="/contact">
          Contact us
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import BackToTop from "./BackToTop";
import CopyEmail from "./CopyEmail";
import LiveClock from "./LiveClock";

// Server component: tape ribbons + cobalt footer. Only the clock and copy button hydrate.
export default function Footer() {
  return (
    <>
      <div className="tapes" aria-hidden="true">
        <div className="tape tape-2">
          <div className="mq">
            <div className="mqg">
              <span>Let&apos;s build something loud</span>
              <span>★</span>
              <span>Start a project</span>
              <span>★</span>
              <span>Say hello</span>
              <span>★</span>
              <span>hello@applotie.com</span>
              <span>★</span>
            </div>
            <div className="mqg" aria-hidden="true">
              <span>Let&apos;s build something loud</span>
              <span>★</span>
              <span>Start a project</span>
              <span>★</span>
              <span>Say hello</span>
              <span>★</span>
              <span>hello@applotie.com</span>
              <span>★</span>
            </div>
          </div>
        </div>
        <div className="tape tape-1">
          <div className="mq">
            <div className="mqg">
              <span>We don&apos;t do average</span>
              <span>✱</span>
              <span>Websites</span>
              <span>✱</span>
              <span>Apps</span>
              <span>✱</span>
              <span>SEO</span>
              <span>✱</span>
              <span>Ads that pay back</span>
              <span>✱</span>
              <span>Brands people remember</span>
              <span>✱</span>
              <span>Made in Patna</span>
              <span>✱</span>
            </div>
            <div className="mqg" aria-hidden="true">
              <span>We don&apos;t do average</span>
              <span>✱</span>
              <span>Websites</span>
              <span>✱</span>
              <span>Apps</span>
              <span>✱</span>
              <span>SEO</span>
              <span>✱</span>
              <span>Ads that pay back</span>
              <span>✱</span>
              <span>Brands people remember</span>
              <span>✱</span>
              <span>Made in Patna</span>
              <span>✱</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="foot-w">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          <div className="foot-top">
            <h2 className="disp foot-big">Let&apos;s make your phone ring.</h2>
            <Link className="btn btn-z" href="/contact">
              Start a project{" "}
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
          <div className="foot">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <img
                src="/brand/applotie-lockup-on-ink.svg"
                alt="Applotie"
                width="163"
                height="34"
                loading="lazy"
                style={{ height: "34px", width: "auto", alignSelf: "flex-start" }}
              />
              <p style={{ margin: "0", color: "rgba(255,255,255,.75)", maxWidth: "300px" }}>
                Web development, apps and digital marketing for growing businesses. Made in Patna, Bihar.
              </p>
              <CopyEmail />
            </div>
            <nav className="fcol" aria-label="Services">
              <div className="lbl fh">Services</div>
              <Link className="flink" href="/services/web-development-in-patna">
                Web development
              </Link>
              <Link className="flink" href="/services/app-development-in-patna">
                App development
              </Link>
              <Link className="flink" href="/services/seo-services-in-patna">
                SEO services
              </Link>
              <Link className="flink" href="/services/performance-marketing-in-patna">
                Performance marketing
              </Link>
              <Link className="flink" href="/services/reputation-management-in-patna">
                Reputation management
              </Link>
              <Link className="flink" href="/services/branding-agency-in-patna">
                Branding &amp; design
              </Link>
            </nav>
            <nav className="fcol" aria-label="Studio">
              <div className="lbl fh">Studio</div>
              <Link className="flink" href="/projects">
                Work
              </Link>
              <Link className="flink" href="/products">
                Products
              </Link>
              <Link className="flink" href="/about">
                About
              </Link>
              <Link className="flink" href="/blog">
                Journal
              </Link>
              <Link className="flink" href="/contact">
                Contact
              </Link>
            </nav>
            <div className="fcol">
              <div className="lbl fh">Say hello</div>
              <a className="flink" href="tel:+917250204488">
                +91 7250 20 4488
              </a>
              <a className="flink" href="https://wa.me/917250204488">
                WhatsApp
              </a>
              <a className="flink" href="https://in.linkedin.com/company/applotie">
                LinkedIn
              </a>
              <a className="flink" href="https://www.instagram.com/applotie">
                Instagram
              </a>
            </div>
          </div>
          <div className="fbot">
            <span>© {new Date().getFullYear()} Applotie Technologies</span>
            <span className="lbl lbl-l" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="live"></span>Patna <LiveClock /> · 25.59°N 85.14°E
            </span>
            <div style={{ display: "flex", gap: "22px" }}>
              <Link className="flink" href="/privacy" style={{ fontSize: "14px" }}>
                Privacy
              </Link>
              <Link className="flink" href="/terms" style={{ fontSize: "14px" }}>
                Terms
              </Link>
              <BackToTop className="flink" style={{ fontSize: "14px" }}>
                Back to top ↑
              </BackToTop>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

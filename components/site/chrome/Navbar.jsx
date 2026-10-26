"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LiveClock from "./LiveClock";

// Site header: scroll-aware bar, Services/Products dropdowns, live Patna clock and the mobile menu.
export default function Navbar() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes (adjusting state during render, not in an effect).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenu(false);
  }

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    const lenis = window.__lenis;
    if (menu) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }

    // Dialog focus: move focus into the menu when it opens, keep Tab inside it, and return focus
    // to the burger button when it closes.
    if (menu) {
      menuRef.current?.querySelector("button, a")?.focus();
    } else if (wasOpen.current) {
      burgerRef.current?.focus();
    }
    wasOpen.current = menu;

    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenu(false);
        return;
      }
      if (!menu || e.key !== "Tab" || !menuRef.current) return;
      const items = menuRef.current.querySelectorAll("a[href], button");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));
  const nl = (cls, href) => (isActive(href) ? cls + " on" : cls);
  const cur = (href) => (isActive(href) ? "page" : undefined);

  const navPad = scrolled ? "12px" : "20px";
  const navLine = scrolled ? "#ececf1" : "rgba(236,236,241,0)";
  const menuExp = menu ? "true" : "false";
  const toggleMenu = () => setMenu((m) => !m);
  const closeMenu = () => setMenu(false);

  return (
    <>
      <header className="nav" style={{ borderBottomColor: navLine }}>
        <div className="wrap navin" style={{ paddingTop: navPad, paddingBottom: navPad }}>
          <Link href="/" className="logo" aria-label="Applotie home">
            <img src="/brand/applotie-lockup.svg" alt="Applotie" width="153" height="32" />
          </Link>
          <nav className="navlinks" aria-label="Main">
            <Link className={nl("navlink", "/about")} href="/about" aria-current={cur("/about")}>
              <span className="roll">About</span>
            </Link>
            <div className="dd">
              <Link
                className={nl("navlink dd-t", "/services")}
                href="/services"
                aria-current={cur("/services")}
                aria-haspopup="true"
              >
                <span className="roll">Services</span>
                <svg
                  className="chev"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </Link>
              <div className="dd-m">
                <div className="dd-p dd-wide">
                  <div className="dd-grid">
                    <Link className="dd-i" href="/services/web-development-in-patna">
                      <span className="dd-ic" style={{ background: "#ff2d2d" }}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#111111"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                          <path d="M8 21h8"></path>
                          <path d="M12 17v4"></path>
                        </svg>
                      </span>
                      <span className="dd-tx">
                        <strong>Web development</strong>
                        <span>Websites that bring in work</span>
                      </span>
                    </Link>
                    <Link className="dd-i" href="/services/app-development-in-patna">
                      <span className="dd-ic" style={{ background: "#4a74ff" }}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#111111"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="5" y="2" width="14" height="20" rx="2"></rect>
                          <path d="M12 18h.01"></path>
                        </svg>
                      </span>
                      <span className="dd-tx">
                        <strong>App development</strong>
                        <span>Android &amp; iOS apps</span>
                      </span>
                    </Link>
                    <Link className="dd-i" href="/services/seo-services-in-patna">
                      <span className="dd-ic" style={{ background: "#2f5bff" }}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                      </span>
                      <span className="dd-tx">
                        <strong>SEO services</strong>
                        <span>Rank first on Google</span>
                      </span>
                    </Link>
                    <Link className="dd-i" href="/services/performance-marketing-in-patna">
                      <span className="dd-ic" style={{ background: "#ffe14d" }}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#111111"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                          <path d="M16 7h6v6"></path>
                        </svg>
                      </span>
                      <span className="dd-tx">
                        <strong>Performance marketing</strong>
                        <span>Google &amp; Meta ads that pay back</span>
                      </span>
                    </Link>
                    <Link className="dd-i" href="/services/reputation-management-in-patna">
                      <span className="dd-ic" style={{ background: "#ececf1" }}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#111111"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                      </span>
                      <span className="dd-tx">
                        <strong>Reputation management</strong>
                        <span>Reviews &amp; online trust</span>
                      </span>
                    </Link>
                    <Link className="dd-i" href="/services/branding-agency-in-patna">
                      <span className="dd-ic" style={{ background: "#ff2d2d" }}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#111111"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"></path>
                        </svg>
                      </span>
                      <span className="dd-tx">
                        <strong>Branding &amp; design</strong>
                        <span>Logos &amp; brand identity</span>
                      </span>
                    </Link>
                  </div>
                  <div className="dd-foot">
                    <Link className="ul" href="/services">
                      All services{" "}
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
                    <span className="hand" style={{ fontSize: "20px" }}>
                      not sure? we&apos;ll help you pick
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="dd">
              <Link
                className={nl("navlink dd-t", "/products")}
                href="/products"
                aria-current={cur("/products")}
                aria-haspopup="true"
              >
                <span className="roll">Products</span>
                <svg
                  className="chev"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </Link>
              <div className="dd-m">
                <div className="dd-p">
                  <Link className="dd-feat" href="/products/clinic-management-software">
                    <span className="dd-shot" aria-hidden="true">
                      <span style={{ width: "34px", borderRadius: "8px", background: "#2f5bff" }}></span>
                      <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span
                          style={{ height: "10px", width: "50%", borderRadius: "4px", background: "#2f5bff" }}
                        ></span>
                        <span style={{ height: "26px", borderRadius: "8px", background: "#ffffff" }}></span>
                        <span style={{ height: "26px", borderRadius: "8px", background: "#ffffff" }}></span>
                        <span style={{ height: "26px", borderRadius: "8px", background: "#ffe14d" }}></span>
                      </span>
                    </span>
                    <span className="dd-tx">
                      <span className="dd-new lbl">New</span>
                      <strong>Applotie Clinic</strong>
                      <span>Clinic management software for appointments, records and billing</span>
                    </span>
                  </Link>
                  <Link className="dd-i" href="/products">
                    <span className="dd-ic" style={{ background: "#ececf1" }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#111111"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                    </span>
                    <span className="dd-tx">
                      <strong>All products</strong>
                      <span>Ready-made software from our studio</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <Link className={nl("navlink", "/projects")} href="/projects" aria-current={cur("/projects")}>
              <span className="roll">Work</span>
            </Link>
            <Link className={nl("navlink", "/blog")} href="/blog" aria-current={cur("/blog")}>
              <span className="roll">Journal</span>
            </Link>
          </nav>
          <div className="navr">
            <div className="navmeta lbl">
              <span className="live"></span>Patna <LiveClock />
            </div>
            <Link className="btn btn-z btn-sm" href="/contact">
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
            <button
              type="button"
              ref={burgerRef}
              className="burger"
              aria-label="Open menu"
              aria-expanded={menuExp}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      {menu && (
        <>
          <div className="mmenu" id="mobile-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label="Menu">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <img
                src="/brand/applotie-lockup-on-ink.svg"
                alt="Applotie"
                width="144"
                height="30"
                style={{ height: "30px", width: "auto" }}
              />
              <button type="button" className="burger x" aria-label="Close menu" onClick={closeMenu}>
                <span></span>
                <span></span>
              </button>
            </div>
            <nav className="mlinks" aria-label="Mobile">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/products">Products</Link>
              <Link href="/projects">Work</Link>
              <Link href="/blog">Journal</Link>
            </nav>
            <div className="msub">
              <span className="lbl" style={{ color: "rgba(255,255,255,.55)" }}>
                Services
              </span>
              <div>
                <Link href="/services/web-development-in-patna">Web development</Link>
                <Link href="/services/app-development-in-patna">App development</Link>
                <Link href="/services/seo-services-in-patna">SEO services</Link>
                <Link href="/services/performance-marketing-in-patna">Performance marketing</Link>
                <Link href="/services/reputation-management-in-patna">Reputation management</Link>
                <Link href="/services/branding-agency-in-patna">Branding &amp; design</Link>
                <Link href="/products/clinic-management-software">Applotie Clinic</Link>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <Link className="btn btn-z" href="/contact">
                Start a project
              </Link>
              <div
                className="lbl"
                style={{ display: "flex", gap: "8px", alignItems: "center", color: "rgba(255,255,255,.65)" }}
              >
                <span className="live"></span>Patna <LiveClock /> · hello@applotie.com
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

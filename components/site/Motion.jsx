"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
  Site-wide motion: Lenis smooth scrolling kept in sync with GSAP ScrollTrigger.
  Pages opt in with class hooks, so section markup stays server-rendered:
    .rv          fade + rise on scroll
    .rvm > span  masked line rise (headlines)
    .clipin      rounded clip-path reveal (images, panels)
    .para        gentle parallax
    .sprog       top scroll-progress bar
    .wda-*       the "We don't do average" scroll sequence on the home page
  Everything is skipped when the visitor prefers reduced motion.
*/

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Motion() {
  const pathname = usePathname();

  // Lenis: created once for the whole session.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (reducedMotion()) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: { offset: -90 } });
    window.__lenis = lenis;
    document.documentElement.classList.add("lenis");
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // Scroll animations: rebuilt for every route.
  useEffect(() => {
    if (reducedMotion()) return;
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
      lenis.resize();
    }

    const ctx = gsap.context(() => {
      const ease = "power3.out";

      gsap.to(".sprog", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.2 },
      });

      const rv = gsap.utils.toArray(".rv");
      if (rv.length) {
        // opacity (not autoAlpha/visibility) so content stays in the accessibility tree before it animates in
        gsap.set(rv, { opacity: 0, y: 22, transition: "none" });
        ScrollTrigger.batch(rv, {
          start: "top 92%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease,
              stagger: 0.08,
              overwrite: true,
              // hand transforms back to CSS so hover effects keep working
              clearProps: "transform,transition",
            }),
        });
      }

      gsap.utils.toArray(".rvm").forEach((mask) => {
        const lines = mask.querySelectorAll(":scope > span");
        if (!lines.length) return;
        gsap.fromTo(
          lines,
          { yPercent: 105 },
          {
            yPercent: 0,
            duration: 1,
            ease,
            stagger: 0.08,
            scrollTrigger: { trigger: mask, start: "top 90%", once: true },
          }
        );
      });

      gsap.utils.toArray(".clipin").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(22% 0% 0% 0% round 22px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 22px)",
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "top 45%", scrub: 0.4 },
          }
        );
      });

      gsap.utils.toArray(".para").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 36 },
          { y: -36, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } }
        );
      });

      // "We don't do average": lines slide together, the strike draws, the sticker pops.
      gsap.utils.toArray(".wda-l").forEach((el) => {
        gsap.fromTo(
          el,
          { xPercent: -16 },
          { xPercent: 0, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "top 45%", scrub: 0.3 } }
        );
      });
      gsap.utils.toArray(".wda-r").forEach((el) => {
        gsap.fromTo(
          el,
          { xPercent: 18 },
          { xPercent: 0, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "top 45%", scrub: 0.3 } }
        );
      });
      gsap.utils.toArray(".wda-strike path").forEach((path) => {
        gsap.fromTo(
          path,
          { strokeDashoffset: 720 },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: { trigger: path.closest("svg") || path, start: "top 78%", end: "top 50%", scrub: 0.3 },
          }
        );
      });
      gsap.utils.toArray(".wda-stick").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, rotate: -24, scale: 0.4, transition: "none" },
          {
            opacity: 1,
            rotate: -5,
            scale: 1,
            duration: 0.9,
            ease: "back.out(2.2)",
            clearProps: "transform,transition",
            scrollTrigger: { trigger: el, start: "top 80%", once: true },
          }
        );
      });
    });

    // Re-measure once fonts and images have settled.
    const refresh = () => ScrollTrigger.refresh();
    const raf = requestAnimationFrame(refresh);
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      /*
       * Initial reveal states.
       * Content remains in the document and only receives
       * animation once GSAP is available.
       */
      gsap.set(".about-reveal", {
        opacity: 0,
        y: 28,
      });

      gsap.set(".about-stat", {
        opacity: 0,
        y: 22,
      });

      gsap.set(".about-capability", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".about-principle", {
        opacity: 0,
        y: 25,
      });

      /*
       * HERO
       */
      const hero = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: ".about-animate-section",
          start: "top 82%",
          once: true,
        },
      });

      hero.to(".about-animate-section:first-of-type .about-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.12,
      });

      /*
       * General sections
       */
      gsap.utils
        .toArray<HTMLElement>(".about-animate-section")
        .forEach((section) => {
          if (section === document.querySelector(".about-animate-section")) {
            return;
          }

          const reveals = section.querySelectorAll(".about-reveal");

          if (!reveals.length) return;

          gsap.to(reveals, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          });
        });

      /*
       * Statistics
       */
      gsap.to(".about-stat", {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-stat",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      /*
       * Capabilities
       */
      gsap.to(".about-capability", {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-capability",
          start: "top 86%",
          toggleActions: "play none none reverse",
        },
      });

      /*
       * Principles
       */
      gsap.to(".about-principle", {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-principle",
          start: "top 84%",
          toggleActions: "play none none reverse",
        },
      });

      /*
       * Subtle hover interaction for capability rows.
       * No movement of the actual layout.
       */
      const capabilities =
        gsap.utils.toArray<HTMLElement>(".about-capability");

      capabilities.forEach((item) => {
        const number = item.querySelector("span");

        if (!number) return;

        const enter = () => {
          gsap.to(number, {
            x: 5,
            color: "#E52B2B",
            duration: 0.2,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(number, {
            x: 0,
            color: "#F0B900",
            duration: 0.2,
            ease: "power2.out",
          });
        };

        item.addEventListener("mouseenter", enter);
        item.addEventListener("mouseleave", leave);
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
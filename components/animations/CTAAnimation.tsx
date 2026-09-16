"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTAAnimation() {
  useEffect(() => {
    const container = document.querySelector(
      "[data-cta-container]"
    );

    if (!container) return;

    const ctx = gsap.context(() => {
      const content = container.querySelector("[data-cta-content]");
      const bottom = container.querySelector("[data-cta-bottom]");
      const red = container.querySelector("[data-cta-red]");
      const yellow = container.querySelector("[data-cta-yellow]");

      if (!content || !bottom || !red || !yellow) return;

      // Initial states
      gsap.set(content, {
        opacity: 0,
        y: 35,
      });

      gsap.set(bottom, {
        opacity: 0,
        y: 20,
      });

      gsap.set([red, yellow], {
        opacity: 0,
        scale: 0.7,
      });

      // Content reveal
      gsap.to(content, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      });

      // Bottom information
      gsap.to(bottom, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          once: true,
        },
      });

      // Decorative glow
      gsap.to(red, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once: true,
        },
      });

      gsap.to(yellow, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once: true,
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
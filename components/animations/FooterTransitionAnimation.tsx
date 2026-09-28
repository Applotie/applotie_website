"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function FooterTransitionAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      gsap.to(".footer-wave-track", {
        xPercent: 16,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NavbarAnimation() {
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = document.getElementById("animated-navbar");
    const highlight = highlightRef.current;

    if (!navbar || !highlight) return;

    const items =
      navbar.querySelectorAll<HTMLElement>("[data-nav-item]");

    if (!items.length) return;

    const navContainer = navbar.querySelector(
      "[data-nav-item]"
    )?.parentElement;

    if (!navContainer) return;

    const moveHighlight = (item: HTMLElement) => {
      const navbarRect = navbar.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      gsap.to(highlight, {
        x: itemRect.left - navbarRect.left,
        y: itemRect.top - navbarRect.top,
        width: itemRect.width,
        height: itemRect.height,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const hideHighlight = () => {
      gsap.to(highlight, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Store handlers so we can remove the exact same functions
    const itemHandlers = new Map<
      HTMLElement,
      (event: MouseEvent) => void
    >();

    items.forEach((item) => {
      const handler = () => {
        moveHighlight(item);
      };

      itemHandlers.set(item, handler);
      item.addEventListener("mouseenter", handler);
    });

    navContainer.addEventListener(
      "mouseleave",
      hideHighlight
    );

    return () => {
      // Remove event listeners properly
      itemHandlers.forEach((handler, item) => {
        item.removeEventListener("mouseenter", handler);
      });

      navContainer.removeEventListener(
        "mouseleave",
        hideHighlight
      );

      // Kill GSAP animations
      gsap.killTweensOf(highlight);
    };
  }, []);

  return (
    <div
      ref={highlightRef}
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        left-0
        top-0
        z-10
        rounded-full
        border
        border-white/10
        bg-white/[0.07]
        opacity-0
        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
      "
    />
  );
}

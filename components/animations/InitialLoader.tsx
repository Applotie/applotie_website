"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const BRAND = "Applotie Technologies";

export default function InitialLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const progress = progressRef.current;
    const letters = lettersRef.current.filter(Boolean);

    if (!loader || !progress || !letters.length) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const context = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(letters, { opacity: 1, y: 0, rotate: 0 });
        gsap.set(progress, { scaleX: 1 });
        gsap.to(loader, {
          opacity: 0,
          duration: 0.35,
          delay: 0.25,
          onComplete: () => {
            loader.style.display = "none";
          },
        });
        return;
      }

      gsap.set(letters, {
        opacity: 0,
        y: () => -window.innerHeight * (0.8 + Math.random() * 0.7),
        x: () => (Math.random() - 0.5) * 180,
        rotate: () => (Math.random() - 0.5) * 70,
        transformOrigin: "50% 100%",
      });
      gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.to(loader, {
            opacity: 0,
            duration: 0.65,
            ease: "power2.inOut",
            onComplete: () => {
              loader.style.display = "none";
            },
          });
        },
      });

      timeline
        .to(progress, {
          scaleX: 1,
          duration: 1.9,
          ease: "power2.inOut",
        }, 0)
        .to(letters, {
          opacity: 1,
          y: 0,
          x: 0,
          rotate: 0,
          duration: 1.15,
          stagger: 0.045,
          ease: "bounce.out",
        }, 0.15)
        .to(letters, {
          y: -5,
          duration: 0.18,
          stagger: 0.018,
          ease: "power2.out",
        }, "-=0.25")
        .to(letters, {
          y: 0,
          duration: 0.22,
          stagger: 0.018,
          ease: "power2.inOut",
        }, "-=0.08")
        .to({}, { duration: 0.3 });
    }, loader);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white"
      aria-label="Loading Applotie Technologies"
      role="status"
    >
      <div className="relative flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E52B2B] sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-[#E52B2B]" />
          Digital products, built to matter
          <span className="h-2 w-2 rounded-full bg-[#F5C518]" />
        </div>

        <div className="flex flex-wrap justify-center text-4xl font-semibold leading-none tracking-[-0.06em] text-[#202124] sm:text-6xl lg:text-8xl">
          {BRAND.split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              ref={(element) => {
                if (element) lettersRef.current[index] = element;
              }}
              className={letter === " " ? "w-3 sm:w-5 lg:w-7" : "inline-block"}
              aria-hidden="true"
            >
              {letter === " " ? "" : letter}
            </span>
          ))}
        </div>

        <div className="mt-10 h-1 w-40 overflow-hidden bg-[#202124]/10 sm:w-56">
          <div ref={progressRef} className="h-full w-full bg-[#E52B2B]" />
        </div>
      </div>
    </div>
  );
}

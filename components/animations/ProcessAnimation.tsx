"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  number: string;
  title: string;
  description: string;
};

type ProcessAnimationProps = {
  steps: Step[];
};

export default function ProcessAnimation({
  steps,
}: ProcessAnimationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const desktopProgressRef = useRef<HTMLDivElement>(null);
  const mobileProgressRef = useRef<HTMLDivElement>(null);

  const desktopItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const processSection = section.closest<HTMLElement>("#process");

      if (processSection) {
        processSection.style.backgroundImage =
          "linear-gradient(to right, rgba(32,33,36,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(32,33,36,0.08) 1px, transparent 1px)";
        processSection.style.backgroundSize = "56px 56px";
        processSection.style.backgroundPosition = "center top";
      }

      /* ==========================================
          DESKTOP
      =========================================== */

      const desktopItems = desktopItemsRef.current.filter(
        Boolean
      ) as HTMLDivElement[];

      const desktopProgress = desktopProgressRef.current;

      if (desktopProgress) {
        gsap.set(desktopProgress, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.to(desktopProgress, {
          scaleX: 1,
          ease: "none",

          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 75%",
            scrub: 1,
          },
        });
      }

      if (desktopItems.length) {
        gsap.set(desktopItems, {
          opacity: 0,
          y: 35,
        });

        gsap.to(desktopItems, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power3.out",

          scrollTrigger: {
            trigger: section,
            start: "top 68%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* ==========================================
          MOBILE / TABLET
      =========================================== */

      const mobileItems = mobileItemsRef.current.filter(
        Boolean
      ) as HTMLDivElement[];

      const mobileProgress = mobileProgressRef.current;

      if (mobileProgress) {
        gsap.set(mobileProgress, {
          scaleY: 0,
          transformOrigin: "top center",
        });

        gsap.to(mobileProgress, {
          scaleY: 1,
          ease: "none",

          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            end: "bottom 80%",
            scrub: 1,
          },
        });
      }

      if (mobileItems.length) {
        gsap.set(mobileItems, {
          opacity: 0,
          x: 30,
        });

        mobileItems.forEach((item) => {
          gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",

            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* ==========================================
          DESKTOP TIMELINE
      =========================================== */}

      <div className="hidden lg:block">
        <div className="relative">
          {/* Base line */}
          <div
            className="
              absolute
              left-[6%]
              right-[6%]
              top-[32px]
              h-px
              bg-black/10
            "
          />

          {/* Red progress */}
          <div
            ref={desktopProgressRef}
            className="
              absolute
              left-[6%]
              right-[6%]
              top-[31px]
              h-[2px]
              origin-left
              bg-[#E52B2B]
            "
          />

          {/* Steps */}
          <div className="relative grid grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  desktopItemsRef.current[index] = el;
                }}
                className="relative"
              >
                {/* Node */}
                <div className="mb-10 flex h-[65px] items-start justify-center">
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-[#1a1c22]
                      shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    "
                  >
                    {/* Yellow accent */}
                    <span
                      className="
                        absolute
                        -right-1
                        -top-1
                        h-3
                        w-3
                        rounded-full
                        bg-[#F5C518]
                      "
                    />

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-black
                      "
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3
                    className="
                      mb-3
                      text-xl
                      font-semibold
                      tracking-[-0.02em]
                      text-black
                      xl:text-2xl
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mx-auto
                      max-w-[220px]
                      text-sm
                      leading-6
                      font-semibold
                      text-black/80
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==========================================
          MOBILE / TABLET TIMELINE
      =========================================== */}

      <div className="lg:hidden">
        <div className="relative">
          {/* Base vertical line */}
          <div
            className="
              absolute
              bottom-8
              left-[23px]
              top-8
              w-px
              bg-white/10
              sm:left-[27px]
            "
          />

          {/* Animated red line */}
          <div
            ref={mobileProgressRef}
            className="
              absolute
              bottom-8
              left-[22px]
              top-8
              w-[2px]
              origin-top
              bg-[#E52B2B]
              sm:left-[26px]
            "
          />

          <div className="space-y-10 sm:space-y-14">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  mobileItemsRef.current[index] = el;
                }}
                className="
                  relative
                  flex
                  gap-6
                  sm:gap-8
                "
              >
                {/* Node */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-[#1a1c22]
                    shadow-[0_6px_20px_rgba(0,0,0,0.05)]
                    sm:h-14
                    sm:w-14
                  "
                >
                  <span
                    className="
                      text-xs
                      font-semibold
                      text-white
                      sm:text-sm
                    "
                  >
                    {step.number}
                  </span>

                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#F5C518]
                      sm:h-3
                      sm:w-3
                    "
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 pt-1">
                  <h3
                    className="
                      mb-2
                      text-xl
                      font-semibold
                      tracking-[-0.02em]
                      text-white
                      sm:text-2xl
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      max-w-xl
                      text-sm
                      leading-6
                      text-black/70
                      sm:text-base
                      sm:leading-7
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
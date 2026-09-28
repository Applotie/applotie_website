"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        "[data-timeline-item]"
      );

      const intro = document.querySelector(
        "[data-timeline-intro]"
      );

      const progress = document.querySelector(
        "[data-timeline-progress]"
      );

      const end = document.querySelector(
        "[data-timeline-end]"
      );

      if (!items.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(items, {
          opacity: 1,
          y: 0,
        });

        if (intro) {
          gsap.set(intro, {
            opacity: 1,
            y: 0,
          });
        }

        if (progress) {
          gsap.set(progress, {
            scaleY: 1,
          });
        }

        if (end) {
          gsap.set(end, {
            opacity: 1,
            y: 0,
          });
        }

        return;
      }

      /* =====================================================
         INTRO
      ===================================================== */

      if (intro) {
        gsap.fromTo(
          intro,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: intro,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      /* =====================================================
         TIMELINE ITEMS
      ===================================================== */

      items.forEach((item) => {
        const content = item.querySelector(
          "[data-timeline-content]"
        );

        const year = item.querySelector(
          "[data-timeline-year]"
        );

        const isLeft =
          item.querySelector(".lg\\:col-start-1") !== null;

        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              once: true,
            },
          }
        );

        if (content) {
          gsap.fromTo(
            content,
            {
              opacity: 0,
              x: isLeft ? -30 : 30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 78%",
                once: true,
              },
            }
          );
        }

        if (year) {
          gsap.fromTo(
            year,
            {
              opacity: 0,
              scale: 0.88,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 78%",
                once: true,
              },
            }
          );
        }
      });

      /* =====================================================
         CENTRAL PROGRESS
      ===================================================== */

      if (progress) {
        gsap.to(progress, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: progress.parentElement,
            start: "top 65%",
            end: "bottom 70%",
            scrub: 0.8,
          },
        });
      }

      /* =====================================================
         END STATEMENT
      ===================================================== */

      if (end) {
        gsap.fromTo(
          end,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: end,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
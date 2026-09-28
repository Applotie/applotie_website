"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DifferenceAnimation() {
  useEffect(() => {
    const section = document.querySelector(
      "#difference"
    ) as HTMLElement | null;

    if (!section) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        "[data-difference-item]"
      );

      const intro = section.querySelector(
        "[data-difference-intro]"
      );

      const footer = section.querySelector(
        "[data-difference-footer]"
      );

      if (!items.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /* =====================================================
         REDUCED MOTION
      ====================================================== */

      if (reduceMotion) {
        gsap.set(items, {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });

        if (intro) {
          gsap.set(intro, {
            clearProps: "all",
            opacity: 1,
            y: 0,
          });
        }

        if (footer) {
          gsap.set(footer, {
            clearProps: "all",
            opacity: 1,
            y: 0,
          });
        }

        return;
      }

      /* =====================================================
         INTRO ANIMATION
      ====================================================== */

      if (intro) {
        gsap.from(intro, {
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: intro,
            start: "top 85%",
            once: true,
          },
        });
      }

      /* =====================================================
         ITEM ANIMATION

         IMPORTANT:
         We DO NOT animate opacity from 0.

         Therefore if GSAP fails, the content is still visible.
      ====================================================== */

      gsap.from(items, {
        y: 35,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(
            "[data-difference-list]"
          ),
          start: "top 85%",
          once: true,
        },
      });

      /* =====================================================
         FOOTER
      ====================================================== */

      if (footer) {
        gsap.from(footer, {
          y: 35,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            once: true,
          },
        });
      }

      /* =====================================================
         DESKTOP INTERACTION
      ====================================================== */

      const desktop = window.matchMedia(
        "(min-width: 1024px)"
      );

      if (!desktop.matches) return;

      const details = items.map(
        (item) =>
          item.querySelector(
            "[data-difference-detail]"
          ) as HTMLElement | null
      );

      const words = items.map(
        (item) =>
          item.querySelector(
            "[data-difference-word]"
          ) as HTMLElement | null
      );

      const lines = items.map(
        (item) =>
          item.querySelector(
            "[data-difference-line]"
          ) as HTMLElement | null
      );

      let activeIndex = 0;

      /* =====================================================
         OPEN ITEM
      ====================================================== */

      const openItem = (index: number) => {
        activeIndex = index;

        items.forEach((item, i) => {
          const detail = details[i];
          const word = words[i];
          const line = lines[i];

          if (!detail || !word || !line) return;

          if (i === index) {
            /*
              scrollHeight gives the actual height of the
              content. No hard-coded 260px.
            */

            const height = detail.scrollHeight;

            gsap.to(detail, {
              maxHeight: height,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
              overwrite: true,
            });

            gsap.to(word, {
              x: 10,
              duration: 0.4,
              ease: "power3.out",
              overwrite: true,
            });

            gsap.to(line, {
              width: "100%",
              duration: 0.5,
              ease: "power3.out",
              overwrite: true,
            });
          } else {
            gsap.to(detail, {
              maxHeight: 0,
              opacity: 0,
              duration: 0.35,
              ease: "power2.inOut",
              overwrite: true,
            });

            gsap.to(word, {
              x: 0,
              duration: 0.35,
              ease: "power2.out",
              overwrite: true,
            });

            gsap.to(line, {
              width: 0,
              duration: 0.35,
              ease: "power2.out",
              overwrite: true,
            });
          }
        });
      };

      /* =====================================================
         FIRST ITEM
      ====================================================== */

      openItem(0);

      /* =====================================================
         HOVER
      ====================================================== */

      items.forEach((item, index) => {
        const enter = () => {
          if (index === activeIndex) return;

          openItem(index);
        };

        item.addEventListener("mouseenter", enter);

        (
          item as HTMLElement & {
            __differenceEnter?: () => void;
          }
        ).__differenceEnter = enter;
      });

      /* =====================================================
         RESIZE
      ====================================================== */

      const handleResize = () => {
        const detail = details[activeIndex];

        if (!detail) return;

        gsap.set(detail, {
          maxHeight: detail.scrollHeight,
        });

        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      (
        section as HTMLElement & {
          __differenceResize?: () => void;
        }
      ).__differenceResize = handleResize;
    }, section);

    /* =====================================================
       CLEANUP
    ====================================================== */

    return () => {
      const items = section.querySelectorAll(
        "[data-difference-item]"
      );

      items.forEach((item) => {
        const element = item as HTMLElement & {
          __differenceEnter?: () => void;
        };

        if (element.__differenceEnter) {
          item.removeEventListener(
            "mouseenter",
            element.__differenceEnter
          );
        }
      });

      const sectionElement = section as HTMLElement & {
        __differenceResize?: () => void;
      };

      if (sectionElement.__differenceResize) {
        window.removeEventListener(
          "resize",
          sectionElement.__differenceResize
        );
      }

      ctx.revert();
    };
  }, []);

  return null;
}
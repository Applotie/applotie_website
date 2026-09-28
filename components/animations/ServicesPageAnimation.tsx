"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        return;
      }

      /*
       * IMPORTANT:
       * We do not globally set opacity: 0 on the page.
       * If GSAP fails to load, the content remains visible.
       */

      const heroItems = gsap.utils.toArray<HTMLElement>(
        ".services-hero .services-reveal"
      );

      gsap.fromTo(
        heroItems,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".services-intro",
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-intro",
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const serviceItems =
        gsap.utils.toArray<HTMLElement>(".service-item");

      serviceItems.forEach((item) => {
        const number = item.querySelector(".service-number");
        const title = item.querySelector(".service-title");
        const content = item.querySelectorAll(".service-content");
        const capabilities = item.querySelectorAll(".service-capability");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        timeline
          .fromTo(
            number,
            {
              opacity: 0,
              x: -12,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.35,
              ease: "power2.out",
            }
          )
          .fromTo(
            title,
            {
              opacity: 0,
              y: 22,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power3.out",
            },
            "-=0.2"
          )
          .fromTo(
            content,
            {
              opacity: 0,
              y: 18,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.25"
          )
          .fromTo(
            capabilities,
            {
              opacity: 0,
              x: -8,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.3,
              stagger: 0.035,
              ease: "power2.out",
            },
            "-=0.2"
          );
      });

      gsap.fromTo(
        ".services-process-intro",
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-process-intro",
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".services-process-item",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-process-item",
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /*
       * Small interaction on each service:
       * the service number shifts slightly and the title moves a few pixels.
       * No layout movement is introduced.
       */
      serviceItems.forEach((item) => {
        const number = item.querySelector<HTMLElement>(".service-number");
        const title = item.querySelector<HTMLElement>(".service-title");

        if (!number || !title) return;

        const enter = () => {
          gsap.to(number, {
            x: 5,
            duration: 0.2,
            ease: "power2.out",
          });

          gsap.to(title, {
            x: 4,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(number, {
            x: 0,
            duration: 0.2,
            ease: "power2.out",
          });

          gsap.to(title, {
            x: 0,
            duration: 0.25,
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
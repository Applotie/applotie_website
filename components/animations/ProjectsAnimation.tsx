"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      /*
       * Initial states
       */

      gsap.set(".projects-reveal", {
        opacity: 0,
        y: 28,
      });

      gsap.set(".project-card", {
        opacity: 0,
        y: 45,
      });

      gsap.set(".project-accent", {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(".project-column", {
        opacity: 0,
        y: 15,
      });

      gsap.set(".project-impact", {
        opacity: 0,
        x: 15,
      });

      gsap.set(".projects-approach-item", {
        opacity: 0,
        y: 25,
      });

      /*
       * Hero
       */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline.to(".projects-hero .projects-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
      });

      /*
       * Project cards
       */

      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card) => {
        const accent = card.querySelector(".project-accent");
        const columns = card.querySelectorAll(".project-column");
        const impact = card.querySelector(".project-impact");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        timeline
          .to(card, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          })
          .to(
            accent,
            {
              scaleY: 1,
              duration: 0.55,
              ease: "power3.out",
            },
            "-=0.45"
          )
          .to(
            columns,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.3"
          )
          .to(
            impact,
            {
              opacity: 1,
              x: 0,
              duration: 0.45,
              ease: "power2.out",
            },
            "-=0.35"
          );
      });

      /*
       * Approach section
       */

      gsap.to(".projects-approach-item", {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-approach-item",
          start: "top 84%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".projects-animate-section .projects-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-animate-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      /*
       * Case-study hover interaction
       *
       * Only visual emphasis changes.
       * The layout itself never moves.
       */

      cards.forEach((card) => {
        const accent = card.querySelector<HTMLElement>(".project-accent");
        const impact = card.querySelector<HTMLElement>(".project-impact");

        const enter = () => {
          gsap.to(accent, {
            width: 6,
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(impact, {
            x: 5,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(accent, {
            width: 3,
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(impact, {
            x: 0,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
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
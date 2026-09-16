"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ResultsAnimation() {
  useEffect(() => {
    const section = document.querySelector("#results");

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
      const titleLines =
        gsap.utils.toArray<HTMLElement>(".results-title-line");

      /*
       * ==========================================
       * INITIAL STATES
       * ==========================================
       */

      gsap.set(".results-eyebrow", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".results-eyebrow-dot", {
        scale: 0,
      });

      gsap.set(titleLines, {
        opacity: 0,
        y: 80,
        rotateX: -35,
        transformOrigin: "50% 100%",
      });

      gsap.set(".results-title-accent", {
        opacity: 0,
        x: -30,
      });

      gsap.set(".results-description", {
        opacity: 0,
        y: 30,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 80,
        scale: 0.92,
        rotateX: 8,
      });

      /*
       * ==========================================
       * MAIN ENTRANCE TIMELINE
       * ==========================================
       */

      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      intro
        .to(".results-eyebrow", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(
          ".results-eyebrow-dot",
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(3)",
          },
          "-=0.45"
        )
        .to(
          titleLines,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .to(
          ".results-title-accent",
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(
          ".results-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.35"
        );

      /*
       * ==========================================
       * NUMBER COUNT-UP
       * ==========================================
       */

      cards.forEach((card) => {
        const numberElement =
          card.querySelector<HTMLElement>("[data-number]");

        if (!numberElement) return;

        const value = Number(numberElement.dataset.value);
        const suffix = numberElement.dataset.suffix ?? "";

        const counter = {
          value: 0,
        };

        gsap.to(counter, {
          value,
          duration: 1.8,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            numberElement.textContent =
              `${Math.round(counter.value)}${suffix}`;
          },
        });
      });

      /*
       * ==========================================
       * CARD INTERACTION
       * ==========================================
       */

      cards.forEach((card) => {
        const glow =
          card.querySelector<HTMLElement>(".card-glow");

        const icon =
          card.querySelector<HTMLElement>("[data-icon]");

        const accent =
          card.querySelector<HTMLElement>(".card-accent");

        if (!glow || !icon || !accent) return;

        const handleMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();

          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          const rotateY =
            ((x / rect.width) - 0.5) * 10;

          const rotateX =
            ((y / rect.height) - 0.5) * -10;

          gsap.to(card, {
            rotateX,
            rotateY,
            scale: 1.025,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });

          gsap.to(glow, {
            x: x,
            y: y,
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
            overwrite: true,
          });

          gsap.to(icon, {
            scale: 1.15,
            rotate: 8,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });

          gsap.to(accent, {
            width: "64px",
            duration: 0.35,
            ease: "power3.out",
            overwrite: true,
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          });

          gsap.to(glow, {
            opacity: 0,
            duration: 0.35,
          });

          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.5,
            ease: "back.out(2)",
          });

          gsap.to(accent, {
            width: 0,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
          card.removeEventListener("mousemove", handleMove);
          card.removeEventListener("mouseleave", handleLeave);
        };
      });

      /*
       * ==========================================
       * BACKGROUND FLOATING EFFECT
       * ==========================================
       */

      gsap.to(".results-orb", {
        y: 50,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause resume pause",
        },
      });

      /*
       * ==========================================
       * EYEBROW PULSE
       * ==========================================
       */

      gsap.to(".results-eyebrow-dot", {
        scale: 1.5,
        opacity: 0.5,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause resume pause",
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
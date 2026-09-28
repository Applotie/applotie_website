"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ResultsAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".data-card");

      if (!cards.length) return;

      /*
       * -----------------------------------------
       * INITIAL STATES
       * -----------------------------------------
       */

      gsap.set(
        [
          ".results-eyebrow",
          ".results-title-line",
          ".results-description",
          ".results-support",
          ".results-footer",
        ],
        {
          opacity: 0,
          y: 20,
        }
      );

      gsap.set(".data-icon", {
        opacity: 0,
        y: 10,
      });

      gsap.set(".data-number", {
        opacity: 0,
        y: 12,
      });

      gsap.set(".data-label", {
        opacity: 0,
        y: 10,
      });

      gsap.set(".data-index", {
        opacity: 0,
      });

      /*
       * -----------------------------------------
       * HEADER FADE IN
       * -----------------------------------------
       */

      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".results-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      headerTimeline
        .to(".results-eyebrow", {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        })
        .to(
          ".results-title-line",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          ".results-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          ".results-support",
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.15"
        );

      /*
       * -----------------------------------------
       * CARD CONTENT FADE IN
       *
       * Cards themselves NEVER MOVE.
       * -----------------------------------------
       */

      cards.forEach((card, index) => {
        const icon = card.querySelector(".data-icon");
        const number = card.querySelector(".data-number");
        const label = card.querySelector(".data-label");
        const cardIndex = card.querySelector(".data-index");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });

        timeline
          .to(icon, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          })
          .to(
            number,
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            "-=0.15"
          )
          .to(
            label,
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.15"
          )
          .to(
            cardIndex,
            {
              opacity: 1,
              duration: 0.25,
              ease: "power2.out",
            },
            "-=0.1"
          );
      });

      /*
       * -----------------------------------------
       * NUMBER COUNTERS
       * -----------------------------------------
       */

      cards.forEach((card) => {
        const numberElement =
          card.querySelector<HTMLElement>(".number-value");

        if (!numberElement) return;

        const finalValue = Number(card.dataset.value);

        const counter = {
          value: 0,
        };

        ScrollTrigger.create({
          trigger: card,
          start: "top 88%",

          onEnter: () => {
            gsap.killTweensOf(counter);

            counter.value = 0;
            numberElement.textContent = "0";

            gsap.to(counter, {
              value: finalValue,
              duration: 0.8,
              ease: "power2.out",

              onUpdate: () => {
                numberElement.textContent = Math.floor(
                  counter.value
                ).toString();
              },

              onComplete: () => {
                numberElement.textContent = finalValue.toString();
              },
            });
          },

          onLeaveBack: () => {
            gsap.killTweensOf(counter);

            gsap.to(counter, {
              value: 0,
              duration: 0.2,
              ease: "power2.out",

              onUpdate: () => {
                numberElement.textContent = Math.floor(
                  counter.value
                ).toString();
              },

              onComplete: () => {
                numberElement.textContent = "0";
              },
            });
          },
        });
      });

      /*
       * -----------------------------------------
       * FOOTER FADE IN
       * -----------------------------------------
       */

      gsap.fromTo(
        ".results-footer",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".results-footer",
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /*
       * Refresh after all elements are registered.
       */

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
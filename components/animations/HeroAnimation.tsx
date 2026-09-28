"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function HeroAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      /*
       * =====================================================
       * INITIAL STATE
       * =====================================================
       */

      gsap.set(".hero-eyebrow", {
        opacity: 0,
        y: 12,
      });

      gsap.set(".hero-eyebrow-dot", {
        scale: 0,
        opacity: 0,
      });

      gsap.set(".hero-title-line", {
        opacity: 0,
        y: 35,
        clipPath: "inset(100% 0% 0% 0%)",
      });

      gsap.set(".hero-title-accent", {
        color: "#111318",
      });

      gsap.set(".hero-title-scan", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(".hero-description", {
        opacity: 0,
        y: 15,
      });

      gsap.set(".hero-positioning", {
        opacity: 0,
        y: 10,
      });

      gsap.set(".hero-position-line", {
        scaleX: 0,
      });

      gsap.set(".hero-buttons", {
        opacity: 0,
        y: 15,
      });

      gsap.set(".hero-floating-left", {
        opacity: 0,
        x: -25,
      });

      gsap.set(".hero-floating-right", {
        opacity: 0,
        x: 25,
      });

      gsap.set(".hero-bottom", {
        opacity: 0,
        y: 10,
      });

      gsap.set(".hero-tech-left", {
        opacity: 0,
        x: -10,
      });

      gsap.set(".hero-tech-right", {
        opacity: 0,
        x: 10,
      });

      gsap.set(".hero-system-status", {
        opacity: 0,
      });

      gsap.set(".hero-status-dot", {
        scale: 0,
      });

      gsap.set(".hero-scan", {
        scaleX: 0,
        opacity: 1,
        top: "50%",
      });

      gsap.set(".hero-signal-glow", {
        scale: 0.2,
        opacity: 0,
      });

      /*
       * =====================================================
       * MAIN TIMELINE
       * =====================================================
       */

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /*
       * -----------------------------------------------------
       * PHASE 01
       * SYSTEM ACTIVATION
       * -----------------------------------------------------
       */

      tl.to(".hero-scan", {
        scaleX: 1,
        duration: 0.7,
        ease: "power2.inOut",
      });

      tl.to(
        ".hero-signal-glow",
        {
          scale: 1.4,
          opacity: 0.07,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5"
      );

      /*
       * -----------------------------------------------------
       * EYEBROW
       * -----------------------------------------------------
       */

      tl.to(
        ".hero-eyebrow",
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        "-=0.25"
      );

      tl.to(
        ".hero-eyebrow-dot",
        {
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: "back.out(2)",
        },
        "-=0.2"
      );

      /*
       * -----------------------------------------------------
       * HEADLINE ASSEMBLY
       * -----------------------------------------------------
       */

      tl.to(
        ".hero-title-line",
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.6,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.1"
      );

      /*
       * -----------------------------------------------------
       * DIGITAL ENGINES ACTIVATION
       * -----------------------------------------------------
       *
       * Instead of simply fading red, the phrase briefly
       * switches from dark → red as the scan crosses it.
       */

      tl.to(
        ".hero-title-scan",
        {
          scaleX: 1,
          duration: 0.45,
          ease: "power2.inOut",
        },
        "-=0.45"
      );

      tl.to(
        ".hero-title-accent",
        {
          color: "#E52B2B",
          duration: 0.25,
          ease: "none",
        },
        "-=0.18"
      );

      tl.to(
        ".hero-title-scan",
        {
          opacity: 0,
          duration: 0.2,
        },
        "-=0.05"
      );

      /*
       * Tiny "engine pulse"
       */

      tl.to(
        ".hero-title-accent",
        {
          x: 2,
          duration: 0.06,
          ease: "none",
        }
      );

      tl.to(
        ".hero-title-accent",
        {
          x: -1,
          duration: 0.06,
          ease: "none",
        }
      );

      tl.to(
        ".hero-title-accent",
        {
          x: 0,
          duration: 0.08,
          ease: "none",
        }
      );

      /*
       * -----------------------------------------------------
       * DESCRIPTION
       * -----------------------------------------------------
       */

      tl.to(
        ".hero-description",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.1"
      );

      /*
       * -----------------------------------------------------
       * POSITIONING
       * -----------------------------------------------------
       */

      tl.to(
        ".hero-positioning",
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        "-=0.15"
      );

      tl.to(
        ".hero-position-line",
        {
          scaleX: 1,
          duration: 0.35,
          stagger: 0.05,
          ease: "power2.inOut",
        },
        "-=0.25"
      );

      /*
       * -----------------------------------------------------
       * BUTTONS
       * -----------------------------------------------------
       */

      tl.to(
        ".hero-buttons",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.1"
      );

      /*
       * -----------------------------------------------------
       * FLOATING LABELS
       * -----------------------------------------------------
       */

      tl.to(
        ".hero-floating-left",
        {
          opacity: 1,
          x: 0,
          duration: 0.45,
          ease: "back.out(1.5)",
        },
        "-=0.25"
      );

      tl.to(
        ".hero-floating-right",
        {
          opacity: 1,
          x: 0,
          duration: 0.45,
          ease: "back.out(1.5)",
        },
        "<"
      );

      /*
       * -----------------------------------------------------
       * TECHNICAL LABELS
       * -----------------------------------------------------
       */

      tl.to(
        ".hero-tech-left",
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
        },
        "-=0.25"
      );

      tl.to(
        ".hero-tech-right",
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
        },
        "<"
      );

      /*
       * -----------------------------------------------------
       * BOTTOM STRIP
       * -----------------------------------------------------
       */

      tl.to(
        ".hero-bottom",
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        "-=0.15"
      );

      /*
       * -----------------------------------------------------
       * SYSTEM STATUS
       * -----------------------------------------------------
       */

      tl.to(
        ".hero-system-status",
        {
          opacity: 1,
          duration: 0.25,
        },
        "-=0.15"
      );

      tl.to(
        ".hero-status-dot",
        {
          scale: 1,
          duration: 0.25,
          ease: "back.out(2)",
        },
        "<"
      );

      /*
       * =====================================================
       * AFTER-INTRO AMBIENCE
       * =====================================================
       */

      tl.call(() => {
        /*
         * Very subtle floating labels.
         */

        gsap.to(".hero-floating-left", {
          y: -5,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".hero-floating-right", {
          y: 5,
          duration: 3.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        /*
         * Status indicator pulse.
         */

        gsap.to(".hero-status-dot", {
          opacity: 0.25,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        /*
         * Very subtle grid breathing.
         */

      });

      /*
       * =====================================================
       * BUTTON INTERACTIONS
       * =====================================================
       */

      const buttons = gsap.utils.toArray<HTMLElement>(
        ".hero-button"
      );

      buttons.forEach((button) => {
        const arrow = button.querySelector(
          ".hero-button-arrow"
        );

        if (!arrow) return;

        const enter = () => {
          gsap.to(arrow, {
            x: 5,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(arrow, {
            x: 0,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        button.addEventListener("mouseenter", enter);
        button.addEventListener("mouseleave", leave);

        return () => {
          button.removeEventListener("mouseenter", enter);
          button.removeEventListener("mouseleave", leave);
        };
      });

      /*
       * =====================================================
       * CLEANUP
       * ===================================================== */

      gsap.delayedCall(0.1, () => {
        gsap.set(".hero-scan", {
          opacity: 0,
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
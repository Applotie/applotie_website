"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DifferenceAnimation() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(
      ".difference-section"
    );

    const track = document.querySelector<HTMLElement>(
      ".difference-track"
    );

    if (!section || !track) return;

    const originalCards = Array.from(
      track.querySelectorAll<HTMLElement>(
        "[data-difference-card]"
      )
    );

    if (!originalCards.length) return;

    /*
     * =====================================================
     * DUPLICATE CARDS
     * =====================================================
     */

    const clones = originalCards.map((card) => {
      const clone = card.cloneNode(true) as HTMLElement;

      clone.setAttribute("aria-hidden", "true");

      clone
        .querySelectorAll<HTMLElement>(
          "a, button, input, textarea, select"
        )
        .forEach((element) => {
          element.setAttribute("tabindex", "-1");
        });

      track.appendChild(clone);

      return clone;
    });

    const allCards = [
      ...originalCards,
      ...clones,
    ];

    /*
     * =====================================================
     * INITIAL STATE
     * =====================================================
     *
     * IMPORTANT:
     * Text remains visible even before ScrollTrigger fires.
     */

    gsap.set(allCards, {
      opacity: 1,
      visibility: "visible",
      scale: 1,
      transformOrigin: "center center",
    });

    gsap.set(
      [
        ".difference-eyebrow",
        ".difference-title",
        ".difference-description",
      ],
      {
        opacity: 1,
        visibility: "visible",
      }
    );

    /*
     * =====================================================
     * INTRO ANIMATION
     * =====================================================
     */

    const intro = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        once: true,
      },
    });

    /*
     * immediateRender:false is important.
     *
     * It prevents GSAP from making the text invisible
     * before ScrollTrigger actually starts.
     */

    intro.from(".difference-eyebrow", {
      opacity: 0,
      y: 18,
      duration: 0.55,
      ease: "power3.out",
      immediateRender: false,
    });

    intro.from(
      ".difference-title",
      {
        opacity: 0,
        y: 30,
        duration: 0.75,
        ease: "power3.out",
        immediateRender: false,
      },
      "-=0.3"
    );

    intro.from(
      ".difference-description",
      {
        opacity: 0,
        y: 18,
        duration: 0.55,
        ease: "power3.out",
        immediateRender: false,
      },
      "-=0.4"
    );

    /*
     * Cards don't animate opacity.
     */

    intro.from(
      originalCards,
      {
        y: 60,
        scale: 0.94,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        immediateRender: false,
      },
      "-=0.25"
    );

    /*
     * =====================================================
     * INFINITE HORIZONTAL LOOP
     * =====================================================
     */

    let loopAnimation: gsap.core.Tween | null = null;

    const createLoop = () => {
      if (loopAnimation) {
        loopAnimation.kill();
        loopAnimation = null;
      }

      gsap.set(track, {
        x: 0,
      });

      const firstCard = allCards[0];

      const duplicateFirstCard =
        allCards[originalCards.length];

      if (!firstCard || !duplicateFirstCard) {
        return;
      }

      /*
       * Distance from first card to its duplicate.
       */

      const distance =
        duplicateFirstCard.offsetLeft -
        firstCard.offsetLeft;

      if (distance <= 0) {
        return;
      }

      /*
       * Animation speed.
       *
       * Previous: 65px/s
       * Current: 80px/s
       */

      const pixelsPerSecond = 80;

      const duration =
        distance / pixelsPerSecond;

      const wrap = gsap.utils.wrap(
        -distance,
        0
      );

      loopAnimation = gsap.to(track, {
        x: -distance,

        duration,

        ease: "none",

        repeat: -1,

        modifiers: {
          x: (value) => {
            return `${wrap(
              parseFloat(value)
            )}px`;
          },
        },

        paused: true,
      });

      if (intro.progress() >= 1) {
        loopAnimation.play();
      }
    };

    createLoop();

    /*
     * Start loop after intro.
     */

    intro.eventCallback(
      "onComplete",
      () => {
        loopAnimation?.play();
      }
    );

    /*
     * =====================================================
     * CENTER CARD SCALE
     * =====================================================
     */

    let currentCenterCard: HTMLElement | null =
      null;

    let centerTween: gsap.core.Tween | null =
      null;

    const updateCenterCard = () => {
      const sectionRect =
        section.getBoundingClientRect();

      const centerX =
        sectionRect.left +
        sectionRect.width / 2;

      let closestCard: HTMLElement | null =
        null;

      let closestDistance = Infinity;

      allCards.forEach((card) => {
        const rect =
          card.getBoundingClientRect();

        const cardCenter =
          rect.left +
          rect.width / 2;

        const distance =
          Math.abs(
            cardCenter - centerX
          );

        if (
          distance <
          closestDistance
        ) {
          closestDistance = distance;
          closestCard = card;
        }
      });

      if (
        closestCard ===
        currentCenterCard
      ) {
        return;
      }

      /*
       * Previous center card returns
       * to normal size.
       */

      if (currentCenterCard) {
        gsap.to(currentCenterCard, {
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
          overwrite: "auto",
        });
      }

      /*
       * New center card grows.
       */

      if (closestCard) {
        centerTween = gsap.to(
          closestCard,
          {
            scale: 1.14,
            duration: 0.55,
            ease: "power3.out",
            overwrite: "auto",
          }
        );
      }

      currentCenterCard =
        closestCard;
    };

    gsap.ticker.add(
      updateCenterCard
    );

    /*
     * =====================================================
     * HOVER SPEED
     * =====================================================
     */

    const handleMouseEnter = () => {
      if (!loopAnimation) return;

      gsap.to(loopAnimation, {
        timeScale: 0.35,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!loopAnimation) return;

      gsap.to(loopAnimation, {
        timeScale: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    section.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    section.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    /*
     * =====================================================
     * RESPONSIVE RESIZE
     * =====================================================
     */

    let resizeTimer:
      | ReturnType<typeof setTimeout>
      | null = null;

    const handleResize = () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }

      resizeTimer = setTimeout(() => {
        createLoop();

        ScrollTrigger.refresh();

        if (intro.progress() >= 1) {
          loopAnimation?.play();
        }
      }, 250);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    /*
     * =====================================================
     * CLEANUP
     * =====================================================
     */

    return () => {
      if (loopAnimation) {
        loopAnimation.kill();
      }

      if (centerTween) {
        centerTween.kill();
      }

      gsap.ticker.remove(
        updateCenterCard
      );

      intro.kill();

      section.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      section.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }

      clones.forEach((clone) => {
        clone.remove();
      });
    };
  }, []);

  return null;
}
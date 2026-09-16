"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FallingItem = {
  id: number;
  width: number;
  height: number;
  color: string;
  label: string;

  // Text customization
  fontSize: number;
  textColor: string;
  fontWeight: number;

  startX: number;
  startY: number;
  x: number;
  y: number;
  rotation: number;
  startRotation: number;
  scale: number;
  startScale: number;
  duration: number;
  delay: number;
  opacity: number;
  bounce: number;
};

const FALLING_ITEMS: FallingItem[] = [
  {
    id: 1,
    width: 225,
    height: 27,
    color: "#f3b3b3",
    label: "Performance Marketing",

    fontSize: 12,
    textColor: "#171717",
    fontWeight: 900,

    startX: -240,
    startY: -830,
    x: 40,
    y: 80,
    rotation: 0,
    startRotation: -15,
    scale: 1.08,
    startScale: 0.72,
    duration: 1.6,
    delay: 0.08,
    opacity: 0.96,
    bounce: 14,
  },

  {
    id: 2,
    width: 150,
    height: 27,
    color: "#f8df78",
    label: "agent discoverability",

    fontSize: 10,
    textColor: "#292929",
    fontWeight: 500,

    startX: 150,
    startY: -350,
    x: 150,
    y: 290,
    rotation: 24,
    startRotation: 12,
    scale: 1.08,
    startScale: 0.72,
    duration: 1.52,
    delay: 0.12,
    opacity: 0.92,
    bounce: 12,
  },

  {
    id: 3,
    width: 255,
    height: 27,
    color: "#f3b3b3",
    label: "Google and Meta Ads",

    fontSize: 12,
    textColor: "#1f2937",
    fontWeight: 900,

    startX: -95,
    startY: -220,
    x: -35,
    y: 350,
    rotation: 0,
    startRotation: -18,
    scale: 1.12,
    startScale: 0.78,
    duration: 1.72,
    delay: 0.15,
    opacity: 0.96,
    bounce: 14,
  },

  {
    id: 4,
    width: 130,
    height: 27,
    color: "#f8df78",
    label: "SEO",

    fontSize: 14,
    textColor: "black",
    fontWeight: 900,

    startX: 230,
    startY: -160,
    x: 285,
    y: 324,
    rotation: 0,
    startRotation: 20,
    scale: 0.95,
    startScale: 0.66,
    duration: 1.5,
    delay: 0.18,
    opacity: 0.8,
    bounce: 10,
  },

  {
    id: 5,
    width: 210,
    height: 27,
    color: "#f3b3b3",
    label: "Digital Reputation",

    fontSize: 12,
    textColor: "#4a2732",
    fontWeight: 500,

    startX: -420,
    startY: -550,
    x: -245,
    y: 322,
    rotation: 0,
    startRotation: 10,
    scale: 0.96,
    startScale: 0.76,
    duration: 1.86,
    delay: 0.2,
    opacity: 0.84,
    bounce: 12,
  },

  {
    id: 6,
    width: 150,
    height: 27,
    color: "#f8df78",
    label: "SMM",

    fontSize: 12,
    textColor: "#28551f",
    fontWeight: 700,

    startX: 420,
    startY: -180,
    x: 475,
    y: 350,
    rotation: 0,
    startRotation: -16,
    scale: 0.96,
    startScale: 0.7,
    duration: 1.42,
    delay: 0.23,
    opacity: 0.76,
    bounce: 8,
  },

  {
    id: 7,
    width: 250,
    height: 27,
    color: "#f3d77d",
    label: "three fulfillment partners",

    fontSize: 11,
    textColor: "#40360e",
    fontWeight: 600,

    startX: 15,
    startY: -760,
    x: -80,
    y: 290,
    rotation: -2,
    startRotation: -16,
    scale: 1.14,
    startScale: 0.82,
    duration: 1.72,
    delay: 0.14,
    opacity: 0.94,
    bounce: 18,
  },

  {
    id: 8,
    width: 200,
    height: 27,
    color: "#f8df78",
    label: "email updates & promises",

    fontSize: 12,
    textColor: "#202124",
    fontWeight: 900,

    startX: 100,
    startY: -710,
    x: 220,
    y: 350,
    rotation: 0,
    startRotation: 20,
    scale: 1.02,
    startScale: 0.7,
    duration: 1.78,
    delay: 0.3,
    opacity: 0.85,
    bounce: 15,
  },

  {
    id: 9,
    width: 196,
    height: 27,
    color: "#f3b3b3",
    label: "App Development",

    fontSize: 12,
    textColor: "#4a211b",
    fontWeight: 900,

    startX: -430,
    startY: -830,
    x: -390,
    y: 350,
    rotation: 0,
    startRotation: -20,
    scale: 1.08,
    startScale: 0.7,
    duration: 1.52,
    delay: 0.26,
    opacity: 0.82,
    bounce: 10,
  },

  {
    id: 10,
    width: 188,
    height: 27,
    color: "#f8df78",
    label: "AI Integration",

    fontSize: 12,
    textColor: "#252b4d",
    fontWeight: 900,

    startX: 440,
    startY: -390,
    x: 380,
    y: 295,
    rotation: 0,
    startRotation: 22,
    scale: 0.94,
    startScale: 0.68,
    duration: 1.46,
    delay: 0.32,
    opacity: 0.8,
    bounce: 9,
  },

  {
    id: 11,
    width: 214,
    height: 27,
    color: "#202124",
    label: "Website Development",

    fontSize: 12,
    textColor: "white",
    fontWeight: 900,

    startX: -500,
    startY: -840,
    x: -332,
    y: 295,
    rotation: -15,
    startRotation: -18,
    scale: 1.08,
    startScale: 0.88,
    duration: 2.34,
    delay: 0.1,
    opacity: 1,
    bounce: 12,
  },
];

export default function FallingElement() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const elementRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [isMobile, setIsMobile] = useState(false);

  const visibleItems = useMemo(() => {
    const items = isMobile
      ? FALLING_ITEMS.slice(0, 12)
      : FALLING_ITEMS;

    const scaleFactor = isMobile ? 0.72 : 1;

    return items.map((item) => ({
      ...item,
      startX: item.startX * scaleFactor,
      startY: item.startY * scaleFactor,
      x: item.x * scaleFactor,
      y: item.y * scaleFactor,
      duration: item.duration + (isMobile ? 0.18 : 0),
    }));
  }, [isMobile]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleViewportChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleViewportChange();

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleViewportChange,
      );
    };
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const elements = elementRefs.current.filter(
        Boolean,
      ) as HTMLSpanElement[];

      if (!elements.length) {
        return;
      }

      gsap.set(elements, {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 0,
        force3D: true,
        transformOrigin: "center center",
      });

      /*
       * Reduced motion
       */
      if (prefersReducedMotion) {
        gsap.set(elements, {
          x: (_, target) => {
            const index = Number(
              (target as HTMLElement).dataset.index ?? 0,
            );

            return visibleItems[index]?.x ?? 0;
          },

          y: (_, target) => {
            const index = Number(
              (target as HTMLElement).dataset.index ?? 0,
            );

            return visibleItems[index]?.y ?? 0;
          },

          rotation: (_, target) => {
            const index = Number(
              (target as HTMLElement).dataset.index ?? 0,
            );

            return visibleItems[index]?.rotation ?? 0;
          },

          scale: (_, target) => {
            const index = Number(
              (target as HTMLElement).dataset.index ?? 0,
            );

            return visibleItems[index]?.scale ?? 1;
          },

          opacity: (_, target) => {
            const index = Number(
              (target as HTMLElement).dataset.index ?? 0,
            );

            return visibleItems[index]?.opacity ?? 0.8;
          },
        });

        return;
      }

      /*
       * Falling animation
       */
      const trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top 82%",
        once: true,

        onEnter: () => {
          elements.forEach((element, index) => {
            const item = visibleItems[index];

            if (!item) return;

            const dropTimeline = gsap.timeline({
              delay: item.delay,

              defaults: {
                ease: "power3.out",
                force3D: true,
              },
            });

            dropTimeline
              .fromTo(
                element,
                {
                  x: item.startX,
                  y: item.startY,
                  rotation: item.startRotation,
                  scale: item.startScale,
                  opacity: 0.15,
                },
                {
                  x: item.x + item.bounce * 0.25,
                  y: item.y + item.bounce + 24,
                  rotation: item.rotation + 7,
                  scale: item.scale * 1.04,
                  opacity: item.opacity,
                  duration: item.duration * 0.72,
                  ease: "power3.in",
                },
              )

              .to(element, {
                x: item.x,
                y: item.y,
                rotation: item.rotation,
                scale: item.scale,
                opacity: item.opacity,
                duration: item.duration * 0.38,
                ease: "power2.out",
              })

              .to(element, {
                y: item.y + 8,
                duration: item.duration * 0.14,
                ease: "expo.out",
              })

              .to(element, {
                y: item.y,
                duration: item.duration * 0.1,
                ease: "bounce.out",
              });
          });
        },
      });

      /*
       * Hide elements when leaving section
       */
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: "bottom top",

        onLeave: () => {
          gsap.to(elements, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
            overwrite: true,
          });
        },

        onEnterBack: () => {
          gsap.to(elements, {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
            overwrite: true,
          });
        },
      });

      return () => trigger.kill();
    }, wrapper);

    return () => ctx.revert();
  }, [visibleItems]);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none absolute inset-0 z-10 overflow-visible"
      style={{
        transform:
          "translate3d(0, calc(var(--nav-lift, 0px) * -1), 0)",
        willChange: "transform",
      }}
    >
      {visibleItems.map((item, index) => (
        <span
          key={item.id}
          data-index={index}
          ref={(node) => {
            elementRefs.current[index] = node;
          }}
          className="absolute left-1/2 top-1/2 flex items-center justify-center rounded-full border border-[#1d1d1d]/10 px-2 py-1 text-center"
          style={{
            width: `${item.width}px`,
            height: `${item.height}px`,

            // Background
            background: item.color,

            // Text customization
            color: item.textColor,
            fontSize: `${item.fontSize}px`,
            fontWeight: item.fontWeight,

            // Appearance
            opacity: item.opacity,
            boxShadow: `0 0 18px ${item.color}55, 0 18px 32px rgba(15, 23, 42, 0.12)`,

            // Typography
            lineHeight: 1,
            letterSpacing: "-0.02em",

            // Performance
            willChange: "transform, opacity",
            zIndex: 30,
          }}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
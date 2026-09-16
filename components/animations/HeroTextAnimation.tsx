"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
};

export default function HeroTextAnimation({
  children,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const heading = wrapper.querySelector("h1");

      if (!heading) return;

      const processNode = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || "";

          if (!text.trim()) return;

          const fragment = document.createDocumentFragment();

          text.split(/(\s+)/).forEach((part) => {
            if (/^\s+$/.test(part)) {
              fragment.appendChild(
                document.createTextNode(part)
              );
            } else {
              const word = document.createElement("span");

              word.className =
                "hero-word inline-block overflow-hidden align-bottom";

              word.innerHTML = `
                <span class="hero-word-inner inline-block">
                  ${part}
                </span>
              `;

              fragment.appendChild(word);
            }
          });

          node.parentNode?.replaceChild(fragment, node);
        } else {
          Array.from(node.childNodes).forEach(processNode);
        }
      };

      processNode(heading);

      const words =
        heading.querySelectorAll<HTMLElement>(
          ".hero-word-inner"
        );

      const otherElements =
        wrapper.querySelectorAll<HTMLElement>(
          "[data-hero-element]:not(h1)"
        );

      if (reducedMotion) {
        gsap.set(words, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          rotateX: 0,
        });

        gsap.set(otherElements, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        });

        return;
      }

      // Initial state
      gsap.set(words, {
        opacity: 0,
        y: "110%",
        filter: "blur(6px)",
        rotateX: -30,
        transformOrigin: "50% 100%",
      });

      gsap.set(otherElements, {
        opacity: 0,
        y: 18,
        filter: "blur(4px)",
      });

      const timeline = gsap.timeline({
        delay: 0.15,
        scrollTrigger: {
          trigger: wrapper,
          start: "top 88%",
          once: true,
        },
      });

      // Fast word-by-word headline reveal
      timeline.to(words, {
        opacity: 1,
        y: "0%",
        filter: "blur(0px)",
        rotateX: 0,
        duration: 0.55,
        stagger: 0.045,
        ease: "power3.out",
      });

      // Small overshoot
      timeline.to(
        words,
        {
          y: "-2%",
          duration: 0.12,
          stagger: 0.015,
          ease: "power2.out",
        },
        "-=0.25"
      );

      timeline.to(
        words,
        {
          y: "0%",
          duration: 0.14,
          stagger: 0.01,
          ease: "power2.out",
        },
        "-=0.1"
      );

      // Supporting content
      timeline.to(
        otherElements,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.07,
          ease: "power3.out",
        },
        "-=0.08"
      );
    }, wrapper);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      {children}
    </div>
  );
}
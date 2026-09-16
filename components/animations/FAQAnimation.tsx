"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAnimationProps = {
  faqs: FAQItem[];
};

export default function FAQAnimation({ faqs }: FAQAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDetailsElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemsRef.current.filter(Boolean);

      if (!items.length) return;

      // Initial state
      gsap.set(items, {
        opacity: 0,
        y: 25,
      });

      // Scroll reveal
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        overflow-hidden
        rounded-[1.5rem]
        border border-white/10
        bg-[#1a1c22]
        shadow-[0_10px_40px_rgba(17,19,24,0.04)]
      "
    >
      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          ref={(el) => {
            if (el) {
              itemsRef.current[index] = el;
            }
          }}
          className="
            group
            border-b border-white/10
            last:border-b-0
          "
        >
          <summary
            className="
              relative
              flex cursor-pointer
              list-none
              items-center
              justify-between
              gap-4
              px-5 py-5
              sm:gap-6
              sm:px-7 sm:py-6
              lg:px-8 lg:py-7
            "
          >
            {/* Yellow active indicator */}
            <span
              className="
                absolute left-0 top-0
                h-full w-1
                origin-top
                scale-y-0
                bg-[#F5C518]
                transition-transform duration-300
                group-open:scale-y-100
              "
            />

            <div className="flex min-w-0 items-start gap-4 sm:gap-6 lg:gap-8">
              {/* Number */}
              <span
                className="
                  mt-1
                  shrink-0
                  text-[10px]
                  font-semibold
                  tracking-wider
                  text-[#E52B2B]
                  sm:text-xs
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Question */}
              <h3
                className="
                  text-sm
                  font-semibold
                  leading-6
                  text-black/85
                  transition-colors duration-300
                  group-hover:text-[#E52B2B]
                  sm:text-base
                  lg:text-lg
                "
              >
                {faq.question}
              </h3>
            </div>

            {/* Plus / minus */}
            <span
              className="
                relative
                flex h-8 w-8
                shrink-0
                items-center justify-center
                rounded-full
                border border-white/10
                bg-[#202124]
                text-black/80
                transition-all duration-300
                group-hover:border-[#E52B2B]/30
                group-hover:text-[#E52B2B]
                group-open:border-[#E52B2B]
                group-open:bg-[#E52B2B]
                group-open:text-black
              "
            >
              {/* Horizontal */}
              <span className="absolute h-px w-3 bg-current" />

              {/* Vertical */}
              <span
                className="
                  absolute
                  h-3 w-px
                  bg-current
                  transition-transform duration-300
                  group-open:rotate-90
                "
              />
            </span>
          </summary>

          {/* Answer */}
          <div
            className="
              pb-6
              pl-[3.25rem]
              pr-5
              sm:pb-7
              sm:pl-[4.75rem]
              sm:pr-16
              lg:pl-[5.5rem]
              lg:pr-24
            "
          >
            <p
              className="
                max-w-3xl
                text-sm
                leading-7
                text-black/70
                sm:text-base
                sm:leading-7
              "
            >
              {faq.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  quote: string;
  client: string;
  company: string;
  role: string;
  initials: string;
};

type TestimonialsAnimationProps = {
  testimonials: Testimonial[];
};

export default function TestimonialsAnimation({
  testimonials,
}: TestimonialsAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      if (!cards.length) return;

      // Initial state
      gsap.set(cards, {
        opacity: 0,
        y: 40,
      });

      // Cards reveal on scroll
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        grid
        gap-4
        sm:gap-5
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {testimonials.map((testimonial, index) => (
        <article
          key={testimonial.client}
          ref={(el) => {
            if (el) {
              cardsRef.current[index] = el;
            }
          }}
          className="
            group relative
            flex min-h-[360px]
            flex-col justify-between
            overflow-hidden
            rounded-[1.75rem]
            border border-white/10
            bg-[#1a1c22]
            p-6
            text-black
            transition-all duration-500
            hover:-translate-y-2
            hover:shadow-2xl
            sm:min-h-[390px]
            sm:p-7
            lg:p-8
          "
        >
          {/* Yellow top accent */}
          <div
            className="
              absolute left-0 top-0
              h-1 w-0
              bg-[#F5C518]
              transition-all duration-500
              group-hover:w-full
            "
          />

          {/* Red background accent */}
          <div
            className="
              absolute -right-10 -top-10
              h-24 w-24
              rounded-full
              bg-[#E52B2B]/8
              transition-transform duration-500
              group-hover:scale-[1.8]
            "
          />

          {/* Quote */}
          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <span
                className="
                  font-serif text-5xl
                  leading-none
                  text-[#E52B2B]
                "
              >
                “
              </span>

              <span
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-[#202124]
                  text-[10px]
                  font-semibold
                  text-black/75
                "
              >
                0{index + 1}
              </span>
            </div>

            <blockquote
              className="
                text-[15px]
                leading-7
                text-black/65
                sm:text-base
              "
            >
              {testimonial.quote}
            </blockquote>
          </div>

          {/* Client */}
          <div className="relative mt-10">
            <div className="mb-5 h-px w-full bg-black/10" />

            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="
                  relative flex
                  h-11 w-11 shrink-0
                  items-center justify-center
                  overflow-hidden
                  rounded-full
                  bg-[#111318]
                  text-xs font-semibold
                  text-black
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                {testimonial.initials}

                <span
                  className="
                    absolute bottom-0 right-0
                    h-2.5 w-2.5
                    rounded-full
                    border-2 border-white
                    bg-[#F5C518]
                  "
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-black">
                  {testimonial.client}
                </p>

                <p className="mt-1 text-xs text-black/60">
                  {testimonial.role}
                </p>

                <p className="mt-0.5 text-xs font-medium text-[#E52B2B]">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
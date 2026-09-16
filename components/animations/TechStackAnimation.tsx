"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Technology = {
  name: string;
  short: string;
};

type Category = {
  title: string;
  description: string;
  technologies: Technology[];
};

type TechStackAnimationProps = {
  categories: Category[];
};

export default function TechStackAnimation({
  categories,
}: TechStackAnimationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const techCardsRef = useRef<HTMLDivElement[]>([]);

  const [activeCategory, setActiveCategory] = useState(0);

  const active = categories[activeCategory];

  /* ==========================================
      SCROLL ANIMATION
  =========================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const headingElements = section.querySelectorAll(
        "[data-tech-reveal]"
      );

      gsap.fromTo(
        headingElements,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 45,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",

            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  /* ==========================================
      CATEGORY CHANGE ANIMATION
  =========================================== */

  useEffect(() => {
    const cards = techCardsRef.current.filter(Boolean);

    if (!cards.length) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 20,
        scale: 0.97,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [activeCategory]);

  /* ==========================================
      CATEGORY SELECT
  =========================================== */

  const handleCategoryChange = (index: number) => {
    if (index === activeCategory) return;

    setActiveCategory(index);
    techCardsRef.current = [];
  };

  return (
    <div ref={sectionRef}>
      {/* ==========================================
          CATEGORY NAVIGATION
      =========================================== */}

      <div
        data-tech-reveal
        className="
          mx-auto
          mb-8
          max-w-6xl
          overflow-x-auto
          border-b
          border-white/10
          scrollbar-hide
        "
      >
        <div
          className="
            flex
            min-w-max
            items-center
            justify-center
            gap-1
            sm:gap-2
          "
        >
          {categories.map((category, index) => {
            const isActive = activeCategory === index;

            return (
              <button
                key={category.title}
                type="button"
                onClick={() => handleCategoryChange(index)}
                className={`
                  relative
                  whitespace-nowrap
                  px-4
                  py-4
                  text-xs
                  font-semibold
                  transition-colors
                  duration-300
                  sm:px-6
                  sm:text-sm
                  ${
                    isActive
                      ? "text-black"
                      : "text-black/65 hover:text-black/85"
                  }
                `}
              >
                {category.title}

                {/* Active indicator */}
                <span
                  className={`
                    absolute
                    bottom-[-1px]
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    bg-[#E52B2B]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0"
                    }
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ==========================================
          ACTIVE CATEGORY
      =========================================== */}

      <div
        ref={contentRef}
        data-tech-reveal
        className="
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#1a1c22]
          shadow-[0_20px_70px_rgba(17,19,24,0.06)]
          sm:rounded-3xl
        "
      >
        {/* Category header */}

        <div
          className="
            flex
            flex-col
            gap-6
            border-b
            border-white/10
            p-6
            sm:p-8
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:p-10
            xl:p-12
          "
        >
          <div>
            <p
              className="
                mb-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#E52B2B]
                sm:text-xs
              "
            >
              {String(activeCategory + 1).padStart(2, "0")} /{" "}
              {String(categories.length).padStart(2, "0")}
            </p>

            <h3
              className="
                text-2xl
                font-semibold
                tracking-[-0.03em]
                text-
                sm:text-3xl
                lg:text-4xl
              "
            >
              {active.title}
            </h3>
          </div>

          <p
            className="
              max-w-md
              text-sm
              leading-6
              text-black/80
              sm:text-base
              sm:leading-7
              lg:text-right
            "
          >
            {active.description}
          </p>
        </div>

        {/* ==========================================
            TECHNOLOGIES
        =========================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            p-5
            sm:grid-cols-2
            sm:p-8
            lg:grid-cols-3
            lg:p-10
          "
        >
          {active.technologies.map((technology, index) => (
            <div
              key={technology.name}
              ref={(el) => {
                if (el) {
                  techCardsRef.current[index] = el;
                }
              }}
              className="
                group
                relative
                flex
                items-center
                gap-4
                overflow-hidden
                rounded-xl
                border
                    border-white/10
                      bg-[#202124]
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#E52B2B]/30
                hover:shadow-[0_12px_30px_rgba(17,19,24,0.07)]
                sm:rounded-2xl
                sm:p-5
              "
            >
              {/* Yellow accent */}

              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[3px]
                  origin-bottom
                  scale-y-0
                  bg-[#F5C518]
                  transition-transform
                  duration-300
                  group-hover:scale-y-100
                "
              />

              {/* Icon */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-[#202124]
                  transition-all
                  duration-300
                  group-hover:border-[#E52B2B]/20
                  group-hover:bg-[#E52B2B]
                  sm:h-12
                  sm:w-12
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    tracking-tight
                    text-black/80
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {technology.short}
                </span>
              </div>

              {/* Name */}

              <div className="min-w-0">
                <p
                  className="
                    truncate
                    text-sm
                    font-semibold
                    text-black
                    sm:text-base
                  "
                >
                  {technology.name}
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    text-black/80
                  "
                >
                  {active.title}
                </p>
              </div>

              {/* Arrow */}

              <span
                className="
                  ml-auto
                  shrink-0
                  text-lg
                  text-black/80
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#E52B2B]
                "
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
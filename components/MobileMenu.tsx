"use client";

import Link from "next/link";
import { useState } from "react";
import NavbarAnimation from "./animations/NavbarAnimation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      {/* =========================================================
          MOBILE / TABLET NAVBAR
      ========================================================= */}
      <div
        id="animated-navbar-mobile"
        className="
          relative
          flex
          h-[64px]
          w-full
          items-center
          justify-between
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#111318]/90
          px-4
          shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]
          backdrop-blur-xl
          sm:h-[68px]
          sm:px-5
        "
      >
        {/* Animation layer */}
        <NavbarAnimation />

        {/* =======================================================
            BRAND
        ======================================================= */}
        <Link
          href="/"
          onClick={closeMenu}
          className="
            relative
            z-20
            flex
            items-center
            gap-2.5
            text-black
          "
        >
          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-[#E52B2B]
              shadow-[0_0_18px_rgba(229,43,43,0.25)]
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px] fill-none stroke-white"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="text-sm font-semibold tracking-[-0.02em]">
            Applotie
          </span>
        </Link>

        {/* =======================================================
            HAMBURGER / CLOSE BUTTON
        ======================================================= */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          className="
            relative
            z-30
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            shadow-[0_4px_20px_rgba(0,0,0,0.2)]
            transition-all
            duration-300
            hover:border-[#E52B2B]/50
            hover:bg-[#E52B2B]/10
            active:scale-95
          "
        >
          <span className="relative flex h-4 w-5 items-center justify-center">
            {/* Top line */}
            <span
              className={`
                absolute
                left-0
                h-[1.5px]
                w-5
                rounded-full
                bg-black
                transition-all
                duration-300
                ${
                  isOpen
                    ? "top-1/2 rotate-45"
                    : "top-0"
                }
              `}
            />

            {/* Middle line */}
            <span
              className={`
                absolute
                left-0
                top-1/2
                h-[1.5px]
                w-5
                -translate-y-1/2
                rounded-full
                bg-black
                transition-all
                duration-300
                ${
                  isOpen
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            />

            {/* Bottom line */}
            <span
              className={`
                absolute
                left-0
                h-[1.5px]
                w-5
                rounded-full
                bg-black
                transition-all
                duration-300
                ${
                  isOpen
                    ? "top-1/2 -rotate-45"
                    : "bottom-0"
                }
              `}
            />
          </span>
        </button>
      </div>

      {/* =========================================================
          COLLAPSIBLE MENU
      ========================================================= */}
      <div
        className={`
          grid
          transition-[grid-template-rows,opacity,margin]
          duration-300
          ease-out
          ${
            isOpen
              ? "mt-2 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#111318]/95
              p-2
              shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]
              backdrop-blur-xl
            "
          >
            <div className="flex w-full flex-col gap-1">
              {/* =================================================
                  NAVIGATION LINKS
              ================================================= */}
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-black/90
                    transition-all
                    duration-200
                    hover:bg-white/[0.05]
                    hover:text-[#E52B2B]
                  "
                >
                  <span>{item.label}</span>

                  <span className="text-xs opacity-40">
                    ↗
                  </span>
                </Link>
              ))}

              {/* =================================================
                  CTA
              ================================================= */}
              <div className="mt-1 border-t border-white/10 pt-2">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#E52B2B]
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#F5C518]
                    hover:text-black
                  "
                >
                  <span>Start a project</span>

                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-black/10
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                    "
                  >
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
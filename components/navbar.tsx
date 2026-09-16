import Link from "next/link";
import NavbarAnimation from "./animations/NavbarAnimation";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-0">
      {/* =========================================================
          DESKTOP / LARGE SCREEN
      ========================================================= */}
      <div className="mx-auto hidden w-[60%] min-w-[720px] lg:block">
        {/* Decorative top line */}
        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[45%]
            -translate-x-1/2
            bg-[#E52B2B]
            opacity-80
            shadow-[0_0_12px_rgba(229,43,43,0.7)]
          "
        />

        <div
          id="animated-navbar"
          className="
            relative
            flex
            h-[68px]
            items-center
            justify-between
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#111318]/90
            px-5
            shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]
            backdrop-blur-xl
            xl:px-6
          "
        >
          {/* Animation layer */}
          <NavbarAnimation />

          {/* Brand */}
          <Link
            href="/"
            className="
              relative
              z-20
              flex
              shrink-0
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

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <div
              className="
                flex
                items-center
                gap-1
                rounded-full
                border
                border-white/[0.06]
                bg-white/[0.025]
                p-1
              "
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  data-nav-item
                  className="
                    relative
                    rounded-full
                    px-4
                    py-2
                    text-[13px]
                    font-semibold
                    text-black/90
                    transition-colors
                    duration-200
                    hover:text-black
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="relative z-20 ml-auto flex shrink-0 items-center">
            <Link
              href="/contact"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#F5C518]/30
                bg-[#E52B2B]
                px-4
                py-2
                text-[13px]
                font-semibold
                text-[#f0f0f7]
                transition-all
                duration-300
                hover:border-[#E52B2B]
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

      {/* =========================================================
          MOBILE / TABLET
      ========================================================= */}
      <div className="mx-auto w-full lg:hidden">
        {/* Decorative top line */}
        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[70%]
            -translate-x-1/2
            bg-[#E52B2B]
            opacity-80
            shadow-[0_0_12px_rgba(229,43,43,0.7)]
          "
        />

        <MobileMenu />
      </div>
    </nav>
  );
}
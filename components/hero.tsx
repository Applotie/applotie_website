import Link from "next/link";
import HeroAnimation from "./animations/HeroAnimation";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#F7F7F5]">
      <div className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#F7F7F5] text-[#111318]">

        {/* Horizontal scan */}
        <div
          className="
            hero-scan
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-px
            w-full
            origin-left
            bg-[#E52B2B]
            opacity-0
          "
        />

        {/* Red signal glow */}
        <div
          className="
            hero-signal-glow
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-0
            h-32
            w-32
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#E52B2B]
            opacity-0
            blur-[80px]
          "
        />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-20
            mx-auto
            flex
            min-h-[100svh]
            w-full
            max-w-[1800px]
            flex-col
            items-center
            justify-center
            px-5
            pb-14
            pt-24
            text-center
            sm:px-8
            sm:pt-28
            md:px-10
            lg:px-16
            lg:pt-28
            xl:px-20
            2xl:px-28
          "
        >

          {/* =================================================
              EYEBROW
          ================================================== */}

          <div
            className="
              hero-eyebrow
              mb-5
              flex
              items-center
              justify-center
              gap-2.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              sm:mb-6
              sm:text-[10px]
              lg:mb-7
              lg:text-xs
            "
          >
            <span className="hero-eyebrow-dot h-1.5 w-1.5 rounded-full bg-[#E52B2B]" />

            <span className="text-[#111318]">
              Digital Marketing & Development Agency
            </span>

            <span className="text-black/20">·</span>

            <span className="text-black/45">
              Patna, Bihar
            </span>
          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================== */}

          <div className="flex w-full max-w-5xl flex-col items-center">

            <h1
              className="
                hero-title
                relative
                max-w-5xl
                text-center
                text-[2.65rem]
                font-semibold
                leading-[1]
                tracking-[-0.06em]
                text-[#111318]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.8rem]
                xl:text-[5.6rem]
                2xl:text-[6.3rem]
              "
            >
              <span className="hero-title-line block">
                Building
              </span>

              <span className="hero-title-line hero-title-accent relative block text-[#E52B2B]">
                Digital Engines

                {/* Red scanning highlight */}
                <span
                  className="
                    hero-title-scan
                    pointer-events-none
                    absolute
                    left-0
                    top-1/2
                    h-[2px]
                    w-full
                    origin-left
                    -translate-y-1/2
                    scale-x-0
                    bg-[#E52B2B]
                    opacity-80
                  "
                />
              </span>

              <span className="hero-title-line block">
                Powering Growth.
              </span>
            </h1>

            {/* =================================================
                TECHNICAL MICRO LABELS
            ================================================== */}

            <div
              className="
                hero-tech-left
                pointer-events-none
                absolute
                left-[8%]
                top-[43%]
                hidden
                text-[7px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-black/25
                lg:block
              "
            >
              VERSION / 001
            </div>

            <div
              className="
                hero-tech-right
                pointer-events-none
                absolute
                right-[8%]
                top-[46%]
                hidden
                text-[7px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-black/25
                lg:block
              "
            >
              BUILD / 2026
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <div
              className="
                hero-description-wrap
                mt-6
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-5
                sm:mt-7
                lg:mt-8
              "
            >
              <p
                className="
                  hero-description
                  max-w-xl
                  text-center
                  text-xs
                  leading-5
                  text-black/60
                  sm:text-sm
                  sm:leading-6
                  lg:max-w-2xl
                  lg:text-base
                  lg:leading-7
                "
              >
                We combine strategy, performance marketing, SEO,
                content, websites and technology to build digital
                systems that attract the right audience and turn
                attention into measurable business.
              </p>

              {/* =================================================
                  POSITIONING
              ================================================== */}

              <div
                className="
                  hero-positioning
                  mt-10
                  flex
                  items-center
                  gap-2.5
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-black/40
                  sm:text-[9px]
                  lg:text-[10px]
                "
              >
                <span className="hero-position-line h-px w-5 bg-black/20 sm:w-8" />

                <span>
                  Strategy · Execution · Growth
                </span>

                <span className="hero-position-line h-px w-5 bg-black/20 sm:w-8" />
              </div>

              {/* =================================================
                  BUTTONS
              ================================================== */}

              <div
                className="
                  hero-buttons
                  flex
                  w-full
                  flex-col
                  items-center
                  justify-center
                  gap-2.5
                  sm:w-auto
                  sm:flex-row
                  sm:gap-3
                "
              >
                <Link
                  href="/contact"
                  className="
                    hero-button
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5
                    bg-[#E52B2B]
                    px-6
                    py-3.5
                    text-xs
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#c91f1f]
                    hover:shadow-xl
                    sm:px-7
                    sm:py-3.5
                    sm:text-sm
                  "
                >
                  Start a project
                  <span className="hero-button-arrow">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="
                    hero-button
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5
                    border
                    border-black/15
                    bg-transparent
                    px-6
                    py-3.5
                    text-xs
                    font-semibold
                    text-[#111318]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#E52B2B]
                    hover:text-[#E52B2B]
                    sm:px-7
                    sm:py-3.5
                    sm:text-sm
                  "
                >
                  See what we do
                  <span className="hero-button-arrow">
                    ↓
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* =================================================
              LEFT FLOATING LABEL
          ================================================== */}

          <div
            className="
              hero-floating-left
              absolute
              left-[4%]
              top-[30%]
              hidden
              rotate-[-5deg]
              sm:block
              md:left-[6%]
              lg:top-[31%]
            "
          >
            <div
              className="
                rounded-md
                bg-[#111318]
                px-3
                py-1.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-black
                shadow-md
                sm:text-[9px]
              "
            >
              Strategy
            </div>
          </div>

          {/* =================================================
              RIGHT FLOATING LABEL
          ================================================== */}

          <div
            className="
              hero-floating-right
              absolute
              right-[4%]
              top-[34%]
              hidden
              rotate-[4deg]
              sm:block
              md:right-[7%]
              lg:top-[36%]
            "
          >
            <div
              className="
                rounded-md
                bg-[#E52B2B]
                px-3
                py-1.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                shadow-md
                sm:text-[9px]
              "
            >
              Growth
            </div>
          </div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================== */}

          <div
            className="
              hero-bottom
              absolute
              bottom-5
              left-1/2
              hidden
              mb-5
              w-full
              -translate-x-1/2
              items-center
              justify-center
              gap-3
              px-6
              text-[8px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-black/70
              sm:flex
              sm:text-[9px]
              lg:bottom-7
            "
          >
            <span>Digital Strategy</span>

            <span className="h-1 w-1 rounded-full bg-[#E52B2B]" />

            <span>Website</span>

            <span className="h-1 w-1 rounded-full bg-[#E52B2B]" />

            <span>SEO</span>

            <span className="h-1 w-1 rounded-full bg-[#E52B2B]" />

            <span>Performance Marketing</span>
          </div>

          {/* =================================================
              BOTTOM SYSTEM INDICATOR
          ================================================== */}

          <div
            className="
              hero-system-status
              pointer-events-none
              absolute
              bottom-6
              right-6
              hidden
              items-center
              gap-2
              text-[7px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-black/25
              lg:flex
            "
          >
            <span className="hero-status-dot h-1.5 w-1.5 rounded-full bg-[#E52B2B]" />
            SYSTEM ACTIVE
          </div>
        </div>
      </div>

      <HeroAnimation />
    </section>
  );
}
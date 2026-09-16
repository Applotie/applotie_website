
import HeroTextAnimation from "./animations/HeroTextAnimation";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#111318]">
      <div
        className="
          relative
          min-h-[680px]
          w-full
          overflow-hidden
          bg-[#111318]
          text-black
          sm:min-h-[720px]
          lg:min-h-[820px]
          xl:min-h-[900px]
        "
      >
        {/* ==========================================
            HERO CONTENT
        =========================================== */}
        <HeroTextAnimation>
          <div
            className="
              relative
              z-20
              mx-auto
              flex
              min-h-[680px]
              w-full
              max-w-[1800px]
              flex-col
              items-center
              justify-center
              px-5
              pb-16
              pt-28
              text-center
              sm:min-h-[720px]
              sm:px-8
              sm:pt-32
              md:px-10
              lg:min-h-[820px]
              lg:px-16
              lg:pt-32
              xl:min-h-[900px]
              xl:px-20
              xl:pt-32
              2xl:px-28
            "
          >
            {/* ======================================
                BADGE
            ======================================= */}
            <div
              data-hero-element
              className="
                mb-7
                flex
                w-fit
                items-center
                justify-center
                gap-2
                text-[10px]
                font-medium
                sm:mb-9
                sm:text-xs
                lg:mb-10
              "
            >
              <span
                className="
                  flex
                  h-3
                  w-3
                  items-center
                  justify-center
                  rounded-sm
                  bg-[#E52B2B]
                  text-[8px]
                  text-white
                  sm:h-4
                  sm:w-4
                "
              >
                ✦
              </span>

              <span className="text-[#E52B2B]">
                Digital products, built to matter
              </span>

              <span className="text-black/30">—</span>

              <span className="text-black/60 font-bold">
                Build Your Digital Presence
              </span>
            </div>

            {/* ======================================
                MAIN CONTENT
            ======================================= */}
            <div className="flex w-full max-w-6xl flex-col items-center">
              <h1
                data-hero-element
                className="
                  max-w-5xl
                  text-center
                  text-[3rem]
                  font-semibold
                  leading-[0.92]
                  tracking-[-0.06em]
                  text-black/85
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[5.8rem]
                  xl:text-[6.7rem]
                  2xl:text-[7.5rem]
                "
              >
                We build the
                <br />

                <span className="text-[#E52B2B]">
                  digital edge.
                </span>

                <br />

                <span>
                  You grow from it.
                </span>
              </h1>

              {/* ======================================
                  DESCRIPTION + BUTTONS
              ======================================= */}
              <div
                data-hero-element
                className="
                  mt-8
                  flex
                  w-full
                  flex-col
                  items-center
                  justify-center
                  gap-7
                  sm:mt-10
                  md:mt-11
                  lg:mt-12
                "
              >
                <p
                  className="
                    max-w-md
                    text-center
                    text-sm
                    leading-6
                    text-black/70
                    sm:text-base
                    sm:leading-7
                    lg:text-lg
                    lg:leading-8
                  "
                >
                  Websites, apps and growth systems for ambitious
                  businesses ready to move with clarity.
                </p>

                <div
                  className="
                    flex
                    w-full
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    sm:w-auto
                    sm:flex-row
                  "
                >
                  <Link
                    href="#contact"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      bg-[#E52B2B]
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#c91f1f]
                      hover:shadow-xl
                    "
                  >
                    Start a conversation
                    <span>↗</span>
                  </Link>

                  <Link
                    href="#services"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      border
                      border-white/20
                      bg-[#1a1c22]/80
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      text-black
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#E52B2B]
                      hover:text-[#E52B2B]
                    "
                  >
                    Explore our services
                    <span>↓</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </HeroTextAnimation>

        {/* ==========================================
            SEO TAG
        =========================================== */}
        <div
          data-hero-element
          className="
            absolute
            left-[5%]
            top-[27%]
            z-20
            hidden
            rotate-[-5deg]
            sm:block
            md:left-[7%]
            lg:top-[30%]
          "
        >
          <div
            className="
              rounded-md
              bg-[#E52B2B]
              px-3
              py-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-wide
              text-white
              shadow-lg
            "
          >
            SEO
          </div>
        </div>

        {/* ==========================================
            WEB DEV TAG
        =========================================== */}
        <div
          data-hero-element
          className="
            absolute
            right-[5%]
            top-[34%]
            z-20
            hidden
            rotate-[4deg]
            sm:block
            md:right-[8%]
            lg:top-[37%]
          "
        >
          <div
            className="
              rounded-md
              bg-[#F5C518]
              px-3
              py-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-wide
              text-white
              shadow-lg
            "
          >
            Web Dev
          </div>
        </div>
      </div>
    </section>
  );
}


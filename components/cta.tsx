import FinalCTAAnimation from "./animations/CTAAnimation";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111318] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA BOX */}
        <div
          data-cta-container
          className="
            relative
            overflow-hidden
            rounded-[1.75rem]
            border border-[#111318]/10
            bg-[#111318]
            px-5 py-12
            shadow-[0_25px_80px_rgba(17,19,24,0.14)]
            sm:rounded-[2rem]
            sm:px-10 sm:py-16
            lg:px-16 lg:py-20
            xl:px-20
          "
        >
          {/* Decorative grid */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              opacity-[0.07]
              [background-image:linear-gradient(rgba(32,33,36,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(32,33,36,0.12)_1px,transparent_1px)]
              [background-size:50px_50px]
              sm:[background-size:60px_60px]
            "
          />

          {/* Red glow */}
          <div
            data-cta-red
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24 -top-24
              h-72 w-72
              rounded-full
              bg-[#E52B2B]/25
              blur-[100px]
              sm:-right-32 sm:-top-32
              sm:h-96 sm:w-96
            "
          />

          {/* Yellow glow */}
          <div
            data-cta-yellow
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-32 -left-24
              h-64 w-64
              rounded-full
              bg-[#F5C518]/15
              blur-[90px]
              sm:-bottom-40 sm:-left-32
              sm:h-80 sm:w-80
            "
          />

          {/* Decorative circle */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-6 top-6
              hidden
              h-16 w-16
              rounded-full
              border border-[#F5C518]/30
              sm:block
              lg:right-10 lg:top-10
              lg:h-24 lg:w-24
            "
          >
            <div
              className="
                absolute
                right-2 top-2
                h-2.5 w-2.5
                rounded-full
                bg-[#F5C518]
                lg:right-3 lg:top-3
              "
            />
          </div>

          {/* Main content */}
          <div
            data-cta-content
            className="
              relative z-10
              mx-auto
              max-w-4xl
              text-center
            "
          >
            {/* Eyebrow */}
            <p
              className="
                mb-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#F5C518]
                sm:mb-5
                sm:text-xs
                sm:tracking-[0.3em]
              "
            >
              Let&apos;s Build Something
            </p>

            {/* Heading */}
            <h2
              className="
                text-4xl
                font-semibold
                leading-[0.95]
                tracking-[-0.045em]
                text-black/85
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              Have an idea?
              <br />
              <span className="text-[#E52B2B]">
                Let&apos;s build it.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-6
                text-black/65
                sm:mt-7
                sm:text-base
                sm:leading-7
                lg:text-lg
                lg:leading-8
              "
            >
              Tell us what you&apos;re trying to build, and we&apos;ll help
              you figure out the best way to make it happen.
            </p>

            {/* CTA */}
            <div className="mt-8 sm:mt-9 lg:mt-10">
              <Link
                href="#contact-form"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#E52B2B]
                  px-6 py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#7b96e2]
                  hover:text-white
                  hover:shadow-[0_12px_35px_rgba(245,197,24,0.2)]
                  sm:px-7 sm:py-4
                "
              >
                Start a Conversation

                <span
                  aria-hidden="true"
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom information */}
          <div
            data-cta-bottom
            className="
              relative z-10
              mt-10
              flex
              flex-col
              items-center
              justify-between
              gap-3
              border-t
              border-white/10
              pt-5
              text-center
              sm:mt-12
              sm:flex-row
              sm:pt-6
              sm:text-left
            "
          >
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-black/60
                sm:text-xs
              "
            >
              APPlotie Technologies
            </p>

            <p
              className="
                text-[10px]
                text-black/60
                sm:text-xs
              "
            >
              Strategy · Design · Development · Growth
            </p>
          </div>

          {/* Bottom accent */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-1/2
              h-1
              w-24
              -translate-x-1/2
              rounded-full
              bg-[#F5C518]
              sm:w-32
            "
          />
        </div>
      </div>

      {/* Animation only — no page content inside client component */}
      <FinalCTAAnimation />
    </section>
  );
}
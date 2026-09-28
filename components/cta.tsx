import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-[#111318] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* CTA */}
        <div
          className="
            bg-[#E52B2B]
            px-6
            py-10
            sm:px-10
            sm:py-12
            md:px-14
            md:py-14
            lg:px-16
            lg:py-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-16
            "
          >
            {/* CONTENT */}
            <div className="max-w-2xl">
              <p
                className="
                  mb-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-black/70
                  sm:text-xs
                "
              >
                Let&apos;s work together
              </p>

              <h2
                className="
                  text-4xl
                  font-bold
                  leading-tight
                  tracking-[-0.03em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Have an idea?
                <br />
                <span className="text-black">Let&apos;s build it.</span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/85
                  sm:text-base
                  sm:leading-7
                "
              >
                Whether you need a website, an app, better visibility or a
                stronger digital strategy, let&apos;s create something that
                moves your business forward.
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  bg-white
                  px-6
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-black
                  sm:px-7
                  sm:py-4
                "
              >
                Start a Conversation

                <span
                  className="
                    text-lg
                    leading-none
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
        </div>

        {/* BOTTOM META */}
        <div
          className="
            flex
            flex-col
            gap-3
            border-b
            border-white/10
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-black/60
              sm:text-[10px]
            "
          >
            Strategy / Design / Development / Growth
          </span>

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-black/60
              sm:text-[10px]
            "
          >
            Applotie Technologies
          </span>
        </div>
      </div>
    </section>
  );
} 
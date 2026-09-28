import DifferenceAnimation from "./animations/DifferenceAnimation";

const differences = [
  {
    number: "01",
    word: "THINK",
    title: "before you build.",
    description:
      "We start with your business, audience and goals — then create a digital strategy around what actually needs to move the needle.",
    label: "STRATEGY FIRST",
    accent: "#E52B2B",
  },
  {
    number: "02",
    word: "MAKE",
    title: "performance part of the design.",
    description:
      "Websites, apps and campaigns are built to be fast, useful and ready to grow — not simply made to look good.",
    label: "BUILT TO PERFORM",
    accent: "#F5C518",
  },
  {
    number: "03",
    word: "BUILD",
    title: "visibility into everything.",
    description:
      "SEO, content, conversion and performance marketing are considered from the beginning, not added after launch.",
    label: "GROWTH MINDED",
    accent: "#E52B2B",
  },
  {
    number: "04",
    word: "CONNECT",
    title: "strategy, technology & marketing.",
    description:
      "One connected team means fewer handoffs, clearer decisions and a digital presence that works as one system.",
    label: "ONE DIRECTION",
    accent: "#F5C518",
  },
  {
    number: "05",
    word: "KEEP",
    title: "moving after launch.",
    description:
      "We look at what happens after the website or campaign goes live, learn from the numbers and keep improving.",
    label: "LONG TERM",
    accent: "#E52B2B",
  },
];

export default function Difference() {
  return (
    <section
      id="difference"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        text-[#202124]
      "
    >
      {/* =====================================================
          INTRO
      ====================================================== */}

      <div
        data-difference-intro
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          pb-14
          pt-20
          sm:px-8
          sm:pb-20
          sm:pt-28
          lg:px-14
          lg:pb-28
          lg:pt-40
          xl:px-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[220px_minmax(0,1fr)]
            lg:gap-12
            xl:grid-cols-[260px_minmax(0,1fr)]
            xl:gap-16
          "
        >
          {/* LEFT LABEL */}

          <div className="flex items-start">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#E52B2B]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[#202124]/55
                    sm:text-[11px]
                  "
                >
                  The Applotie Difference
                </span>
              </div>

              <div
                className="
                  mt-8
                  hidden
                  border-l
                  border-[#202124]/10
                  pl-5
                  lg:block
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#202124]/30
                  "
                >
                  01 — 05
                </span>

                <p
                  className="
                    mt-3
                    max-w-[150px]
                    text-xs
                    leading-5
                    text-[#202124]/45
                  "
                >
                  A different way of approaching digital growth.
                </p>
              </div>
            </div>
          </div>

          {/* MAIN STATEMENT */}

          <div className="min-w-0">
            <h2
              className="
                max-w-[1100px]
                text-[clamp(3.2rem,8vw,8.5rem)]
                font-semibold
                leading-[0.86]
                tracking-[-0.075em]
              "
            >
              We don&apos;t just
              <span className="text-[#E52B2B]"> deliver.</span>
              <br />

              <span className="text-[#202124]/20">
                We think.
              </span>
            </h2>

            <div
              className="
                mt-8
                grid
                gap-7
                border-t
                border-[#202124]/10
                pt-6
                sm:mt-10
                sm:gap-8
                md:grid-cols-[minmax(0,1fr)_auto]
                md:items-end
              "
            >
              <p
                className="
                  max-w-2xl
                  text-sm
                  leading-6
                  text-[#202124]/60
                  sm:text-base
                  sm:leading-7
                  lg:text-lg
                  lg:leading-8
                "
              >
                We combine strategy, technology and performance marketing
                to help businesses build a stronger digital presence and
                grow with purpose.
              </p>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#202124]/20" />

                <span
                  className="
                    whitespace-nowrap
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#202124]/35
                  "
                >
                  Strategy / Build / Grow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MANIFESTO
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          pb-20
          sm:px-8
          sm:pb-24
          lg:px-14
          lg:pb-36
          xl:px-20
        "
      >
        <div
          data-difference-list
          className="
            border-t
            border-[#202124]/15
          "
        >
          {differences.map((item) => (
            <article
              key={item.number}
              data-difference-item
              className="
                group
                relative
                border-b
                border-[#202124]/15
              "
            >
              {/* =================================================
                  MAIN ROW
              ================================================== */}

              <div
                className="
                  relative
                  grid
                  grid-cols-1
                  gap-5
                  py-7
                  sm:py-9
                  md:grid-cols-[70px_minmax(0,1fr)]
                  md:items-center
                  md:gap-7
                  lg:min-h-[185px]
                  lg:grid-cols-[100px_minmax(0,1fr)_240px]
                  lg:gap-8
                    xl:grid-cols-[110px_minmax(0,1fr)_260px]
                  xl:gap-10
                "
              >
                {/* NUMBER */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    md:self-center
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.16em]
                      text-[#202124]/30
                      sm:text-xs
                    "
                  >
                    {item.number}
                  </span>

                  <span
                    className="
                      hidden
                      h-px
                      w-5
                      bg-[#202124]/15
                      md:block
                    "
                  />
                </div>

                {/* WORD + TITLE */}

                <div className="min-w-0">
                  <div
                    className="
                      flex
                      flex-wrap
                      items-baseline
                      gap-x-4
                      gap-y-2
                    "
                  >
                    <h3
                      data-difference-word
                      className="
                        max-w-full
                        break-words
                        text-[clamp(3rem,10vw,7.5rem)]
                        font-bold
                        leading-[0.78]
                        tracking-[-0.075em]
                      "
                    >
                      {item.word}
                    </h3>

                    <span
                      className="
                        max-w-full
                        text-[clamp(1.25rem,3vw,3rem)]
                        font-medium
                        leading-[0.95]
                        tracking-[-0.045em]
                        text-[#202124]/30
                      "
                    >
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* DESKTOP LABEL */}

                <div
                  className="
                    hidden
                    items-center
                    justify-end
                    gap-3
                    lg:flex
                  "
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  <span
                    className="
                      whitespace-nowrap
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#202124]/35
                    "
                  >
                    {item.label}
                  </span>

                  <span
                    data-difference-arrow
                    className="
                      ml-3
                      text-xl
                      text-[#202124]/25
                    "
                  >
                    ↗
                  </span>
                </div>
              </div>

              {/* =================================================
                  DETAIL

                  IMPORTANT:
                  Mobile/tablet = ALWAYS VISIBLE
                  Desktop = controlled by GSAP
              ================================================== */}

              <div
                data-difference-detail
                className="
                  relative
                  grid
                  max-h-none
                  overflow-visible
                  opacity-100
                  lg:max-h-0
                  lg:overflow-hidden
                  lg:opacity-0
                  lg:grid-cols-[100px_minmax(0,1fr)_240px]
                  lg:gap-8
                  xl:grid-cols-[110px_minmax(0,1fr)_260px]
                "
              >
                <div className="hidden lg:block" />

                <div
                  className="
                    grid
                    gap-6
                    pb-8
                    md:grid-cols-[minmax(0,1fr)_220px]
                    md:items-end
                    lg:pb-14
                    xl:grid-cols-[minmax(0,1fr)_300px]
                  "
                >
                  {/* DESCRIPTION */}

                  <p
                    className="
                      max-w-3xl
                      text-base
                      leading-7
                      tracking-[-0.015em]
                      text-[#202124]/65
                      sm:text-lg
                      sm:leading-7
                      lg:text-xl
                      lg:leading-8
                    "
                  >
                    {item.description}
                  </p>

                  {/* WHY IT MATTERS */}

                  <div
                    className="
                      hidden
                      border-l
                      border-[#202124]/10
                      pl-5
                      md:block
                      lg:pl-6
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#202124]/30
                      "
                    >
                      Why it matters
                    </span>

                    <div
                      className="mt-4 h-1 w-10"
                      style={{
                        backgroundColor: item.accent,
                      }}
                    />
                  </div>
                </div>

                <div className="hidden lg:block" />
              </div>

              {/* =================================================
                  MOBILE LABEL
              ================================================== */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  pb-6
                  lg:hidden
                "
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: item.accent,
                  }}
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#202124]/35
                  "
                >
                  {item.label}
                </span>

                <span className="ml-auto text-lg text-[#202124]/25">
                  ↗
                </span>
              </div>

              {/* HOVER ACCENT */}

              <div
                data-difference-line
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  origin-left
                "
                style={{
                  backgroundColor: item.accent,
                }}
              />
            </article>
          ))}
        </div>

        {/* =====================================================
            FOOTER STATEMENT
        ====================================================== */}

        <div
          data-difference-footer
          className="
            relative
            mt-16
            overflow-hidden
            bg-[#E52B2B]
            px-5
            py-9
            text-white
            sm:mt-20
            sm:px-8
            sm:py-11
            lg:mt-28
            lg:px-14
            lg:py-16
            xl:px-16
          "
        >
          <div
            className="
              relative
              z-10
              grid
              gap-8
              lg:grid-cols-[minmax(0,1fr)_auto]
              lg:items-end
              lg:gap-12
            "
          >
            <div>
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-black/60
                  sm:text-xs
                "
              >
                Built in Patna. Built to move.
              </span>

              <p
                className="
                  mt-4
                  max-w-4xl
                  text-xl
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.04em]
                  sm:text-2xl
                  md:text-3xl
                  lg:text-4xl
                "
              >
                Digital thinking for businesses that want to be seen,
                remembered and chosen.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-black" />

              <span
                className="
                  whitespace-nowrap
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-black/50
                  sm:text-xs
                "
              >
                Applotie Technologies
              </span>
            </div>
          </div>
        </div>
      </div>

      <DifferenceAnimation />
    </section>
  );
}
import TimelineAnimation from "./animations/TimelineAnimation";

const timeline = [
  {
    number: "01",
    year: "2021",
    label: "THE BEGINNING",
    keyword: "START",
    title: "An idea built around affordability.",
    description:
      "Applotie Technologies began with a simple vision — make quality digital solutions accessible to businesses that wanted to grow without the cost and complexity of traditional agencies.",
    tags: ["Digital Solutions", "Business Growth"],
    accent: "red",
    side: "left",
  },
  {
    number: "02",
    year: "2022",
    label: "BUILD",
    keyword: "CREATE",
    title: "From ideas to digital products.",
    description:
      "Our work expanded into web development and app development, helping businesses turn ideas into useful, scalable and conversion-focused digital experiences.",
    tags: ["Web Development", "App Development"],
    accent: "yellow",
    side: "right",
  },
  {
    number: "03",
    year: "2023",
    label: "EXPAND",
    keyword: "GROW",
    title: "Technology became only part of the story.",
    description:
      "We began looking beyond development — bringing SEO, content and digital strategy into the process so businesses could not only launch online, but become easier to discover.",
    tags: ["SEO", "Digital Strategy"],
    accent: "red",
    side: "left",
  },
  {
    number: "04",
    year: "2024",
    label: "PERFORMANCE",
    keyword: "MOVE",
    title: "Digital presence became digital performance.",
    description:
      "Websites, applications and marketing began working together as one system, connecting technology with measurable business outcomes.",
    tags: ["Performance Marketing", "Conversion"],
    accent: "yellow",
    side: "right",
  },
  {
    number: "05",
    year: "2025",
    label: "TODAY",
    keyword: "FORWARD",
    title: "Building what comes next.",
    description:
      "Today, Applotie brings strategy, technology, SEO and performance marketing together for businesses looking to build a stronger digital presence.",
    tags: ["Strategy", "Technology", "Growth"],
    accent: "red",
    side: "left",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="
        relative
        overflow-hidden
        bg-white
        text-[#202124]
      "
    >
      <TimelineAnimation />

      {/* =====================================================
          INTRO
      ===================================================== */}

      <div
        data-timeline-intro
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          py-24
          sm:px-8
          md:px-12
          lg:px-16
          lg:py-32
          xl:px-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[220px_minmax(0,1fr)]
            lg:gap-16
          "
        >
          {/* Label */}

          <div className="flex items-start">
            <div>
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#E52B2B]
                "
              >
                Our Journey
              </p>

              <div className="mt-4 h-px w-14 bg-[#202124]" />

              <p
                className="
                  mt-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#202124]/50
                "
              >
                2021 — Now
              </p>
            </div>
          </div>

          {/* Heading */}

          <div>
            <p
              className="
                max-w-4xl
                text-4xl
                font-medium
                leading-[1.05]
                tracking-[-0.045em]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[88px]
              "
            >
              Built from an idea.
              <br />

              <span className="text-[#E52B2B]">
                Moving toward impact.
              </span>
            </p>

            <div
              className="
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-[#202124]/65
                md:text-lg
              "
            >
              A look at how Applotie evolved from a simple idea into a
              technology and digital growth partner for modern businesses.
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          pb-28
          sm:px-8
          md:px-12
          lg:px-16
          lg:pb-40
          xl:px-20
        "
      >
        {/* Desktop central axis */}

        <div
          aria-hidden="true"
          className="
            absolute
            bottom-24
            left-1/2
            top-0
            hidden
            w-px
            -translate-x-1/2
            bg-[#202124]/15
            lg:block
          "
        />

        {/* Progress line */}

        <div
          data-timeline-progress
          aria-hidden="true"
          className="
            absolute
            bottom-24
            left-1/2
            top-0
            hidden
            w-[2px]
            origin-top
            -translate-x-1/2
            scale-y-0
            bg-[#E52B2B]
            lg:block
          "
        />

        <div className="relative">
          {timeline.map((item, index) => (
            <article
              key={item.year}
              data-timeline-item
              className={`
                relative
                grid
                grid-cols-1
                gap-8
                border-t
                border-[#202124]/15
                py-16
                sm:py-20
                lg:min-h-[430px]
                lg:grid-cols-[1fr_120px_1fr]
                lg:items-center
                lg:gap-10
                lg:border-0
                lg:py-24
                ${index === timeline.length - 1 ? "lg:min-h-[360px]" : ""}
              `}
            >
              {/* =================================================
                  LEFT / RIGHT CONTENT
              ================================================= */}

              <div
                className={`
                  ${
                    item.side === "left"
                      ? "lg:col-start-1 lg:row-start-1 lg:pr-16"
                      : "lg:col-start-3 lg:row-start-1 lg:pl-16"
                  }
                `}
              >
                <div data-timeline-content>
                  {/* Small label */}

                  <div
                    className="
                      mb-5
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className={`
                        h-2
                        w-2
                        ${
                          item.accent === "red"
                            ? "bg-[#E52B2B]"
                            : "bg-[#F5C518]"
                        }
                      `}
                    />

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#202124]/50
                      "
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Keyword */}

                  <p
                    className={`
                      mb-3
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      ${
                        item.accent === "red"
                          ? "text-[#E52B2B]"
                          : "text-[#B89400]"
                      }
                    `}
                  >
                    {item.keyword}
                  </p>

                  {/* Title */}

                  <h3
                    className="
                      max-w-xl
                      text-3xl
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.035em]
                      sm:text-4xl
                      lg:text-[46px]
                      xl:text-[52px]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-6
                      max-w-lg
                      text-sm
                      leading-7
                      text-[#202124]/60
                      sm:text-base
                    "
                  >
                    {item.description}
                  </p>

                  {/* Tags */}

                  <div
                    className="
                      mt-7
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          border
                          border-[#202124]/15
                          px-3
                          py-1.5
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-[#202124]/55
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* =================================================
                  CENTER YEAR
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  lg:col-start-2
                  lg:row-start-1
                  lg:justify-center
                "
              >
                {/* Mobile number */}

                <span
                  className="
                    mr-4
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#202124]/35
                    lg:hidden
                  "
                >
                  {item.number}
                </span>

                {/* Year */}

                <div
                  data-timeline-year
                  className="
                    relative
                    bg-white
                    text-5xl
                    font-semibold
                    leading-none
                    tracking-[-0.07em]
                    sm:text-6xl
                    lg:text-[76px]
                    xl:text-[92px]
                  "
                >
                  {item.year}
                </div>

                {/* Timeline node */}

                <div
                  className={`
                    absolute
                    hidden
                    h-4
                    w-4
                    rounded-full
                    border-[3px]
                    border-white
                    lg:block
                    ${
                      item.accent === "red"
                        ? "bg-[#E52B2B]"
                        : "bg-[#F5C518]"
                    }
                  `}
                />
              </div>

              {/* =================================================
                  DESKTOP SIDE NUMBER
              ================================================= */}

              <div
                className={`
                  absolute
                  top-6
                  hidden
                  text-[11px]
                  font-bold
                  tracking-[0.2em]
                  text-[#202124]/25
                  lg:block
                  ${
                    item.side === "left"
                      ? "right-0"
                      : "left-0"
                  }
                `}
              >
                {item.number}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          END STATEMENT
      ===================================================== */}

      <div
        data-timeline-end
        className="
          border-t
          border-[#202124]/10
          bg-[#202124]
          text-white
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1500px]
            flex-col
            gap-8
            px-5
            py-20
            sm:px-8
            md:px-12
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:px-16
            lg:py-28
            xl:px-20
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#F5C518]
              "
            >
              Next Chapter
            </p>

            <h3
              className="
                mt-4
                max-w-4xl
                text-4xl
                text-black/80
                font-semibold
                leading-none
                tracking-[-0.05em]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              The story is still
              <span className="text-[#E52B2B]"> moving.</span>
            </h3>
          </div>

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-black/75
            "
          >
            New ideas. New technology. New businesses to help grow.
          </p>
        </div>
      </div>
    </section>
  );
}
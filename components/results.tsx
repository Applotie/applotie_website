
import ResultsAnimation from "./animations/ResultsAnimation";

export default function Results() {
  const results = [
    {
      number: "178+",
      value: 178,
      suffix: "+",
      label: "Projects Delivered",
      icon: "◉",
      color: "black",
    },
    {
      number: "20+",
      value: 20,
      suffix: "+",
      label: "Businesses Helped",
      icon: "✦",
      color: "black",
    },
    {
      number: "8×",
      value: 8,
      suffix: "×",
      label: "Average Growth",
      icon: "↗",
      color: "red",
    },
    {
      number: "95%",
      value: 95,
      suffix: "%",
      label: "Client Retention",
      icon: "◇",
      color: "black",
    },
  ];

  return (
    <>
      <section
        id="results"
        className="
          relative
          flex
          min-h-[100vh]
          w-full
          items-center
          overflow-hidden
          bg-[#111318]
          text-black
          sm:py-24
          lg:py-0
        "
      >
        {/* Decorative background elements */}

        <div
          className="
            results-orb
            pointer-events-none
            absolute
            -left-32
            top-1/3
            h-72
            w-72
            rounded-full
            bg-[#E52B2B]/5
            blur-3xl
          "
        />

        <div
          className="
            results-orb
            pointer-events-none
            absolute
            -right-32
            bottom-1/4
            h-72
            w-72
            rounded-full
            bg-[#F5C518]/10
            blur-3xl
          "
        />

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1600px]
            flex-col
            justify-center
            px-5
            sm:px-8
            lg:px-12
            xl:px-16
            2xl:px-20
          "
        >
          {/* HEADER */}

          <div
            className="
              results-header
              mx-auto
              w-full
              max-w-3xl
              text-center
            "
          >
            {/* Eyebrow */}

            <div
              className="
                results-eyebrow
                mb-5
                flex
                items-center
                justify-center
                gap-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#E52B2B]
                sm:mb-6
                sm:text-xs
              "
            >
              <span
                className="
                  results-eyebrow-dot
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#E52B2B]
                "
              />

              <span>Numbers That Speak</span>
            </div>

            {/* Heading */}

            <h2
              className="
                results-title
                text-[2.7rem]
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                text-black/85
                sm:text-5xl
                md:text-6xl
                lg:text-[5.2rem]
                xl:text-[6rem]
                2xl:text-[6.5rem]
              "
            >
              <span className="results-title-line block">
                Numbers That
              </span>

              <span className="results-title-line block">
                Define Our{" "}
                <span className="results-title-accent text-[#E52B2B]">
                  Impact.
                </span>
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                results-description
                mx-auto
                mt-6
                max-w-xl
                text-sm
                leading-6
                text-black/85
                sm:mt-7
                sm:text-base
                sm:leading-7
                lg:mt-8
                lg:text-lg
                lg:leading-8
              "
            >
              Digital solutions built with strategy, technology and
              creativity — designed to create measurable business outcomes.
            </p>
          </div>

          {/* RESULTS CARDS */}

          <div
            className="
              results-grid
              mx-auto
              mt-12
              grid
              w-full
              max-w-[1350px]
              grid-cols-1
              gap-4
              sm:mt-14
              sm:grid-cols-2
              sm:gap-5
              lg:mt-16
              lg:grid-cols-4
              lg:gap-5
              xl:gap-6
            "
          >
            {results.map((result, index) => (
              <div
                key={result.label}
                data-card
                data-index={index}
                className="
                  group
                  relative
                  min-h-[210px]
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#1a1c22]
                  px-6
                  py-8
                  text-center
                  sm:min-h-[230px]
                  lg:min-h-[250px]
                  xl:min-h-[270px]
                "
              >
                {/* Cursor glow */}

                <div
                  className="
                    card-glow
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    h-32
                    w-32
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#E52B2B]/10
                    opacity-0
                    blur-2xl
                  "
                />

                {/* Decorative corner */}

                <div
                  className={`
                    absolute
                    right-0
                    top-0
                    h-20
                    w-20
                    rounded-bl-[80px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    ${
                      result.color === "red"
                        ? "bg-[#E52B2B]/5"
                        : "bg-[#F5C518]/10"
                    }
                  `}
                />

                {/* Icon */}

                <div
                  data-icon
                  className={`
                    relative
                    z-10
                    mx-auto
                    mb-7
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    text-lg
                    ${
                      result.color === "red"
                        ? "bg-[#E52B2B]/10 text-[#E52B2B]"
                        : "bg-[#F5C518]/15 text-[#C69B00]"
                    }
                  `}
                >
                  {result.icon}
                </div>

                {/* Number */}

                <div
                  data-number
                  data-value={result.value}
                  data-suffix={result.suffix}
                  className={`
                    relative
                    z-10
                    text-5xl
                    font-semibold
                    leading-none
                    tracking-[-0.055em]
                    sm:text-6xl
                    lg:text-[4rem]
                    xl:text-[4.5rem]
                    ${
                      result.color === "red"
                        ? "text-[#E52B2B]"
                        : "text-black"
                    }
                  `}
                >
                  0{result.suffix}
                </div>

                {/* Label */}

                <p
                  className="
                    relative
                    z-10
                    mt-4
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-black/75
                    sm:text-xs
                  "
                >
                  {result.label}
                </p>

                {/* Bottom accent */}

                <div
                  className={`
                    card-accent
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    ${
                      result.color === "red"
                        ? "bg-[#E52B2B]"
                        : "bg-[#F5C518]"
                    }
                  `}
                />

                {/* Number corner */}

                <span
                  className="
                    absolute
                    bottom-4
                    right-5
                    text-[9px]
                    font-bold
                    tracking-widest
                    text-black/75
                  "
                >
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResultsAnimation />
    </>
  );
}


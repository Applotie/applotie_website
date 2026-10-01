import ResultsAnimation from "./animations/ResultsAnimation";

const results = [
  {
    number: "178+",
    label: "Projects Delivered",
    icon: "◉",
    color: "black",
  },
  {
    number: "20+",
    label: "Businesses Helped",
    icon: "✦",
    color: "black",
  },
  {
    number: "8×",
    label: "Average Growth",
    icon: "↗",
    color: "red",
  },
  {
    number: "95%",
    label: "Client Retention",
    icon: "◇",
    color: "black",
  },
];

export default function Results() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden text-black/80">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-signal-red/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-muted-gold/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-between px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        
        {/* Header */}
        <div className="results-header max-w-4xl">
          <p className="results-eyebrow mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-signal-red sm:text-xs">
            Results, Not Promises
          </p>

          <h2 className="results-title text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
            <span className="results-title-line block">
              The work speaks
            </span>

            <span className="results-title-line results-title-accent block text-signal-red">
              for itself.
            </span>
          </h2>

          <p className="results-description mt-6 max-w-2xl text-sm leading-7 text-black/60 sm:text-base lg:text-lg">
            From websites and SEO to performance marketing and digital growth,
            we focus on work that creates a measurable difference for the
            businesses we partner with.
          </p>

          <p className="results-support mt-4 max-w-2xl text-xs font-medium uppercase tracking-[0.12em] text-black/50 sm:text-sm">
            A digital marketing agency in Patna building practical digital
            systems for growing businesses.
          </p>
        </div>

        {/* Results Grid */}
        <div className="results-grid mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result, index) => (
            <div
              key={index}
              className="data-card group relative flex min-h-[230px] flex-col items-center justify-between overflow-hidden rounded-sm bg-ivory p-6 text-center sm:min-h-[260px] sm:p-8 lg:min-h-[280px]"
              data-value={result.number.replace(/[^\d]/g, "")}
            >
              {/* Icon */}
              <div className="data-icon flex w-full items-center justify-center">
                <span
                  className={`text-2xl ${
                    result.color === "red"
                      ? "text-signal-red"
                      : "text-black/50"
                  }`}
                >
                  {result.icon}
                </span>
              </div>

              {/* Number + Label */}
              <div className="flex flex-col items-center">
                <div
                  className={`data-number text-6xl font-semibold leading-none tracking-[-0.05em] sm:text-7xl lg:text-[5.5rem] xl:text-[6rem] ${
                    result.color === "red"
                      ? "text-signal-red"
                      : "text-black"
                  }`}
                >
                  <span className="number-value">0</span>
                  <span className="number-suffix">
                    {result.number.replace(/[\d]/g, "")}
                  </span>
                </div>

                <p className="data-label mt-4 text-xs font-bold uppercase tracking-[0.16em] text-black/40 sm:text-sm">
                  {result.label}
                </p>
              </div>

              {/* Card Number */}
              <span className="data-index text-[10px] font-bold uppercase tracking-[0.2em] text-black/20">
                0{index + 1}
              </span>

              {/* Accent */}
              <div
                className={`card-accent absolute bottom-0 left-0 h-[2px] w-full ${
                  result.color === "red"
                    ? "bg-signal-red"
                    : "bg-black/10"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="results-footer mt-12 flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/50 sm:text-xs">
            SEO · Performance Marketing · Web Development · Digital Growth
          </p>

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 sm:text-xs">
            Strategy → Execution → Results
          </p>
        </div>
      </div>

      {/* Animation Controller */}
      <ResultsAnimation />
    </section>
  );
}
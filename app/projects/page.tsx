import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Web Development",
    client: "Northstar Finance",
    title: "Turning a complex service into a simple digital experience.",
    description:
      "Redesigned and rebuilt a finance company's website to simplify its services, improve trust and create a clearer path from visitor to enquiry.",
    result: "42%",
    resultLabel: "increase in enquiries",
    stack: "Next.js · Tailwind · CMS",
    accent: "#E52B2B",
    background: "#FFF5F3",
  },
  {
    number: "02",
    category: "Software Development",
    client: "Flowdesk",
    title: "A custom platform built around the way the team actually works.",
    description:
      "Designed and developed a centralized business platform that replaced fragmented workflows with a faster, more connected system.",
    result: "60%",
    resultLabel: "less manual work",
    stack: "React · Node.js · MongoDB",
    accent: "#F0B900",
    background: "#FFF9E8",
  },
  {
    number: "03",
    category: "SEO & Growth",
    client: "UrbanNest",
    title: "Taking a competitive property brand from overlooked to discoverable.",
    description:
      "Built a technical SEO and content strategy around high-intent searches, improving organic visibility and bringing more qualified visitors to the business.",
    result: "3.4×",
    resultLabel: "organic traffic growth",
    stack: "Technical SEO · Content · Analytics",
    accent: "#E52B2B",
    background: "#F7F7F5",
  },
  {
    number: "04",
    category: "Performance Marketing",
    client: "PeakFit",
    title: "Turning paid traffic into a measurable growth engine.",
    description:
      "Connected campaign strategy, landing pages and conversion tracking to create a performance system focused on qualified leads rather than vanity metrics.",
    result: "2.8×",
    resultLabel: "return on ad spend",
    stack: "Meta Ads · Google Ads · CRO",
    accent: "#202124",
    background: "#F1F1EF",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#202124]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#E52B2B]">
            Selected work
          </p>

          <h1
            className="
              max-w-5xl
              text-5xl
              font-semibold
              leading-[0.94]
              tracking-[-0.06em]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Work that moves
            <br className="hidden sm:block" />{" "}
            <span className="text-[#E52B2B]">business forward.</span>
          </h1>

          <p
            className="
              mt-7
              max-w-2xl
              text-sm
              leading-6
              text-[#202124]/80
              sm:text-base
              sm:leading-7
              lg:text-lg
              lg:leading-8
            "
          >
            A selection of digital products, websites and growth systems
            designed to solve real problems and create measurable outcomes.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-y
          border-[#202124]/10
          px-5
          py-14
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-28
        "
      >
        {/* Grid background */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-60
            [background-image:linear-gradient(to_right,rgba(32,33,36,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,33,36,0.07)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <div className="relative mx-auto max-w-7xl">

          {/* Section intro */}

          <div className="mb-12 flex flex-col gap-5 sm:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F0B900]">
                Case studies
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Ideas are easy.
                <br />
                <span className="text-[#E52B2B]">
                  Execution is the difference.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#202124]/95 font-semibold">
              Every project starts with a business challenge and ends with
              something we can measure.
            </p>
          </div>

          {/* Project grid */}

          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {projects.map((project) => (
              <article
                key={project.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#202124]/10
                  p-5
                  shadow-[0_15px_50px_rgba(32,33,36,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_25px_70px_rgba(32,33,36,0.10)]
                  sm:p-7
                  lg:p-9
                "
                style={{
                  backgroundColor: project.background,
                }}
              >
                {/* Decorative circle */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    border
                    border-[#202124]/10
                    transition-transform
                    duration-700
                    group-hover:scale-125
                  "
                />

                {/* Header */}

                <div className="relative flex items-center justify-between border-b border-[#202124]/10 pb-5">
                  <div>
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#E52B2B]
                        sm:text-xs
                      "
                    >
                      {project.category}
                    </span>

                    <p className="mt-1 text-xs text-[#202124]/45">
                      {project.client}
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-[#202124]/35">
                    {project.number}
                  </span>
                </div>

                {/* Main content */}

                <div className="relative mt-10 sm:mt-14">
                  <h2
                    className="
                      max-w-xl
                      text-2xl
                      font-semibold
                      leading-[1.08]
                      tracking-[-0.04em]
                      sm:text-3xl
                      lg:text-4xl
                    "
                  >
                    {project.title}
                  </h2>

                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-sm
                      leading-6
                      text-[#202124]/60
                      sm:text-base
                      sm:leading-7
                    "
                  >
                    {project.description}
                  </p>
                </div>

                {/* Result */}

                <div
                  className="
                    relative
                    mt-10
                    grid
                    grid-cols-[auto_1fr]
                    items-end
                    gap-4
                    border-t
                    border-[#202124]/10
                    pt-6
                    sm:mt-14
                    sm:pt-7
                  "
                >
                  <div>
                    <p
                      className="
                        text-4xl
                        font-semibold
                        leading-none
                        tracking-[-0.05em]
                        sm:text-5xl
                      "
                      style={{
                        color: project.accent,
                      }}
                    >
                      {project.result}
                    </p>

                    <p className="mt-2 text-[11px] font-medium text-[#202124]/50 sm:text-xs">
                      {project.resultLabel}
                    </p>
                  </div>

                  <div className="pb-1 text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#202124]/35">
                      Built with
                    </p>

                    <p className="mt-1 text-xs text-[#202124]/55">
                      {project.stack}
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}

                <div
                  className="
                    relative
                    mt-6
                    h-1
                    w-10
                    rounded-full
                    transition-all
                    duration-500
                    group-hover:w-24
                  "
                  style={{
                    backgroundColor: project.accent,
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E52B2B]">
              Our approach
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
              Every project starts with a problem.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <span className="text-sm font-semibold text-[#F0B900]">
                01
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Understand
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#202124]/55">
                We understand the business, audience and problem before
                deciding what to build.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold text-[#E52B2B]">
                02
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Build
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#202124]/55">
                Strategy becomes a focused digital experience built for
                performance and growth.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold text-[#202124]">
                03
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Improve
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#202124]/55">
                We measure what happens, learn from it and continuously
                improve the experience.
              </p>
            </div>
          </div>
        </div>
      </section>
```tsx
{/* =====================================================
    CTA
====================================================== */}

<section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
  <div
    className="
      mx-auto
      max-w-7xl
      overflow-hidden
      rounded-[28px]
      bg-[#202124]
      px-6
      py-14
      text-center
      text-black/85
      sm:px-10
      sm:py-16
      lg:px-16
      lg:py-20
    "
  >
    <div className="mx-auto max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F0B900]">
        Your project could be next
      </p>

      <h2
        className="
          mt-5
          text-4xl
          font-semibold
          leading-tight
          tracking-[-0.05em]
          sm:text-5xl
          lg:text-6xl
        "
      >
        Have a problem worth solving?
      </h2>

      <p
        className="
          mx-auto
          mt-5
          max-w-xl
          text-sm
          leading-6
          text-black/85
          sm:text-base
          sm:leading-7
        "
      >
        Tell us what you&apos;re building, improving or trying to grow.
        We&apos;ll help you figure out the right digital approach.
      </p>

      <Link
        href="/contact"
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-[#E52B2B]
          px-6
          py-3.5
          text-sm
          font-semibold
          text-white
          transition-all
          hover:bg-[#F5C518]
          hover:text-[#202124]
        "
      >
        Start a project
        <span>↗</span>
      </Link>
    </div>
  </div>
</section>
```

    </main>
  );
}
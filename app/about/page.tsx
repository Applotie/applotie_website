import Link from "next/link";

const principles = [
  [
    "01",
    "Clarity first",
    "Good digital work starts with a sharp understanding of the problem, the audience and the outcome.",
  ],
  [
    "02",
    "Built to perform",
    "We care about speed, maintainability, discoverability, accessibility and measurable business outcomes.",
  ],
  [
    "03",
    "Partners, not vendors",
    "We stay close, communicate clearly and improve the work together instead of disappearing after launch.",
  ],
];

const capabilities = [
  ["01", "Web Development", "Fast, scalable websites and web applications built around real business goals."],
  ["02", "Software Development", "Custom digital products that simplify operations and create better customer experiences."],
  ["03", "SEO & Growth", "Search strategies designed to increase visibility, qualified traffic and long-term growth."],
  ["04", "Performance Marketing", "Data-driven campaigns focused on reaching the right audience and turning attention into action."],
];

const stats = [
  ["50+", "Projects delivered"],
  ["20+", "Businesses helped"],
  ["3×", "Average growth"],
  ["95%", "Client retention"],
];

export default function About() {
  return (
    <main className="min-h-screen bg-white text-[#202124]">

      {/* HERO */}
      <section className="border-b border-[#202124]/10 px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#E52B2B]">
              About Applotie
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Digital work
              <br />
              with a <span className="text-[#E52B2B]">point of view.</span>
            </h1>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#202124]/85 sm:text-lg sm:leading-8">
            Applotie Technologies is an IT company founded in Patna, Bihar.
            We help ambitious businesses turn ideas into useful, visible and
            high-performing digital products.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70
          [background-image:linear-gradient(to_right,rgba(32,33,36,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,33,36,0.08)_1px,transparent_1px)]
          [background-size:48px_48px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#F0B900]">
                Our starting point
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                From Patna to the wider web.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-[#202124]/85 sm:text-lg sm:leading-8">
              <p>
                We founded Applotie to make serious digital capability more
                accessible to growing businesses. Location is part of our
                story, not a limit on our ambition.
              </p>

              <p>
                We believe businesses shouldn't need five different partners
                to build, launch and grow digitally. Strategy, design,
                development and marketing should work together from the start.
              </p>

              <p>
                That's why we approach every project as a connected system.
                The website needs to perform. The product needs to be useful.
                The brand needs to be memorable. And the marketing needs to
                bring the right people back.
              </p>

              <Link
                href="/contact"
                className="inline-flex font-semibold text-[#E52B2B] transition-colors hover:text-[#F0B900]"
              >
                Start a conversation <span className="ml-2">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-[#202124] px-5 py-16 text-black/75 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map(([number, label]) => (
            <div key={label} className="border-l border-white/15 pl-5">
              <p className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                {number}
              </p>

              <p className="mt-3 text-sm text-black/65 font-semibold">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E52B2B]">
                What we do
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                One team for the digital journey.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[#202124]/80">
                From the first idea to the first customer and everything
                between, we bring the right capabilities together.
              </p>
            </div>

            <div className="grid border-t border-[#202124]/10 sm:grid-cols-2">
              {capabilities.map(([number, title, description]) => (
                <div
                  key={number}
                  className="border-b border-[#202124]/10 p-6 pl-0 sm:p-8 sm:pl-6 sm:nth-[2n]:border-l"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#F0B900]">
                    {number}
                  </span>

                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em]">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#202124]/60">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#F5F4F0] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E52B2B]">
              How we think
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Principles over process.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#202124]/60 sm:text-lg">
              Tools change. Trends change. Algorithms change. The way we
              approach meaningful digital work doesn't.
            </p>
          </div>

          <div className="grid gap-px border border-[#202124]/10 bg-[#202124]/10 md:grid-cols-3">
            {principles.map(([number, title, description]) => (
              <div key={number} className="bg-[#F5F4F0] p-6 sm:p-8">
                <span className="text-sm font-semibold text-[#E52B2B]">
                  {number}
                </span>

                <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#202124]/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENT */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#F0B900]">
              Why Applotie
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl">
              We don't build digital things just to say they exist.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-[#E52B2B] pl-6">
              <h3 className="text-xl font-semibold">
                Business before technology
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#202124]/60">
                We start by understanding what needs to change for the
                business, then choose the technology that makes it possible.
              </p>
            </div>

            <div className="border-l-2 border-[#F0B900] pl-6">
              <h3 className="text-xl font-semibold">
                Simple where possible
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#202124]/60">
                Complexity isn't a feature. We aim for solutions that are
                powerful underneath and intuitive on the surface.
              </p>
            </div>

            <div className="border-l-2 border-[#202124] pl-6">
              <h3 className="text-xl font-semibold">
                Built for what comes next
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#202124]/60">
                Every project should have room to evolve as the business,
                audience and technology change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION / VISION */}
      <section className="relative overflow-hidden bg-[#202124] px-5 py-24 text-black sm:px-8 lg:px-12 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:48px_48px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#F0B900]">
              Looking ahead
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Building from Bihar.
              <br />
              Thinking without borders.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black/85 sm:text-lg sm:leading-8">
              Our ambition is simple: build a technology company that combines
              strong engineering, thoughtful design and measurable growth to
              help businesses compete in a digital-first world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden border border-[#202124]/10 bg-[#F5F4F0] px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F0B900]/20 blur-3xl"
            />

            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E52B2B]">
                Have something in mind?
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
                Let's build something that matters.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#202124]/60">
                Tell us what you're trying to build, improve or grow. We'll
                figure out the next step together.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center bg-[#E52B2B] px-6 py-3 text-sm font-semibold text-red-600 transition-all hover:bg-[#202124]"
              >
                Start a project
                <span className="ml-3 text-lg">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
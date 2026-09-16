import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Web Development",
    short:
      "High-performance websites and web platforms built around your business goals.",
    description:
      "We design and develop modern websites that do more than look good. From company websites and landing pages to custom web platforms, we build experiences that are fast, responsive, SEO-friendly and easy to scale.",
    capabilities: [
      "Business & corporate websites",
      "Landing pages & conversion funnels",
      "Next.js & React development",
      "Custom web applications",
      "CMS & content-driven websites",
      "Performance & technical SEO",
    ],
    outcome:
      "A faster, clearer digital presence that turns more visitors into customers.",
    accent: "#E52B2B",
  },
  {
    number: "02",
    title: "App Development",
    short:
      "Mobile applications designed around real users, reliable technology and long-term growth.",
    description:
      "We build mobile applications with intuitive user experiences and solid technical foundations. Whether you're validating an idea or building a production-ready product, we focus on making the app useful, reliable and ready to evolve.",
    capabilities: [
      "iOS & Android applications",
      "Cross-platform development",
      "Product UI/UX implementation",
      "API & backend integration",
      "Authentication & user systems",
      "App performance & scalability",
    ],
    outcome:
      "A dependable mobile product that gives users a simple and engaging experience.",
    accent: "#F0B900",
  },
  {
    number: "03",
    title: "SEO",
    short:
      "Search strategies that improve visibility, qualified traffic and long-term organic growth.",
    description:
      "We approach SEO from both technical and business perspectives. We identify how people search for your services, fix technical barriers, build useful content structures and continuously optimize the website around search intent.",
    capabilities: [
      "Technical SEO audits",
      "Keyword & search-intent research",
      "On-page optimization",
      "Content strategy",
      "Local SEO",
      "Performance & Core Web Vitals",
    ],
    outcome:
      "More qualified organic visibility and a sustainable source of potential customers.",
    accent: "#E52B2B",
  },
  {
    number: "04",
    title: "Performance Marketing",
    short:
      "Data-driven campaigns designed to generate measurable business results.",
    description:
      "We connect advertising, landing pages, analytics and conversion optimization into one system. Instead of focusing only on clicks and impressions, we optimize campaigns around leads, sales and the metrics that actually matter to your business.",
    capabilities: [
      "Google Ads campaigns",
      "Meta advertising",
      "Landing page optimization",
      "Conversion tracking",
      "Audience & campaign strategy",
      "Continuous performance optimization",
    ],
    outcome:
      "A measurable acquisition system designed to turn marketing spend into business growth.",
    accent: "#202124",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#202124]">
      {/* HERO */}
      <section className="border-b border-[#202124]/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 md:pb-24 lg:px-12 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E52B2B] sm:text-xs">
            What we do
          </p>

          <h1 className="max-w-6xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]">
            Digital capabilities built to move your business forward.
          </h1>

          <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-start md:justify-between">
            <p className="max-w-2xl text-base leading-7 text-[#202124]/70 sm:text-lg sm:leading-8">
              From building your digital product to getting it discovered and
              turning attention into revenue, we bring product, technology and
              growth together under one team.
            </p>

            <span className="hidden text-right text-xs font-bold uppercase tracking-[0.2em] text-[#202124]/65 md:block">
              Build
              <br />
              Grow
              <br />
              Scale
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-12 lg:py-28">
        {/* Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(32,33,36,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,33,36,0.07)_1px,transparent_1px)] [background-size:48px_48px] sm:[background-size:56px_56px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl sm:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#202124]/40">
              Our capabilities
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl md:text-5xl">
              Everything you need to build a stronger digital presence.
            </h2>
          </div>

          <div className="divide-y divide-[#202124]/10 border-y border-[#202124]/10">
            {services.map((service) => (
              <article
                key={service.number}
                className="group py-10 sm:py-12 md:py-14 lg:py-16"
              >
                {/* TOP ROW */}
                <div className="grid gap-5 md:grid-cols-[80px_minmax(0,1fr)] lg:grid-cols-[100px_minmax(0,1fr)_280px] lg:gap-12">
                  <div className="flex items-start justify-between md:block">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: service.accent }}
                    >
                      {service.number}
                    </span>

                    {/* Mobile arrow */}
                    <span className="text-xl text-[#202124]/30 transition-transform duration-300 group-hover:translate-x-1 md:hidden">
                      ↗
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl md:text-5xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-[#202124]/70 sm:text-lg sm:leading-8">
                      {service.short}
                    </p>
                  </div>

                  {/* Desktop outcome */}
                  <div className="hidden border-l border-[#202124]/60 pl-6 lg:block">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black">
                      Business outcome
                    </p>

                    <p className="mt-3 text-sm leading-6 text-black/85">
                      {service.outcome}
                    </p>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="mt-8 grid gap-8 md:ml-[80px] md:grid-cols-[1.2fr_0.8fr] md:gap-12 lg:ml-[100px] lg:mt-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
                  <div>
                    <p className="text-sm leading-7 text-black/70 sm:text-base sm:leading-7">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#202124]/35">
                      What we handle
                    </p>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.capabilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-black/70"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: service.accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* MOBILE / TABLET OUTCOME */}
                <div className="mt-8 border-t border-[#202124]/10 pt-6 lg:hidden">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#202124]/35">
                    Business outcome
                  </p>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#202124]/60">
                    {service.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="border-t border-[#202124]/10 bg-[#F5F4EF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-16">
            <div>
              <span className="text-xs font-semibold text-[#E52B2B]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Understand
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#202124]/90">
                We start with your business, audience, competition and
                objectives before deciding what needs to be built.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold text-[#F0B900]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Build
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#202124]/90">
                Strategy becomes design, development, campaigns and systems
                built around the actual requirements of your business.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold text-[#E52B2B]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Improve
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#202124]/90">
                We measure what matters, identify opportunities and keep
                improving the experience and performance over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#202124] px-5 py-16 text-black/85 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F5C518]">
            Let&apos;s build something useful
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Have a project in mind?
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-black/75 sm:text-base sm:leading-7">
            Whether you need a new website, a digital product, better search
            visibility or a stronger acquisition system, let&apos;s figure out
            what makes sense for your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F5C518] px-6 py-3.5 text-sm font-semibold text-[#202124] transition-all duration-300 hover:bg-[#E52B2B] hover:text-white"
          >
            Start a conversation
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
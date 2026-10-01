import FinalCTA from "@/components/cta";
import ServicesAnimation from "@/components/animations/ServicesPageAnimation";

const services = [
  {
    number: "01",
    title: "Web Development",
    eyebrow: "Web Development Company in Patna",
    short:
      "High-performance websites and web platforms built around your business goals, customers and growth plans.",
    description:
      "Your website is often the first serious interaction a customer has with your business. We design and develop fast, responsive and SEO-friendly websites that communicate what you do clearly and make it easy for visitors to take action. From corporate websites and service businesses to landing pages, CMS-driven platforms and custom web applications, we combine strategy, design and engineering to create digital experiences that are built to perform.",
    problem:
      "Many businesses have websites that look acceptable but are slow, difficult to navigate, hard to update or disconnected from their actual business objectives. A website should not simply exist online — it should explain your value, build trust, generate enquiries and support growth.",
    approach:
      "We begin by understanding your business, audience and conversion goals. We then structure the information architecture, design the experience, develop the website and optimize its technical foundation for performance, accessibility and search.",
    capabilities: [
      "Business & corporate websites",
      "Landing pages & conversion funnels",
      "Next.js & React development",
      "Custom web applications",
      "CMS & content-driven websites",
      "Responsive website development",
      "Performance optimization",
      "Technical SEO implementation",
    ],
    outcome:
      "A faster, clearer and more credible digital presence designed to turn visitors into enquiries and customers.",
    accent: "var(--signal-red)",
  },
  {
    number: "02",
    title: "App Development",
    eyebrow: "App Development Company in Patna",
    short:
      "Mobile applications designed around real users, reliable technology and long-term product growth.",
    description:
      "A successful application needs more than a polished interface. It needs a clear product experience, dependable technology and an architecture that can evolve as your users and requirements grow. We build mobile applications for businesses, startups and digital products, focusing on intuitive user journeys, reliable integrations, performance and maintainability.",
    problem:
      "Businesses often have an idea for an application but struggle to turn that idea into a reliable product. Poor user flows, disconnected backend systems and technical shortcuts can make an application difficult to use and even harder to scale.",
    approach:
      "We translate the product idea into user flows, interface requirements and a technical architecture before development begins. From authentication and APIs to application screens and backend integrations, we build the product as one connected system.",
    capabilities: [
      "Android & iOS applications",
      "Cross-platform development",
      "React Native applications",
      "Product UI/UX implementation",
      "API & backend integration",
      "Authentication & user systems",
      "Payment & third-party integrations",
      "App performance & scalability",
    ],
    outcome:
      "A dependable mobile product that gives users a simple experience while providing your business with a foundation for future growth.",
    accent: "var(--muted-gold)",
  },
  {
    number: "03",
    title: "SEO",
    eyebrow: "SEO Services in Patna",
    short:
      "Search strategies designed to improve visibility, attract qualified visitors and create sustainable organic growth.",
    description:
      "SEO is not simply about adding keywords to a website. It is about helping search engines understand your business while creating useful experiences for people searching for your products or services. Our SEO approach combines technical optimization, search-intent research, content strategy, on-page improvements and performance monitoring to build long-term organic visibility.",
    problem:
      "A business can have a great website and still remain difficult to find. Technical problems, weak content structures, poor keyword targeting and unclear search intent can prevent valuable pages from appearing in front of potential customers.",
    approach:
      "We analyse how your audience searches, identify commercially relevant opportunities and improve the technical and content foundations of your website. We then monitor performance and continuously refine the strategy based on search behaviour and measurable results.",
    capabilities: [
      "Technical SEO audits",
      "Keyword & search-intent research",
      "On-page SEO",
      "Content strategy",
      "Local SEO",
      "Google Business Profile optimization",
      "Internal linking & site architecture",
      "Core Web Vitals & performance",
    ],
    outcome:
      "Greater organic visibility, stronger search relevance and a sustainable source of qualified potential customers.",
    accent: "var(--signal-red)",
  },
  {
    number: "04",
    title: "Performance Marketing",
    eyebrow: "Performance Marketing Agency in Patna",
    short:
      "Data-driven advertising systems designed to turn marketing budgets into measurable business outcomes.",
    description:
      "Performance marketing works best when advertising is treated as a complete acquisition system rather than a collection of campaigns. We connect paid advertising with landing pages, analytics, audience strategy and conversion optimization so that every part of the customer journey can be measured and improved.",
    problem:
      "Businesses can spend heavily on advertising without knowing which campaigns, audiences or landing pages are actually generating meaningful results. Clicks and impressions alone do not tell you whether marketing is contributing to revenue.",
    approach:
      "We define the business objective first, establish the measurement framework and then build campaigns around the right audience and offer. We connect advertising platforms with landing pages and conversion tracking, monitor performance and continuously optimize based on the data.",
    capabilities: [
      "Google Ads campaigns",
      "Meta advertising",
      "PPC campaign management",
      "Lead generation campaigns",
      "Landing page optimization",
      "Conversion tracking",
      "Audience & campaign strategy",
      "Conversion rate optimization",
    ],
    outcome:
      "A measurable customer acquisition system designed to make advertising spend more accountable and performance more visible.",
    accent: "var(--ink)",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-text-primary">
      <ServicesAnimation />

      {/* HERO */}
      <section className="services-hero border-b border-ink/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 md:pb-24 lg:px-12 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="services-reveal mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-signal-red sm:text-xs">
            Digital services · Patna · India
          </p>

          <h1 className="services-reveal max-w-6xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]">
            Digital capabilities
            <br />
            built to move your
            <br />
            <span className="text-signal-red">business forward.</span>
          </h1>

          <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-start md:justify-between">
            <p className="services-reveal max-w-2xl text-base leading-7 text-text-primary/70 sm:text-lg sm:leading-8">
              Applotie Technologies is a digital solutions and technology
              company in Patna helping businesses build, launch and grow
              through web development, mobile app development, SEO and
              performance marketing.
            </p>

            <span className="hidden text-right text-xs font-bold uppercase tracking-[0.2em] text-text-primary/65 md:block">
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
        <div className="relative mx-auto max-w-7xl">
          <div className="services-intro mb-12 max-w-3xl sm:mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-text-primary/40">
              Our capabilities
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl md:text-5xl">
              Strategy, technology and growth —
              <span className="text-signal-red">
                {" "}
                connected under one team.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-text-primary/65 sm:text-base sm:leading-7">
              Whether you need a new website, a custom application, stronger
              search visibility or a performance marketing system, our
              services are designed to work independently or together as one
              digital growth ecosystem.
            </p>
          </div>

          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {services.map((service) => (
              <article
                key={service.number}
                className="service-item group py-10 sm:py-12 md:py-14 lg:py-16"
              >
                {/* TOP ROW */}
                <div className="grid gap-5 md:grid-cols-[80px_minmax(0,1fr)] lg:grid-cols-[100px_minmax(0,1fr)_280px] lg:gap-12">
                  <div className="flex items-start justify-between md:block">
                    <span
                      className="service-number text-sm font-semibold"
                      style={{ color: service.accent }}
                    >
                      {service.number}
                    </span>

                    <span className="text-xl text-text-primary/30 transition-transform duration-300 group-hover:translate-x-1 md:hidden">
                      ↗
                    </span>
                  </div>

                  <div>
                    <p
                      className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: service.accent }}
                    >
                      {service.eyebrow}
                    </p>

                    <h3 className="service-title text-3xl font-semibold tracking-[-0.045em] sm:text-4xl md:text-5xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-text-primary/70 sm:text-lg sm:leading-8">
                      {service.short}
                    </p>
                  </div>

                  <div className="hidden border-l border-ink/60 pl-6 lg:block">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black">
                      Business outcome
                    </p>

                    <p className="mt-3 text-sm leading-6 text-black/85">
                      {service.outcome}
                    </p>
                  </div>
                </div>

                {/* SERVICE DETAILS */}
                <div className="mt-8 grid gap-8 md:ml-[80px] md:grid-cols-[1.2fr_0.8fr] md:gap-12 lg:ml-[100px] lg:mt-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
                  <div className="service-content">
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-signal-red">
                      What the problem usually looks like
                    </p>

                    <p className="text-sm leading-7 text-black/70 sm:text-base sm:leading-7">
                      {service.problem}
                    </p>

                    <p className="mb-4 mt-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-gold">
                      How we approach it
                    </p>

                    <p className="text-sm leading-7 text-black/70 sm:text-base sm:leading-7">
                      {service.approach}
                    </p>
                  </div>

                  <div className="service-content">
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-text-primary/35">
                      What we handle
                    </p>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.capabilities.map((item) => (
                        <li
                          key={item}
                          className="service-capability flex items-start gap-3 text-sm leading-6 text-black/70"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: service.accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 border-t border-ink/10 pt-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-text-primary/35">
                        Result
                      </p>

                      <p className="mt-3 text-sm font-medium leading-6 text-text-primary/80">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* MOBILE / TABLET OUTCOME */}
                <div className="mt-8 border-t border-ink/10 pt-6 lg:hidden">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-text-primary/35">
                    Business outcome
                  </p>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-text-primary/60">
                    {service.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="border-t border-ink/10 bg-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="services-process-intro max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-signal-red">
              How we work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl md:text-5xl">
              The service is only the beginning.
            </h2>

            <p className="mt-4 text-sm leading-7 text-text-primary/65 sm:text-base">
              Good digital work comes from understanding the problem before
              choosing the technology or marketing channel.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16 lg:gap-16">
            <div className="services-process-item">
              <span className="text-xs font-semibold text-signal-red">
                01
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Understand
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-primary/75">
                We understand your business model, customers, competition,
                current digital presence and objectives before deciding what
                needs to be built or changed.
              </p>
            </div>

            <div className="services-process-item">
              <span className="text-xs font-semibold text-muted-gold">
                02
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Build
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-primary/75">
                Strategy becomes design, development, campaigns and systems
                built around the actual requirements of your business rather
                than generic templates.
              </p>
            </div>

            <div className="services-process-item">
              <span className="text-xs font-semibold text-signal-red">
                03
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Improve
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-primary/75">
                We measure what matters, identify opportunities and keep
                improving the experience, visibility and performance over
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
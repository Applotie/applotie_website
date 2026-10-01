import Link from "next/link";
import FinalCTA from "@/components/cta";
import ProjectsAnimation from "@/components/animations/ProjectsAnimation";

const projects = [
  {
    number: "01",
    category: "Web Development",
    client: "Northstar Finance",
    title: "Making a complex financial service easier to understand.",
    problem:
      "Visitors were struggling to understand the company's services quickly, creating friction between discovery and enquiry.",
    work: "We restructured the information architecture, simplified the service journey and rebuilt the website around clarity, trust and conversion.",
    impact: "42%",
    impactLabel: "more enquiries",
    stack: "Next.js · Tailwind · CMS",
    accent: "var(--signal-red)",
    background: "var(--ivory)",
  },
  {
    number: "02",
    category: "Software Development",
    client: "Flowdesk",
    title: "Replacing fragmented workflows with one connected system.",
    problem:
      "The team was relying on disconnected tools and repetitive manual processes to manage everyday operations.",
    work: "We designed and developed a centralized business platform that brought core workflows, information and team activity into one system.",
    impact: "60%",
    impactLabel: "less manual work",
    stack: "React · Node.js · MongoDB",
    accent: "var(--muted-gold)",
    background: "var(--stone)",
  },
  {
    number: "03",
    category: "SEO & Growth",
    client: "UrbanNest",
    title: "Turning an overlooked property brand into a discoverable one.",
    problem:
      "The business operated in a competitive search market but was missing valuable high-intent organic searches.",
    work: "We rebuilt the technical SEO foundation, mapped search intent and created a content strategy focused on commercially relevant queries.",
    impact: "3.4×",
    impactLabel: "organic traffic",
    stack: "Technical SEO · Content · Analytics",
    accent: "var(--signal-red)",
    background: "var(--white)",
  },
  {
    number: "04",
    category: "Performance Marketing",
    client: "PeakFit",
    title: "Turning paid traffic into a measurable acquisition system.",
    problem:
      "Campaign traffic was reaching the business, but inconsistent landing experiences and tracking made it difficult to understand what was actually converting.",
    work: "We connected campaign strategy, landing pages, conversion tracking and optimisation into one performance system.",
    impact: "2.8×",
    impactLabel: "return on ad spend",
    stack: "Meta Ads · Google Ads · CRO",
    accent: "var(--ink)",
    background: "var(--ivory)",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-text-primary">
      <ProjectsAnimation />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="projects-hero px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="projects-reveal mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-signal-red">
            Selected work
          </p>

          <h1
            className="
              projects-reveal
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
            <span className="text-signal-red">business forward.</span>
          </h1>

          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <p
              className="
                projects-reveal
                max-w-2xl
                text-sm
                leading-6
                text-text-primary/80
                sm:text-base
                sm:leading-7
                lg:text-lg
                lg:leading-8
              "
            >
              We don't measure digital work by how polished it looks alone.
              We look at the problem it solves, what changes after launch and
              whether the work creates a meaningful business outcome.
            </p>

            <p className="projects-reveal text-xs font-semibold uppercase tracking-[0.18em] text-text-primary/40">
              Strategy · Build · Growth
            </p>
          </div>
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
          border-ink/10
          px-5
          py-14
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-28
        "
      >
        <div className="relative mx-auto max-w-7xl">
          {/* Section intro */}

          <div className="projects-section-intro mb-12 flex flex-col gap-5 sm:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-gold">
                Case studies
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                The problem comes first.
                <br />
                <span className="text-signal-red">
                  Then the work. Then the impact.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm font-semibold leading-6 text-text-primary/70">
              A closer look at how strategy, technology and growth come
              together across different business challenges.
            </p>
          </div>

          {/* Project dossiers */}

          <div className="grid gap-6">
            {projects.map((project) => (
              <article
                key={project.number}
                className="
                  project-card
                  group
                  relative
                  overflow-hidden
                  border
                  border-ink/10
                  shadow-[0_15px_50px_rgba(22,23,25,0.05)]
                "
                style={{
                  backgroundColor: project.background,
                }}
              >
                {/* Vertical accent */}

                <div
                  className="project-accent absolute bottom-0 left-0 top-0 w-[3px]"
                  style={{
                    backgroundColor: project.accent,
                  }}
                />

                <div className="relative p-6 sm:p-8 lg:p-10">
                  {/* Top metadata */}

                  <div className="flex items-start justify-between gap-6 border-b border-ink/10 pb-5">
                    <div>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-xs"
                        style={{
                          color: project.accent,
                        }}
                      >
                        {project.category}
                      </span>

                      <p className="mt-1 text-xs text-text-primary/45">
                        {project.client}
                      </p>
                    </div>

                    <span className="text-3xl font-semibold leading-none tracking-[-0.05em] text-text-primary/15 sm:text-4xl">
                      {project.number}
                    </span>
                  </div>

                  {/* Main title */}

                  <div className="project-title-block mt-8 max-w-4xl sm:mt-10">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-primary/35">
                      Case study
                    </p>

                    <h3
                      className="
                        text-3xl
                        font-semibold
                        leading-[1.03]
                        tracking-[-0.05em]
                        sm:text-4xl
                        lg:text-5xl
                      "
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Problem / Work / Impact */}

                  <div className="mt-10 grid border-t border-ink/10 lg:grid-cols-[0.85fr_1fr_0.65fr]">
                    {/* Problem */}

                    <div className="project-column border-b border-ink/10 py-7 lg:border-b-0 lg:border-r lg:pr-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-signal-red">
                        The problem
                      </p>

                      <p className="mt-4 max-w-md text-sm leading-6 text-text-primary/65 sm:text-base sm:leading-7">
                        {project.problem}
                      </p>
                    </div>

                    {/* Work */}

                    <div className="project-column border-b border-ink/10 py-7 lg:border-b-0 lg:px-8 lg:border-r">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-gold">
                        What we did
                      </p>

                      <p className="mt-4 max-w-lg text-sm leading-6 text-text-primary/65 sm:text-base sm:leading-7">
                        {project.work}
                      </p>
                    </div>

                    {/* Impact */}

                    <div className="project-impact py-7 lg:pl-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-primary/35">
                        Impact
                      </p>

                      <p
                        className="
                          mt-4
                          text-5xl
                          font-semibold
                          leading-none
                          tracking-[-0.06em]
                          sm:text-6xl
                        "
                        style={{
                          color: project.accent,
                        }}
                      >
                        {project.impact}
                      </p>

                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-text-primary/45">
                        {project.impactLabel}
                      </p>
                    </div>
                  </div>

                  {/* Bottom system information */}

                  <div className="mt-2 flex flex-col gap-4 border-t border-ink/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-primary/30">
                        Built with
                      </span>

                      <span className="text-xs text-text-primary/55">
                        {project.stack}
                      </span>
                    </div>

                    <span
                      className="text-xs font-semibold transition-transform duration-300 group-hover:translate-x-1"
                      style={{
                        color: project.accent,
                      }}
                    >
                      Applotie Impact
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ====================================================== */}

      <section className="projects-animate-section px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="projects-reveal text-xs font-semibold uppercase tracking-[0.24em] text-signal-red">
              Our approach
            </p>

            <h2 className="projects-reveal mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
              Every project starts with a problem.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="projects-approach-item">
              <span className="text-sm font-semibold text-muted-gold">
                01
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Understand
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-primary/55">
                We understand the business, audience and problem before
                deciding what to build.
              </p>
            </div>

            <div className="projects-approach-item">
              <span className="text-sm font-semibold text-signal-red">
                02
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Build
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-primary/55">
                Strategy becomes a focused digital experience built for
                performance and growth.
              </p>
            </div>

            <div className="projects-approach-item">
              <span className="text-sm font-semibold text-text-primary">
                03
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Improve
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-primary/55">
                We measure what happens, learn from it and continuously
                improve the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
import TechStackAnimation from "./animations/TechStackAnimation";

const categories = [
  {
    title: "Frontend",
    description:
      "Fast, responsive interfaces built for modern web experiences.",
    technologies: [
      { name: "React", short: "RE" },
      { name: "Next.js", short: "NX" },
      { name: "Vue", short: "VU" },
    ],
  },
  {
    title: "Backend",
    description:
      "Reliable APIs and scalable systems powering your products.",
    technologies: [
      { name: "Node.js", short: "NO" },
      { name: "Python", short: "PY" },
      { name: "PHP", short: "PH" },
    ],
  },
  {
    title: "Mobile",
    description:
      "Cross-platform applications designed for performance.",
    technologies: [
      { name: "React Native", short: "RN" },
      { name: "Flutter", short: "FL" },
    ],
  },
  {
    title: "Database",
    description:
      "Secure and efficient data storage built around your needs.",
    technologies: [
      { name: "PostgreSQL", short: "PG" },
      { name: "MongoDB", short: "MG" },
      { name: "MySQL", short: "MY" },
    ],
  },
  {
    title: "Cloud",
    description:
      "Modern infrastructure for deployment, scaling and reliability.",
    technologies: [
      { name: "AWS", short: "AWS" },
      { name: "Vercel", short: "VC" },
      { name: "Azure", short: "AZ" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="technology"
      className="
        relative
        overflow-hidden
        bg-ink
        py-24
        text-text-dark-primary
        sm:py-28
        lg:py-36
        xl:py-44
      "
    >
      {/* Subtle background accent */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-72
          w-72
          rounded-full
          bg-muted-gold/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-80
          w-80
          rounded-full
          bg-signal-red/5
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        {/* ==========================================
            HEADING
        =========================================== */}

        <div
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
            sm:mb-18
            lg:mb-24
          "
        >
          <p
            className="
              mb-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.28em]
              text-signal-red
              sm:text-sm
            "
          >
            Technology Stack
          </p>

          <h2
            className="
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-[-0.045em]
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Built With{" "}
            <span className="text-text-dark-primary">Modern</span>{" "}
            Technology
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-6
              text-text-dark-secondary
              sm:text-base
              sm:leading-7
              lg:text-lg
              lg:leading-8
            "
          >
            We choose the right technologies for the right problem —
            creating digital products that are fast, scalable and built
            to last.
          </p>
        </div>

        <TechStackAnimation categories={categories} />

        {/* ==========================================
            BOTTOM STATEMENT
        =========================================== */}

        <div
          className="
            mx-auto
            mt-12
            max-w-6xl
            border-t
            border-white/10
            pt-7
            sm:mt-16
            sm:pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p className="text-xs text-text-dark-secondary font-semibold sm:text-sm">
              Technology should serve the product — not the other way
              around.
            </p>

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-text-dark-secondary
                sm:text-xs
              "
            >
              Built for scale
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
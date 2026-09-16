import DifferenceAnimation from "./animations/DifferenceAnimation";

export default function Difference() {
  const differences = [
    {
      number: "01",
      title: "Strategy before screens.",
      description:
        "We don't start with a design file. We first understand your business, audience and goals — then decide what actually needs to be built.",
      tag: "Think first",
      color: "#F5F4EF",
      textColor: "text-[#202124]",
      accent: "#E52B2B",
      rotate: "lg:-rotate-[6deg]",
      height: "h-[340px] lg:h-[300px]",
    },
 {
  number: "02",
  title: "Fast by design. Ready to scale.",
  description:
    "We build digital products that load fast, stay reliable under pressure and remain easy to improve as your business grows.",
  tag: "Performance",
  color: "#F3F0E8",
  textColor: "text-[#202124]",
  accent: "#E52B2B",
  rotate: "lg:-rotate-[3deg]",
  height: "h-[360px] lg:h-[330px]",
},
    {
      number: "03",
      title: "Growth is built in.",
      description:
        "SEO, conversion and discoverability aren't afterthoughts. We consider how people will find, use and act on your product from day one.",
      tag: "Growth minded",
      color: "#F3F0E8",
      textColor: "text-[#202124]",
      accent: "#E52B2B",
      rotate: "lg:rotate-0",
      height: "h-[380px] lg:h-[350px]",
      featured: true,
    },
    {
      number: "04",
      title: "One team. Fewer handoffs.",
      description:
        "Development, design, SEO and marketing work together instead of being passed between disconnected agencies and freelancers.",
      tag: "Connected",
      color: "#F3F0E8",
      textColor: "text-[#202124]",
      accent: "#E52B2B",
      rotate: "lg:rotate-[3deg]",
      height: "h-[360px] lg:h-[330px]",
    },
    {
      number: "05",
      title: "Partners after launch.",
      description:
        "Launching isn't the finish line. We stay involved, learn from the results and keep improving what we've built together.",
      tag: "Long term",
      color: "#F3F0E8",
      textColor: "text-[#202124]",
      accent: "#F5C518",
      rotate: "lg:rotate-[6deg]",
      height: "h-[340px] lg:h-[300px]",
    },
  ];

  return (
    <section
      id="difference"
      className="
        difference-section
        relative
        flex
        min-h-[100svh]
        w-full
        flex-col
        overflow-hidden
        bg-white
        text-[#202124]
      "
    >
      {/* =====================================================
          TOP SPACE
      ====================================================== */}

      <div className="h-[10svh] min-h-[70px] shrink-0 lg:h-[13svh]" />

      {/* =====================================================
          TEXT AREA
      ====================================================== */}

      <div
        className="
          difference-copy
          relative
          z-40
          flex
          w-full
          shrink-0
          flex-col
          items-center
          justify-center
          px-5
          pb-8
          text-center
          sm:px-8
          lg:pb-10
        "
      >
        {/* Eyebrow */}

        <div
          className="
            difference-eyebrow
            mb-5
            flex
            items-center
            gap-3
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-black
          "
        >
          <span
            className="
              difference-dot
              h-2
              w-2
              shrink-0
              rounded-full
              bg-[#E52B2B]
              
              
            "
          />

          <span>The Applotie Difference</span>
        </div>

        {/* Heading */}

        <h2
          className="
            difference-title
            max-w-4xl
            text-4xl
            font-semibold
            leading-[1.05]
            tracking-[-0.05em]
            sm:text-5xl
            lg:text-6xl
            xl:text-7xl
          "
        >
          <span className="text-[#E52B2B]">
            We Don&apos;t Just Deliver.
          </span>{" "}
          We Think.
        </h2>

        {/* Description */}

        <p
          className="
            difference-description
            mt-5
            max-w-2xl
            text-sm
            leading-6
            text-black/95
            sm:text-base
            sm:leading-7
          "
        >
          Most agencies focus on what they can deliver.
          We focus on what your business actually needs.
        </p>
      </div>

      {/* =====================================================
          CARDS AREA
      ====================================================== */}

      <div
        className="
          difference-cards-area
          relative
          z-10
          min-h-[390px]
          flex-1
          w-full
          overflow-hidden
        "
      >
        {/* Center guide */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            z-10
            hidden
            h-full
            w-px
            -translate-x-1/2
            bg-[#202124]/[0.06]
            lg:block
          "
        />

        {/* Left fade */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-16
            bg-gradient-to-r
            from-white
            to-transparent
            sm:w-24
            lg:w-32
          "
        />

        {/* Right fade */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-16
            bg-gradient-to-l
            from-white
            to-transparent
            sm:w-24
            lg:w-32
          "
        />

        {/* =================================================
            CARD TRACK
        ================================================== */}

        <div
          className="
            difference-track
            absolute
            left-0
            top-1/2
            flex
            w-max
            -translate-y-1/2
            items-end
            gap-4
            px-5
            sm:gap-5
            sm:px-8
            lg:gap-6
            lg:px-12
          "
        >
          {differences.map((item, index) => (
            <article
              key={item.number}
              data-difference-card
              className={`
                group
                relative
                w-[275px]
                shrink-0
                overflow-hidden
                rounded-[26px]
                p-6
                shadow-[0_20px_70px_rgba(32,33,36,0.10)]
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_30px_90px_rgba(32,33,36,0.16)]
                sm:w-[300px]
                lg:w-[330px]
                ${item.textColor}
                ${item.height}
                ${item.rotate}
                ${
                  item.featured
                    ? "ring-2 ring-[#E52B2B]/20"
                    : ""
                }
              `}
              style={{
                backgroundColor: item.color,
              }}
            >
              {/* Decorative shape */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  border
                  opacity-60
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
                style={{
                  borderColor:
                    item.textColor === "text-white"
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(32,33,36,0.10)",
                }}
              />

              {/* Second decorative circle */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-16
                  -left-16
                  h-32
                  w-32
                  rounded-full
                  border
                  opacity-40
                "
                style={{
                  borderColor:
                    item.textColor === "text-white"
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(32,33,36,0.08)",
                }}
              />

              {/* Number */}

              <span
                className="
                  absolute
                  right-6
                  top-6
                  text-xs
                  font-semibold
                  tracking-[0.15em]
                  opacity-40
                "
              >
                {item.number}
              </span>

              {/* Content */}

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  {/* Accent */}

                  <div
                    className="mb-8 h-1.5 w-12 rounded-full"
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  {/* Small label */}

                  <p
                    className="
                      mb-4
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      opacity-50
                    "
                  >
                    {item.tag}
                  </p>

                  {/* Title */}

                  <h3
                    className="
                      max-w-[260px]
                      text-2xl
                      font-semibold
                      leading-[1.08]
                      tracking-[-0.04em]
                      sm:text-3xl
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      max-w-[255px]
                      text-sm
                      leading-6
                      opacity-60
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom */}

                <div>
                  <div
                    className="
                      mb-4
                      h-px
                      w-full
                      bg-current
                      opacity-15
                    "
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom fade */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-30
          h-16
          w-full
          bg-gradient-to-t
          from-white
          to-transparent
        "
      />

      <DifferenceAnimation />
    </section>
  );
}
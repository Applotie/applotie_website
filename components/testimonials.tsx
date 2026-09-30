import TestimonialsAnimation from "./animations/TestimonialsAnimation";

const testimonials = [
  {
    quote:
      "Within four months, our organic traffic increased by 160% and qualified leads nearly doubled. The team understood both our technical requirements and business goals.",
    client: "Rahul Sharma",
    company: "GrowthCore",
    role: "Founder & CEO",
    initials: "RS",
  },
  {
    quote:
      "Applotie transformed our website into a much faster and more effective sales channel. We saw a 3× increase in qualified enquiries within the first six months.",
    client: "Priya Mehta",
    company: "NovaBuild",
    role: "Marketing Director",
    initials: "PM",
  },
  {
    quote:
      "From strategy to development, everything was handled with clarity. Our new platform reduced manual work by nearly 40% and gave our team a much better workflow.",
    client: "Amit Verma",
    company: "FinEdge Solutions",
    role: "Co-Founder",
    initials: "AV",
  },
  {
    quote:
      "Their SEO and performance marketing approach helped us move from inconsistent leads to a predictable acquisition channel. Our monthly qualified leads grew by over 120%.",
    client: "Neha Singh",
    company: "UrbanNest",
    role: "Business Head",
    initials: "NS",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative overflow-hidden
        bg-[#111318]
        py-20 text-black
        sm:py-24
        lg:py-32
        xl:py-40
      "
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 top-0
          h-80 w-80
          rounded-full
          bg-[#E52B2B]/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 bottom-0
          h-72 w-72
          rounded-full
          bg-[#F5C518]/7
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-14">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center sm:mb-16 lg:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E52B2B]" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E52B2B] sm:text-sm">
              Testimonials
            </p>

            <span className="h-px w-8 bg-[#E52B2B]" />
          </div>

          <h2
            className="
              text-4xl font-semibold
              tracking-[-0.045em]
              text-black/85
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
            "
          >
            Trusted by businesses.
            <br />

            <span className="text-red-600">
              Proven by results.
            </span>
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-2xl
              text-sm leading-6
              text-black/65
              sm:text-base sm:leading-7
              lg:text-lg
            "
          >
            We work closely with ambitious businesses to build digital
            experiences that create measurable growth.
          </p>
        </div>

        {/* Testimonials */}
        <TestimonialsAnimation testimonials={testimonials} />

        {/* Bottom statement */}
        <div
          className="
            mt-12
            flex flex-col gap-5
            border-t border-white/10
            pt-7
            sm:mt-16
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:pt-8
          "
        >
          <p className="max-w-xl text-sm leading-6 text-black/65">
            We measure success by the impact our work creates for the
            businesses we partner with.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#F5C518]" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/95">
              Real work. Real results.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
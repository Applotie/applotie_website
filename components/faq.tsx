import FAQAnimation from "./animations/FAQAnimation";
import Link from "next/link";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Website development costs depend on the project's scope, design requirements, features, integrations and technology stack. A simple business website may require a smaller investment, while custom web applications and complex platforms require more development time. We first understand your requirements and then provide a transparent proposal based on the actual scope.",
  },
  {
    question: "How long does website development take?",
    answer:
      "A typical business website can take around 2–6 weeks depending on the number of pages, design complexity and functionality required. Larger websites and custom web applications can take longer. We define milestones and timelines before development begins so you always know what to expect.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We provide ongoing website maintenance and support, including security updates, performance optimization, content changes, bug fixes, backups and technical improvements. Maintenance plans can be tailored according to the needs of your website.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term growth strategy, and results depend on your website's current authority, competition, industry and target keywords. Initial improvements may appear within a few months, while significant organic growth typically requires consistent optimization over a longer period.",
  },
  {
    question: "Do you manage Google Ads?",
    answer:
      "Yes. We can manage Google Ads campaigns including campaign strategy, keyword research, ad creation, landing page optimization, conversion tracking, budget management and ongoing performance optimization.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. We can redesign an existing website to improve its visual identity, user experience, mobile responsiveness, performance, SEO and conversion rate while preserving important existing content and functionality where appropriate.",
  },
  {
    question: "Do you provide mobile app development?",
    answer:
      "Yes. We develop cross-platform mobile applications using technologies such as React Native and Flutter. We can help with the complete process, from product planning and UI/UX design to development, testing and deployment.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with startups and growing businesses at different stages. Whether you need an MVP, business website, SaaS platform, mobile application or a growth strategy, we can help turn your idea into a practical digital product.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="
        relative overflow-hidden
        bg-[#111318]
        py-20 text-black
        sm:py-24
        lg:py-32
        xl:py-40
      "
    >
      {/* Decorative accents */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 top-10
          h-72 w-72
          rounded-full
          bg-[#E52B2B]/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 bottom-10
          h-72 w-72
          rounded-full
          bg-[#F5C518]/8
          blur-3xl
        "
      />

      <div
        className="
          relative mx-auto
          max-w-[1200px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* Heading */}
        <div
          data-faq-heading
          className="
            mx-auto mb-14
            max-w-3xl
            text-center
            sm:mb-16
            lg:mb-20
          "
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E52B2B]" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E52B2B] sm:text-sm">
              FAQ
            </p>

            <span className="h-px w-8 bg-[#E52B2B]" />
          </div>

          <h2
            className="
              text-4xl font-semibold
              tracking-[-0.045em]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Questions?
            <br />

            <span className="text-black/70">
              We have answers.
            </span>
          </h2>

          <p
            className="
              mx-auto mt-6
              max-w-2xl
              text-sm leading-6
              text-black/65
              sm:text-base sm:leading-7
              lg:text-lg
            "
          >
            Everything you need to know about our development, design, SEO
            and digital growth services.
          </p>
        </div>

        {/* FAQ List */}
        <FAQAnimation faqs={faqs} />

        {/* Bottom CTA */}
        <div
          data-faq-cta
          className="
            mt-10
            flex flex-col gap-6
            rounded-[1.5rem]
            border border-white/10
            bg-[#1a1c22]
            p-6
            shadow-[0_10px_40px_rgba(17,19,24,0.04)]
            sm:mt-12
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-7
            lg:p-8
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#F5C518]" />

              <p className="font-semibold text-black/85">
                Still have questions?
              </p>
            </div>

            <p className="mt-2 text-sm text-black/75">
              Let&apos;s discuss your project and find the right approach.
            </p>
          </div>

          <Link
            href="#contact"
            className="
              inline-flex w-fit
              items-center gap-2
              rounded-full
              bg-[#111318]
              px-5 py-3
              text-sm font-medium
              text-red-600
              transition-all duration-300
              hover:bg-[#E52B2B]
              hover:shadow-lg
            "
          >
            Talk to us
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
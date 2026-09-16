import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Information we collect",
    content: (
      <>
        <p>
          When you interact with Applotie Technologies, we may collect
          information that you voluntarily provide to us and information that
          is automatically collected when you use our website.
        </p>

        <h3 className="pt-2 text-sm font-semibold tracking-[-0.02em] text-[#202124]">
          Information you provide
        </h3>

        <p>
          This may include your name, email address, phone number, company
          name, website URL, project requirements, budget information,
          communication preferences and any other information you choose to
          provide through our contact or enquiry forms.
        </p>

        <h3 className="pt-2 text-sm font-semibold tracking-[-0.02em] text-[#202124]">
          Information collected automatically
        </h3>

        <p>
          When you visit our website, certain technical information may be
          collected automatically. This can include your IP address, browser
          type, device information, operating system, pages visited, referring
          pages, approximate location and information about how you interact
          with our website.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "How we use your information",
    content: (
      <>
        <p>
          We use the information we collect for legitimate business purposes,
          including:
        </p>

        <ul className="space-y-3">
          {[
            "Responding to enquiries and communication requests.",
            "Understanding your project requirements.",
            "Preparing proposals, estimates or recommendations.",
            "Providing and improving our services.",
            "Improving website performance and user experience.",
            "Understanding website usage and visitor behaviour.",
            "Protecting our website, systems and users from misuse.",
            "Complying with applicable legal obligations.",
          ].map((item) => (
            <li
              key={item}
              className="relative pl-5 before:absolute before:left-0 before:top-[0.7rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#E52B2B]"
            >
              {item}
            </li>
          ))}
        </ul>

        <p>
          We do not use your personal information for purposes that are
          incompatible with the reasons for which it was collected without
          appropriate notice or, where required, your consent.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Cookies and analytics",
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to provide
          essential functionality, understand how visitors use the website
          and improve our digital experience.
        </p>

        <p>
          Depending on the tools enabled on our website, these technologies may
          collect information such as pages visited, approximate session
          duration, device type and interaction patterns.
        </p>

        <p>
          You can manage or disable cookies through your browser settings.
          Disabling certain cookies may affect some website functionality.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "How we share information",
    content: (
      <>
        <p>
          We do not sell or rent your personal information.
        </p>

        <p>
          We may share limited information with trusted service providers when
          necessary to operate our business or provide services to you. These
          may include hosting providers, analytics providers, communication
          platforms, email providers, payment providers or other technology
          partners.
        </p>

        <p>
          These providers are expected to handle information appropriately and
          only for the purposes for which it has been provided.
        </p>

        <p>
          We may also disclose information when required by law, legal process,
          regulatory requirements or when reasonably necessary to protect our
          rights, users, property or security.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Data retention",
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes described in this Privacy Policy,
          including providing services, maintaining business records,
          resolving disputes and meeting legal or regulatory requirements.
        </p>

        <p>
          The length of time we retain information may vary depending on the
          nature of the information and why it was collected.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Data security",
    content: (
      <>
        <p>
          We take reasonable technical and organizational measures to protect
          personal information against unauthorized access, alteration,
          disclosure or destruction.
        </p>

        <p>
          However, no method of transmitting or storing information online can
          be guaranteed to be completely secure. You should therefore
          understand that providing information online always carries some
          level of risk.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Third-party websites",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, platforms or
          services. Those websites operate independently from Applotie and
          have their own privacy practices.
        </p>

        <p>
          We are not responsible for the privacy policies, content or security
          practices of third-party websites. We recommend reviewing their
          privacy policies before providing them with personal information.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Your privacy rights",
    content: (
      <>
        <p>
          Depending on applicable law and your location, you may have rights
          relating to your personal information. These may include the right
          to:
        </p>

        <ul className="space-y-3">
          {[
            "Request access to personal information we hold about you.",
            "Request correction of inaccurate information.",
            "Request deletion of certain information.",
            "Object to or restrict certain processing activities.",
            "Withdraw consent where processing is based on consent.",
            "Request information about how your data is processed.",
          ].map((item) => (
            <li
              key={item}
              className="relative pl-5 before:absolute before:left-0 before:top-[0.7rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#E52B2B]"
            >
              {item}
            </li>
          ))}
        </ul>

        <p>
          To make a privacy-related request, contact us using the details
          provided below. We may need to verify your identity before fulfilling
          certain requests.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Children's privacy",
    content: (
      <p>
        Our website and services are not intentionally directed toward
        children. We do not knowingly collect personal information from
        children without appropriate consent. If you believe that a child has
        provided us with personal information, please contact us so that we can
        take appropriate action.
      </p>
    ),
  },

  {
    number: "10",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our services, technology, legal requirements or business practices.
        When we make changes, we will update the effective date shown at the
        beginning of this policy. We encourage you to review this page
        periodically.
      </p>
    ),
  },

  {
    number: "11",
    title: "Contact us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how Applotie
          Technologies handles personal information, you can contact us at:
        </p>

        <div className="mt-6 border-l-2 border-[#E52B2B] pl-5">
          <p className="font-semibold text-[#202124]">
            Applotie Technologies
          </p>

          <p className="mt-2">
            Patna, Bihar, India
          </p>

          <p className="mt-1">
            <a
              href="mailto:hello@applotie.com"
              className="transition-colors hover:text-[#E52B2B]"
            >
              hello@applotie.com
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#202124]">
      {/* HERO */}
      <section className="border-b border-[#202124]/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E52B2B] sm:text-xs">
                Legal
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
                Privacy, explained clearly.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#202124]/60 sm:text-lg sm:leading-8">
                We believe your information should be handled responsibly and
                transparently. Here&apos;s how Applotie Technologies collects,
                uses and protects information when you use our website and
                services.
              </p>
            </div>

            <div className="shrink-0 md:text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#202124]/35">
                Effective date
              </p>

              <p className="mt-2 text-sm font-medium">
                September 5, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(32,33,36,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,33,36,0.06)_1px,transparent_1px)] [background-size:48px_48px] sm:[background-size:56px_56px]"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#202124]/35">
                On this page
              </p>

              <nav className="mt-5 space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.number}
                    href={`#section-${section.number}`}
                    className="flex items-center gap-3 text-xs text-[#202124]/50 transition-colors hover:text-[#E52B2B]"
                  >
                    <span className="font-semibold text-[#F0B900]">
                      {section.number}
                    </span>

                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="max-w-4xl">
            {/* SUMMARY */}
            <div className="mb-12 border border-[#202124]/10 bg-[#F5F4EF] p-6 sm:p-8">
              <p className="text-sm leading-7 text-[#202124]/65 sm:text-base">
                <strong className="text-[#202124]">
                  In short:
                </strong>{" "}
                We collect information that helps us communicate with you,
                understand your requirements, provide our services and improve
                our website. We do not sell your personal information.
              </p>
            </div>

            {/* SECTIONS */}
            <div className="divide-y divide-[#202124]/10">
              {sections.map((section) => (
                <article
                  key={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-24 py-10 first:pt-0 sm:py-14"
                >
                  <div className="grid gap-5 sm:grid-cols-[60px_1fr] sm:gap-8">
                    <span className="text-sm font-semibold text-[#F0B900]">
                      {section.number}
                    </span>

                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                        {section.title}
                      </h2>

                      <div className="mt-6 space-y-5 text-sm leading-7 text-[#202124]/65 sm:text-base">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* DISCLAIMER */}
            <div className="mt-12 border-t border-[#202124]/10 pt-8">
              <p className="text-xs leading-6 text-[#202124]/40">
                This Privacy Policy is intended to describe Applotie
                Technologies&apos; general privacy practices. It should be
                reviewed and adapted to reflect the specific technologies,
                services, analytics tools, advertising platforms and legal
                requirements applicable to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#202124] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F5C518]">
            Questions?
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl md:text-5xl">
            Want to know more about how we handle your data?
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
            If something in this policy isn&apos;t clear, reach out and
            we&apos;ll be happy to explain.
          </p>

          <a
            href="mailto:hello@applotie.com"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F5C518] px-6 py-3.5 text-sm font-semibold text-[#202124] transition-all duration-300 hover:bg-[#E52B2B] hover:text-white"
          >
            Contact us
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER NAVIGATION */}
      <section className="border-t border-[#202124]/10 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-[#E52B2B]"
          >
            ← Back to Applotie
          </Link>

          <Link
            href="/terms"
            className="text-sm font-medium text-[#202124]/50 transition-colors hover:text-[#E52B2B]"
          >
            Terms & Conditions ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
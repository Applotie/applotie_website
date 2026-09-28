"use client";

import { FormEvent } from "react";

const inputClass =
  "w-full border border-[#202124]/25 bg-white px-4 py-4 text-sm font-normal text-[#202124] outline-none transition-all placeholder:text-[#202124]/35 focus:border-[#E52B2B] focus:ring-1 focus:ring-[#E52B2B]/10";

const labelClass = "grid gap-2 text-sm font-semibold text-[#202124]";

const WHATSAPP_NUMBER = process.env.Number;

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const timeline = String(formData.get("timeline") || "").trim();
    const website = String(formData.get("website") || "").trim();
    const requirements = String(formData.get("requirements") || "").trim();
    const description = String(formData.get("description") || "").trim();

    const getServiceName = (value: string) => {
      const services: Record<string, string> = {
        "web-development": "Web Development",
        "app-development": "App Development",
        seo: "SEO",
        "performance-marketing": "Performance Marketing",
        multiple: "Multiple Services",
        other: "Something else",
      };

      return services[value] || value;
    };

    const getProjectTypeName = (value: string) => {
      const types: Record<string, string> = {
        "new-project": "New project",
        redesign: "Redesign / rebuild",
        improvement: "Improve an existing product",
        marketing: "Marketing / growth",
        maintenance: "Maintenance / support",
      };

      return types[value] || value;
    };

    const getBudgetName = (value: string) => {
      const budgets: Record<string, string> = {
        "under-50k": "Under ₹50,000",
        "50k-1l": "₹50,000 – ₹1 Lakh",
        "1l-3l": "₹1 Lakh – ₹3 Lakhs",
        "3l-5l": "₹3 Lakhs – ₹5 Lakhs",
        "5l-plus": "₹5 Lakhs+",
        "not-sure": "Not sure yet",
      };

      return budgets[value] || value;
    };

    const getTimelineName = (value: string) => {
      const timelines: Record<string, string> = {
        asap: "As soon as possible",
        "1-month": "Within 1 month",
        "1-3-months": "1–3 months",
        "3-6-months": "3–6 months",
        exploring: "Just exploring",
      };

      return timelines[value] || value;
    };

    const message = `
━━━━━━━━━━━━━━━━━━━━
APPlotie Technologies
NEW PROJECT ENQUIRY
━━━━━━━━━━━━━━━━━━━━

CONTACT DETAILS

Name:
${name}

Company / Organization:
${company || "Not provided"}

Email:
${email}

Phone:
${phone}


PROJECT DETAILS

Service:
${getServiceName(service)}

Project Type:
${getProjectTypeName(projectType)}

Approximate Budget:
${budget ? getBudgetName(budget) : "Not provided"}

Expected Timeline:
${timeline ? getTimelineName(timeline) : "Not provided"}


CURRENT WEBSITE / APP

${website || "Not provided"}


PROJECT REQUIREMENTS

${requirements}


ADDITIONAL INFORMATION

${description || "Not provided"}

━━━━━━━━━━━━━━━━━━━━
Submitted through the Applotie website
━━━━━━━━━━━━━━━━━━━━
`.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
  };

  return (
    <main className="min-h-screen bg-white text-[#202124]">
      {/* HERO */}
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E52B2B] sm:text-xs">
            Contact Applotie
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
            Tell us what you&apos;re building.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#202124]/60 sm:text-lg sm:leading-8">
            Whether you&apos;re starting something new, improving an existing
            product or looking for a better way to grow, give us a little
            context. We&apos;ll take it from there.
          </p>
        </div>
      </section>

      {/* CONTACT / FORM */}
      <section
        id="contact-form"
        className="relative overflow-hidden border-y border-[#202124]/15 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(32,33,36,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,33,36,0.07)_1px,transparent_1px)] [background-size:48px_48px] sm:[background-size:56px_56px]"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* LEFT INFORMATION */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#202124]/40">
              Start a conversation
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
              A good project starts with a good conversation.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#202124]/60 sm:text-base">
              Share what you&apos;re trying to achieve, where you&apos;re stuck
              and what you need help with. You don&apos;t need to have
              everything figured out before reaching out.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-6 border-t border-[#202124]/15 pt-7">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#202124]/35">
                  Email
                </p>

                <a
                  href="mailto:hello@applotie.com"
                  className="mt-1 inline-block text-sm font-medium transition-colors hover:text-[#E52B2B]"
                >
                  hello@applotie.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#202124]/35">
                  Phone
                </p>

                <a
                  href="tel:+919999999999"
                  className="mt-1 inline-block text-sm font-medium transition-colors hover:text-[#E52B2B]"
                >
                  +91 99999 99999
                </a>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#202124]/35">
                  Based in
                </p>

                <p className="mt-1 text-sm font-medium">
                  Patna, Bihar, India
                </p>
              </div>
            </div>

            {/* Small note */}
            <div className="mt-10 rounded-2xl bg-[#FFF8E2] p-5">
              <p className="text-sm font-semibold">What happens next?</p>

              <p className="mt-2 text-sm leading-6 text-[#202124]/60">
                We&apos;ll review your requirements and get back to you with
                the next steps, questions or a suitable approach.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="border border-[#202124]/20 bg-white p-6 shadow-[0_18px_50px_rgba(32,33,36,0.07)] sm:p-9 lg:p-12"
          >
            {/* FORM HEADER */}
            <div className="mb-9 border-b border-[#202124]/20 pb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E52B2B]">
                Project enquiry
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Tell us about your project
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#202124]/50">
                The more context you provide, the better we can understand
                what you need.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* NAME */}
              <label className={labelClass}>
                Full name
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </label>

              {/* COMPANY */}
              <label className={labelClass}>
                Company / Organization
                <input
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className={inputClass}
                />
              </label>

              {/* EMAIL */}
              <label className={labelClass}>
                Email address
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </label>

              {/* PHONE */}
              <label className={labelClass}>
                Phone number
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </label>

              {/* SERVICE */}
              <label className={labelClass}>
                What do you need?
                <select
                  name="service"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="web-development">
                    Web Development
                  </option>

                  <option value="app-development">
                    App Development
                  </option>

                  <option value="seo">SEO</option>

                  <option value="performance-marketing">
                    Performance Marketing
                  </option>

                  <option value="multiple">
                    Multiple Services
                  </option>

                  <option value="other">
                    Something else
                  </option>
                </select>
              </label>

              {/* PROJECT TYPE */}
              <label className={labelClass}>
                Project type
                <select
                  name="projectType"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select project type
                  </option>

                  <option value="new-project">
                    New project
                  </option>

                  <option value="redesign">
                    Redesign / rebuild
                  </option>

                  <option value="improvement">
                    Improve an existing product
                  </option>

                  <option value="marketing">
                    Marketing / growth
                  </option>

                  <option value="maintenance">
                    Maintenance / support
                  </option>
                </select>
              </label>

              {/* BUDGET */}
              <label className={labelClass}>
                Approximate budget
                <select
                  name="budget"
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a range
                  </option>

                  <option value="under-50k">
                    Under ₹50,000
                  </option>

                  <option value="50k-1l">
                    ₹50,000 – ₹1 Lakh
                  </option>

                  <option value="1l-3l">
                    ₹1 Lakh – ₹3 Lakhs
                  </option>

                  <option value="3l-5l">
                    ₹3 Lakhs – ₹5 Lakhs
                  </option>

                  <option value="5l-plus">
                    ₹5 Lakhs+
                  </option>

                  <option value="not-sure">
                    Not sure yet
                  </option>
                </select>
              </label>

              {/* TIMELINE */}
              <label className={labelClass}>
                Expected timeline
                <select
                  name="timeline"
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    When do you want to start?
                  </option>

                  <option value="asap">
                    As soon as possible
                  </option>

                  <option value="1-month">
                    Within 1 month
                  </option>

                  <option value="1-3-months">
                    1–3 months
                  </option>

                  <option value="3-6-months">
                    3–6 months
                  </option>

                  <option value="exploring">
                    Just exploring
                  </option>
                </select>
              </label>

              {/* WEBSITE */}
              <label className={`${labelClass} sm:col-span-2`}>
                Current website / app
                <input
                  name="website"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className={inputClass}
                />
              </label>

              {/* REQUIREMENTS */}
              <label className={`${labelClass} sm:col-span-2`}>
                What are you looking to build or improve?
                <textarea
                  name="requirements"
                  rows={4}
                  required
                  placeholder="Tell us about your goals, required features, problems you're facing, target audience, etc."
                  className={`${inputClass} resize-y`}
                />
              </label>

              {/* DESCRIPTION */}
              <label className={`${labelClass} sm:col-span-2`}>
                Anything else we should know?
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Additional context, references, competitors, deadlines or anything else..."
                  className={`${inputClass} resize-y`}
                />
              </label>
            </div>

            {/* SUBMIT */}
            <div className="mt-9 flex flex-col gap-4 border-t border-[#202124]/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-xs leading-5 text-[#202124]/40">
                By submitting this form, you&apos;re simply starting a
                conversation. We&apos;ll never spam you.
              </p>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E52B2B] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F5C518] hover:text-[#202124] sm:w-auto"
              >
                Send enquiry
                <span>↗</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#202124] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F5C518]">
            Prefer a direct conversation?
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl md:text-5xl">
            Let&apos;s talk about what you&apos;re working on.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
            Sometimes a quick conversation is easier than filling out a form.
          </p>

          <a
            href="mailto:hello@applotie.com"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F5C518] px-6 py-3.5 text-sm font-semibold text-[#202124] transition-all duration-300 hover:bg-[#E52B2B] hover:text-white"
          >
            Email us
            <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
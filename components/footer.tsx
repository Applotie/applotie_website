
import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],

  services: [
    { name: "Web Development", href: "/services" },
    { name: "App Development", href: "/services" },
    { name: "SEO", href: "/services" },
    {
      name: "Performance Marketing",
      href: "/services",
    },
  ],

  resources: [
    { name: "Insights", href: "/blog" },
    { name: "FAQ", href: "/#faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-ink text-text-dark-primary">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Main Footer */}
        <div
          className="
            grid
            w-full
            gap-12
            border-b border-ink/10
            py-14
            sm:gap-14
            sm:py-16
            lg:grid-cols-[1.6fr_1fr_1.25fr_1fr_1.3fr]
            lg:gap-10
            lg:py-20
            xl:gap-16
          "
        >
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="
                inline-flex
                items-center
                text-2xl
                font-bold
                tracking-[-0.05em]
                text-text-dark-primary
                sm:text-3xl
              "
            >
              App
              <span className="text-signal-red">lotie</span>
            </Link>

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                leading-6
                text-text-dark-secondary
                sm:text-[15px]
                sm:leading-7
              "
            >
              Building digital products, experiences and growth systems for
              ambitious businesses.
            </p>

            {/* Brand statement */}
            <div
              className="
                mt-6
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border border-ink/10
                bg-graphite
                px-3.5
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-text-dark-secondary
              "
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-red" />
              Design · Development · Growth
            </div>
          </div>

          {/* Company */}
          <FooterColumn
            title="Company"
            links={footerLinks.company}
          />

          {/* Services */}
          <FooterColumn
            title="Services"
            links={footerLinks.services}
          />

          {/* Resources */}
          <FooterColumn
            title="Resources"
            links={footerLinks.resources}
          />

          {/* Contact */}
          <div>
            <h3
              className="
                mb-5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-text-dark-secondary
              "
            >
              Contact
            </h3>

            <div className="space-y-3 text-sm">
              {/* Email */}
              <a
                href="mailto:hello@applotie.com"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  break-all
                  text-text-dark-secondary
                  transition-colors
                  hover:text-signal-red
                "
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-red" />
                info@applotie.com
              </a>

              {/* Phone */}
              <a
                href="tel:+917250204488"
                className="
                  block
                  text-text-dark-secondary
                  transition-colors
                  hover:text-signal-red
                "
              >
                +91 7250 20 4488
              </a>

              {/* Location */}
              <p className="pt-1 leading-6 text-text-dark-secondary">
                Patna, Bihar
                <br />
                India
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-7 flex flex-wrap gap-2">
              <SocialLink
                href="
https://in.linkedin.com/company/applotie"
                label="LinkedIn"
              />

              <SocialLink
                href="https://www.instagram.com/applotie"
                label="Instagram"
              />

              <SocialLink
                href="https://www.facebook.com/share/1FyLNDctvY/"
                label="Facebook"
              />


            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-4
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:py-7
          "
        >
          <p className="text-xs text-text-dark-secondary/70">
            © 2026 Applotie Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <Link
              href="/privacy"
              className="
                text-text-dark-secondary
                transition-colors
                hover:text-signal-red
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="
                text-text-dark-secondary/70
                transition-colors
                hover:text-signal-red
              "
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Reusable Footer Column */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h3
        className="
          mb-5
          text-[11px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-text-dark-secondary
        "
      >
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="
                inline-block
                text-sm
                text-text-dark-primary
                transition-colors
                hover:text-signal-red
              "
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Social Link */
function SocialLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        rounded-full
        border border-ink/10
        bg-graphite
        px-3.5
        py-2
        text-[11px]
        font-medium
        text-text-dark-secondary
        transition-colors
        hover:border-signal-red/30
        hover:text-signal-red
      "
    >
      {label}
    </Link>
  );
}


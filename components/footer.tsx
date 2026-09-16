
import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],

  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "SEO", href: "/services/seo" },
    {
      name: "Performance Marketing",
      href: "/services/performance-marketing",
    },
  ],

  resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/blog" },
    { name: "FAQ", href: "/#faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#111318] text-black">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Main Footer */}
        <div
          className="
            grid
            w-full
            gap-12
            border-b border-[#111318]/10
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
                text-black
                sm:text-3xl
              "
            >
              App
              <span className="text-[#E52B2B]">lotie</span>
              <span className="ml-1.5 h-2 w-2 rounded-full bg-[#F5C518]" />
            </Link>

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                leading-6
                text-black/75
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
                border border-[#111318]/10
                bg-[#1a1c22]
                px-3.5
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-black/70
              "
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E52B2B]" />
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
                text-black/75
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
                  text-black/65
                  transition-colors
                  hover:text-[#E52B2B]
                "
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E52B2B]" />
                info@applotie.com
              </a>

              {/* Phone */}
              <a
                href="tel:+919999999999"
                className="
                  block
                  text-black/65
                  transition-colors
                  hover:text-[#E52B2B]
                "
              >
                +91 99999 99999
              </a>

              {/* Location */}
              <p className="pt-1 leading-6 text-black/75">
                Patna, Bihar
                <br />
                India
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-7 flex flex-wrap gap-2">
              <SocialLink
                href="#"
                label="LinkedIn"
              />

              <SocialLink
                href="#"
                label="Instagram"
              />

              <SocialLink
                href="#"
                label="GitHub"
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
          <p className="text-xs text-black/50">
            © 2026 APPlotie Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <Link
              href="/privacy"
              className="
                text-black/65
                transition-colors
                hover:text-[#E52B2B]
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="
                text-black/50
                transition-colors
                hover:text-[#E52B2B]
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
          text-black/75
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
                text-black/80
                transition-colors
                hover:text-[#E52B2B]
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
        border border-[#111318]/10
        bg-[#1a1c22]
        px-3.5
        py-2
        text-[11px]
        font-medium
        text-black/75
        transition-colors
        hover:border-[#E52B2B]/30
        hover:text-[#E52B2B]
      "
    >
      {label}
    </Link>
  );
}


import ServiceBrandingPage from "@/components/site/pages/ServiceBranding";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd, serviceLd, faqLd } from "@/lib/site-seo";
import Logic from "@/components/site/pages/ServiceBranding/logic";

const SEO = {
  title: "Branding Agency in Patna | Logo Design & Brand Identity | Applotie",
  description:
    "Branding agency in Patna for logo design, brand identity, colours, typography and brand guidelines. Applotie builds brands people remember, for businesses across Bihar.",
  path: "/services/branding-agency-in-patna",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Branding agency in Patna", path: "/services/branding-agency-in-patna" },
        ])}
      />
      <JsonLd data={serviceLd({ name: "Branding agency in Patna", description: SEO.description, path: SEO.path })} />
      <JsonLd data={faqLd(Logic)} />
      <ServiceBrandingPage />
    </>
  );
}

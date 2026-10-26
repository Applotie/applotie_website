import ServiceSeoPage from "@/components/site/pages/ServiceSeo";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd, serviceLd, faqLd } from "@/lib/site-seo";
import Logic from "@/components/site/pages/ServiceSeo/logic";

const SEO = {
  title: "SEO Services in Patna | Local SEO Company | Applotie",
  description:
    "SEO services in Patna that put your business first on Google. Technical SEO, local SEO and content from an SEO company based in Patna, Bihar. Monthly plans, no lock-in.",
  path: "/services/seo-services-in-patna",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "SEO services in Patna", path: "/services/seo-services-in-patna" },
        ])}
      />
      <JsonLd data={serviceLd({ name: "SEO services in Patna", description: SEO.description, path: SEO.path })} />
      <JsonLd data={faqLd(Logic)} />
      <ServiceSeoPage />
    </>
  );
}

import ServiceAdsPage from "@/components/site/pages/ServiceAds";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd, serviceLd, faqLd } from "@/lib/site-seo";
import Logic from "@/components/site/pages/ServiceAds/logic";

const SEO = {
  title: "Performance Marketing Agency in Patna | Google & Meta Ads | Applotie",
  description:
    "Performance marketing in Patna: Google Ads, Facebook and Instagram ads, landing pages and conversion tracking from a digital marketing agency in Patna focused on leads and revenue.",
  path: "/services/performance-marketing-in-patna",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Performance marketing in Patna", path: "/services/performance-marketing-in-patna" },
        ])}
      />
      <JsonLd
        data={serviceLd({ name: "Performance marketing in Patna", description: SEO.description, path: SEO.path })}
      />
      <JsonLd data={faqLd(Logic)} />
      <ServiceAdsPage />
    </>
  );
}

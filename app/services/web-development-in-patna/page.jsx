import ServiceWebPage from "@/components/site/pages/ServiceWeb";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd, serviceLd, faqLd } from "@/lib/site-seo";
import Logic from "@/components/site/pages/ServiceWeb/logic";

const SEO = {
  title: "Web Development Company in Patna | Website Design & Development | Applotie",
  description:
    "Looking for web development in Patna? Applotie designs and builds fast, mobile-first, SEO-ready websites for businesses in Patna and across Bihar. Fixed price, 2–6 week delivery.",
  path: "/services/web-development-in-patna",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Web development in Patna", path: "/services/web-development-in-patna" },
        ])}
      />
      <JsonLd data={serviceLd({ name: "Web development in Patna", description: SEO.description, path: SEO.path })} />
      <JsonLd data={faqLd(Logic)} />
      <ServiceWebPage />
    </>
  );
}

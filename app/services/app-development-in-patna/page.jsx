import ServiceAppPage from "@/components/site/pages/ServiceApp";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd, serviceLd, faqLd } from "@/lib/site-seo";
import Logic from "@/components/site/pages/ServiceApp/logic";

const SEO = {
  title: "App Development Company in Patna | Android & iOS Apps | Applotie",
  description:
    "Mobile app development in Patna for Android and iOS. Applotie designs, builds and launches apps for clinics, retailers, startups and businesses across Bihar.",
  path: "/services/app-development-in-patna",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "App development in Patna", path: "/services/app-development-in-patna" },
        ])}
      />
      <JsonLd data={serviceLd({ name: "App development in Patna", description: SEO.description, path: SEO.path })} />
      <JsonLd data={faqLd(Logic)} />
      <ServiceAppPage />
    </>
  );
}

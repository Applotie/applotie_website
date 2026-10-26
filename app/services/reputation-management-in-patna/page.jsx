import ServiceReputationPage from "@/components/site/pages/ServiceReputation";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd, serviceLd, faqLd } from "@/lib/site-seo";
import Logic from "@/components/site/pages/ServiceReputation/logic";

const SEO = {
  title: "Online Reputation Management in Patna | Google Reviews & ORM | Applotie",
  description:
    "Online reputation management in Patna: get more genuine Google reviews, reply to every review professionally and build trust before customers call. ORM services from Applotie, Patna.",
  path: "/services/reputation-management-in-patna",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Reputation management in Patna", path: "/services/reputation-management-in-patna" },
        ])}
      />
      <JsonLd
        data={serviceLd({ name: "Reputation management in Patna", description: SEO.description, path: SEO.path })}
      />
      <JsonLd data={faqLd(Logic)} />
      <ServiceReputationPage />
    </>
  );
}

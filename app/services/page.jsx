import ServicesPage from "@/components/site/pages/Services";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd } from "@/lib/site-seo";

const SEO = {
  title: "Digital Marketing & Web Development Services in Patna | Applotie",
  description:
    "Web development, app development, SEO, performance marketing, reputation management and branding services in Patna, from one team at Applotie Technologies.",
  path: "/services",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <ServicesPage />
    </>
  );
}

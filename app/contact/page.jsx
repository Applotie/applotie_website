import ContactPage from "@/components/site/pages/Contact";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd } from "@/lib/site-seo";

const SEO = {
  title: "Contact Applotie | Start a Project with a Digital Agency in Patna",
  description:
    "Tell us about your project. Applotie replies within a working day on WhatsApp or by phone. Websites, apps, SEO and marketing for businesses in Patna and across Bihar.",
  path: "/contact",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactPage />
    </>
  );
}

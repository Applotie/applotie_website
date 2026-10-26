import AboutPage from "@/components/site/pages/About";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd } from "@/lib/site-seo";

const SEO = {
  title: "About Applotie | A Digital Agency Made in Patna",
  description:
    "Meet Applotie Technologies, the Patna studio behind websites, apps, SEO and marketing for growing businesses across Bihar. Our story, values and team.",
  path: "/about",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutPage />
    </>
  );
}

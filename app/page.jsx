import HomePage from "@/components/site/pages/Home";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, faqLd } from "@/lib/site-seo";
import Logic from "@/components/site/pages/Home/logic";

const SEO = {
  title: "Applotie Technologies | Web Development & Digital Marketing Agency in Patna",
  description:
    "Applotie is a web development company and digital marketing agency in Patna, Bihar. Websites, apps, SEO, performance marketing, reputation management and branding that bring in customers.",
  path: "/",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd data={faqLd(Logic)} />
      <HomePage />
    </>
  );
}

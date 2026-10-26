import ProductsPage from "@/components/site/pages/Products";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd } from "@/lib/site-seo";

const SEO = {
  title: "Products | Clinic Management Software & More from Patna | Applotie",
  description:
    "Ready-to-use software from Applotie Technologies, Patna. Meet Applotie Clinic, clinic management software for appointments, patient records, billing and WhatsApp reminders.",
  path: "/products",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <ProductsPage />
    </>
  );
}

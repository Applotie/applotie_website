import ProductClinicPage from "@/components/site/pages/ProductClinic";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd, faqLd } from "@/lib/site-seo";
import Logic from "@/components/site/pages/ProductClinic/logic";

const SEO = {
  title: "Clinic Management Software in Patna | Applotie Clinic",
  description:
    "Applotie Clinic is clinic management software made in Patna: appointments, patient records, digital prescriptions, GST billing, WhatsApp reminders and reports for clinics across Bihar.",
  path: "/products/clinic-management-software",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Applotie Clinic", path: "/products/clinic-management-software" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Applotie Clinic",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Android, iOS",
          description: SEO.description,
          url: "https://www.applotie.com/products/clinic-management-software",
          publisher: { "@id": "https://www.applotie.com/#business" },
        }}
      />
      <JsonLd data={faqLd(Logic)} />
      <ProductClinicPage />
    </>
  );
}

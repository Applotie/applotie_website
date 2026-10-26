import ProjectsPage from "@/components/site/pages/Projects";
import JsonLd from "@/components/site/JsonLd";
import { pageMeta, breadcrumbLd } from "@/lib/site-seo";

const SEO = {
  title: "Our Work | Case Studies from a Digital Agency in Patna | Applotie",
  description:
    "Case studies from Applotie, Patna: Meddolic (4× revenue), Snappy India (6× sales), Kharakia Metals, Surangan, JMD Sales, Fry Zone, Joy Joy and T&S Infra. Branding, websites, social media and performance marketing.",
  path: "/projects",
};

export const metadata = pageMeta(SEO);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/projects" },
        ])}
      />
      <ProjectsPage />
    </>
  );
}

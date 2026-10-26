import Hero from "./Hero";
import Pains from "./Pains";
import Pillars from "./Pillars";
import SerpPreview from "./SerpPreview";
import Process from "./Process";
import Case from "./Case";
import Packages from "./Packages";
import Local from "./Local";
import Faq from "./Faq";
import Section from "./Section";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function ServiceSeoPage() {
  return (
    <div className="page-svc-seo">
      <Hero />
      <Pains />
      <Pillars />
      <SerpPreview />
      <Process />
      <Case />
      <Packages />
      <Local />
      <Faq />
      <Section />
    </div>
  );
}

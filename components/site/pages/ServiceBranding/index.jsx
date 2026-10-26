import Hero from "./Hero";
import Pains from "./Pains";
import Included from "./Included";
import Mixer from "./Mixer";
import OurOwnBrand from "./OurOwnBrand";
import Process from "./Process";
import Case from "./Case";
import Local from "./Local";
import Packages from "./Packages";
import Faq from "./Faq";
import Section from "./Section";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function ServiceBrandingPage() {
  return (
    <div className="page-svc-brand">
      <Hero />
      <Pains />
      <Included />
      <Mixer />
      <OurOwnBrand />
      <Process />
      <Case />
      <Local />
      <Packages />
      <Faq />
      <Section />
    </div>
  );
}

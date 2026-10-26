import Hero from "./Hero";
import Pains from "./Pains";
import Included from "./Included";
import Calculator from "./Calculator";
import ReplyPreview from "./ReplyPreview";
import Promise from "./Promise";
import Process from "./Process";
import Case from "./Case";
import Local from "./Local";
import Packages from "./Packages";
import Faq from "./Faq";
import Section from "./Section";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function ServiceReputationPage() {
  return (
    <div className="page-svc-rep">
      <Hero />
      <Pains />
      <Included />
      <Calculator />
      <ReplyPreview />
      <Promise />
      <Process />
      <Case />
      <Local />
      <Packages />
      <Faq />
      <Section />
    </div>
  );
}

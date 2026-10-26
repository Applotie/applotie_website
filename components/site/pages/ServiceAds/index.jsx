import Hero from "./Hero";
import Pains from "./Pains";
import Channels from "./Channels";
import Planner from "./Planner";
import Process from "./Process";
import Case from "./Case";
import Packages from "./Packages";
import Local from "./Local";
import Faq from "./Faq";
import Section from "./Section";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function ServiceAdsPage() {
  return (
    <div className="page-svc-ads">
      <Hero />
      <Pains />
      <Channels />
      <Planner />
      <Process />
      <Case />
      <Packages />
      <Local />
      <Faq />
      <Section />
    </div>
  );
}

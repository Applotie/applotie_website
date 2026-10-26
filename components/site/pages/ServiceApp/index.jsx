import Hero from "./Hero";
import Pains from "./Pains";
import TypesExplorer from "./TypesExplorer";
import WhatYouGet from "./WhatYouGet";
import Process from "./Process";
import CaseStack from "./CaseStack";
import Packages from "./Packages";
import Local from "./Local";
import Faq from "./Faq";
import Section from "./Section";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function ServiceAppPage() {
  return (
    <div className="page-svc-app">
      <Hero />
      <Pains />
      <TypesExplorer />
      <WhatYouGet />
      <Process />
      <CaseStack />
      <Packages />
      <Local />
      <Faq />
      <Section />
    </div>
  );
}

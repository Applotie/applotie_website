import Hero from "./Hero";
import Pains from "./Pains";
import WhatYouGet from "./WhatYouGet";
import Planner from "./Planner";
import Process from "./Process";
import Case from "./Case";
import StackPackages from "./StackPackages";
import Local from "./Local";
import Faq from "./Faq";
import NextService from "./NextService";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function ServiceWebPage() {
  return (
    <div className="page-svc-web">
      <Hero />
      <Pains />
      <WhatYouGet />
      <Planner />
      <Process />
      <Case />
      <StackPackages />
      <Local />
      <Faq />
      <NextService />
    </div>
  );
}

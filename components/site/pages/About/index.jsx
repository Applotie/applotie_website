import Hero from "./Hero";
import StatementNumbers from "./StatementNumbers";
import Story from "./Story";
import WhatWeDo from "./WhatWeDo";
import Values from "./Values";
import Clients from "./Clients";
import StudioLife from "./StudioLife";
import Careers from "./Careers";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function AboutPage() {
  return (
    <div className="page-about">
      <Hero />
      <StatementNumbers />
      <Story />
      <WhatWeDo />
      <Values />
      <Clients />
      <StudioLife />
      <Careers />
    </div>
  );
}

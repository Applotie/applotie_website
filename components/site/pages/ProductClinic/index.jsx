import Hero from "./Hero";
import BuiltFor from "./BuiltFor";
import Tour from "./Tour";
import Features from "./Features";
import Calculator from "./Calculator";
import DayInTheLife from "./DayInTheLife";
import Pricing from "./Pricing";
import LocalQuote from "./LocalQuote";
import Faq from "./Faq";
import Demo from "./Demo";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function ProductClinicPage() {
  return (
    <div className="page-clinic">
      <Hero />
      <BuiltFor />
      <Tour />
      <Features />
      <Calculator />
      <DayInTheLife />
      <Pricing />
      <LocalQuote />
      <Faq />
      <Demo />
    </div>
  );
}

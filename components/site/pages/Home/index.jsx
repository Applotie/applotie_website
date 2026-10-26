import Hero from "./Hero";
import HeroFilm from "./HeroFilm";
import Marquee from "./Marquee";
import IntroStats from "./IntroStats";
import WeDontDoAverage from "./WeDontDoAverage";
import Services from "./Services";
import Work from "./Work";
import Process from "./Process";
import Studio from "./Studio";
import Testimonials from "./Testimonials";
import Journal from "./Journal";
import Faq from "./Faq";
import Contact from "./Contact";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function HomePage() {
  return (
    <div className="page-home">
      <Hero />
      <HeroFilm />
      <Marquee />
      <IntroStats />
      <WeDontDoAverage />
      <Services />
      <Work />
      <Process />
      <Studio />
      <Testimonials />
      <Journal />
      <Faq />
      <Contact />
    </div>
  );
}

import Hero from "@/components/hero";
import Services from "@/components/services";
import Difference from "@/components/difference";
import Process from "@/components/timeline";
import TechStack from "@/components/techstack";
import Results from "@/components/results";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/cta";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Hero />
      <Results />
      <Services />
      <Difference />
      <Process />
      <TechStack />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
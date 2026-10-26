import Hero from "./Hero";
import Section from "./Section";
import Next from "./Next";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function ContactPage() {
  return (
    <div className="page-contact">
      <Hero />
      <Section />
      <Next />
    </div>
  );
}

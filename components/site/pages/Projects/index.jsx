import Hero from "./Hero";
import Highlights from "./Highlights";
import Filters from "./Filters";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function ProjectsPage() {
  return (
    <div className="page-projects">
      <Hero />
      <Highlights />
      <Filters />
    </div>
  );
}

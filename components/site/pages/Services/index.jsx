import Hero from "./Hero";
import ServiceRows from "./ServiceRows";
import Recommender from "./Recommender";
import EngagementModels from "./EngagementModels";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function ServicesPage() {
  return (
    <div className="page-services">
      <Hero />
      <ServiceRows />
      <Recommender />
      <EngagementModels />
    </div>
  );
}

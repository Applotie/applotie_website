import Hero from "./Hero";
import FeaturedProduct from "./FeaturedProduct";
import Why from "./Why";
import Vote from "./Vote";
import Custom from "./Custom";

// Server component: static sections render on the server, interactive ones hydrate as client islands.
export default function ProductsPage() {
  return (
    <div className="page-products">
      <Hero />
      <FeaturedProduct />
      <Why />
      <Vote />
      <Custom />
    </div>
  );
}

import Hero from "./Hero";
import Featured from "./Featured";
import List from "./List";
import Newsletter from "./Newsletter";

// Server component. `posts` are plain card objects built from MongoDB posts (see lib/blog.js).
/** @param {{ posts?: Array<Record<string, any>> }} props */
export default function BlogPage({ posts = [] }) {
  const [featured, ...rest] = posts;
  return (
    <div className="page-blog">
      <Hero />
      <Featured post={featured} />
      {(rest.length > 0 || !featured) && <List posts={rest} />}
      <Newsletter />
    </div>
  );
}

import PostHeader from "./PostHeader";
import PostCover from "./PostCover";
import PostArticle from "./PostArticle";
import PostRelated from "./PostRelated";

// A single journal article, laid out like the design. Server component.
export default function BlogPostView({ post, content, toc, minutes, related, url }) {
  return (
    <div className="page-post">
      <PostHeader post={post} url={url} />
      <PostCover post={post} />
      <PostArticle content={content} toc={toc} minutes={minutes} />
      <PostRelated posts={related} />
    </div>
  );
}

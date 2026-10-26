import { Children, isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "@/lib/blog";

function textOf(node) {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) return textOf(node.props.children);
  return Children.toArray(node).map(textOf).join("");
}

// Markdown from the admin editor, styled by the design's `.body` article styles. Server component.
export default function PostBody({ content = "" }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // The post title is the page H1, so a "# heading" in the body becomes an H2.
        h1: ({ children }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
        h2: ({ children }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
        blockquote: ({ children }) => <blockquote className="pull">{children}</blockquote>,
        a: ({ href = "", children }) =>
          /^https?:\/\//.test(href) ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ) : (
            <a href={href}>{children}</a>
          ),
        img: ({ src, alt }) => (
          <img
            src={src}
            alt={alt || ""}
            loading="lazy"
            decoding="async"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "20px", display: "block" }}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

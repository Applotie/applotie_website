"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownPreviewProps = {
  content: string;
};

export default function MarkdownPreview({
  content,
}: MarkdownPreviewProps) {
  return (
    <div>
      <h3>Preview</h3>

      {content.trim() ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      ) : (
        <p>Start writing to see the preview...</p>
      )}
    </div>
  );
}
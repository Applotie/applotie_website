"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  content: string;
};

export default function MarkdownContent({
  content,
}: MarkdownContentProps) {
  return (
    <div
      className="
        max-w-none
        text-[17px]
        leading-8
        text-[#3F4248]

        [&>p]:mb-7

        [&>h1]:mb-6
        [&>h1]:mt-12
        [&>h1]:text-4xl
        [&>h1]:font-black
        [&>h1]:leading-tight
        [&>h1]:tracking-[-0.04em]
        [&>h1]:text-[#111318]

        [&>h2]:mb-5
        [&>h2]:mt-14
        [&>h2]:text-3xl
        [&>h2]:font-black
        [&>h2]:leading-tight
        [&>h2]:tracking-[-0.035em]
        [&>h2]:text-[#111318]

        [&>h3]:mb-4
        [&>h3]:mt-10
        [&>h3]:text-2xl
        [&>h3]:font-bold
        [&>h3]:leading-tight
        [&>h3]:tracking-[-0.025em]
        [&>h3]:text-[#111318]

        [&>h4]:mb-3
        [&>h4]:mt-8
        [&>h4]:text-xl
        [&>h4]:font-bold
        [&>h4]:text-[#111318]

        [&>a]:font-semibold
        [&>a]:text-[#E52B2B]
        [&>a]:underline
        [&>a]:underline-offset-4
        [&>a]:transition
        [&>a]:hover:text-[#111318]

        [&_a]:font-semibold
        [&_a]:text-[#E52B2B]
        [&_a]:underline
        [&_a]:underline-offset-4
        [&_a]:transition
        [&_a]:hover:text-[#111318]

        [&>ul]:mb-7
        [&>ul]:ml-6
        [&>ul]:list-disc
        [&>ul]:space-y-2

        [&>ol]:mb-7
        [&>ol]:ml-6
        [&>ol]:list-decimal
        [&>ol]:space-y-2

        [&_li]:pl-2

        [&>blockquote]:my-10
        [&>blockquote]:border-l-4
        [&>blockquote]:border-[#E52B2B]
        [&>blockquote]:bg-[#F7F7F5]
        [&>blockquote]:px-6
        [&>blockquote]:py-5
        [&>blockquote]:text-lg
        [&>blockquote]:font-medium
        [&>blockquote]:italic
        [&>blockquote]:leading-8
        [&>blockquote]:text-[#111318]

        [&>hr]:my-12
        [&>hr]:border-[#111318]/10

        [&>img]:my-10
        [&>img]:w-full
        [&>img]:rounded-2xl

        [&>pre]:my-10
        [&>pre]:overflow-x-auto
        [&>pre]:rounded-2xl
        [&>pre]:bg-[#111318]
        [&>pre]:p-6
        [&>pre]:text-sm
        [&>pre]:leading-6
        [&>pre]:text-white

        [&_code]:font-mono
        [&_code]:text-[0.9em]

        [&>p_code]:rounded
        [&>p_code]:bg-[#F1F1EF]
        [&>p_code]:px-1.5
        [&>p_code]:py-0.5
        [&>p_code]:text-[#111318]

        [&>table]:my-10
        [&>table]:w-full
        [&>table]:border-collapse
        [&>table]:overflow-hidden
        [&>table]:rounded-xl

        [&_th]:border
        [&_th]:border-[#111318]/10
        [&_th]:bg-[#F7F7F5]
        [&_th]:px-4
        [&_th]:py-3
        [&_th]:text-left
        [&_th]:text-sm
        [&_th]:font-bold
        [&_th]:text-[#111318]

        [&_td]:border
        [&_td]:border-[#111318]/10
        [&_td]:px-4
        [&_td]:py-3
        [&_td]:text-sm

        sm:text-[18px]
        sm:leading-8

        [&>h1]:sm:text-5xl
        [&>h2]:sm:text-4xl
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children, ...props }) => (
            <a
              href={href}
              target={
                href?.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                href?.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              {...props}
            >
              {children}
            </a>
          ),

          img: ({ src, alt, ...props }) => (
            <img
              src={src}
              alt={alt || ""}
              loading="lazy"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
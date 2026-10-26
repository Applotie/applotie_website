"use client";

import { usePathname } from "next/navigation";

// Wraps public pages in the site chrome. The admin area keeps its own plain layout.
// Chrome pieces arrive as props from the (server) root layout, so the footer stays a server component.
export default function SiteShell({ children, nav, footer, floating, curtain, motion }) {
  const pathname = usePathname() || "/";
  // Admin pages render their own <main>.
  if (pathname.startsWith("/admin")) return children;

  return (
    <div className="pg" id="top">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="sprog" aria-hidden="true"></div>
      {curtain}
      {nav}
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      {footer}
      {floating}
      {motion}
    </div>
  );
}

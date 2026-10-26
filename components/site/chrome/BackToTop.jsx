"use client";

// Smooth scroll back to the top (through Lenis when it's running).
export function scrollToTop() {
  if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.2 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function BackToTop({ className, style, children, ...rest }) {
  return (
    <button type="button" className={className} style={style} onClick={scrollToTop} {...rest}>
      {children}
    </button>
  );
}

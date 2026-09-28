import FooterTransitionAnimation from "./animations/FooterTransitionAnimation";

export default function FooterTransition() {
  return (
    <section
      aria-hidden="true"
      className="relative h-[90px] w-full overflow-hidden bg-white sm:h-[105px] lg:h-[120px]"
    >
      <div className="footer-wave-track absolute inset-y-0 left-[-25%] w-[150%]">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="applotie-wave"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#B51F26" />
              <stop offset="45%" stopColor="#E52B2B" />
              <stop offset="100%" stopColor="#C82027" />
            </linearGradient>
          </defs>

          <path
            fill="url(#applotie-wave)"
            d="
              M 0 48
              C 180 48, 280 18, 460 25
              C 650 32, 710 78, 900 82
              C 1100 86, 1190 45, 1440 48
              L 1440 120
              L 0 120
              Z
            "
          />

          <path
            d="
              M 0 48
              C 180 48, 280 18, 460 25
              C 650 32, 710 78, 900 82
              C 1100 86, 1190 45, 1440 48
            "
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <FooterTransitionAnimation />
    </section>
  );
}
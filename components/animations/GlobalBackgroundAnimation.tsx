"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const VIEWBOX_WIDTH = 1920;
const VIEWBOX_HEIGHT = 1080;
const GRID_SIZE = 80;
const ROUTE_COUNT = 4;

type Point = {
  x: number;
  y: number;
};

function snapToGrid(value: number) {
  return Math.round(value / GRID_SIZE) * GRID_SIZE;
}

function randomGridPoint(): Point {
  return {
    x: snapToGrid(GRID_SIZE + Math.random() * (VIEWBOX_WIDTH - GRID_SIZE * 2)),
    y: snapToGrid(GRID_SIZE + Math.random() * (VIEWBOX_HEIGHT - GRID_SIZE * 2)),
  };
}

function createRoute() {
  const points: Point[] = [
    {
      x: Math.random() > 0.5 ? -GRID_SIZE : VIEWBOX_WIDTH + GRID_SIZE,
      y: randomGridPoint().y,
    },
  ];

  let current = points[0];
  let horizontal = Math.random() > 0.5;
  const turns = 5 + Math.floor(Math.random() * 3);

  for (let index = 0; index < turns; index += 1) {
    const next = randomGridPoint();
    current = horizontal
      ? { x: next.x, y: current.y }
      : { x: current.x, y: next.y };
    points.push(current);
    horizontal = !horizontal;
  }

  points.push({
    x: current.x < VIEWBOX_WIDTH / 2 ? VIEWBOX_WIDTH + GRID_SIZE : -GRID_SIZE,
    y: current.y,
  });

  return points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
}

export default function GlobalBackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const routePaths = Array.from(
      container.querySelectorAll<SVGPathElement>("[data-global-route]"),
    );
    const routeDots = Array.from(
      container.querySelectorAll<SVGCircleElement>("[data-global-dot]"),
    );
    const routeAnimations: gsap.core.Animation[] = [];
    const delayedCalls: gsap.core.Tween[] = [];
    let destroyed = false;

    const animateRoute = (index: number) => {
      if (destroyed || reducedMotion) return;

      const path = routePaths[index];
      const dot = routeDots[index];
      if (!path || !dot) return;

      const route = createRoute();
      path.setAttribute("d", route);
      const length = path.getTotalLength();
      const progress = { value: 0 };
      const tailLength = 120 + Math.random() * 100;

      path.style.strokeDasharray = `${tailLength} ${length}`;
      gsap.set([path, dot], { opacity: 0 });
      path.style.strokeDashoffset = `${length}`;
      const tween = gsap.to(progress, {
        value: 1,
        duration: 7 + Math.random() * 4,
        ease: "none",
        onStart: () => {
          gsap.to([path, dot], {
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          });
        },
        onUpdate: () => {
          if (destroyed) return;
          const distance = progress.value * length;
          const point = path.getPointAtLength(distance);
          dot.setAttribute("cx", `${point.x}`);
          dot.setAttribute("cy", `${point.y}`);
          path.style.strokeDashoffset = `${length - distance}`;
        },
        onComplete: () => {
          gsap.to([path, dot], {
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          });
          const call = gsap.delayedCall(0.8 + Math.random() * 1.8, () =>
            animateRoute(index),
          );
          delayedCalls.push(call);
        },
      });

      routeAnimations.push(tween);
    };

    if (reducedMotion) {
      routePaths.forEach((path) => {
        path.setAttribute("d", createRoute());
        path.style.strokeDasharray = "none";
        path.style.opacity = "0.2";
      });
    } else {
      routePaths.forEach((_, index) => {
        const call = gsap.delayedCall(index * 1.2, () => animateRoute(index));
        delayedCalls.push(call);
      });
    }

    return () => {
      destroyed = true;
      routeAnimations.forEach((animation) => animation.kill());
      delayedCalls.forEach((call) => call.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-3 overflow-hidden mix-blend-multiply"
    >
      <svg
        className="h-full w-full opacity-60"
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="global-grid"
            width={GRID_SIZE}
            height={GRID_SIZE}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`}
              fill="none"
              stroke="#202124"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width={VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT} fill="url(#global-grid)" />

        {Array.from({ length: ROUTE_COUNT }).map((_, index) => (
          <g key={index}>
            <path
              data-global-route
              fill="none"
              stroke="#E52B2B"
              strokeDasharray="120 1200"
              strokeLinecap="round"
              strokeOpacity="0.28"
              strokeWidth="2"
            />
            <circle
              data-global-dot
              r="4"
              fill="#F5C518"
              stroke="#E52B2B"
              strokeWidth="1"
            />
          </g>
        ))}

      </svg>
    </div>
  );
}

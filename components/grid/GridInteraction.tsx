"use client";

import { useEffect, useRef } from "react";

export default function GridInteraction() {
  const rootRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const energyRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const node = nodeRef.current;
    const energy = energyRef.current;

    if (!root || !node || !energy) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let motionDisabled = reducedMotion.matches;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let activeNode = "";
    let pulseTimer = 0;
    let touchFocusTimer = 0;
    let nodeAnimation: Animation | null = null;
    let energyAnimation: Animation | null = null;

    const getGridSize = () =>
      Number.parseFloat(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--global-grid-size")
      ) || 64;

    const flashNode = (x: number, y: number) => {
      nodeAnimation?.cancel();
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      nodeAnimation = node.animate(
        [
          { opacity: 0, transform: "translate(-50%, -50%) scale(0.25)" },
          { opacity: 0.9, transform: "translate(-50%, -50%) scale(1.15)", offset: 0.35 },
          { opacity: 0, transform: "translate(-50%, -50%) scale(0.7)" },
        ],
        { duration: 560, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
      );
    };

    const focusAt = (x: number, y: number) => {
      root.style.setProperty("--pointer-x", `${x}px`);
      root.style.setProperty("--pointer-y", `${y}px`);
      root.dataset.pointerActive = "true";
    };

    const schedulePulse = () => {
      window.clearTimeout(pulseTimer);
      if (motionDisabled) return;

      const isMobile = window.matchMedia("(max-width: 639px)").matches;
      const delay = isMobile ? 14000 + Math.random() * 10000 : 8000 + Math.random() * 10000;
      pulseTimer = window.setTimeout(runPulse, delay);
    };

    const runPulse = () => {
      if (motionDisabled || document.hidden) {
        schedulePulse();
        return;
      }

      const gridSize = getGridSize();
      const columns = Math.max(1, Math.floor(window.innerWidth / gridSize));
      const rows = Math.max(1, Math.floor(window.innerHeight / gridSize));
      const column = Math.floor(Math.random() * Math.max(1, columns - 1));
      const row = Math.floor(Math.random() * rows);
      const travel = gridSize;
      const isMobile = window.matchMedia("(max-width: 639px)").matches;

      energy.style.left = `${column * gridSize}px`;
      energy.style.top = `${row * gridSize}px`;
      energy.style.width = `${gridSize}px`;
      energy.style.setProperty(
        "--pulse-color",
        Math.random() < 0.84 ? "var(--signal-red)" : "var(--muted-gold)"
      );

      energyAnimation?.cancel();
      energyAnimation = energy.animate(
        [
          { opacity: 0, transform: "translateX(0) scaleX(0.06)" },
          { opacity: 0.78, transform: "translateX(0) scaleX(0.42)", offset: 0.2 },
          {
            opacity: 0.52,
            transform: `translateX(${travel}px) scaleX(0.28)`,
            offset: 0.82,
          },
          { opacity: 0, transform: `translateX(${travel}px) scaleX(0.04)` },
        ],
        { duration: isMobile ? 900 : 680, easing: "ease-out" }
      );
      energyAnimation.onfinish = schedulePulse;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (motionDisabled || event.pointerType === "touch") return;

      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        focusAt(pointerX, pointerY);

        const gridSize = getGridSize();
        const nodeX = Math.round(pointerX / gridSize) * gridSize;
        const nodeY = Math.round(pointerY / gridSize) * gridSize;
        const distance = Math.hypot(pointerX - nodeX, pointerY - nodeY);
        const nodeKey = `${nodeX}:${nodeY}`;

        if (distance <= 24 && activeNode !== nodeKey) {
          activeNode = nodeKey;
          flashNode(nodeX, nodeY);
        } else if (distance > 24) {
          activeNode = "";
        }
      });
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (motionDisabled || event.pointerType !== "touch") return;

      const gridSize = getGridSize();
      const nodeX = Math.round(event.clientX / gridSize) * gridSize;
      const nodeY = Math.round(event.clientY / gridSize) * gridSize;
      focusAt(event.clientX, event.clientY);
      flashNode(nodeX, nodeY);

      window.clearTimeout(touchFocusTimer);
      touchFocusTimer = window.setTimeout(() => {
        delete root.dataset.pointerActive;
      }, 700);
    };

    const clearFocus = () => {
      delete root.dataset.pointerActive;
      activeNode = "";
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (event.relatedTarget === null) clearFocus();
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      motionDisabled = event.matches;
      if (motionDisabled) {
        window.clearTimeout(pulseTimer);
        window.clearTimeout(touchFocusTimer);
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0;
        nodeAnimation?.cancel();
        energyAnimation?.cancel();
        clearFocus();
      } else {
        schedulePulse();
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    window.addEventListener("blur", clearFocus);
    reducedMotion.addEventListener("change", handleMotionChange);
    schedulePulse();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", clearFocus);
      reducedMotion.removeEventListener("change", handleMotionChange);
      window.clearTimeout(pulseTimer);
      window.clearTimeout(touchFocusTimer);
      if (frame) window.cancelAnimationFrame(frame);
      nodeAnimation?.cancel();
      energyAnimation?.cancel();
    };
  }, []);

  return (
    <div ref={rootRef} className="global-grid-interaction" aria-hidden="true">
      <div className="global-grid-focus global-grid-focus-light" />
      <div className="global-grid-focus global-grid-focus-dark" />
      <span ref={nodeRef} className="global-grid-node" />
      <span ref={energyRef} className="global-grid-energy" />
    </div>
  );
}
"use client";

import { useSyncExternalStore } from "react";

function patnaTime() {
  try {
    return new Date()
      .toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "numeric", minute: "2-digit", hour12: true })
      .toUpperCase();
  } catch {
    return "";
  }
}

// Ticks every 20 seconds; the snapshot is a string, so React only re-renders when the minute changes.
function subscribe(onChange) {
  const t = setInterval(onChange, 20000);
  return () => clearInterval(t);
}

// Live Patna (IST) time. Empty on the server so the HTML never disagrees with the browser.
export default function LiveClock() {
  const time = useSyncExternalStore(subscribe, patnaTime, () => "");
  return <span suppressHydrationWarning>{time}</span>;
}

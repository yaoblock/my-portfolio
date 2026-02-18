"use client";

import { useEffect, useState } from "react";

const ZERO = "0.0000000000000000";
const BIRTH = new Date("2025-09-11T04:25:00+08:00").getTime();
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const FRAME_INTERVAL_MS = 1000 / 15;

function formatYears(): string {
  const years = (Date.now() - BIRTH) / MS_PER_YEAR;
  return years >= 0 ? years.toFixed(16) : ZERO;
}

export default function LifeCounter() {
  const [display, setDisplay] = useState(ZERO);

  useEffect(() => {
    let rafId: number | null = null;
    let lastUpdate = 0;

    const update = (now: number) => {
      if (now - lastUpdate >= FRAME_INTERVAL_MS) {
        setDisplay(formatYears());
        lastUpdate = now;
      }
      rafId = requestAnimationFrame(update);
    };

    const start = () => {
      if (rafId !== null) return;
      lastUpdate = 0;
      setDisplay(formatYears());
      rafId = requestAnimationFrame(update);
    };

    const stop = () => {
      if (rafId === null) return;
      cancelAnimationFrame(rafId);
      rafId = null;
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <p className="mt-4 font-mono text-sm tabular-nums text-zinc-500 dark:text-zinc-400">
      <span className="inline-block w-[18ch]">{display}</span>
    </p>
  );
}

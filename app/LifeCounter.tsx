"use client";

import { useEffect, useState } from "react";

const BIRTH = new Date("2025-09-11T04:25:00+08:00").getTime();
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

function yearsAlive(): number {
  return (Date.now() - BIRTH) / MS_PER_YEAR;
}

export default function LifeCounter() {
  const [mounted, setMounted] = useState(false);
  const [years, setYears] = useState(0);

  useEffect(() => {
    setMounted(true);
    setYears(yearsAlive());
    const t = setInterval(() => setYears(yearsAlive()), 100);
    return () => clearInterval(t);
  }, []);

  if (!mounted) {
    return (
      <p className="mt-4 font-mono text-sm tabular-nums text-zinc-500 dark:text-zinc-400">
        <span className="inline-block w-[18ch]">0.0000000000000000</span>
      </p>
    );
  }

  const str = years >= 0 ? years.toFixed(16) : "0.0000000000000000";
  return (
    <p className="mt-4 font-mono text-sm tabular-nums text-zinc-500 dark:text-zinc-400">
      {str}
    </p>
  );
}

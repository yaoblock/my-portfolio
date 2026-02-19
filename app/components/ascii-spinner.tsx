"use client";

import { useEffect, useState } from "react";

// Claude Code default spinner: phases with reverseMirror
// Forward: · ✢ ✳ ✶ ✻ ✽ → Backward: ✻ ✶ ✳ ✢ → repeat
const PHASES = [
  "\u00B7",       // ·
  "\u2722\uFE0E", // ✢
  "\u2733\uFE0E", // ✳
  "\u2736\uFE0E", // ✶
  "\u273B\uFE0E", // ✻
  "\u273D\uFE0E", // ✽
];

// Build pingpong sequence: 0 1 2 3 4 5 4 3 2 1 → repeat
const FRAMES = [
  ...PHASES,
  ...PHASES.slice(1, -1).reverse(),
];

const INTERVAL = 120; // ms — Claude Code default

export default function AsciiSpinner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % FRAMES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="mr-1.5 inline-block w-[1ch] text-center" aria-hidden="true">
      {FRAMES[index]}
    </span>
  );
}

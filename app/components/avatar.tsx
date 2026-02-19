"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";

export default function Avatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const [hovered, setHovered] = useState(false);

  const drawNoise = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 180;
    }

    ctx.putImageData(imageData, 0, 0);
    rafRef.current = requestAnimationFrame(drawNoise);
  }, []);

  useEffect(() => {
    if (hovered) {
      drawNoise();
    } else if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hovered, drawNoise]);

  return (
    <div
      className="relative w-fit shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="rotate-3 rounded-full border-[5px] border-white shadow-[2px_3px_10px_rgba(0,0,0,0.15)]">
        <div className="relative h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24">
          <Image
            src="/avatar.png"
            alt="YAO avatar"
            width={96}
            height={96}
            priority
            sizes="(min-width: 640px) 96px, 80px"
            className={`h-full w-full object-cover transition-all duration-500 ease-in-out ${
              hovered ? "scale-105 blur-[1px]" : "scale-100 blur-0"
            }`}
          />
          <canvas
            ref={canvasRef}
            width={96}
            height={96}
            className={`absolute inset-0 h-full w-full rounded-full transition-opacity duration-500 ease-in-out ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

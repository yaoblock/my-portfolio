"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";

const FLOAT_RANGE = 8; // max px offset

export default function Avatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // -1 to 1 based on distance from center
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setOffset({
      x: dx * FLOAT_RANGE,
      y: dy * FLOAT_RANGE,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-fit shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        className="rounded-full border-4 border-white shadow-sm will-change-transform dark:border-zinc-800 transition-transform duration-300 ease-out"
        style={{
          transform: `rotate(3deg) translate(${offset.x}px, ${offset.y}px)`,
          backfaceVisibility: "hidden",
        }}
      >
        <div
          className="relative h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24"
          style={{ outline: "1px solid transparent" }}
        >
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

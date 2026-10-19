"use client";

import { useRef } from "react";
import { useShapeLens } from "@/components/ui/useShapeLens";

type WorldPanelProps = {
  tone: "digital" | "handmade" | "travel";
  labelledBy: string;
  seed?: number;
  className?: string;
  children: React.ReactNode;
};

const clamp = (min: number, value: number, max: number) =>
  Math.min(max, Math.max(min, value));

const lensRadius = (_rect: DOMRect, coarse: boolean) =>
  coarse
    ? clamp(72, window.innerWidth * 0.22, 112)
    : clamp(96, window.innerWidth * 0.13, 176);

export function WorldPanel({
  tone,
  labelledBy,
  seed = 0,
  className = "",
  children,
}: WorldPanelProps) {
  const ref = useRef<HTMLElement>(null);
  useShapeLens(ref, { radius: lensRadius, wander: true, seed });

  return (
    <article
      ref={ref}
      aria-labelledby={labelledBy}
      data-tone={tone}
      className={`world-panel group relative isolate overflow-hidden ${className}`}
    >
      {children}
    </article>
  );
}

"use client";

import { useRef } from "react";
import { useShapeLens } from "@/components/ui/useShapeLens";

const lensRadius = (rect: DOMRect) => rect.height * 0.55;

type HeroNameProps = {
  name: string;
  label: string;
  className?: string;
  as?: "h1" | "h2" | "span";
  id?: string;
};

// Poster letters that turn to outline wherever the floating lens passes.
export function HeroName({
  name,
  label,
  className = "",
  as: Tag = "h1",
  id = "hero-title",
}: HeroNameProps) {
  const ref = useRef<HTMLSpanElement>(null);
  useShapeLens(ref, { radius: lensRadius, seed: 2 });

  // Both layers share one box, so the same polygon lines up on each.
  const layer = "flex pb-[0.22em] pt-[0.14em]";
  const letters = [...name].map((letter, i) => (
    <span
      key={i}
      className="block animate-rise"
      style={{ animationDelay: `${220 + i * 35}ms` }}
    >
      {letter}
    </span>
  ));

  return (
    <Tag id={id} aria-label={label} className={className}>
      <span
        ref={ref}
        aria-hidden="true"
        className="relative -mb-[0.22em] -mt-[0.14em] block overflow-hidden"
      >
        <span className={`name-fill ${layer}`}>{letters}</span>
        <span className={`name-stroke absolute inset-0 ${layer}`}>
          {letters}
        </span>
      </span>
    </Tag>
  );
}

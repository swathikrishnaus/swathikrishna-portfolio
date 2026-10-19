"use client";

import { useEffect, useRef } from "react";

type LoopVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
  preload?: "none" | "metadata" | "auto";
};

// A silent background loop that only plays while on screen, and never for
// visitors who prefer reduced motion.
export function LoopVideo({
  src,
  poster,
  label,
  className = "",
  preload = "metadata",
}: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let onScreen = true;

    const sync = () => {
      if (onScreen && !reduceMotion.matches) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    // Only spend decode time while the video is actually visible.
    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });

    observer.observe(video);
    reduceMotion.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <video
      ref={ref}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload={preload}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

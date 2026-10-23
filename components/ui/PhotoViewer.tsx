"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Arrow } from "@/components/ui/Arrow";
import type { ImageAsset } from "@/content";

export type ViewerPhoto = {
  key: string;
  title: string;
  label?: string;
  image: ImageAsset;
};

type PhotoViewerProps = {
  photos: ViewerPhoto[];
  /** Index of the open photo, or null when closed. */
  index: number | null;
  onChange: (index: number | null) => void;
};

// Full-screen photo viewer: arrow keys or swipe to move, Escape to close.
export function PhotoViewer({ photos, index, onChange }: PhotoViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const swipeStart = useRef<number | null>(null);
  const count = photos.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();

    const root = document.documentElement;
    const { overflow } = root.style;
    root.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onChange((index + 1) % count);
      if (event.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, count, onChange]);

  const step = (by: number) =>
    index !== null && onChange((index + by + count) % count);
  const current = index === null ? null : photos[index];

  return (
    <dialog
      ref={dialogRef}
      aria-label="Photo viewer"
      onClose={() => onChange(null)}
      onClick={(event) => {
        if (event.target === event.currentTarget) onChange(null);
      }}
      onPointerDown={(event) => {
        swipeStart.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (swipeStart.current === null) return;
        const dx = event.clientX - swipeStart.current;
        swipeStart.current = null;
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
      }}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-ink p-0 text-ivory backdrop:bg-ink/70 open:flex open:flex-col"
    >
      {current && index !== null && (
        <>
          <div className="container-page flex h-14 shrink-0 items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ivory/70 md:h-16">
            <span>
              {index + 1} / {count}
            </span>
            <button
              type="button"
              onClick={() => onChange(null)}
              className="py-2 hover:text-ivory"
              autoFocus
            >
              Close
            </button>
          </div>

          {/* The photo takes all the room left, scaled to fit. */}
          <figure
            onClick={(event) => {
              if (event.target === event.currentTarget) onChange(null);
            }}
            className="relative flex min-h-0 flex-1 flex-col px-[var(--gutter)] pb-4 md:px-24"
          >
            <div className="relative min-h-0 flex-1">
              <Image
                key={current.key}
                src={current.image.src}
                alt={current.image.alt}
                placeholder={
                  typeof current.image.src === "string" ? "empty" : "blur"
                }
                fill
                quality={90}
                sizes="100vw"
                className="animate-fade object-contain"
              />
            </div>
            <figcaption className="mt-3 shrink-0 text-center">
              <span className="font-display-soft block text-[1.35rem] leading-tight">
                {current.title}
              </span>
              {current.label && (
                <span className="mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ivory/60">
                  {current.label}
                </span>
              )}
            </figcaption>

            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-[var(--gutter)] top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 bg-ink/40 backdrop-blur-sm transition-colors hover:bg-ivory hover:text-ink md:size-12"
            >
              <Arrow className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-[var(--gutter)] top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 bg-ink/40 backdrop-blur-sm transition-colors hover:bg-ivory hover:text-ink md:size-12"
            >
              <Arrow />
            </button>
          </figure>
        </>
      )}
    </dialog>
  );
}

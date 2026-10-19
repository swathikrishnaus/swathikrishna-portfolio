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
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-ink/95 p-0 text-ivory backdrop:bg-ink/70 open:flex open:flex-col"
    >
      {current && index !== null && (
        <>
          <div className="container-page flex h-16 shrink-0 items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ivory/70 md:h-20">
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

          <figure
            onClick={(event) => {
              if (event.target === event.currentTarget) onChange(null);
            }}
            className="flex min-h-0 flex-1 flex-col items-center justify-center px-[var(--gutter)]"
          >
            <Image
              key={current.key}
              src={current.image.src}
              alt={current.image.alt}
              placeholder={
                typeof current.image.src === "string" ? "empty" : "blur"
              }
              quality={90}
              sizes="90vw"
              className="h-auto max-h-[calc(100svh-12rem)] w-auto max-w-full animate-fade object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="font-display-soft block text-[1.5rem] leading-tight">
                {current.title}
              </span>
              {current.label && (
                <span className="mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ivory/60">
                  {current.label}
                </span>
              )}
            </figcaption>
          </figure>

          <div className="container-page flex h-20 shrink-0 items-center justify-between">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="flex size-12 items-center justify-center rounded-full border border-ivory/30 transition-colors hover:bg-ivory hover:text-ink"
            >
              <Arrow className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="flex size-12 items-center justify-center rounded-full border border-ivory/30 transition-colors hover:bg-ivory hover:text-ink"
            >
              <Arrow />
            </button>
          </div>
        </>
      )}
    </dialog>
  );
}

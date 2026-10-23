"use client";

import { useEffect, useRef } from "react";
import { Arrow } from "@/components/ui/Arrow";

export type ViewerVideo = {
  title: string;
  src: string;
  poster: string;
  label: string;
  /** Optional link to the live site. */
  href?: string;
};

type VideoViewerProps = {
  /** The open video, or null when closed. */
  video: ViewerVideo | null;
  onClose: () => void;
};

// Full-screen player for a screen recording: Escape, the close button or a
// click outside the video closes it.
export function VideoViewer({ video, onClose }: VideoViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!video) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();

    const root = document.documentElement;
    const { overflow } = root.style;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = overflow;
    };
  }, [video]);

  const closeOnBackdrop = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={video ? `${video.title} recording` : "Video viewer"}
      onClose={onClose}
      onClick={closeOnBackdrop}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-ink/95 p-0 text-ivory backdrop:bg-ink/70 open:flex open:flex-col"
    >
      {video && (
        <>
          <div className="container-page flex h-16 shrink-0 items-center justify-between gap-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ivory/70 md:h-20">
            <span className="truncate">{video.title}</span>
            <button
              type="button"
              onClick={onClose}
              className="py-2 hover:text-ivory"
              autoFocus
            >
              Close
            </button>
          </div>

          <figure
            onClick={closeOnBackdrop}
            className="flex min-h-0 flex-1 flex-col items-center justify-center px-[var(--gutter)] pb-[var(--gutter)]"
          >
            <video
              key={video.src}
              src={video.src}
              poster={video.poster}
              aria-label={video.label}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="h-auto max-h-[calc(100svh-11rem)] w-auto max-w-full animate-fade rounded-[6px] bg-ink object-contain shadow-[0_40px_80px_-40px_rgb(0_0_0/0.8)]"
            />
            {video.href && (
              <figcaption className="mt-5">
                <a
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.18em] transition-colors hover:bg-ivory hover:text-ink"
                >
                  Visit site
                  <Arrow direction="up-right" />
                </a>
              </figcaption>
            )}
          </figure>
        </>
      )}
    </dialog>
  );
}

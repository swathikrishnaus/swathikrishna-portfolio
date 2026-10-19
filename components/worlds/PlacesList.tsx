"use client";

import Image from "next/image";
import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { PhotoViewer } from "@/components/ui/PhotoViewer";
import type { TravelPhoto } from "@/content";

// A list of moments under a headline that holds its place. On wide screens
// each row settles beneath the headline and the next one slides up over it,
// while the accent words slowly change colour as you read down the list.
// Clicking a photo opens it full screen.
export function PlacesList({ photos }: { photos: TravelPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="places-title"
      className="container-page py-[var(--section-space)] [--places-top:calc(8.5rem+clamp(2.25rem,5.2vw,5rem))] [timeline-scope:--places]"
    >
      <h2
        id="places-title"
        className="font-display-soft z-10 bg-ivory pb-6 pt-8 text-center text-[clamp(2.25rem,5.2vw,5rem)] font-light leading-none tracking-[-0.035em] text-sage md:sticky md:top-20 md:whitespace-nowrap"
      >
        A few places I keep{" "}
        <span className="places-ink italic text-moss">going back</span> to.
      </h2>

      <ol className="[view-timeline-name:--places]">
        {photos.map((photo, i) => (
          <li
            key={photo.slug}
            className="border-t border-sage bg-ivory md:sticky md:top-[var(--places-top)]"
          >
            <article className="grid gap-4 py-5 md:grid-cols-12 md:gap-6 md:py-6">
              <h3 className="font-display-soft text-[clamp(1.5rem,2.2vw,2.25rem)] leading-tight tracking-[-0.02em] md:col-span-3">
                {photo.note ?? photo.place}
              </h3>

              {/* Sized to the space left under the headline, so a settled
                  row always shows its whole photo. */}
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`View photo full screen: ${photo.note ?? photo.place}`}
                className="group relative aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-[4px] bg-sand md:col-span-5 md:col-start-5 md:h-[min(40rem,calc(100svh-var(--places-top)-3.5rem))] md:w-auto md:justify-self-center"
              >
                <Image
                  src={photo.image.src}
                  alt={photo.image.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 34vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-[1.04]"
                  style={
                    photo.image.position
                      ? { objectPosition: photo.image.position }
                      : undefined
                  }
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-4 right-4 flex size-16 scale-0 items-center justify-center gap-1 rounded-full bg-clay font-mono text-[0.55rem] uppercase tracking-[0.18em] text-ivory shadow-[0_12px_30px_-12px_rgb(0_0_0/0.5)] transition-transform duration-500 ease-out-soft group-hover:scale-100 group-focus-visible:scale-100"
                >
                  View
                  <Arrow direction="up-right" className="size-3" />
                </span>
              </button>

              <div className="md:col-span-3 md:col-start-10">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-clay">
                  {photo.place}
                </p>
                {photo.story && (
                  <p className="mt-3 max-w-[32ch] text-[0.95rem] leading-relaxed text-ink-soft">
                    {photo.story}
                  </p>
                )}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <PhotoViewer
        photos={photos.map((photo) => ({
          key: photo.slug,
          title: photo.note ?? photo.place,
          label: photo.place,
          image: photo.image,
        }))}
        index={open}
        onChange={setOpen}
      />
    </section>
  );
}

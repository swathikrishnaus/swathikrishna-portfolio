"use client";

import Image from "next/image";
import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { PhotoViewer } from "@/components/ui/PhotoViewer";
import type { TravelPhoto } from "@/content";

// The places in two staggered columns, like the projects on the design page
// and the pieces on the handmade page. Clicking a photo opens it full screen.
export function PlacesList({ photos }: { photos: TravelPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="places-title"
      className="bg-paper py-[var(--section-space)]"
    >
      <div className="container-page">
        <h2
          id="places-title"
          className="font-display-soft mb-14 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1] tracking-[-0.03em] md:mb-24"
        >
          A few places I keep{" "}
          <span className="italic text-clay">going back to.</span>
        </h2>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-14 md:gap-x-[var(--gutter)] md:gap-y-24">
          {photos.map((photo, i) => {
            const title = photo.note ?? photo.place;
            return (
              <li
                key={photo.slug}
                className={i % 2 === 1 ? "mt-12 md:mt-40" : ""}
              >
                <figure data-reveal className="md:mx-auto md:w-[80%]">
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    aria-label={`View photo full screen: ${title}`}
                    className="group relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-[4px] bg-sand"
                  >
                    <Image
                      src={photo.image.src}
                      alt={photo.image.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 768px) 38vw, 50vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-[1.04]"
                      style={
                        photo.image.position
                          ? { objectPosition: photo.image.position }
                          : undefined
                      }
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 right-4 hidden size-16 scale-0 items-center justify-center gap-1 rounded-full bg-clay font-mono text-[0.55rem] uppercase tracking-[0.18em] text-ivory shadow-[0_12px_30px_-12px_rgb(0_0_0/0.5)] transition-transform duration-500 ease-out-soft group-hover:scale-100 group-focus-visible:scale-100 md:flex"
                    >
                      View
                      <Arrow direction="up-right" className="size-3" />
                    </span>
                  </button>
                  <figcaption className="mt-4 grid gap-1 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-6">
                    <span className="font-display-soft text-[clamp(1.15rem,1.8vw,1.75rem)] leading-tight">
                      {title}
                    </span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-clay md:pt-2">
                      {photo.place}
                    </span>
                    {photo.story && (
                      <span className="hidden max-w-[44ch] text-[0.9rem] leading-snug text-ink-soft md:col-span-2 md:block">
                        {photo.story}
                      </span>
                    )}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>

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

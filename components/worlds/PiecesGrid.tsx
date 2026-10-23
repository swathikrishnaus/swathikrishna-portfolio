"use client";

import Image from "next/image";
import { useState } from "react";
import { PhotoViewer } from "@/components/ui/PhotoViewer";
import { ViewBadge } from "@/components/ui/ViewBadge";
import type { HandmadeItem } from "@/content";

// The pieces in two staggered columns, like the projects on the design page.
// Clicking a photo opens it full screen.
export function PiecesGrid({ items }: { items: HandmadeItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-14 md:gap-x-[var(--gutter)] md:gap-y-24">
        {items.map((item, i) => (
          <li key={item.slug} className={i % 2 === 1 ? "mt-12 md:mt-40" : ""}>
            <figure data-reveal className="md:mx-auto md:w-[80%]">
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`View photo full screen: ${item.title}`}
                className="group relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-[4px] bg-sand"
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 38vw, 50vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-[1.04]"
                  style={
                    item.image.position
                      ? { objectPosition: item.image.position }
                      : undefined
                  }
                />
                <ViewBadge />
              </button>
              <figcaption className="mt-4 grid gap-1 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-6">
                <span className="font-display-soft text-[clamp(1.15rem,1.8vw,1.75rem)] leading-tight">
                  {item.title}
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-clay md:pt-2">
                  {item.category}
                </span>
                <span className="hidden max-w-[44ch] text-[0.9rem] leading-snug text-ink-soft md:col-span-2 md:block">
                  {item.caption}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <PhotoViewer
        photos={items.map((item) => ({
          key: item.slug,
          title: item.title,
          label: item.category,
          image: item.image,
        }))}
        index={open}
        onChange={setOpen}
      />
    </>
  );
}

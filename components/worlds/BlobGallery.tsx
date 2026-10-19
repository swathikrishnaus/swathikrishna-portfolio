import Image from "next/image";
import type { HandmadeItem } from "@/content";

// Soft, pebble-like outlines; each piece eases into a second shape on hover.
const shapes = [
  ["58% 42% 46% 54% / 52% 44% 56% 48%", "44% 56% 60% 40% / 46% 58% 42% 54%"],
  ["40% 60% 54% 46% / 60% 42% 58% 40%", "56% 44% 42% 58% / 44% 56% 48% 52%"],
  ["50% 50% 38% 62% / 42% 56% 44% 58%", "62% 38% 52% 48% / 56% 44% 60% 40%"],
  ["64% 36% 56% 44% / 48% 62% 38% 52%", "46% 54% 40% 60% / 58% 40% 56% 44%"],
];

const ratios = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[5/4]",
  "aspect-[3/4]",
];

// Middle column sits lower, so the grid reads as a loose scatter.
const offsets = ["", "md:mt-32", "md:mt-12"];

export function BlobGallery({ items }: { items: HandmadeItem[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-3 md:gap-x-[4vw] md:gap-y-24">
      {items.map((item, i) => {
        const [rest, hover] = shapes[i % shapes.length];
        return (
          <li
            key={item.slug}
            className={`${offsets[i % offsets.length]} ${
              // A lone last piece sits in the middle column.
              i === items.length - 1 && items.length % 3 === 1
                ? "md:col-start-2"
                : ""
            }`}
          >
            <figure data-reveal className="group text-center">
              <div
                className={`blob relative overflow-hidden bg-sand ${ratios[i % ratios.length]}`}
                style={
                  {
                    "--blob": rest,
                    "--blob-hover": hover,
                  } as React.CSSProperties
                }
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 30vw, 50vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-[1.06]"
                  style={
                    item.image.position
                      ? { objectPosition: item.image.position }
                      : undefined
                  }
                />
              </div>
              <figcaption className="mt-5">
                <span className="font-display-soft block text-[clamp(1.15rem,1.6vw,1.5rem)] leading-tight">
                  {item.title}
                </span>
                <span className="mt-1.5 block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-clay">
                  {item.category}
                </span>
                <span className="mx-auto mt-2 hidden max-w-[28ch] text-[0.85rem] leading-snug text-ink-soft md:block">
                  {item.caption}
                </span>
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}

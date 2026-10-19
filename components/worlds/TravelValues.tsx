import Image from "next/image";
import type { TravelPhoto } from "@/content";

const values = [
  { word: "Wander", line: "Following a trail just to see where it goes." },
  { word: "Pause", line: "Sitting by the water until the light changes." },
  { word: "Return", line: "Coming home with new colours for the worktable." },
];

// Three prints pinned side by side. They open out to the full width as they
// arrive, then hold still while the words rise through them one at a time.
export function TravelValues({ photos }: { photos: TravelPhoto[] }) {
  return (
    <section
      id="world-body"
      aria-labelledby="values-title"
      className="pt-[var(--section-space)]"
    >
      <h2
        id="values-title"
        className="font-display-soft mb-6 text-center text-[clamp(1.5rem,2.4vw,2.25rem)] font-light italic text-clay"
      >
        Why I wander
      </h2>

      <div
        className="relative [view-timeline-name:--wander]"
        style={{ height: `${values.length * 100}svh` }}
      >
        <div className="pin-grow sticky top-0 grid h-[100svh] grid-cols-3 gap-px overflow-hidden bg-ink">
          {photos.slice(0, 3).map((photo) => (
            <div key={photo.slug} className="relative">
              <Image
                src={photo.image.src}
                alt={photo.image.alt}
                fill
                placeholder="blur"
                sizes="34vw"
                className="object-cover"
                style={
                  photo.image.position
                    ? { objectPosition: photo.image.position }
                    : undefined
                }
              />
            </div>
          ))}
          <div aria-hidden="true" className="absolute inset-0 bg-ink/30" />
          <div
            aria-hidden="true"
            className="film-grain pointer-events-none absolute inset-0"
          />
        </div>

        <ol className="absolute inset-0">
          {values.map(({ word, line }) => (
            <li
              key={word}
              className="flex h-[100svh] items-center justify-center px-[var(--gutter)]"
            >
              <p className="value-word text-center text-ivory">
                <span className="font-display-soft block text-[clamp(3.5rem,10vw,10rem)] font-light leading-[0.9] tracking-[-0.045em]">
                  {word}
                </span>
                <span className="mx-auto mt-4 block max-w-[26ch] text-[1rem] leading-snug text-ivory/85">
                  {line}
                </span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

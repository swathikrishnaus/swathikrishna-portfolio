import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
import { LoopVideo } from "@/components/ui/LoopVideo";
import type { World } from "@/content";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

// Opening frame of a world page: the card's media at full bleed, with the
// card's heading grown into the page title.
export function WorldHero({ world }: { world: World }) {
  return (
    <section
      aria-labelledby="world-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ivory"
    >
      <div className="absolute inset-0 -z-10 animate-unveil overflow-hidden">
        {"video" in world ? (
          <LoopVideo
            src={world.video.src}
            poster={world.video.poster.src}
            label={world.video.label}
            preload="auto"
            className="h-full w-full animate-settle object-cover"
          />
        ) : (
          <Image
            src={world.surface.src}
            alt={world.surface.alt}
            fill
            preload
            quality={90}
            placeholder="blur"
            sizes="100vw"
            className="animate-settle object-cover"
          />
        )}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink/35 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-gradient-to-t from-ink/70 via-ink/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="film-grain pointer-events-none absolute inset-0 -z-10"
      />

      <div className="container-page flex flex-1 flex-col pb-4 pt-28 md:pb-5">
        <div className="mt-auto grid gap-8 md:grid-cols-12 md:items-end md:gap-6">
          <div className="md:col-span-8">
            <p
              className="animate-fade font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ivory/75"
              style={delay(500)}
            >
              {world.eyebrow}
            </p>
            <h1
              id="world-title"
              className="font-display-soft mt-5 text-[clamp(3.5rem,11vw,11.5rem)] font-light leading-[0.88] tracking-[-0.045em]"
            >
              <span className="line-mask">
                <span className="block animate-rise" style={delay(250)}>
                  {world.title}
                </span>
              </span>
              <span className="line-mask">
                <span
                  className={`block animate-rise italic ${world.accentColor}`}
                  style={delay(340)}
                >
                  {world.accent}
                </span>
              </span>
            </h1>
          </div>
          <p
            className="max-w-[26ch] animate-fade text-[1.05rem] leading-snug text-ivory/85 md:col-span-4 md:justify-self-end md:pb-4 md:text-right"
            style={delay(800)}
          >
            {world.intro}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-ivory/20 pt-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ivory/60">
          <span>Swathikrishna</span>
          <a
            href="#world-body"
            className="group inline-flex items-center gap-2 hover:text-ivory"
          >
            Scroll
            <Arrow
              direction="down"
              className="transition-transform duration-500 ease-out-soft group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

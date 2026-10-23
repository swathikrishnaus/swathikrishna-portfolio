import Image from "next/image";
import aboutGarden from "@/content/images/about-garden-flash.jpg";
import { Arrow } from "@/components/ui/Arrow";
import { site } from "@/content";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function AboutHero() {
  return (
    <>
      <section
        aria-labelledby="about-title"
        className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ivory"
      >
        <div className="absolute inset-0 -z-10 animate-unveil overflow-hidden">
          <Image
            src={aboutGarden}
            alt={`${site.name} in a white blouse and a green crochet headscarf, eyes closed among tall heliconia flowers under a bright sky`}
            fill
            preload
            quality={90}
            placeholder="blur"
            sizes="100vw"
            className="animate-settle object-cover object-[40%_50%] md:object-[50%_46%]"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink/35 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%] bg-gradient-to-t from-ink/70 via-ink/25 to-transparent"
        />
        <div
          aria-hidden="true"
          className="film-grain pointer-events-none absolute inset-0 -z-10"
        />

        <div className="container-page flex flex-1 flex-col pb-4 pt-28 md:pb-5">
          <div className="mt-auto">
            <p
              className="animate-fade font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ivory/75"
              style={delay(500)}
            >
              About · The person behind the pixels
            </p>
            <h1
              id="about-title"
              className="font-display-soft mt-5 text-[clamp(3.5rem,11vw,11.5rem)] font-light leading-[0.88] tracking-[-0.045em]"
            >
              <span className="line-mask">
                <span className="block animate-rise" style={delay(250)}>
                  Hi, I’m
                </span>
              </span>
              <span className="line-mask">
                <span
                  className="block animate-rise italic text-clay-soft"
                  style={delay(340)}
                >
                  Swathi.
                </span>
              </span>
            </h1>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-ivory/20 pt-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ivory/60">
            <span>Swathikrishna</span>
            <a
              href="#intro"
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

      <section
        id="intro"
        aria-label="Introduction"
        className="container-page py-[var(--section-space)]"
      >
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <p
            data-reveal
            className="font-display-soft text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.02] tracking-[-0.03em] md:col-span-5"
          >
            Part designer, part maker, part{" "}
            <span className="italic text-clay">‘ooh, I want to try that.’</span>
          </p>

          <div data-reveal className="md:col-span-6 md:col-start-7">
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-soft md:text-[1.1rem]">
              <p>
                I design and build websites, crochet things to wear, and collect
                new interests like they’re{" "}
                <em className="font-display-soft text-[1.1em] text-moss">
                  little treasures
                </em>
                . When the screen gets too loud, I head for a forest trail.
              </p>
              <p>
                One day, I’m deciding what sits where on a page in Figma, or
                building it in Next.js. The next, I’m finishing a bandana edged
                with tiny rosebuds, or planning my next little escape.
              </p>
              <p>
                I like making things, figuring things out, and{" "}
                <em className="font-display-soft text-[1.1em] text-moss">
                  following curiosity
                </em>{" "}
                wherever it goes. Apparently, choosing just one thing was never
                really my thing.
              </p>
            </div>
            <p className="mt-10 border-t border-sage pt-4 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-clay">
              UI &amp; UX design · Development · Crochet · Travel
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import heroPortrait from "@/content/images/hero-portrait-flash.jpg";
import heroVideoPoster from "@/content/images/hero-video-poster.jpg";
import { Arrow } from "@/components/ui/Arrow";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { OrbitBadge } from "@/components/ui/OrbitBadge";
import { HeroName } from "@/components/sections/HeroName";
import { site } from "@/content";

// Shown as one word: the name is a single name, not first + last.
const displayName = site.name.replace(/\s+/g, "");

const interests = "Design ✳ Code ✳ Crochet ✳ Beads ✳ Travel ✳";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

// The unveil clips its own box, so it lives on the media layer rather than the
// pane; otherwise it would also cut the seam badge in half.
const mediaLayer = "absolute inset-0 animate-unveil overflow-hidden";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ivory"
    >
      {/* Two panes: a still and the moving picture, side by side on wide
          screens and stacked on narrow portrait ones. */}
      <div className="absolute inset-0 -z-10 grid grid-rows-[44fr_56fr] gap-px transition-[grid-template-columns] duration-[1.2s] ease-out-soft landscape:grid-cols-[1fr_1fr] landscape:grid-rows-1 md:grid-cols-[1fr_1fr] md:grid-rows-1 md:has-[[data-pane=still]:hover]:grid-cols-[1.14fr_0.86fr] md:has-[[data-pane=motion]:hover]:grid-cols-[0.86fr_1.14fr]">
        <figure data-pane="still" className="group/pane relative">
          <div className={mediaLayer}>
            <Image
              src={heroPortrait}
              alt={`${site.name} in a blue top and a green crochet headscarf, resting her head on her hand against a pale wall`}
              fill
              preload
              quality={90}
              placeholder="blur"
              sizes="(min-width: 768px) 57vw, 100vw"
              className="animate-settle object-cover object-[40%_74%] landscape:object-[40%_100%] md:object-[40%_100%] transition-transform duration-[2s] ease-out-soft md:group-hover/pane:scale-[1.03]"
            />
          </div>

          {/* Sits on the seam and travels with it when a pane grows. */}
          <OrbitBadge
            id="hero-orbit"
            text={interests}
            center={site.shortName}
            className="absolute bottom-0 right-[var(--gutter)] z-10 hidden size-24 translate-y-1/2 animate-fade [@media(min-height:700px)]:block landscape:bottom-auto landscape:right-0 landscape:top-[44%] landscape:size-32 landscape:-translate-y-1/2 landscape:translate-x-1/2 md:bottom-auto md:right-0 md:top-[44%] md:block md:size-32 md:-translate-y-1/2 md:translate-x-1/2 lg:size-36"
            style={delay(1100)}
          />
        </figure>

        <figure data-pane="motion" className="group/pane relative">
          <div className={mediaLayer} style={delay(150)}>
            <LoopVideo
              src="/videos/hero-flash-loop.mp4"
              poster={heroVideoPoster.src}
              label={`${site.name} seen from behind on a balcony, wearing a crocheted net cap, long hair moving in the breeze`}
              className="h-full w-full animate-settle object-cover object-[40%_35%] transition-transform duration-[2s] ease-out-soft md:group-hover/pane:scale-[1.03]"
            />
          </div>
        </figure>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[62%] bg-gradient-to-t from-ink/70 via-ink/30 md:h-[48%] md:from-ink/65 md:via-ink/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="film-grain pointer-events-none absolute inset-0 -z-10"
      />

      <div className="container-page pointer-events-none flex flex-1 flex-col pb-4 pt-24 md:pb-5 md:pt-32">
        <div
          className="pointer-events-auto mt-auto flex animate-fade flex-col gap-6 md:flex-row md:items-end md:justify-between"
          style={delay(600)}
        >
          <p className="font-display-soft text-[clamp(1.9rem,3.6vw,3.5rem)] font-light leading-[1] tracking-[-0.025em]">
            Can one heart hold
            <br />
            <span className="italic text-sage-soft">so many first loves?</span>
          </p>
          <ArrowLink
            href="#work"
            variant="solid"
            className="self-start md:self-auto"
          >
            Explore My Work
          </ArrowLink>
        </div>

        <HeroName
          name={displayName}
          label={site.name}
          className="pointer-events-auto mt-6 whitespace-nowrap font-poster text-[15.6vw] uppercase leading-[0.82] md:mt-8 md:text-[16.3vw]"
        />

        <div className="pointer-events-auto mt-4 flex items-center justify-between border-t border-ivory/20 pt-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ivory/60">
          <span>Design · Craft · Travel</span>
          <a
            href="#work"
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

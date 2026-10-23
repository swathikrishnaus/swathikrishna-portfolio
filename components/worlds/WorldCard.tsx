import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { WorldPanel } from "@/components/worlds/WorldPanel";
import type { World } from "@/content";

type WorldCardProps = {
  world: World;
  seed?: number;
  /** Small label above the heading. */
  kicker?: string;
  headingLevel?: "h2" | "h3";
  size?: "card" | "banner";
  className?: string;
};

const titleSize = {
  card: "max-w-[12ch] text-[clamp(2.4rem,4.2vw,4.75rem)]",
  banner: "max-w-[16ch] text-[clamp(2.75rem,7vw,7.5rem)]",
};

// A world as a dark media panel: the lens reveals it in full colour, and the
// whole card links through to its page.
export function WorldCard({
  world,
  seed = 0,
  kicker,
  headingLevel: Heading = "h3",
  size = "card",
  className = "",
}: WorldCardProps) {
  const titleId = `world-${world.tone}-title${size === "banner" ? "-next" : ""}`;
  const sizes = size === "banner" ? "100vw" : "(min-width: 768px) 55vw, 100vw";

  return (
    <WorldPanel
      tone={world.tone}
      labelledBy={titleId}
      seed={seed}
      className={`bg-ink text-ivory has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-clay ${className}`}
    >
      {"video" in world ? (
        <div className="absolute inset-0 -z-10">
          <LoopVideo
            src={world.video.src}
            poster={world.video.poster.src}
            label={world.video.label}
            preload="none"
            className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out-soft group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className={`world-frost absolute inset-0 ${world.veil} opacity-0 backdrop-brightness-[0.82] backdrop-saturate-[0.85] transition-opacity duration-700 group-hover:opacity-100`}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/45 to-transparent"
          />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10">
          <Image
            src={world.surface.src}
            alt={world.surface.alt}
            fill
            placeholder="blur"
            sizes={sizes}
            className="object-cover grayscale-[0.3] transition-[transform,filter] duration-[1.6s] ease-out-soft group-hover:scale-[1.04] group-hover:grayscale-0"
          />
          <div
            aria-hidden="true"
            className={`absolute inset-0 ${world.veil} transition-opacity duration-1000 group-hover:opacity-80`}
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/45 to-transparent"
          />

          {/* What sits underneath, glimpsed only through the lens. */}
          <div aria-hidden="true" className="world-lens absolute inset-0">
            <Image
              src={world.hidden.src}
              alt=""
              fill
              sizes={sizes}
              className="scale-[1.08] object-cover"
            />
          </div>
        </div>
      )}

      <div
        aria-hidden="true"
        className="world-cursor pointer-events-none absolute z-10 hidden size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1.5 rounded-full bg-clay font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ivory shadow-[0_12px_30px_-12px_rgb(0_0_0/0.5)] pointer-fine:flex"
      >
        Enter
        <Arrow direction="up-right" />
      </div>

      <div className="flex h-full flex-col justify-end p-5 sm:p-7 lg:p-9">
        {kicker && (
          <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ivory/70">
            {kicker}
          </p>
        )}
        <Heading
          id={titleId}
          className={`font-display-soft font-light leading-[0.95] tracking-[-0.035em] ${titleSize[size]}`}
        >
          {/* The ::after overlay makes the whole card the link. Keep transforms
              off the heading and link: a transformed ancestor would shrink the
              overlay to the heading's own box. */}
          <Link
            href={world.href}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            <span className="inline-block transition-transform duration-1000 ease-out-soft group-hover:-translate-y-2">
              {world.title}{" "}
              {/* On cards the accent takes its own line, wrapping evenly
                  when the card is squeezed. */}
              <span
                className={`italic ${world.accentColor} ${
                  size === "card" ? "block text-balance" : ""
                }`}
              >
                {world.accent}
              </span>
            </span>
          </Link>
        </Heading>
      </div>
    </WorldPanel>
  );
}

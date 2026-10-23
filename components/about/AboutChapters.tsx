import Image, { type StaticImageData } from "next/image";
import portrait from "@/content/images/hero-portrait-flash.jpg";
import sketches from "@/content/images/world-digital-flash.jpg";
import crochetPoster from "@/content/images/handmade-video-poster.jpg";
import pool from "@/content/images/trip-pool.jpg";
import travelPoster from "@/content/images/travel-video-poster.jpg";
import { LoopVideo } from "@/components/ui/LoopVideo";

type Chapter = {
  label: string;
  title: string;
  accent: string;
  text: string;
  media:
    | { image: StaticImageData; alt: string; position?: string }
    | { video: string; poster: StaticImageData; alt: string };
};

const chapters: Chapter[] = [
  {
    label: "The designer",
    title: "From sketch",
    accent: "to screen",
    text: "Most of my ideas start on paper as boxes, arrows and notes in the margins, long before they reach Figma. I design interfaces and build websites that feel calm and clear, and I care a little too much about the spacing between things.",
    media: {
      image: sketches,
      alt: "Hand-drawn wireframe sketches of app screens in an open notebook",
    },
  },
  {
    label: "The maker",
    title: "Bead by bead,",
    accent: "row by row",
    text: "Crochet, brick-stitch earrings, bead-loom patterns and whatever experiment comes next. I love starting with a colour or a texture and letting my hands figure out the rest, happy accidents included.",
    media: {
      video: "/videos/handmade-flash-loop.mp4",
      poster: crochetPoster,
      alt: "Hands holding up a pale green crochet bandana edged with pink flowers against tall leaves",
    },
  },
  {
    label: "The wanderer",
    title: "Out of office,",
    accent: "into nature",
    text: "Forest streams, rocky trails and roads I’ve never taken. I travel slowly, take far too many photos, and come home with new colours for the worktable.",
    media: {
      image: pool,
      alt: "A small waterfall spilling between boulders into a clear green pool",
    },
  },
];

export function AboutChapters() {
  return (
    <>
      {/* A quote beside a small portrait */}
      <section
        aria-label="In my words"
        className="container-page pb-[var(--section-space)]"
      >
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-6">
          <figure data-reveal className="md:col-span-6 md:col-start-2">
            <blockquote className="font-display-soft text-[clamp(1.6rem,2.7vw,2.6rem)] font-light leading-[1.2] tracking-[-0.02em]">
              “Every interest I pick up teaches me something about the others:{" "}
              <span className="italic text-clay">
                colour from beads, patience from crochet, and space from the
                trail.
              </span>
              ”
            </blockquote>
            <figcaption className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
              Swathi, designer &amp; maker
            </figcaption>
          </figure>
          <div
            data-reveal="mask"
            className="relative aspect-[4/5] w-[60%] justify-self-end overflow-hidden rounded-[4px] bg-sand md:col-span-3 md:col-start-9 md:w-full"
          >
            <Image
              src={portrait}
              alt="Swathi in a blue top and a green crochet headscarf, resting her head on her hand against a pale wall"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 24vw, 60vw"
              className="object-cover object-[40%_80%]"
            />
          </div>
        </div>
      </section>

      {/* One chapter per interest, the picture switching sides each time */}
      <section
        aria-label="The different sides of me"
        className="container-page"
      >
        {chapters.map((chapter, i) => {
          const flip = i % 2 === 1;
          const titleId = `chapter-${i}`;
          return (
            <article
              key={chapter.label}
              aria-labelledby={titleId}
              className="grid items-center gap-8 pb-[var(--section-space)] md:grid-cols-12 md:gap-6"
            >
              <div
                data-reveal="mask"
                className={`group relative aspect-square overflow-hidden rounded-[4px] bg-sand md:col-span-5 md:row-start-1 ${
                  flip ? "md:col-start-7" : "md:col-start-1"
                }`}
              >
                {"video" in chapter.media ? (
                  <LoopVideo
                    src={chapter.media.video}
                    poster={chapter.media.poster.src}
                    label={chapter.media.alt}
                    preload="none"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-[1.04]"
                  />
                ) : (
                  <Image
                    src={chapter.media.image}
                    alt={chapter.media.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-[1.04]"
                    style={
                      chapter.media.position
                        ? { objectPosition: chapter.media.position }
                        : undefined
                    }
                  />
                )}
              </div>

              <div
                data-reveal
                className={`md:col-span-4 md:row-start-1 ${
                  flip ? "md:col-start-2" : "md:col-start-8"
                }`}
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-clay">
                  {chapter.label}
                </p>
                <h2
                  id={titleId}
                  className="font-display-soft mt-5 text-[clamp(2.25rem,4vw,3.75rem)] font-light leading-[0.98] tracking-[-0.035em]"
                >
                  {chapter.title}
                  <br />
                  <span className="italic text-moss">{chapter.accent}</span>
                </h2>
                <p className="mt-6 max-w-[42ch] text-[1rem] leading-relaxed text-ink-soft">
                  {chapter.text}
                </p>
              </div>
            </article>
          );
        })}
      </section>

      {/* Closing frame: the trail, full width */}
      <section
        aria-label="Always curious"
        className="relative isolate flex min-h-[80svh] items-end overflow-hidden bg-ink text-ivory"
      >
        <LoopVideo
          src="/videos/travel-flash-loop.mp4"
          poster={travelPoster.src}
          label="A walk through a rocky forest stream, with boulders and tall trees"
          preload="none"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent"
        />
        <div
          aria-hidden="true"
          className="film-grain pointer-events-none absolute inset-0 -z-10"
        />
        <div className="container-page pb-12 md:pb-16">
          <p
            data-reveal
            className="font-display-soft max-w-[18ch] text-[clamp(2.25rem,5vw,5rem)] font-light leading-[0.98] tracking-[-0.035em]"
          >
            Always curious about{" "}
            <span className="italic text-sage-soft">
              what’s around the next corner.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

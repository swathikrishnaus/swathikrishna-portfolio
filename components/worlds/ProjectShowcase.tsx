import Image from "next/image";
import { LoopVideo } from "@/components/ui/LoopVideo";
import type { Project } from "@/content";

// Soft theme colours behind each screen, in turn.
const panels = ["bg-sage-soft", "bg-clay-soft", "bg-sand", "bg-paper"];

// Projects as screens on coloured boards, in two staggered columns. Each
// window plays a recording of the site; on hover it lifts off the board.
export function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-x-[var(--gutter)] gap-y-16 md:grid-cols-2 md:gap-y-24">
      {projects.map((project, i) => (
        <li key={project.slug} className={i % 2 === 1 ? "md:mt-40" : ""}>
          <article className="group">
            <div
              data-reveal="mask"
              className={`relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[4px] ${panels[i % panels.length]}`}
            >
              <div className="w-[80%] overflow-hidden rounded-[6px] bg-ivory shadow-[0_30px_60px_-30px_rgb(28_26_23/0.45)] transition-[translate,rotate,box-shadow] duration-700 ease-out-soft group-hover:-translate-y-2 group-hover:-rotate-1 group-hover:shadow-[0_40px_70px_-30px_rgb(28_26_23/0.55)]">
                <div
                  aria-hidden="true"
                  className="flex h-7 items-center gap-1.5 border-b border-line px-3"
                >
                  <span className="size-2 rounded-full bg-clay/70" />
                  <span className="size-2 rounded-full bg-sage" />
                  <span className="size-2 rounded-full bg-sand" />
                  <span className="ml-3 truncate font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted">
                    {project.title}
                  </span>
                </div>
                <div className="relative aspect-[16/10] bg-paper">
                  {project.video ? (
                    <LoopVideo
                      src={project.video}
                      poster={
                        typeof project.cover.src === "string"
                          ? project.cover.src
                          : project.cover.src.src
                      }
                      label={project.cover.alt}
                      preload="none"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  ) : (
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 80vw"
                      className="object-cover object-top"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-8">
              <h3 className="font-display-soft text-[clamp(1.75rem,2.8vw,2.75rem)] font-light leading-[1] tracking-[-0.03em]">
                {project.title}
              </h3>
              {project.isSample && (
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-clay sm:pt-2">
                  Sample
                </span>
              )}
              <p className="max-w-[44ch] text-[0.95rem] leading-relaxed text-ink-soft">
                {project.summary}
              </p>
              <ul className="flex flex-wrap gap-2 sm:col-span-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-ink-soft"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

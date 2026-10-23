"use client";

import Image from "next/image";
import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { type ViewerVideo, VideoViewer } from "@/components/ui/VideoViewer";
import type { Project } from "@/content";

const posterOf = (project: Project) =>
  typeof project.cover.src === "string"
    ? project.cover.src
    : project.cover.src.src;

// Projects as browser windows in two staggered columns. Each window plays a
// recording of the site, lifts on hover, and opens full screen on click.
export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState<ViewerVideo | null>(null);

  return (
    <>
      <ul className="grid gap-x-[var(--gutter)] gap-y-16 md:grid-cols-2 md:gap-y-24">
        {projects.map((project, i) => {
          const video = project.video;
          const screen = (
            <>
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
                {video && (
                  <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-clay">
                    Expand
                    <Arrow direction="up-right" />
                  </span>
                )}
              </div>
              <div className="relative aspect-[16/10] bg-paper">
                {video ? (
                  <LoopVideo
                    src={video}
                    poster={posterOf(project)}
                    label={project.cover.alt}
                    preload="none"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                ) : (
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover object-top"
                  />
                )}
              </div>
            </>
          );
          const windowClass =
            "block w-full overflow-hidden rounded-[6px] border border-line bg-ivory text-left shadow-[0_30px_60px_-30px_rgb(28_26_23/0.45)] transition-[translate,rotate,box-shadow] duration-700 ease-out-soft group-hover:-translate-y-2 group-hover:-rotate-1 group-hover:shadow-[0_40px_70px_-30px_rgb(28_26_23/0.55)]";

          return (
            <li key={project.slug} className={i % 2 === 1 ? "md:mt-40" : ""}>
              <article className="group">
                <div data-reveal>
                  {video ? (
                    <button
                      type="button"
                      aria-label={`Play the ${project.title} recording full screen`}
                      onClick={() =>
                        setOpen({
                          title: project.title,
                          src: video,
                          poster: posterOf(project),
                          label: project.cover.alt,
                          href: project.liveUrl,
                        })
                      }
                      className={`${windowClass} cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay`}
                    >
                      {screen}
                    </button>
                  ) : (
                    <div className={windowClass}>{screen}</div>
                  )}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-8">
                  <div>
                    <h3 className="font-display-soft text-[clamp(1.75rem,2.8vw,2.75rem)] font-light leading-[1] tracking-[-0.03em]">
                      {project.title}
                    </h3>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-clay px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-clay transition-colors hover:bg-clay hover:text-ivory"
                      >
                        Visit site
                        <Arrow direction="up-right" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    )}
                  </div>
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
          );
        })}
      </ul>
      <VideoViewer video={open} onClose={() => setOpen(null)} />
    </>
  );
}

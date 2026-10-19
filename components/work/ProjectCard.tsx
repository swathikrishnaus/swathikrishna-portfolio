import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";
import type { Project } from "@/content";

type ProjectCardProps = {
  project: Project;
  index: number;
  ratio: string;
  className?: string;
};

export function ProjectCard({
  project,
  index,
  ratio,
  className = "",
}: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const links = [
    project.liveUrl && { label: "View project", href: project.liveUrl },
    project.sourceUrl && { label: "Source code", href: project.sourceUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <article
      className={`group ${className}`}
      aria-labelledby={`project-${project.slug}`}
    >
      <div
        data-reveal="mask"
        className={`relative overflow-hidden bg-sand ${ratio}`}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          placeholder={typeof project.cover.src === "string" ? "empty" : "blur"}
          sizes="(min-width: 768px) 55vw, 100vw"
          className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-[1.04]"
          style={
            project.cover.position
              ? { objectPosition: project.cover.position }
              : undefined
          }
        />
        {project.isSample && (
          <span className="absolute left-3 top-3 rounded-full bg-ivory/90 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-soft backdrop-blur-sm">
            Sample project
          </span>
        )}
      </div>

      <div
        data-reveal
        className="mt-6 grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-6"
      >
        <span className="pt-2 font-mono text-[0.7rem] tracking-[0.15em] text-muted">
          {number}
        </span>
        <div>
          <h3
            id={`project-${project.slug}`}
            className="font-display-soft text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.1] tracking-[-0.02em]"
          >
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
            {project.summary}
          </p>
          <ul
            className="mt-4 flex flex-wrap gap-x-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted"
            aria-label="Technologies"
          >
            {project.tags.map((tag, i) => (
              <li key={tag}>
                {tag}
                {i < project.tags.length - 1 && (
                  <span aria-hidden="true" className="ml-2 opacity-50">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
          {links.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-6 text-[0.9rem]">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-2"
                >
                  <span className="link-underline pb-0.5">{link.label}</span>
                  <Arrow
                    direction="up-right"
                    className="transition-transform duration-500 ease-out-soft group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

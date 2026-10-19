import { ProjectCard } from "@/components/work/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Project } from "@/content";

const layout = [
  { slot: "md:col-span-7", ratio: "aspect-[4/3]" },
  {
    slot: "md:col-span-5 md:col-start-8 md:mt-32 lg:col-span-4 lg:col-start-9 lg:mt-44",
    ratio: "aspect-[4/5]",
  },
  {
    slot: "md:col-span-5 md:col-start-1 lg:col-start-2 lg:-mt-8",
    ratio: "aspect-square",
  },
  {
    slot: "md:col-span-7 md:col-start-6 md:mt-24 lg:col-span-6 lg:col-start-7 lg:mt-28",
    ratio: "aspect-[16/11]",
  },
];

export function SelectedWork({ projects }: { projects: Project[] }) {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="container-page pb-[var(--section-space)] pt-36 md:pt-44"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <SectionLabel className="text-muted">Selected work</SectionLabel>
          <h1
            id="work-title"
            data-reveal
            className="font-display-soft mt-8 text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[0.95] tracking-[-0.035em]"
          >
            Selected <span className="italic">work</span>
            <sup className="ml-2 align-super font-mono text-[0.18em] tracking-[0.1em] text-muted">
              ({String(projects.length).padStart(2, "0")})
            </sup>
          </h1>
        </div>
        <p
          data-reveal
          className="max-w-sm self-end text-[1rem] leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9"
        >
          A small selection of sample projects showing how I approach structure,
          interaction and detail. Case studies of real work will replace them.
        </p>
      </div>

      <div className="mt-16 grid gap-y-16 md:mt-24 md:grid-cols-12 md:gap-x-6 md:gap-y-24">
        {projects.map((project, i) => {
          const { slot, ratio } = layout[i % layout.length];
          return (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              className={slot}
              ratio={ratio}
            />
          );
        })}
      </div>
    </section>
  );
}

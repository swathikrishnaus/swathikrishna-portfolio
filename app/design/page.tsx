import type { Metadata } from "next";
import { RevealObserver } from "@/components/RevealObserver";
import { NextWorld } from "@/components/worlds/NextWorld";
import { ProjectShowcase } from "@/components/worlds/ProjectShowcase";
import { WorldHero } from "@/components/worlds/WorldHero";
import { WorldStatement } from "@/components/worlds/WorldStatement";
import { getSelectedProjects, getWorld } from "@/content";
import loretaStill from "@/content/images/work-loreta-still.jpg";
import orangeCatStill from "@/content/images/work-orange-cat-still.jpg";

export const metadata: Metadata = {
  title: "Design",
  description:
    "Interfaces and digital projects, sketched on paper and built for the screen.",
};

export default async function DesignPage() {
  const { world, next } = getWorld("digital");
  const projects = await getSelectedProjects();

  return (
    <>
      <WorldHero world={world} />
      <WorldStatement
        images={[
          { src: loretaStill, alt: "" },
          { src: orangeCatStill, alt: "" },
        ]}
      >
        I sketch on paper before I touch a screen — then build interfaces that
        feel{" "}
        <span className="italic text-clay">
          calm, clear and a little handmade.
        </span>
      </WorldStatement>

      <section
        aria-labelledby="projects-title"
        className="container-page pb-[var(--section-space)]"
      >
        <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
          <h2
            id="projects-title"
            className="font-display-soft text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1] tracking-[-0.03em]"
          >
            Selected <span className="italic text-clay">screens.</span>
          </h2>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
            Recent websites — case studies coming soon
          </p>
        </div>
        <ProjectShowcase projects={projects} />
      </section>

      <NextWorld world={next} />
      <RevealObserver />
    </>
  );
}

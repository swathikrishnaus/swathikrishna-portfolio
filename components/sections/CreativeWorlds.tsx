import { WorldsGrid } from "@/components/worlds/WorldsGrid";

export function CreativeWorlds() {
  return (
    <section
      id="work"
      aria-labelledby="worlds-title"
      className="flex scroll-mt-[-5rem] flex-col md:h-[100svh] md:min-h-[44rem]"
    >
      <div className="container-page flex flex-col gap-4 pt-[calc(4rem+var(--gutter))] md:flex-row md:items-end md:justify-between md:pt-[calc(5rem+var(--gutter))]">
        <h2
          id="worlds-title"
          className="font-display-soft text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1] tracking-[-0.03em]"
        >
          A few things I love,
          <br />
          <span className="italic text-clay">pick one and wander in.</span>
        </h2>
      </div>

      <WorldsGrid className="md:min-h-0 md:flex-1" />
    </section>
  );
}

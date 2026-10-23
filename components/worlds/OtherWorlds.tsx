import { WorldsGrid } from "@/components/worlds/WorldsGrid";
import type { World } from "@/content";

// Closes every world page with the two worlds you are not in.
export function OtherWorlds({
  worlds,
  className = "",
}: {
  worlds: World[];
  className?: string;
}) {
  return (
    <section aria-labelledby="other-worlds-title" className={className}>
      <div className="container-page">
        <h2
          id="other-worlds-title"
          className="font-display-soft text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1] tracking-[-0.03em]"
        >
          Keep exploring,
          <br />
          <span className="italic text-clay">there’s more to see.</span>
        </h2>
      </div>
      <WorldsGrid
        worlds={worlds}
        seed={3}
        className="md:h-[78svh] md:min-h-[28rem]"
      />
    </section>
  );
}

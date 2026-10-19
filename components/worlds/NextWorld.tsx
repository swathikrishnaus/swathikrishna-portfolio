import { WorldCard } from "@/components/worlds/WorldCard";
import type { World } from "@/content";

// Closes every world page by opening the door to the next one.
export function NextWorld({ world }: { world: World }) {
  return (
    <section aria-label="Next world" className="p-[var(--gutter)]">
      <WorldCard
        world={world}
        seed={3}
        kicker="Next world"
        headingLevel="h2"
        size="banner"
        className="h-[78svh] min-h-[28rem]"
      />
    </section>
  );
}

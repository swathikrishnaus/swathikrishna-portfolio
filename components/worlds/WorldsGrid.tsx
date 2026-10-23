import { WorldCard } from "@/components/worlds/WorldCard";
import { worlds as allWorlds } from "@/content";
import type { World } from "@/content";

// Column sizes for two or three cards; the hovered one widens.
const columns = {
  2: "md:grid-cols-[1fr_1fr] md:has-[article:nth-child(1):hover]:grid-cols-[1.3fr_0.7fr] md:has-[article:nth-child(2):hover]:grid-cols-[0.7fr_1.3fr]",
  3: "md:grid-cols-[1fr_1fr_1fr] md:has-[article:nth-child(1):hover]:grid-cols-[1.45fr_0.775fr_0.775fr] md:has-[article:nth-child(2):hover]:grid-cols-[0.775fr_1.45fr_0.775fr] md:has-[article:nth-child(3):hover]:grid-cols-[0.775fr_0.775fr_1.45fr]",
};

type WorldsGridProps = {
  worlds?: World[];
  /** Offsets the lens seeds so cards on one page never match. */
  seed?: number;
  className?: string;
};

// The world cards side by side; the hovered one widens.
export function WorldsGrid({
  worlds = allWorlds,
  seed = 0,
  className = "",
}: WorldsGridProps) {
  return (
    <div
      className={`grid auto-rows-[64svh] gap-[calc(var(--gutter)/2)] p-[var(--gutter)] transition-[grid-template-columns] duration-[1.2s] ease-out-soft md:grid-rows-1 ${columns[worlds.length === 2 ? 2 : 3]} ${className}`}
    >
      {worlds.map((world, i) => (
        <WorldCard key={world.tone} world={world} seed={seed + i} />
      ))}
    </div>
  );
}

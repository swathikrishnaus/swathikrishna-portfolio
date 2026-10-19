import { WorldCard } from "@/components/worlds/WorldCard";
import { worlds } from "@/content";

// The three world cards side by side; the hovered one widens.
export function WorldsGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid auto-rows-[64svh] gap-[calc(var(--gutter)/2)] p-[var(--gutter)] transition-[grid-template-columns] duration-[1.2s] ease-out-soft md:grid-cols-[1fr_1fr_1fr] md:grid-rows-1 md:has-[article:nth-child(1):hover]:grid-cols-[1.45fr_0.775fr_0.775fr] md:has-[article:nth-child(2):hover]:grid-cols-[0.775fr_1.45fr_0.775fr] md:has-[article:nth-child(3):hover]:grid-cols-[0.775fr_0.775fr_1.45fr] ${className}`}
    >
      {worlds.map((world, i) => (
        <WorldCard key={world.tone} world={world} seed={i} />
      ))}
    </div>
  );
}

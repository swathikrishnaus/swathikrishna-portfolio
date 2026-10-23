import { Arrow } from "@/components/ui/Arrow";

// A clay circle that pops up over a picture on hover or keyboard focus, to
// say it opens full screen. Place inside a `relative group` element.
export function ViewBadge({ label = "View" }: { label?: string }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-4 right-4 hidden size-16 scale-0 items-center justify-center gap-1 rounded-full bg-clay font-mono text-[0.55rem] uppercase tracking-[0.18em] text-ivory shadow-[0_12px_30px_-12px_rgb(0_0_0/0.5)] transition-transform duration-500 ease-out-soft group-hover:scale-100 group-focus-visible:scale-100 md:flex"
    >
      {label}
      <Arrow direction="up-right" className="size-3" />
    </span>
  );
}

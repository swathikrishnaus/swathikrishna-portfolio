import type { Metadata } from "next";
import { RevealObserver } from "@/components/RevealObserver";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PiecesGrid } from "@/components/worlds/PiecesGrid";
import { OtherWorlds } from "@/components/worlds/OtherWorlds";
import { WorldHero } from "@/components/worlds/WorldHero";
import { WorldStatement } from "@/components/worlds/WorldStatement";
import { getHandmadeItems, getWorld, site } from "@/content";
import rosebudDetail from "@/content/images/craft-rosebud-bandana-detail.jpg";
import netCapTies from "@/content/images/craft-net-cap-ties.jpg";

export const metadata: Metadata = {
  title: "Handmade",
  description:
    "Crochet bandanas, caps, bags and hair accessories, made by hand.",
};

export default async function HandmadePage() {
  const { world, others } = getWorld("handmade");
  const items = await getHandmadeItems();

  return (
    <>
      <WorldHero world={world} />
      <WorldStatement
        images={[
          { src: rosebudDetail, alt: "", position: "50% 60%" },
          { src: netCapTies, alt: "", position: "50% 20%" },
        ]}
        action={
          <div className="flex flex-col items-center gap-3">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-clay">
              Shop my products
            </p>
            <ArrowLink href={site.craftStore} variant="solid" external>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="size-[1.1em] shrink-0"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
              </svg>
              @lavanut.store on Instagram
            </ArrowLink>
          </div>
        }
      >
        Give me a hook and some yarn,{" "}
        <span className="italic text-clay">
          and I&rsquo;ll give you something to wear.
        </span>
      </WorldStatement>

      <section
        aria-labelledby="pieces-title"
        className="bg-paper py-[var(--section-space)]"
      >
        <div className="container-page">
          <div className="mb-14 flex flex-col gap-3 md:mb-24 md:flex-row md:items-end md:justify-between">
            <h2
              id="pieces-title"
              className="font-display-soft text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1] tracking-[-0.03em]"
            >
              Colour, pattern{" "}
              <span className="italic text-clay">&amp; material.</span>
            </h2>
          </div>
          <PiecesGrid items={items} />
        </div>
      </section>

      <OtherWorlds worlds={others} className="pt-[var(--section-space)]" />
      <RevealObserver />
    </>
  );
}

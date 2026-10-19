import type { Metadata } from "next";
import { RevealObserver } from "@/components/RevealObserver";
import { BlobGallery } from "@/components/worlds/BlobGallery";
import { NextWorld } from "@/components/worlds/NextWorld";
import { WorldHero } from "@/components/worlds/WorldHero";
import { WorldStatement } from "@/components/worlds/WorldStatement";
import { getHandmadeItems, getWorld } from "@/content";

export const metadata: Metadata = {
  title: "Handmade",
  description: "Beadwork, bead-loom pieces, crochet and material studies.",
};

export default async function HandmadePage() {
  const { world, next } = getWorld("handmade");
  const items = await getHandmadeItems();

  return (
    <>
      <WorldHero world={world} />
      <WorldStatement images={[items[2].image, items[0].image]}>
        Earrings stitched bead by bead, loom pieces worked row by row, crochet
        shaped <span className="italic text-clay">one round at a time.</span>
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
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
              Placeholder photography
            </p>
          </div>
          <BlobGallery items={items} />
        </div>
      </section>

      <NextWorld world={next} />
      <RevealObserver />
    </>
  );
}

import type { Metadata } from "next";
import { RevealObserver } from "@/components/RevealObserver";
import { OtherWorlds } from "@/components/worlds/OtherWorlds";
import { PlacesList } from "@/components/worlds/PlacesList";
import { WorldHero } from "@/components/worlds/WorldHero";
import { WorldStatement } from "@/components/worlds/WorldStatement";
import { getTravelPhotos, getWorld } from "@/content";

export const metadata: Metadata = {
  title: "Travel",
  description: "Photographs from places I have wandered through.",
};

export default async function TravelPage() {
  const { world, others } = getWorld("travel");
  const photos = await getTravelPhotos();

  return (
    <>
      <WorldHero world={world} />
      <WorldStatement images={[photos[1].image, photos[2].image]}>
        I follow a trail just to see where it goes,{" "}
        <span className="italic text-clay">
          and come home with new colours for the worktable.
        </span>
      </WorldStatement>
      <PlacesList photos={photos} />
      <OtherWorlds worlds={others} className="pt-[var(--section-space)]" />
      <RevealObserver />
    </>
  );
}

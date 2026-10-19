import type { Metadata } from "next";
import { RevealObserver } from "@/components/RevealObserver";
import { NextWorld } from "@/components/worlds/NextWorld";
import { PlacesList } from "@/components/worlds/PlacesList";
import { TravelValues } from "@/components/worlds/TravelValues";
import { WorldHero } from "@/components/worlds/WorldHero";
import { getTravelPhotos, getWorld } from "@/content";

export const metadata: Metadata = {
  title: "Travel",
  description: "Photographs from places I have wandered through.",
};

export default async function TravelPage() {
  const { world, next } = getWorld("travel");
  const photos = await getTravelPhotos();

  return (
    <>
      <WorldHero world={world} />
      <TravelValues photos={photos} />
      <PlacesList photos={photos} />
      <NextWorld world={next} />
      <RevealObserver />
    </>
  );
}

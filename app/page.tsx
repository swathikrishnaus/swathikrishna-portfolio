import { RevealObserver } from "@/components/RevealObserver";
import { CreativeWorlds } from "@/components/sections/CreativeWorlds";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <CreativeWorlds />
      <RevealObserver />
    </>
  );
}

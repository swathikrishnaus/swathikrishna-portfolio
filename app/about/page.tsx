import type { Metadata } from "next";
import { RevealObserver } from "@/components/RevealObserver";
import { AboutChapters } from "@/components/about/AboutChapters";
import { AboutHero } from "@/components/about/AboutHero";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}: UI/UX designer, developer and crochet maker, always curious about the next trail.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutChapters />
      <Contact />
      <RevealObserver />
    </>
  );
}

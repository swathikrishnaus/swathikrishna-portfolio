import type { Metadata } from "next";
import { RevealObserver } from "@/components/RevealObserver";
import { AboutChapters } from "@/components/about/AboutChapters";
import { AboutHero } from "@/components/about/AboutHero";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}: part designer, part maker, and always curious.`,
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

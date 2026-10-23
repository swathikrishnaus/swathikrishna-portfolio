import type { World } from "./types";
import digitalVideoPoster from "./images/world-digital-video-poster.jpg";
import handmadeVideoPoster from "./images/handmade-video-poster.jpg";
import travelVideoPoster from "./images/travel-video-poster.jpg";

// The three worlds: cards on the home page, and a page each.
export const worlds: World[] = [
  {
    tone: "digital",
    href: "/design",
    title: "Tech skills",
    accent: "design & code.",
    accentColor: "text-sage",
    veil: "bg-[#0c1114]/10",
    eyebrow: "On the screen",
    intro:
      "Interfaces drawn on paper first, then built to feel calm and clear.",
    video: {
      src: "/videos/type-1.mp4",
      poster: digitalVideoPoster,
      label: "Hands typing on a laptop at a desk beside a phone and notebook",
    },
  },
  {
    tone: "handmade",
    href: "/handmade",
    title: "Art & craft",
    accent: "made by hand.",
    accentColor: "text-clay-soft",
    veil: "bg-[#0c1114]/10",
    eyebrow: "From the worktable",
    intro: "Bandanas, caps and little bags, crocheted one loop at a time.",
    video: {
      src: "/videos/handmade-flash-loop.mp4",
      poster: handmadeVideoPoster,
      label:
        "Hands holding up a pale green crochet bandana edged with pink flowers against tall leaves",
    },
  },
  {
    tone: "travel",
    href: "/travel",
    title: "Travel",
    accent: "places I've been.",
    accentColor: "text-sage-soft",
    veil: "bg-[#0c1114]/10",
    eyebrow: "Elsewhere",
    intro: "Streams, streets and far-off hills, kept as photographs.",
    video: {
      src: "/videos/travel-flash-loop.mp4",
      poster: travelVideoPoster,
      label:
        "A walk through a rocky forest stream: boulders, a small waterfall pool and friends resting in the shade",
    },
  },
];

export function getWorld(tone: World["tone"]) {
  const index = worlds.findIndex((world) => world.tone === tone);
  return {
    world: worlds[index],
    // The other two, in their usual order after this one.
    others: [1, 2].map((step) => worlds[(index + step) % worlds.length]),
  };
}

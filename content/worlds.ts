import type { World } from "./types";
import worldDigitalScreen from "./images/world-digital-screen-flash.jpg";
import worldDigital from "./images/world-digital-flash.jpg";
import handmadeVideoPoster from "./images/handmade-video-poster.jpg";
import travelVideoPoster from "./images/travel-video-poster.jpg";

// The three worlds: cards on the home page, and a page each.
export const worlds: World[] = [
  {
    tone: "digital",
    href: "/design",
    title: "Designing",
    accent: "the digital.",
    accentColor: "text-sage",
    veil: "bg-[#0c1114]/10",
    eyebrow: "On the screen",
    intro:
      "Interfaces drawn on paper first, then built to feel calm and clear.",
    surface: {
      src: worldDigital,
      alt: "Hand-drawn wireframe sketches of app screens in an open notebook",
    },
    hidden: {
      src: worldDigitalScreen,
      alt: "Laptop with a violet screen on a wooden meeting table",
    },
  },
  {
    tone: "handmade",
    href: "/handmade",
    title: "Making things",
    accent: "by hand.",
    accentColor: "text-clay-soft",
    veil: "bg-[#0c1114]/10",
    eyebrow: "From the worktable",
    intro: "Beads, loom rows and crochet, worked one stitch at a time.",
    video: {
      src: "/videos/handmade-flash-loop.mp4",
      poster: handmadeVideoPoster,
      label:
        "Hands holding up a pale green crochet kerchief edged with pink flowers against tall leaves",
    },
  },
  {
    tone: "travel",
    href: "/travel",
    title: "Wandering",
    accent: "the world.",
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
  return { world: worlds[index], next: worlds[(index + 1) % worlds.length] };
}

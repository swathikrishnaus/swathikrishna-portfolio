import type { HandmadeItem } from "./types";
import rosebudBandana from "./images/craft-rosebud-bandana.jpg";
import netCap from "./images/craft-net-cap.jpg";
import fannyPack from "./images/craft-fanny-pack.jpg";
import sageBandana from "./images/craft-sage-bandana.jpg";
import blushBow from "./images/craft-blush-bow.jpg";
import lilacPouch from "./images/craft-lilac-pouch.jpg";
import pearlBandana from "./images/craft-pearl-bandana.jpg";
import grannyTee from "./images/craft-granny-tee.jpg";
import fannyPackFlatlay from "./images/craft-fanny-pack-flatlay.jpg";
import beadedBandana from "./images/craft-beaded-bandana.jpg";

export const handmadeItems: HandmadeItem[] = [
  {
    slug: "rosebud-bandana",
    title: "Rosebud bandana",
    category: "Headwear",
    caption: "Sage mesh with a border of little pink rosebuds.",
    image: {
      src: rosebudBandana,
      alt: "A sage green crochet bandana edged with pink rosebud bobbles, worn among tall leaves and red heliconia flowers",
      position: "50% 45%",
    },
  },
  {
    slug: "garden-net-cap",
    title: "Garden net cap",
    category: "Headwear",
    caption: "An open-mesh cap with tiny flowers trailing down the ties.",
    image: {
      src: netCap,
      alt: "A sage crochet net cap with long ties dotted with small flowers, worn over long dark hair",
      position: "50% 30%",
    },
  },
  {
    slug: "sunny-fanny-pack",
    title: "Sunny fanny pack",
    category: "Bags",
    caption: "Pink and yellow, with a tiny matching pouch.",
    image: {
      src: fannyPack,
      alt: "A pink crochet fanny pack with yellow circles, held with a tiny matching round pouch",
      position: "50% 70%",
    },
  },
  {
    slug: "sage-bandana",
    title: "Sage bandana",
    category: "Headwear",
    caption: "A shell-stitch bandana with a soft cream edge.",
    image: {
      src: sageBandana,
      alt: "A green shell-stitch crochet bandana with a cream border, seen from the side",
      position: "50% 45%",
    },
  },
  {
    slug: "blush-bow",
    title: "Blush bow",
    category: "Hair accessories",
    caption: "A long, lacy bow made to sit low in loose hair.",
    image: {
      src: blushBow,
      alt: "A pink crochet bow with cream edging and long lacy tails clipped into dark hair",
      position: "50% 35%",
    },
  },
  {
    slug: "lilac-pouch",
    title: "Lilac pouch",
    category: "Bags",
    caption: "A drawstring pouch built around one flower motif.",
    image: {
      src: lilacPouch,
      alt: "A white and lilac crochet drawstring pouch with a flower motif, on a wooden plank before a large leaf",
      position: "50% 60%",
    },
  },
  {
    slug: "pearl-edge-bandana",
    title: "Pearl-edge bandana",
    category: "Headwear",
    caption: "Filet mesh finished with a row of tiny pearls.",
    image: {
      src: pearlBandana,
      alt: "A beige filet crochet bandana edged with small pearl beads, worn over long dark hair",
      position: "50% 35%",
    },
  },
  {
    slug: "granny-square-tee",
    title: "Granny-square tee",
    category: "Wearables",
    caption: "One granny square, stitched on as a pocket.",
    image: {
      src: grannyTee,
      alt: "A black T-shirt with a small pastel crochet granny-square pocket",
      position: "62% 50%",
    },
  },
  {
    slug: "fanny-pack-worktable",
    title: "From the worktable",
    category: "Bags",
    caption: "The fanny pack beside the yarn and hooks it came from.",
    image: {
      src: fannyPackFlatlay,
      alt: "A pink and yellow crochet fanny pack laid on a wooden table beside balls of yarn and crochet hooks",
    },
  },
  {
    slug: "beaded-bandana",
    title: "Beaded bandana",
    category: "Headwear",
    caption: "A sage triangle trimmed with a beaded border.",
    image: {
      src: beadedBandana,
      alt: "A sage crochet triangle bandana with a beaded edge, held up against a black dress",
      position: "50% 45%",
    },
  },
];

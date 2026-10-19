import type { HandmadeItem } from "./types";
import earrings from "./images/gallery-earrings-flash.jpg";
import mandala from "./images/gallery-crochet-mandala-flash.jpg";
import mohair from "./images/gallery-mohair-flash.jpg";
import spools from "./images/gallery-spools-flash.jpg";
import beads from "./images/gallery-beads-flash.jpg";
import bowl from "./images/gallery-crochet-bowl-flash.jpg";
import hoop from "./images/gallery-hoop-flash.jpg";

export const handmadeItems: HandmadeItem[] = [
  {
    slug: "glass-drops",
    title: "Glass drops",
    category: "Brick-stitch earrings",
    caption: "Testing how light moves through stacked glass.",
    image: {
      src: earrings,
      alt: "Two strands of iridescent blue glass beads hanging against soft light",
      position: "40% 50%",
    },
  },
  {
    slug: "sun-medallion",
    title: "Sun medallion",
    category: "Crochet",
    caption: "A radial study in gradient yarn.",
    image: {
      src: mandala,
      alt: "Crochet medallion fading from yellow at the centre to violet at the edges",
    },
  },
  {
    slug: "soft-palette",
    title: "Soft palette",
    category: "Material study",
    caption: "Mohair, wool and the colours in between.",
    image: {
      src: mohair,
      alt: "Balls of fluffy ochre, grey and white mohair yarn in a woven basket",
    },
  },
  {
    slug: "thread-index",
    title: "Thread index",
    category: "Beadwork",
    caption: "Choosing thread to sit quietly behind the beads.",
    image: {
      src: spools,
      alt: "Spools of coloured thread lined up diagonally on a worn wooden surface",
    },
  },
  {
    slug: "loom-palette",
    title: "Loom palette",
    category: "Bead loom",
    caption: "Sorting colour before the first row.",
    image: {
      src: beads,
      alt: "A dense scatter of small bright plastic beads in many colours",
    },
  },
  {
    slug: "striped-vessel",
    title: "Striped vessel",
    category: "Crochet",
    caption: "Building a shape one round at a time.",
    image: {
      src: bowl,
      alt: "Crochet bowl with bands of orange, yellow, red and teal",
    },
  },
  {
    slug: "worktable",
    title: "On the worktable",
    category: "Material study",
    caption: "Hoop, needles and swatches mid-project.",
    image: {
      src: hoop,
      alt: "Flat lay of an embroidery hoop, knitting needles, yarn, a camera and envelopes",
    },
  },
];

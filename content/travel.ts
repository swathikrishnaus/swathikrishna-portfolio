import type { TravelPhoto } from "./types";
import trailClimb from "./images/trip-trail-climb.jpg";
import boulderPath from "./images/trip-boulder-path.jpg";
import bigTrees from "./images/trip-big-trees.jpg";
import waterfallPool from "./images/trip-pool.jpg";
import rockRest from "./images/trip-rocky-bank.jpg";
import forestWalk from "./images/trip-forest-walk.jpg";
import shadeBreak from "./images/trip-shade-break.jpg";
import climbOut from "./images/trip-climb-out.jpg";
import desertFort from "./images/trip-desert-fort.jpg";

// Stills from your own travel videos. `note` is each moment's title, `place`
// where it was and `story` a line about it — rename them to the real places.
export const travelPhotos: TravelPhoto[] = [
  {
    slug: "trail-climb",
    place: "Forest stream",
    note: "Up the rocks",
    story: "A long slab of warm rock, the trail climbing up into the trees.",
    image: {
      src: trailClimb,
      alt: "A hiker climbing a long sloping rock between green trees",
    },
  },
  {
    slug: "waterfall-pool",
    place: "Forest stream",
    note: "The waterfall pool",
    story:
      "A thin fall of water, a clear pool, and nobody in a hurry to leave.",
    image: {
      src: waterfallPool,
      alt: "A small waterfall spilling between boulders into a clear green pool, with someone wading in",
    },
  },
  {
    slug: "desert-fort",
    place: "Desert",
    note: "From the fort wall",
    story:
      "Sandstone battlements, a low village and a sky that never seems to end.",
    image: {
      src: desertFort,
      alt: "Sandstone battlements looking out over a low desert village under a wide streaked sky",
    },
  },
  {
    slug: "boulder-path",
    place: "Forest stream",
    note: "Boulder country",
    story:
      "A dry streambed of smooth stone, crossed one careful step at a time.",
    image: {
      src: boulderPath,
      alt: "A walker crossing a dry, sunlit streambed of smooth rock under tall trees",
    },
  },
  {
    slug: "shade-break",
    place: "Forest stream",
    note: "A break in the shade",
    story: "Friends, a fallen log and the shade of one enormous tree.",
    image: {
      src: shadeBreak,
      alt: "Three friends resting on a log beneath the arching branch of a large tree",
    },
  },
  {
    slug: "big-trees",
    place: "Forest stream",
    note: "Under the canopy",
    story:
      "Golden rock under a roof of leaves, the light coming down in pieces.",
    image: {
      src: bigTrees,
      alt: "Golden rocks and a distant figure beneath a dense canopy of leaves",
    },
  },
  {
    slug: "forest-walk",
    place: "Forest stream",
    note: "Leaves underfoot",
    story:
      "Dry leaves crunching underfoot on the path back through the forest.",
    image: {
      src: forestWalk,
      alt: "A hiker with a backpack walking along a path covered in dry leaves",
    },
  },
  {
    slug: "rock-rest",
    place: "Forest stream",
    note: "Catching breath",
    story:
      "A pause on the rocks to catch a breath and look back at the way in.",
    image: {
      src: rockRest,
      alt: "A walker pausing on a rocky bank among boulders and green trees",
    },
  },
  {
    slug: "climb-out",
    place: "Forest stream",
    note: "The climb out",
    story: "The last scramble up and out, backpacks on and legs tired.",
    image: {
      src: climbOut,
      alt: "Two hikers picking their way up a steep, rocky slope through the trees",
    },
  },
];

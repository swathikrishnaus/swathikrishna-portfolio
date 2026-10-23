import type { StaticImageData } from "next/image";

export type ImageAsset = {
  src: StaticImageData | string;
  alt: string;
  width?: number;
  height?: number;
  position?: string;
};

export type ExternalLink = {
  label: string;
  href?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover: ImageAsset;
  /** A silent screen recording; the cover doubles as its poster. */
  video?: string;
  liveUrl?: string;
  sourceUrl?: string;
  isSample?: boolean;
};

export type HandmadeCategory =
  "Headwear" | "Hair accessories" | "Bags" | "Wearables";

export type HandmadeItem = {
  slug: string;
  title: string;
  category: HandmadeCategory;
  caption: string;
  image: ImageAsset;
};

export type TravelPhoto = {
  slug: string;
  place: string;
  note?: string;
  /** A line or two about the moment. */
  story?: string;
  image: ImageAsset;
};

export type WorldMedia =
  | {
      // A still that is muted until the lens reveals a second, hidden photo.
      surface: { src: StaticImageData; alt: string };
      hidden: { src: StaticImageData; alt: string };
    }
  | {
      // A moving picture seen in full colour through the lens.
      video: { src: string; poster: StaticImageData; label: string };
    };

export type World = {
  tone: "digital" | "handmade" | "travel";
  href: string;
  title: string;
  accent: string;
  accentColor: string;
  veil: string;
  /** Small label above the page title. */
  eyebrow: string;
  /** One line under the page title. */
  intro: string;
} & WorldMedia;

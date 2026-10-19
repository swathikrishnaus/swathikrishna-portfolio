import type { ExternalLink } from "./types";

const socials: ExternalLink[] = [
  { label: "GitHub" },
  { label: "LinkedIn" },
  { label: "Instagram" },
];

export const site = {
  name: "Swathi Krishna",
  shortName: "SK",
  role: "Creative developer & maker",
  description:
    "Swathi Krishna works between the screen and the worktable — designing and building for the web, and making beadwork, loom pieces and crochet by hand.",
  email: "hello@example.com",
  socials,
  nav: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/about#contact" },
  ],
};

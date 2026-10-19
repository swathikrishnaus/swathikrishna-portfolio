import type { Project } from "./types";
import orangeCat from "./images/work-orange-cat-poster.jpg";
import fcFilmwerks from "./images/work-fc-filmwerks-poster.jpg";
import accurate from "./images/work-accurate-poster.jpg";
import loreta from "./images/work-loreta-poster.jpg";

export const projects: Project[] = [
  {
    slug: "orange-cat",
    title: "Orange Cat",
    summary:
      "A website for a bicycle brand: a full-screen hero, model collections, a photo gallery and a contact page with a map.",
    tags: ["Web design", "Frontend", "Responsive"],
    cover: {
      src: orangeCat,
      alt: "The Orange Cat bicycle website scrolling from its hero to the cycle collections",
    },
    video: "/videos/work-orange-cat.mp4",
  },
  {
    slug: "fc-filmwerks",
    title: "FC Filmwerks",
    summary:
      "A dark, cinematic site for a film studio, with scroll-led storytelling, services and featured films.",
    tags: ["Web design", "Motion", "Storytelling"],
    cover: {
      src: fcFilmwerks,
      alt: "The FC Filmwerks website opening on a camera lens, then scrolling through its studio and featured work",
    },
    video: "/videos/work-fc-filmwerks.mp4",
  },
  {
    slug: "accurate-software",
    title: "Accurate Software",
    summary:
      "A company site for a software firm: products, services, testimonials and a contact page for its offices.",
    tags: ["Corporate", "UI design", "Frontend"],
    cover: {
      src: accurate,
      alt: "The Accurate Software Solutions website scrolling through its hero, products and contact form",
    },
    video: "/videos/work-accurate.mp4",
  },
  {
    slug: "loreta",
    title: "Loreta",
    summary:
      "An online store for a lingerie label, with editorial layouts, collections and product carousels.",
    tags: ["E-commerce", "UI design", "Editorial"],
    cover: {
      src: loreta,
      alt: "The Loreta lingerie store scrolling through its summer sale banner, new arrivals and sets",
    },
    video: "/videos/work-loreta.mp4",
  },
];

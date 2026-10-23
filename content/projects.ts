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
      "A website for Orange Cat, a Toronto store for handcrafted Italian bicycles: a full-screen hero, the Corinto collections, a photo gallery and a contact page with a map. I designed the UI and planned the UX, deciding what sits where on every page.",
    tags: ["UI design", "UX design", "Frontend", "Figma"],
    cover: {
      src: orangeCat,
      alt: "The Orange Cat bicycle website scrolling from its hero to the cycle collections",
    },
    video: "/videos/work-orange-cat.mp4",
    liveUrl: "https://orangecatcycles.com/",
  },
  {
    slug: "fc-filmwerks",
    title: "FC Filmwerks",
    summary:
      "A dark, cinematic site for FC Filmwerks, a Dubai film studio: its services, featured films like the award-winning Blue Lily, client stories and the studio’s story, told as you scroll. I planned the UX and built it in Next.js with Claude.",
    tags: ["UI design", "UX design", "Development", "Next.js", "Claude"],
    cover: {
      src: fcFilmwerks,
      alt: "The FC Filmwerks website opening on a camera lens, then scrolling through its studio and featured work",
    },
    video: "/videos/work-fc-filmwerks.mp4",
    liveUrl: "https://fcfilmwerks.com/",
  },
  {
    slug: "accurate-software",
    title: "Accurate Software",
    summary:
      "A company site for Accurate Software Solutions, a Kerala software firm with offices in Dubai and Oman: its app, web and chatbot services, products from school management to payroll, client reviews and contacts. I designed the UI and planned the UX, deciding what sits where.",
    tags: [
      "UI design",
      "UX design",
      "Development",
      "Frontend",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],
    cover: {
      src: accurate,
      alt: "The Accurate Software Solutions website scrolling through its hero, products and contact form",
    },
    video: "/videos/work-accurate.mp4",
    liveUrl: "https://accuratesoftware.online/",
  },
  {
    slug: "loreta",
    title: "Loreta",
    summary:
      "UI design for Loreta, an online lingerie store: an e-commerce site with a sale banner, new arrivals, collections and product carousels. I imagined the UX and designed every screen in Figma.",
    tags: ["UI design", "UX design", "Figma"],
    cover: {
      src: loreta,
      alt: "The Loreta lingerie store scrolling through its summer sale banner, new arrivals and sets",
    },
    video: "/videos/work-loreta.mp4",
  },
];

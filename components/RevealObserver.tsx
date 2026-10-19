"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const watched = new Map<Element, Element[]>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          watched
            .get(entry.target)
            ?.forEach((el) => el.setAttribute("data-revealed", ""));
          watched.delete(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    document
      .querySelectorAll("[data-reveal]:not([data-revealed])")
      .forEach((el) => {
        // A fully clipped element never intersects, so masked elements are tracked through their parent.
        const target =
          el.getAttribute("data-reveal") === "mask" && el.parentElement
            ? el.parentElement
            : el;

        if (target.getBoundingClientRect().top < window.innerHeight * 0.9) {
          el.setAttribute("data-revealed", "");
          return;
        }

        const group = watched.get(target);
        if (group) {
          group.push(el);
        } else {
          watched.set(target, [el]);
          observer.observe(target);
        }
      });
    root.setAttribute("data-reveal-ready", "");

    return () => observer.disconnect();
  }, []);

  return null;
}

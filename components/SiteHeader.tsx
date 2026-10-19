"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

// Pages that open on a full-bleed dark picture, where the bar starts light.
const darkHeroPaths = new Set([
  "/",
  "/about",
  "/design",
  "/handmade",
  "/travel",
]);

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const overHero = darkHeroPaths.has(usePathname());

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 480 && y > lastY + 4);
      if (Math.abs(y - lastY) > 4) lastY = y;
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const focusFrame = requestAnimationFrame(() =>
      firstLinkRef.current?.focus(),
    );

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = overflow;
      cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow] duration-500 ease-out-soft ${
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          solid
            ? "bg-ivory/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
            : `bg-transparent ${overHero ? "text-ivory" : ""}`
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="flex items-baseline"
            aria-label={`${site.name}, home`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="font-display-soft text-[1.35rem] leading-none tracking-[-0.01em]">
              {site.name}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-10 text-[0.9rem]">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline pb-1">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="relative -mr-2 flex h-11 items-center gap-3 px-2 text-[0.9rem] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span aria-hidden="true" className="relative block h-2.5 w-5">
              <span
                className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-out-soft ${
                  menuOpen ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-out-soft ${
                  menuOpen ? "top-1/2 -rotate-45" : "top-full"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-ivory duration-500 ease-out-soft md:hidden ${
          menuOpen
            ? "visible opacity-100 transition-opacity"
            : "invisible opacity-0 transition-[opacity,visibility]"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="container-page flex h-full flex-col justify-between pb-10 pt-12"
        >
          <ul className="space-y-2">
            {site.nav.map((item, i) => (
              <li key={item.href} className="line-mask">
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display-soft block py-1 text-[2.75rem] leading-[1.1] tracking-[-0.02em] transition-transform duration-700 ease-out-soft ${
                    menuOpen ? "translate-y-0" : "translate-y-full"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${120 + i * 70}ms` : "0ms",
                  }}
                >
                  <span className="mr-4 align-top font-mono text-xs text-muted">
                    0{i + 1}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            {site.email}
          </a>
        </nav>
      </div>
    </>
  );
}

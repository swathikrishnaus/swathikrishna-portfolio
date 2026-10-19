"use client";

import { type RefObject, useEffect } from "react";

const POINTS = 72;
const ANGLES = Array.from(
  { length: POINTS },
  (_, i) => (i / POINTS) * Math.PI * 2,
);

// The outline is a circle bent by a few slow waves. Their phases drift on
// their own (floating) and are pushed along by cursor travel, while the
// lag behind the cursor stretches the blob in the direction of motion.
const WAVES = [
  { harmonic: 2, amplitude: 0.07, drift: 0.0004, push: 0.6 },
  { harmonic: 3, amplitude: 0.1, drift: -0.00055, push: -0.8 },
  { harmonic: 4, amplitude: 0.05, drift: 0.0007, push: 1.1 },
  { harmonic: 5, amplitude: 0.06, drift: -0.0009, push: -1.3 },
];

const MAX_STRETCH = 0.32;

type ShapeLensOptions = {
  /** Lens size in px for the element's current box. */
  radius: (rect: DOMRect, coarse: boolean) => number;
  /** On touch screens, let the lens drift on its own while on screen. */
  wander?: boolean;
  /** Seeds the blob's starting form so neighbours never match. */
  seed?: number;
};

/**
 * Drives a floating, liquid-looking lens that follows the pointer. Writes
 * `--lens-clip` (the shape) and `--lens-hole` (everything but the shape) as
 * clip-path polygons, plus `--lens-x` / `--lens-y`, onto the element.
 */
export function useShapeLens(
  ref: RefObject<HTMLElement | null>,
  { radius, wander = false, seed = 0 }: ShapeLensOptions,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    if (!fine && !wander) return;

    let frame = 0;
    let active = false;
    let pointerX = 0;
    let pointerY = 0;
    let clientX = 0;
    let clientY = 0;
    let x = 0;
    let y = 0;
    let r = 0;
    let last = 0;
    let stretch = 0;
    let headingX = 1;
    let headingY = 0;
    const phases = WAVES.map((_, i) => seed * 2.1 + i * 1.3);

    const clear = () => {
      el.style.removeProperty("--lens-clip");
      el.style.removeProperty("--lens-hole");
      el.removeAttribute("data-peek");
    };

    const tick = (now: number) => {
      frame = 0;
      const rect = el.getBoundingClientRect();

      if (!fine) {
        // Slow Lissajous drift for touch screens.
        const t = now * 0.00032 + seed * 1.7;
        pointerX = rect.width * (0.5 + 0.26 * Math.sin(t));
        pointerY = rect.height * (0.45 + 0.22 * Math.sin(t * 1.37 + 0.6));
      } else {
        // Re-measure every frame: the element can grow or move under a still cursor.
        pointerX = clientX - rect.left;
        pointerY = clientY - rect.top;
      }

      const target = active ? radius(rect, !fine) : 0;
      const dt = last ? Math.min(50, now - last) : 16;
      last = now;
      r += (target - r) * 0.12;

      // How far the lens trails the cursor drives the stretch.
      const lagX = pointerX - x;
      const lagY = pointerY - y;
      const lag = Math.hypot(lagX, lagY);
      const ease = r < 1 ? 1 : 0.16;
      x += lagX * ease;
      y += lagY * ease;
      const travelled = r < 1 ? 0 : (lag * ease) / r;

      if (!active && r < 0.5) {
        r = 0;
        last = 0;
        stretch = 0;
        clear();
        return;
      }

      const stretchTarget = r < 1 ? 0 : Math.min(MAX_STRETCH, (lag / r) * 0.9);
      stretch += (stretchTarget - stretch) * 0.14;
      if (lag > 0.5) {
        headingX += (lagX / lag - headingX) * 0.2;
        headingY += (lagY / lag - headingY) * 0.2;
      }
      const heading = Math.atan2(headingY, headingX);

      WAVES.forEach((wave, i) => {
        phases[i] += dt * wave.drift + travelled * wave.push;
      });

      const points = ANGLES.map((angle) => {
        let k = 1;
        WAVES.forEach((wave, i) => {
          k += wave.amplitude * Math.cos(wave.harmonic * angle + phases[i]);
        });
        // Long along the direction of travel, with a fuller leading edge.
        k += stretch * Math.cos(2 * (angle - heading));
        k += stretch * 0.35 * Math.cos(angle - heading);
        const d = r * k * 0.94;
        return `${(x + d * Math.cos(angle)).toFixed(1)}px ${(y + d * Math.sin(angle)).toFixed(1)}px`;
      });

      el.style.setProperty("--lens-x", `${x.toFixed(1)}px`);
      el.style.setProperty("--lens-y", `${y.toFixed(1)}px`);
      el.style.setProperty("--lens-clip", `polygon(${points.join(",")})`);
      el.style.setProperty(
        "--lens-hole",
        `polygon(evenodd,0 0,100% 0,100% 100%,0 100%,0 0,${points.join(",")},${points[0]},0 0)`,
      );

      frame = requestAnimationFrame(tick);
    };

    const run = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const start = () => {
      active = true;
      run();
    };

    const stop = () => {
      active = false;
      run();
    };

    if (fine) {
      const onMove = (event: PointerEvent) => {
        clientX = event.clientX;
        clientY = event.clientY;
      };
      const onEnter = (event: PointerEvent) => {
        onMove(event);
        el.setAttribute("data-peek", "");
        start();
      };
      const onLeave = () => {
        el.removeAttribute("data-peek");
        stop();
      };

      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        cancelAnimationFrame(frame);
        clear();
      };
    }

    const observer = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop(),
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      clear();
    };
  }, [ref, radius, wander, seed]);
}

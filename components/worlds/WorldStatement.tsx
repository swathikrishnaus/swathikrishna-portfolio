import Image from "next/image";
import type { ImageAsset } from "@/content";

type WorldStatementProps = {
  children: React.ReactNode;
  /** Two small pictures that drift past the text at different speeds. */
  images: [ImageAsset, ImageAsset];
};

export function WorldStatement({ children, images }: WorldStatementProps) {
  const [first, second] = images;

  return (
    <section
      id="world-body"
      className="container-page relative scroll-mt-0 py-[var(--section-space)]"
    >
      <figure
        aria-hidden="true"
        className="drift relative mb-12 aspect-[3/4] w-[38%] overflow-hidden bg-sand md:absolute md:left-[var(--gutter)] md:top-[10%] md:mb-0 md:w-[12vw]"
        style={{ "--drift": "45px" } as React.CSSProperties}
      >
        <Image
          src={first.src}
          alt=""
          fill
          sizes="(min-width: 768px) 13vw, 38vw"
          className="object-cover"
          style={
            first.position ? { objectPosition: first.position } : undefined
          }
        />
      </figure>

      <p
        data-reveal
        className="font-display-soft relative z-10 mx-auto max-w-[21ch] text-center text-[clamp(1.75rem,3.6vw,3.5rem)] md:max-w-[min(21ch,62vw)] font-light leading-[1.08] tracking-[-0.025em]"
      >
        {children}
      </p>

      <figure
        aria-hidden="true"
        className="drift relative ml-auto mt-12 aspect-[4/5] w-[44%] overflow-hidden bg-sand md:absolute md:bottom-[24%] md:right-[var(--gutter)] md:mt-0 md:w-[14vw]"
        style={{ "--drift": "90px" } as React.CSSProperties}
      >
        <Image
          src={second.src}
          alt=""
          fill
          sizes="(min-width: 768px) 16vw, 44vw"
          className="object-cover"
          style={
            second.position ? { objectPosition: second.position } : undefined
          }
        />
      </figure>
    </section>
  );
}

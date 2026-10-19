import { Arrow } from "@/components/ui/Arrow";
import { HeroName } from "@/components/sections/HeroName";
import { site } from "@/content";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-moss text-ivory"
    >
      <div
        aria-hidden="true"
        className="film-grain pointer-events-none absolute inset-0 -z-10"
      />
      <div className="container-page pb-6 pt-[var(--section-space)]">
        <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-6">
          <p className="font-display-soft text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1] tracking-[-0.03em] md:col-span-7">
            Have an idea, a project
            <br />
            <span className="italic text-sage">or a place to recommend?</span>
          </p>
          <div className="md:col-span-5 md:justify-self-end">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-4 whitespace-nowrap rounded-full bg-clay py-4 pl-7 pr-6 text-[0.95rem] text-ivory transition-colors duration-500 hover:bg-sage hover:text-ink"
            >
              Write to me
              <Arrow
                direction="up-right"
                className="transition-transform duration-500 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* The whole poster line is the email link; the lens outlines it. */}
        <a
          href={`mailto:${site.email}`}
          className="mt-14 block md:mt-20"
          aria-labelledby="contact-title"
        >
          <HeroName
            as="h2"
            id="contact-title"
            name={"SAY\u00a0HELLO"}
            label="Say hello"
            className="whitespace-nowrap font-poster text-[25.4vw] uppercase leading-[0.82]"
          />
        </a>

        <div className="mt-4 flex flex-col gap-3 border-t border-ivory/20 pt-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ivory/70 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${site.email}`}
            className="link-underline self-start pb-0.5 hover:text-ivory"
          >
            {site.email}
          </a>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((social) =>
              social.href ? (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline pb-0.5 hover:text-ivory"
                  >
                    {social.label}
                  </a>
                </li>
              ) : (
                <li key={social.label}>{social.label}</li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

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
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-clay py-4 pl-6 pr-6 text-[0.95rem] text-ivory transition-colors duration-500 hover:bg-sage hover:text-ink"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-[1.15rem] fill-current"
              >
                <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.08.89.9-3-.2-.31a8.2 8.2 0 1 1 6.88 3.75Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.76 4.76 0 0 0 1 2.53 10.9 10.9 0 0 0 4.18 3.7c1.55.67 2.16.73 2.94.61.47-.07 1.46-.6 1.66-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
              </svg>
              Chat on WhatsApp
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

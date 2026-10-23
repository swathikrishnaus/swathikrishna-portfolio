import { cacheLife } from "next/cache";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { site } from "@/content";

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export function SiteFooter() {
  return (
    <footer className="bg-moss text-sage-soft">
      <div className="container-page">
        <div className="py-12">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-2 text-[0.9rem]">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-pill">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col-reverse gap-4 border-t border-sage/30 py-6 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-sage sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.name}. All rights reserved.
          </p>
          <a
            href="#main"
            className="group inline-flex items-center gap-2 hover:text-ivory"
          >
            Back to top
            <Arrow className="-rotate-90 transition-transform duration-500 ease-out-soft group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

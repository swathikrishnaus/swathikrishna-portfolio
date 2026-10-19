import Link from "next/link";
import { Arrow } from "./Arrow";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "text";
  className?: string;
};

export function ArrowLink({
  href,
  children,
  variant = "text",
  className = "",
}: ArrowLinkProps) {
  if (variant === "solid") {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-4 whitespace-nowrap rounded-full py-4 pl-7 pr-6 text-[0.95rem] bg-clay text-ivory transition-colors duration-500 hover:bg-sage hover:text-ink ${className}`}
      >
        <span>{children}</span>
        <span className="relative flex size-5 items-center justify-center overflow-hidden">
          <Arrow className="transition-transform duration-500 ease-out-soft group-hover:translate-x-6 group-focus-visible:translate-x-6" />
          <Arrow className="absolute -translate-x-6 transition-transform duration-500 ease-out-soft group-hover:translate-x-0 group-focus-visible:translate-x-0" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 py-2 text-[0.95rem] ${className}`}
    >
      <span className="link-underline pb-0.5">{children}</span>
      <Arrow className="transition-transform duration-500 ease-out-soft group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5" />
    </Link>
  );
}

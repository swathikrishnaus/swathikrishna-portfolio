type ArrowProps = {
  className?: string;
  direction?: "right" | "up-right" | "down";
};

const rotation = {
  right: "",
  "up-right": "-rotate-45",
  down: "rotate-90",
};

export function Arrow({ className = "", direction = "right" }: ArrowProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`size-[1em] shrink-0 ${rotation[direction]} ${className}`}
    >
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

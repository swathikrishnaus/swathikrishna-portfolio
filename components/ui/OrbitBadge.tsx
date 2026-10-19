type OrbitBadgeProps = {
  /** Text that circles the badge; end it with a separator so it loops. */
  text: string;
  center: string;
  id: string;
  className?: string;
  style?: React.CSSProperties;
};

// A clay disc with words orbiting a small monogram.
export function OrbitBadge({
  text,
  center,
  id,
  className = "",
  style,
}: OrbitBadgeProps) {
  return (
    <div aria-hidden="true" className={className} style={style}>
      <div className="absolute inset-0 rounded-full bg-clay/85 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.6)] backdrop-blur-md" />
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 animate-orbit fill-ivory font-mono text-[6.2px] uppercase"
      >
        <defs>
          <path id={id} d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" />
        </defs>
        <text letterSpacing="1.4">
          <textPath href={`#${id}`} textLength="236">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-[30%] flex items-center justify-center rounded-full border border-ivory/35">
        <span className="font-display-soft text-[1.35rem] italic leading-none tracking-[-0.04em] lg:text-[1.5rem]">
          {center}
        </span>
      </span>
    </div>
  );
}

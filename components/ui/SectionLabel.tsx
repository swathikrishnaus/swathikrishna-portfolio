type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({
  index,
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] ${className}`}
    >
      {index && <span className="opacity-60">{index}</span>}
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  );
}

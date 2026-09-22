type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 flex max-w-3xl flex-col gap-4">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">
        {description}
      </p>
    </div>
  );
}

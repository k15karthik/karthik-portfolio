import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-start gap-4 md:gap-6">
        <span className="font-mono-label text-xs text-accent pt-2 shrink-0">
          {index}
        </span>
        <div>
          <p className="font-mono-label text-xs uppercase text-ink-muted mb-3">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-ink text-balance leading-[1.1]">
            {title}
          </h2>
          {description && (
            <p className="mt-5 max-w-xl text-ink-muted leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}

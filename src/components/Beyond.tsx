import { principles } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Beyond() {
  return (
    <section id="beyond" className="relative py-28 md:py-36 hairline-b">
      <div className="container-page">
        <SectionHeading
          index="06"
          eyebrow="Beyond the Code"
          title="How I actually work."
          description="Not a list of hobbies — the operating principles that show up in the work above, stated plainly."
        />

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="flex gap-5">
                <span className="font-display italic text-2xl text-accent/70 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink mb-2">
                    {p.title}
                  </h3>
                  <p className="text-ink-muted leading-relaxed">{p.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="font-display italic text-2xl md:text-3xl text-ink text-balance max-w-3xl mt-20 leading-snug">
            &ldquo;I&apos;m less interested in the next credential than in
            the next system worth understanding completely.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}

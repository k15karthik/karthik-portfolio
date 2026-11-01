import { achievements } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 md:py-36 hairline-b">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="Milestones"
          title="A deliberate trajectory."
          description="Each step was chosen to be a harder room to be in than the last — not a longer résumé."
        />

        <div className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline-strong md:left-[7px]"
            aria-hidden="true"
          />
          <ol className="space-y-12">
            {achievements.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <li className="relative pl-10">
                  <span
                    className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
                    <span className="font-mono-label text-xs text-accent shrink-0 md:w-14">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-ink-muted leading-relaxed max-w-2xl">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

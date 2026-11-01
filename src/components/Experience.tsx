import { experience } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 hairline-b">
      <div className="container-page">
        <SectionHeading
          index="05"
          eyebrow="Experience"
          title="Where the work happened."
        />

        <div className="divide-y divide-hairline border-t border-b border-hairline">
          {experience.map((job, i) => (
            <Reveal key={`${job.org}-${job.period}`} delay={i * 0.05}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10 py-10">
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-ink">
                    {job.org}
                  </h3>
                  <p className="mt-1 text-ink-muted">{job.role}</p>
                  <p className="font-mono-label text-[11px] uppercase text-ink-faint mt-3">
                    {job.period}
                  </p>
                  <p className="font-mono-label text-[11px] uppercase text-ink-faint">
                    {job.location}
                  </p>
                </div>

                <div>
                  <ul className="space-y-3">
                    {job.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-ink-muted leading-relaxed"
                      >
                        <span className="text-accent mt-[0.6em] h-1 w-1 rounded-full bg-accent shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-label text-[11px] rounded-full border border-hairline px-3 py-1.5 text-ink-faint"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { certifications, expertise } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Award } from "lucide-react";

export function Expertise() {
  return (
    <section id="expertise" className="relative py-28 md:py-36 hairline-b">
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="Expertise"
          title="What I build with."
          description="Grouped by where it's actually used — production internships, team projects, and coursework. Not a ranked list, not a progress bar."
        />

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
          {expertise.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div>
                <h3 className="font-mono-label text-xs uppercase text-accent mb-5 pb-4 border-b border-hairline">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-hairline px-4 py-2 text-sm text-ink-muted transition-colors hover:border-accent hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 pt-10 border-t border-hairline flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="font-mono-label text-xs uppercase text-ink-faint shrink-0">
              Certifications
            </p>
            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2.5 text-ink-muted">
                  <Award size={15} strokeWidth={1.5} className="text-accent shrink-0" />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

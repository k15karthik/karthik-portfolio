import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { label: "Honors", value: "Summa Cum Laude", detail: "UIC Honors College" },
  {
    label: "Now",
    value: "M.S. CS — AI",
    detail: "University of Chicago, MPCS",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 hairline-b">
      <div className="container-page">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="The person behind the pipelines."
        />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20">
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              I came into the Computer Science program at UIC curious about
              how large systems hold together — not just how to make
              something run, but why it was built that way. That question
              turned out to be a good filter: coursework in Database
              Systems, Machine Learning, and Agentic AI kept pulling me
              toward the layer underneath most applications — the data
              infrastructure that decides whether an intelligent system is
              actually trustworthy.
            </p>
            <p>
              That curiosity became a discipline. I graduated{" "}
              <span className="text-ink">Summa Cum Laude</span> as a member
              of the UIC Honors College — not chasing a number, but because
              I didn&apos;t want to turn in work that fell short of what I
              knew I could do. Two internships at Seyon Solutions put that
              training into production: first building Power BI dashboards
              against real business data, then implementing Medallion
              Architecture on Azure Databricks — Bronze, Silver, and Gold
              layers governed by Unity Catalog. An internship at Old
              National Bank followed, taking that same rigor into a
              regulated banking environment and, eventually, into
              prototyping an agentic copilot for treasury consultants.
            </p>
            <p>
              I&apos;m now continuing into the{" "}
              <span className="text-ink">
                MPCS Artificial Intelligence specialization
              </span>{" "}
              at the University of Chicago, a 12-course program that lets me
              go deeper on the systems I&apos;ve only started to understand
              — agentic architectures, large-scale data infrastructure, and
              the intersection between the two. The throughline across all
              of it is the same: I want to build systems that are
              intelligent and infrastructure that actually scales, and I
              want to understand both well enough to be honest about their
              limits.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-hairline bg-bg-elevated/60 p-6"
                >
                  <p className="font-mono-label text-[11px] uppercase text-ink-faint mb-2">
                    {fact.label}
                  </p>
                  <p className="font-display text-2xl text-ink">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">
                    {fact.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

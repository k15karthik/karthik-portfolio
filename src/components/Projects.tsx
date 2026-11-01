import { ArrowUpRight, Lock } from "lucide-react";
import { projects, sideProjects } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ProjectDiagram } from "./ProjectDiagram";
import { GithubIcon } from "./icons";

export function Projects() {
  return (
    <section id="work" className="relative py-28 md:py-36 hairline-b">
      <div className="container-page">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title="Systems built to be used, not just demoed."
          description="Case studies on the projects I'd actually want to walk you through — what problem they solve, how they're architected, and what I specifically built."
        />

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={0.05}>
              <article
                id={project.id}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="rounded-2xl border border-hairline bg-bg-elevated/60 aspect-[16/10] p-8 flex items-center justify-center">
                  <ProjectDiagram kind={project.diagram} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono-label text-[11px] uppercase text-accent">
                      {project.kind}
                    </span>
                    {project.note && (
                      <span className="inline-flex items-center gap-1.5 font-mono-label text-[11px] uppercase text-ink-faint">
                        <Lock size={11} strokeWidth={1.75} />
                        {project.note}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl text-ink mb-4">
                    {project.name}
                  </h3>
                  <p className="text-lg text-ink leading-relaxed mb-6">
                    {project.tagline}
                  </p>

                  <div className="space-y-4 text-ink-muted leading-relaxed">
                    <p>
                      <span className="font-mono-label text-[11px] uppercase text-ink-faint block mb-1.5">
                        Problem
                      </span>
                      {project.problem}
                    </p>
                    <p>
                      <span className="font-mono-label text-[11px] uppercase text-ink-faint block mb-1.5">
                        Architecture
                      </span>
                      {project.architecture}
                    </p>
                    <p>
                      <span className="font-mono-label text-[11px] uppercase text-ink-faint block mb-1.5">
                        My role
                      </span>
                      {project.contribution}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-label text-[11px] rounded-full border border-hairline px-3 py-1.5 text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-5 mt-7">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent transition-colors"
                      >
                        <GithubIcon size={16} />
                        Source
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent transition-colors"
                      >
                        <ArrowUpRight size={16} strokeWidth={1.75} />
                        Live demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-28 md:mt-32">
            <p className="font-mono-label text-xs uppercase text-ink-faint mb-8">
              More engineering &amp; coursework
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sideProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl border border-hairline p-6 transition-colors hover:border-hairline-strong"
                >
                  <div className="h-20 mb-5 opacity-80 transition-opacity group-hover:opacity-100">
                    <ProjectDiagram kind={project.diagram} />
                  </div>
                  <p className="font-mono-label text-[10px] uppercase text-ink-faint mb-2">
                    {project.kind}
                  </p>
                  <h4 className="font-display text-xl text-ink mb-2">
                    {project.name}
                  </h4>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-label text-[10px] rounded-full border border-hairline px-2.5 py-1 text-ink-faint"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-accent transition-colors"
                    >
                      <GithubIcon size={13} />
                      Source
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

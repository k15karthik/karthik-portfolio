import { ArrowUpRight, FileDown, Mail } from "lucide-react";
import { profile } from "@/data/content";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container-page">
        <Reveal>
          <span className="font-mono-label text-xs text-accent">07 — Contact</span>
          <h2 className="font-display text-4xl md:text-6xl text-ink text-balance leading-[1.08] mt-5 max-w-3xl">
            Let&apos;s talk about what you&apos;re building.
          </h2>
          <p className="mt-6 max-w-lg text-ink-muted leading-relaxed">
            Open to conversations about data engineering, AI infrastructure,
            and roles where both meet. Based in the Chicago area — reach out
            directly.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-12 inline-flex items-center gap-4 text-2xl sm:text-4xl font-display text-ink hover:text-accent transition-colors text-balance break-all sm:break-normal"
          >
            {profile.email}
            <ArrowUpRight
              size={28}
              strokeWidth={1.5}
              className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-3 text-sm text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-3 text-sm text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-3 text-sm text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={16} strokeWidth={1.75} />
              Email
            </a>
            <a
              href={profile.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-full bg-ink text-bg px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              <FileDown size={16} strokeWidth={1.75} />
              Résumé
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

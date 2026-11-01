"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { profile } from "@/data/content";
import { HeroField } from "./HeroField";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden hairline-b"
    >
      <div className="absolute inset-0">
        <HeroField />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 38%, transparent 0%, var(--bg) 92%)",
          }}
        />
      </div>

      <div className="container-page relative z-10 pt-28 pb-20 md:pt-24">
        <motion.p
          {...fadeUp(0)}
          className="font-mono-label text-xs uppercase text-accent mb-6"
        >
          M.S. Computer Science · Artificial Intelligence — University of Chicago
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.25rem] text-ink text-balance max-w-5xl"
        >
          Engineering the layer
          <br />
          between data and{" "}
          <span className="italic text-accent">intelligence.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.22)}
          className="mt-8 max-w-xl text-lg text-ink-muted leading-relaxed"
        >
          I build the pipelines, platforms, and agentic systems that turn raw
          data into something a model — or a decision-maker — can actually
          use. Summa Cum Laude graduate of UIC, now continuing into the
          MPCS AI specialization at the University of Chicago.
        </motion.p>

        <motion.div
          {...fadeUp(0.34)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink text-bg px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            View my work
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={profile.resumeHref}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-hairline-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <FileDown size={16} strokeWidth={1.75} />
            Download résumé
          </a>

          <div className="flex items-center gap-3 ml-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ink-faint hover:text-accent transition-colors"
      >
        <span className="font-mono-label text-[10px] uppercase">Scroll</span>
        <motion.span
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}

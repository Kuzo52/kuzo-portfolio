"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { easeOut } from "@/lib/motion";

type Props = {
  project: Project;
  index: number;
};

export function WorkCard({ project, index }: Props) {
  const demoHref = project.demoUrl ?? undefined;
  const hasDemo = Boolean(project.demoUrl);

  return (
    <motion.article
      className="group flex h-full flex-col rounded-[20px] border border-line bg-surface p-5 transition-[border-color,background-color,transform] duration-400 sm:p-6"
      style={{ transitionTimingFunction: "var(--ease-out)" }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.28), ease: easeOut }}
      whileHover={{ y: -3 }}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-text-muted">
          {project.type}
        </p>
        {project.live && (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-live/15 px-2 py-0.5 text-[11px] font-medium text-live">
            <span className="size-1.5 rounded-full bg-live" aria-hidden />
            Live
          </span>
        )}
      </div>

      <h3 className="font-display text-[1.35rem] font-semibold tracking-tight text-text sm:text-[1.45rem]">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-text-muted sm:text-[15px]">
        {project.summary}
      </p>

      {hasDemo ? (
        <a
          href={demoHref}
          target="_blank"
          rel="noopener noreferrer"
          className="tap mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-[12px] border border-line bg-bg-elevated text-[13px] font-medium text-text transition-colors duration-300 group-hover:border-accent/35 group-hover:text-accent hover:border-accent/50 hover:bg-accent-dim sm:w-auto sm:px-5"
          style={{ transitionTimingFunction: "var(--ease-out)" }}
        >
          Demo
        </a>
      ) : (
        <span
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-[12px] border border-line/60 bg-bg-elevated/40 text-[13px] font-medium text-text-muted/70 sm:w-auto sm:px-5"
          title="Ссылка скоро появится"
        >
          Demo скоро
        </span>
      )}
    </motion.article>
  );
}

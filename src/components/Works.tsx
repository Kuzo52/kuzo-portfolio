"use client";

import { projects } from "@/data/projects";
import { WorkCard } from "@/components/WorkCard";

export function Works() {
  return (
    <section
      id="works"
      className="section-pad scroll-mt-20 py-20 sm:py-28"
      aria-labelledby="works-title"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-xl sm:mb-14">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-text-muted">
            Избранное
          </p>
          <h2
            id="works-title"
            className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-text"
          >
            Работы
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-muted sm:text-[16px]">
            Лендинги, SaaS и&nbsp;Mini&nbsp;Apps — десять кейсов с&nbsp;живыми демо.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <WorkCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

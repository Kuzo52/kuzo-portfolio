"use client";

import { categories, projects } from "@/data/projects";
import { WorkCard } from "@/components/WorkCard";

export function Works() {
  return (
    <section
      id="works"
      className="section-pad scroll-mt-20 py-20 sm:py-28"
      aria-labelledby="works-title"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-xl sm:mb-16">
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
            Лендинги, SaaS и&nbsp;Mini&nbsp;Apps — с&nbsp;живыми демо.
          </p>
        </header>

        <div className="flex flex-col gap-14 sm:gap-16">
          {categories.map((category) => {
            const items = projects.filter((p) => p.category === category.id);
            if (items.length === 0) return null;

            return (
              <div key={category.id}>
                <h3 className="mb-5 font-display text-[13px] font-medium uppercase tracking-[0.22em] text-accent sm:mb-6">
                  {category.label}
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                  {items.map((project, index) => (
                    <WorkCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

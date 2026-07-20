"use client";

import { categories, projects } from "@/data/projects";
import { WorkCard } from "@/components/WorkCard";

export function Works() {
  return (
    <section
      id="works"
      className="section-pad scroll-mt-20 pt-6 pb-12 sm:pt-14 sm:pb-28"
      aria-labelledby="works-title"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center sm:mb-14">
          <h2
            id="works-title"
            className="font-display text-[clamp(2.25rem,6vw,3.5rem)] font-semibold tracking-tight text-text"
          >
            Работы
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-text-muted sm:text-[16px]">
            Лендинги, SaaS и&nbsp;Mini&nbsp;Apps — с&nbsp;живыми проектами.
          </p>
        </header>

        <div className="flex flex-col gap-10 sm:gap-16">
          {categories.map((category) => {
            const items = projects.filter((p) => p.category === category.id);
            if (items.length === 0) return null;

            return (
              <div key={category.id}>
                <h3 className="mb-5 text-center font-display text-[13px] font-medium uppercase tracking-[0.22em] text-accent sm:mb-6 sm:text-left">
                  {category.label}
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                  {items.map((project) => (
                    <WorkCard key={project.id} project={project} />
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

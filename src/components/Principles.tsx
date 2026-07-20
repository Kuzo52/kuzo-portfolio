"use client";

import { principles } from "@/data/projects";

export function Principles() {
  return (
    <section
      id="approach"
      className="section-pad scroll-mt-20 py-12 sm:py-28"
      aria-labelledby="approach-title"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center sm:mb-14">
          <h2
            id="approach-title"
            className="font-display text-[clamp(2.25rem,6vw,3.5rem)] font-semibold tracking-tight text-text"
          >
            Как я&nbsp;работаю?
          </h2>
        </header>

        <ol className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {principles.map((item, index) => (
            <li
              key={item.title}
              className="rounded-[20px] border border-line bg-bg-elevated p-6 sm:p-7"
            >
              <span className="font-display text-[13px] font-medium text-accent">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-display text-[1.25rem] font-semibold tracking-tight text-text">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-text-muted sm:text-[15px]">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

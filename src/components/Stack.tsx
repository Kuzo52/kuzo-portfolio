"use client";

import { motion } from "framer-motion";
import { stack } from "@/data/projects";
import { easeOut } from "@/lib/motion";

export function Stack() {
  return (
    <section
      id="stack"
      className="section-pad scroll-mt-20 py-20 sm:py-28"
      aria-labelledby="stack-title"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-xl sm:mb-12">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-text-muted">
            Инструменты
          </p>
          <h2
            id="stack-title"
            className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-text"
          >
            Стек
          </h2>
        </header>

        <ul className="flex flex-wrap gap-2.5 sm:gap-3">
          {stack.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: easeOut,
              }}
            >
              <span
                className="inline-flex min-h-11 items-center rounded-[12px] border border-line bg-surface px-4 text-[14px] font-medium text-text-muted transition-colors duration-300 hover:border-accent/30 hover:text-accent sm:min-h-12 sm:px-5 sm:text-[15px]"
                style={{ transitionTimingFunction: "var(--ease-out)" }}
              >
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

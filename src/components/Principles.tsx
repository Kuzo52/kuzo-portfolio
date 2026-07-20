"use client";

import { motion } from "framer-motion";
import { principles } from "@/data/projects";
import { easeOut } from "@/lib/motion";

export function Principles() {
  return (
    <section
      id="approach"
      className="section-pad scroll-mt-20 py-20 sm:py-28"
      aria-labelledby="approach-title"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-xl sm:mb-14">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-text-muted">
            Метод
          </p>
          <h2
            id="approach-title"
            className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-text"
          >
            Как работаю
          </h2>
        </header>

        <ol className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {principles.map((item, index) => (
            <motion.li
              key={item.title}
              className="rounded-[20px] border border-line bg-bg-elevated p-6 sm:p-7"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: easeOut,
              }}
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
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

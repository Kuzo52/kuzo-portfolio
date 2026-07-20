"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/projects";
import { easeOut } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-pad relative flex min-h-[100dvh] flex-col items-center justify-center pb-16 pt-[calc(5.5rem+var(--safe-t))] text-center"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        <motion.h1
          id="hero-title"
          className="font-display text-[clamp(4.5rem,22vw,12rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-accent"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          KUZO
        </motion.h1>

        <motion.p
          className="mt-4 text-[clamp(0.85rem,2.4vw,1.15rem)] font-medium uppercase tracking-[0.42em] text-text-muted sm:mt-5 sm:tracking-[0.5em]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: easeOut }}
        >
          Portfolio
        </motion.p>

        <motion.div
          className="mt-12 flex w-full max-w-sm flex-col gap-3 sm:mt-14 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: easeOut }}
        >
          <a
            href="#works"
            className="tap inline-flex min-h-12 items-center justify-center rounded-[12px] bg-accent px-7 text-[14px] font-medium text-bg transition-colors duration-300 hover:bg-accent-strong"
            style={{ transitionTimingFunction: "var(--ease-out)" }}
          >
            Смотреть работы
          </a>
          <a
            href={contact.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="tap inline-flex min-h-12 items-center justify-center rounded-[12px] border border-line bg-bg-elevated/50 px-7 text-[14px] font-medium text-text transition-colors duration-300 hover:border-accent/40 hover:text-accent"
            style={{ transitionTimingFunction: "var(--ease-out)" }}
          >
            Обсудить проект
          </a>
        </motion.div>
      </div>
    </section>
  );
}

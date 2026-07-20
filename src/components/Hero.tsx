"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/projects";
import { easeOut } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-pad relative flex min-h-[100dvh] flex-col justify-end pb-16 pt-[calc(5.5rem+var(--safe-t))] sm:justify-center sm:pb-24 sm:pt-28"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.p
          className="mb-5 text-[12px] font-medium uppercase tracking-[0.22em] text-text-muted sm:mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          Frontend · Москва
        </motion.p>

        <motion.h1
          id="hero-title"
          className="font-display text-[clamp(3.4rem,14vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-accent"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease: easeOut }}
        >
          Kuzo
        </motion.h1>

        <motion.p
          className="mt-6 max-w-[22ch] text-[clamp(1.35rem,3.6vw,2.15rem)] font-medium leading-[1.25] tracking-[-0.02em] text-text sm:mt-8 sm:max-w-[28ch]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
        >
          Делаю интерфейсы, которые выглядят дорого и&nbsp;работают быстро.
        </motion.p>

        <motion.p
          className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-text-muted sm:mt-6 sm:text-[16px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
        >
          Frontend-разработчик. Лендинги, SaaS и&nbsp;Telegram Mini&nbsp;Apps.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: easeOut }}
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

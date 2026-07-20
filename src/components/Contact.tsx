"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/projects";
import { easeOut } from "@/lib/motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad scroll-mt-20 py-20 sm:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="rounded-[24px] border border-line bg-bg-elevated px-6 py-12 sm:px-10 sm:py-16 lg:px-14 mb-[calc(2rem+var(--safe-b))]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-text-muted">
            Контакт
          </p>
          <h2
            id="contact-title"
            className="max-w-[16ch] font-display text-[clamp(1.85rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-text"
          >
            Есть задача — напишите.
          </h2>
          <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-text-muted sm:text-[16px]">
            Обсудим объём, сроки и&nbsp;формат. Отвечаю в&nbsp;Telegram в&nbsp;рабочие дни.
          </p>

          <div className="mt-9 sm:mt-10">
            <a
              href={contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="tap inline-flex min-h-12 items-center justify-center rounded-[12px] bg-accent px-7 text-[14px] font-medium text-bg transition-colors duration-300 hover:bg-accent-strong"
              style={{ transitionTimingFunction: "var(--ease-out)" }}
            >
              Telegram {contact.telegramHandle}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

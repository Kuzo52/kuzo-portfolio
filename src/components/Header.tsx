"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, contact } from "@/data/projects";
import { easeOut } from "@/lib/motion";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ paddingTop: "var(--safe-t)" }}
    >
      <div className="section-pad mx-auto flex h-14 max-w-7xl items-center justify-between sm:h-16">
        <a
          href="#hero"
          className="tap font-display text-[15px] font-semibold tracking-tight text-text"
          aria-label="На&nbsp;главную"
        >
          Kuzo
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="tap text-[13px] text-text-muted transition-colors duration-300 hover:text-accent"
              style={{ transitionTimingFunction: "var(--ease-out)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={contact.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="tap hidden rounded-[12px] bg-accent px-4 py-2 text-[13px] font-medium text-bg transition-colors duration-300 hover:bg-accent-strong md:inline-flex"
          style={{ transitionTimingFunction: "var(--ease-out)" }}
        >
          Telegram
        </a>

        <button
          type="button"
          className="tap flex size-10 items-center justify-center rounded-[12px] border border-line bg-bg-elevated/60 text-text md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Меню</span>
          <span className="relative block h-3.5 w-4" aria-hidden>
            <span
              className={`absolute left-0 h-px w-full bg-current transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
              style={{ transitionTimingFunction: "var(--ease-out)" }}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-current transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
              style={{ transitionTimingFunction: "var(--ease-out)" }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
            aria-label="Мобильная"
          >
            <ul className="section-pad flex flex-col gap-1 py-4 pb-[calc(1rem+var(--safe-b))]">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="tap flex min-h-11 items-center rounded-[12px] px-3 text-[15px] text-text-muted transition-colors hover:bg-accent-dim hover:text-accent"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={contact.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap flex min-h-11 items-center justify-center rounded-[12px] bg-accent px-4 text-[14px] font-medium text-bg hover:bg-accent-strong"
                  onClick={() => setOpen(false)}
                >
                  Написать в&nbsp;Telegram
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

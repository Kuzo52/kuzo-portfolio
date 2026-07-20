"use client";

import { contact } from "@/data/projects";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.788.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad scroll-mt-20 py-12 sm:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-[calc(2rem+var(--safe-b))] rounded-[24px] border border-line bg-bg-elevated px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
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
              aria-label={`Написать в Telegram ${contact.telegramHandle}`}
              className="tap inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[12px] bg-[#2AABEE] px-7 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#229ED9]"
              style={{ transitionTimingFunction: "var(--ease-out)" }}
            >
              <TelegramIcon className="size-5 shrink-0" />
              <span className="font-semibold tracking-tight">
                {contact.telegramHandle}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

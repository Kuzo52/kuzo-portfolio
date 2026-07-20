import { contact, nav } from "@/data/projects";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="section-pad border-t border-line pb-[calc(2rem+var(--safe-b))] pt-12 sm:pt-14"
      role="contentinfo"
    >
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-[18px] font-semibold tracking-tight text-accent">
            Kuzo
          </p>
          <p className="mt-3 max-w-[28ch] text-[14px] leading-relaxed text-text-muted">
            Frontend-разработчик. Москва. Интерфейсы без лишнего шума.
          </p>
        </div>

        <nav aria-label="Подвал">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-text-muted">
            Навигация
          </p>
          <ul className="flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="tap text-[14px] text-text transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-text-muted">
            Связь
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href={contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="tap text-[14px] text-text transition-colors hover:text-accent"
              >
                {contact.telegramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-text-muted">
          © {year} Kuzo. Все права защищены.
        </p>
        <p className="text-[12px] text-text-muted">Champagne Graphite</p>
      </div>
    </footer>
  );
}

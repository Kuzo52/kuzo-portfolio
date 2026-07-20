export type Project = {
  id: string;
  title: string;
  type: string;
  summary: string;
  demoUrl: string | null;
  live: boolean;
};

export const projects: Project[] = [
  {
    id: "pulse",
    title: "Pulse",
    type: "SaaS / mini CRM",
    summary: "Сделки, клиенты и статусы в одном кабинете — без лишнего шума.",
    demoUrl: "https://kuzo52.github.io/pulse-crm/",
    live: true,
  },
  {
    id: "framelab",
    title: "FrameLab",
    type: "Фотостудия с записью",
    summary: "Запись на съёмку и портфолио студии в одном спокойном потоке.",
    demoUrl: "https://kuzo52.github.io/frame-lab/",
    live: true,
  },
  {
    id: "lait-pur",
    title: "Lait Pur",
    type: "Брендовый лендинг",
    summary: "Премиальная подача продукта: история, вкусы, путь от фермы до стекла.",
    demoUrl: "https://kuzo52.github.io/lait-pur/",
    live: true,
  },
  {
    id: "nordic",
    title: "Nordic Furniture",
    type: "Каталог мебели",
    summary: "Каталог с фильтрами и карточками, где удобно выбирать и сравнивать.",
    demoUrl: "https://kuzo52.github.io/nordic-furniture/",
    live: true,
  },
  {
    id: "kontur",
    title: "KONTUR",
    type: "Детейлинг-студия",
    summary: "Запись и услуги детейлинга без путаницы в пакетах и сроках.",
    demoUrl: "https://kuzo52.github.io/kontur-detailing/",
    live: true,
  },
  {
    id: "gromov",
    title: "Gromov Strategy",
    type: "Личный хаб эксперта",
    summary: "Личный сайт-хаб: позиционирование, услуги и прямой контакт.",
    demoUrl: "https://kuzo52.github.io/gromov-strategy/",
    live: true,
  },
  {
    id: "neurocraft",
    title: "NeuroCraft",
    type: "Лендинг курса",
    summary: "Посадочная страница курса с ясной структурой и сильным оффером.",
    demoUrl: "https://kuzo52.github.io/neurocraft-course/",
    live: true,
  },
  {
    id: "kuzospy",
    title: "KuzoSpy",
    type: "Telegram Mini App",
    summary: "Игра «Шпион» прямо в Telegram — без установки и лишних шагов.",
    demoUrl: "https://kuzo52.github.io/kuzospy/",
    live: true,
  },
  {
    id: "kuzocards",
    title: "KuzoCards",
    type: "Telegram Mini App",
    summary: "Карточки и механика внутри Telegram с быстрым стартом из бота.",
    demoUrl: "https://kuzo52.github.io/KuzoCards/",
    live: true,
  },
  {
    id: "aeternum",
    title: "AETERNUM",
    type: "Люкс-бренд часов",
    summary: "Люксовая витрина часов: атмосфера, характер, акцент на детали.",
    demoUrl: null,
    live: false,
  },
];

export const principles = [
  {
    title: "Чистота",
    text: "Семантика, воздух и иерархия. Ничего лишнего на экране.",
  },
  {
    title: "Motion",
    text: "Движение с физикой: мягкий вход, точный отклик, без шума.",
  },
  {
    title: "Результат",
    text: "Интерфейс должен помогать бизнесу: быстрее, яснее, дороже.",
  },
] as const;

export const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "Vite",
] as const;

export const contact = {
  telegram: "https://t.me/kuzoceo",
  telegramHandle: "@kuzoceo",
  /** Личный email в локальных проектах не найден — обновите при необходимости. */
  email: "hello@kuzoself.ru",
} as const;

export const nav = [
  { href: "#works", label: "Работы" },
  { href: "#approach", label: "Подход" },
  { href: "#stack", label: "Стек" },
  { href: "#contact", label: "Контакт" },
] as const;

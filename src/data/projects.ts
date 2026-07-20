export type ProjectCategory = "landings" | "saas" | "mini-apps";

export type Project = {
  id: string;
  title: string;
  type: string;
  summary: string;
  demoUrl: string | null;
  live: boolean;
  category: ProjectCategory;
};

export const categories: {
  id: ProjectCategory;
  label: string;
}[] = [
  { id: "landings", label: "Landings" },
  { id: "saas", label: "SaaS" },
  { id: "mini-apps", label: "Mini Apps" },
];

export const projects: Project[] = [
  {
    id: "framelab",
    title: "FrameLab",
    type: "Фотостудия с записью",
    summary: "Запись на съёмку и портфолио студии в одном спокойном потоке.",
    demoUrl: "https://kuzo52.github.io/frame-lab/",
    live: true,
    category: "landings",
  },
  {
    id: "lait-pur",
    title: "Lait Pur",
    type: "Брендовый лендинг",
    summary: "Премиальная подача продукта: история, вкусы, путь от фермы до стекла.",
    demoUrl: "https://kuzo52.github.io/lait-pur/",
    live: true,
    category: "landings",
  },
  {
    id: "nordic",
    title: "Nordic Furniture",
    type: "Каталог мебели",
    summary: "Каталог с фильтрами и карточками, где удобно выбирать и сравнивать.",
    demoUrl: "https://kuzo52.github.io/nordic-furniture/",
    live: true,
    category: "landings",
  },
  {
    id: "kontur",
    title: "KONTUR",
    type: "Детейлинг-студия",
    summary: "Запись и услуги детейлинга без путаницы в пакетах и сроках.",
    demoUrl: "https://kuzo52.github.io/kontur-detailing/",
    live: true,
    category: "landings",
  },
  {
    id: "gromov",
    title: "Gromov Strategy",
    type: "Личный хаб эксперта",
    summary: "Личный сайт-хаб: позиционирование, услуги и прямой контакт.",
    demoUrl: "https://kuzo52.github.io/gromov-strategy/",
    live: true,
    category: "landings",
  },
  {
    id: "neurocraft",
    title: "NeuroCraft",
    type: "Лендинг курса",
    summary: "Посадочная страница курса с ясной структурой и сильным оффером.",
    demoUrl: "https://kuzo52.github.io/neurocraft-course/",
    live: true,
    category: "landings",
  },
  {
    id: "pulse",
    title: "Pulse",
    type: "SaaS / mini CRM",
    summary: "Сделки, клиенты и статусы в одном кабинете — без лишнего шума.",
    demoUrl: "https://kuzo52.github.io/pulse-crm/",
    live: true,
    category: "saas",
  },
  {
    id: "kuzospy",
    title: "KuzoSpy",
    type: "Telegram Mini App",
    summary: "Игра «Шпион» прямо в Telegram — без установки и лишних шагов.",
    demoUrl: "https://kuzo52.github.io/kuzospy/",
    live: true,
    category: "mini-apps",
  },
  {
    id: "kuzocards",
    title: "KuzoCards",
    type: "Telegram Mini App",
    summary: "Карточки и механика внутри Telegram с быстрым стартом из бота.",
    demoUrl: "https://kuzo52.github.io/KuzoCards/",
    live: true,
    category: "mini-apps",
  },
  {
    id: "kuzomusic",
    title: "KuzoMusic",
    type: "Telegram-бот",
    summary: "Поиск треков и установка музыки в профиль — прямо в Telegram.",
    demoUrl: "https://t.me/kuzomusicbot",
    live: true,
    category: "mini-apps",
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
} as const;

export const nav = [
  { href: "#works", label: "Работы" },
  { href: "#approach", label: "Подход" },
  { href: "#stack", label: "Стек" },
  { href: "#contact", label: "Контакт" },
] as const;

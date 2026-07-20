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
    summary:
      "Студии нужен сайт, где клиент сразу видит стиль съёмок и записывается без переписки. Портфолио и слоты в одном месте снижают простой и ускоряют запись. Так студия выглядит дороже и закрывает заявки сама.",
    demoUrl: "https://kuzo52.github.io/frame-lab/",
    live: true,
    category: "landings",
  },
  {
    id: "nordic",
    title: "Nordic Furniture",
    type: "Каталог мебели",
    summary:
      "Мебельному бренду нужен каталог, где товар легко найти и сравнить без звонка менеджеру. Фильтры и карточки держат внимание до запроса. Сайт забирает рутину консультаций и поднимает средний чек.",
    demoUrl: "https://kuzo52.github.io/nordic-furniture/",
    live: true,
    category: "landings",
  },
  {
    id: "kontur",
    title: "KONTUR",
    type: "Детейлинг-студия",
    summary:
      "Детейлингу нужен понятный вход: услуги, пакеты и запись без путаницы. Клиент выбирает услугу за минуты и не теряется в прайсе. Студия получает готовые заявки вместо пустых звонков.",
    demoUrl: "https://kuzo52.github.io/kontur-detailing/",
    live: true,
    category: "landings",
  },
  {
    id: "gromov",
    title: "Gromov Strategy",
    type: "Личный хаб эксперта",
    summary:
      "Эксперту нужен личный хаб, который сразу объясняет ценность и ведёт к контакту. Без лишних страниц — только позиционирование, услуги и прямой путь к диалогу. Такой сайт экономит время на прогреве и фильтрует нецелевые запросы.",
    demoUrl: "https://kuzo52.github.io/gromov-strategy/",
    live: true,
    category: "landings",
  },
  {
    id: "neurocraft",
    title: "NeuroCraft",
    type: "Лендинг курса",
    summary:
      "Курсу нужна посадочная, где оффер, программа и цена читаются с первого экрана. Человек понимает «зачем» и идёт к оплате без лишних кликов. Лендинг собирает заявки и снижает отвал на пути к покупке.",
    demoUrl: "https://kuzo52.github.io/neurocraft-course/",
    live: true,
    category: "landings",
  },
  {
    id: "pulse",
    title: "Pulse",
    type: "SaaS / mini CRM",
    summary:
      "Фрилансеру и небольшой студии нужна CRM без тяжёлого внедрения. Сделки, клиенты и статусы в одном кабинете — ничего лишнего. Команда видит воронку целиком и не теряет деньги в хаосе таблиц.",
    demoUrl: "https://kuzo52.github.io/pulse-crm/",
    live: true,
    category: "saas",
  },
  {
    id: "kuzospy",
    title: "KuzoSpy",
    type: "Telegram Mini App",
    summary:
      "Игре нужен запуск там, где уже сидит аудитория — в Telegram. Без установки и регистрации люди начинают партию за секунды. Так продукт растёт за счёт привычной среды, а не за счёт рекламы приложения.",
    demoUrl: "https://kuzo52.github.io/kuzospy/",
    live: true,
    category: "mini-apps",
  },
  {
    id: "kuzocards",
    title: "KuzoCards",
    type: "Telegram Mini App",
    summary:
      "Карточной механике нужен быстрый вход из бота без лишних экранов. Пользователь открывает Mini App и сразу играет. Формат удерживает внимание внутри мессенджера и упрощает возврат к продукту.",
    demoUrl: "https://kuzo52.github.io/KuzoCards/",
    live: true,
    category: "mini-apps",
  },
  {
    id: "kuzomusic",
    title: "KuzoMusic",
    type: "Telegram-бот",
    summary:
      "Людям нужен поиск музыки без перехода в отдельные сервисы. Бот находит трек и ставит его в профиль прямо в Telegram. Это экономит шаги и даёт привычный сценарий «спросил — получил».",
    demoUrl: "https://t.me/kuzomusicbot",
    live: true,
    category: "mini-apps",
  },
];

export const principles = [
  {
    title: "Чистота",
    text: "Воздух, иерархия и ясный смысл. На экране только то, что ведёт к действию.",
  },
  {
    title: "Темп",
    text: "Мягкий вход, точный отклик, без визуального шума. Интерфейс ощущается живо.",
  },
  {
    title: "Результат",
    text: "Сайт должен помогать бизнесу: быстрее заявки, яснее оффер, дороже восприятие.",
  },
] as const;

export const contact = {
  telegram: "https://t.me/kuzoceo",
  telegramHandle: "@kuzoceo",
} as const;

export const nav = [
  { href: "#works", label: "Работы" },
  { href: "#approach", label: "Подход" },
  { href: "#contact", label: "Контакт" },
] as const;

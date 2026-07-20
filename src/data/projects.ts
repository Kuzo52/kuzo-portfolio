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
  { id: "landings", label: "Лендинги" },
  { id: "saas", label: "SaaS" },
  { id: "mini-apps", label: "Mini Apps" },
];

export const projects: Project[] = [
  {
    id: "framelab",
    title: "FrameLab",
    type: "Фотостудия с записью",
    summary:
      "Студии нужен сайт, где клиент сразу видит стиль съёмок и\u00A0записывается без\u00A0переписки. Портфолио и\u00A0слоты в\u00A0одном месте снижают простой и\u00A0ускоряют запись. Так студия выглядит дороже и\u00A0закрывает заявки сама.",
    demoUrl: "https://kuzo52.github.io/frame-lab/",
    live: true,
    category: "landings",
  },
  {
    id: "nordic",
    title: "Nordic Furniture",
    type: "Каталог мебели",
    summary:
      "Мебельному бренду нужен каталог, где товар легко найти и\u00A0сравнить без\u00A0звонка менеджеру. Фильтры и\u00A0карточки держат внимание до\u00A0запроса. Сайт снимает рутину консультаций и\u00A0помогает поднимать средний чек.",
    demoUrl: "https://kuzo52.github.io/nordic-furniture/",
    live: true,
    category: "landings",
  },
  {
    id: "kontur",
    title: "KONTUR",
    type: "Детейлинг-студия",
    summary:
      "Детейлингу нужен понятный вход: услуги, пакеты и\u00A0запись без\u00A0путаницы. Клиент выбирает услугу за\u00A0минуты и\u00A0не\u00A0теряется в\u00A0прайсе. Студия получает готовые заявки вместо пустых звонков.",
    demoUrl: "https://kuzo52.github.io/kontur-detailing/",
    live: true,
    category: "landings",
  },
  {
    id: "gromov",
    title: "Gromov Strategy",
    type: "Личный хаб эксперта",
    summary:
      "Эксперту нужен личный хаб, который сразу объясняет ценность и\u00A0ведёт к\u00A0контакту. Без\u00A0лишних страниц — только позиционирование, услуги и\u00A0прямой путь к\u00A0диалогу. Такой сайт экономит время на\u00A0прогреве и\u00A0отсекает нецелевые запросы.",
    demoUrl: "https://kuzo52.github.io/gromov-strategy/",
    live: true,
    category: "landings",
  },
  {
    id: "neurocraft",
    title: "NeuroCraft",
    type: "Лендинг курса",
    summary:
      "Курсу нужна посадочная страница, где оффер, программа и\u00A0цена читаются с\u00A0первого экрана. Человек понимает «зачем» и\u00A0идёт к\u00A0оплате без\u00A0лишних кликов. Лендинг собирает заявки и\u00A0снижает потери на\u00A0пути к\u00A0покупке.",
    demoUrl: "https://kuzo52.github.io/neurocraft-course/",
    live: true,
    category: "landings",
  },
  {
    id: "pulse",
    title: "Pulse",
    type: "SaaS / mini CRM",
    summary:
      "Фрилансеру и\u00A0небольшой студии нужна CRM без\u00A0тяжёлого внедрения. Сделки, клиенты и\u00A0статусы — в\u00A0одном кабинете, без\u00A0лишнего. Команда видит воронку целиком и\u00A0не\u00A0теряет деньги в\u00A0хаосе таблиц.",
    demoUrl: "https://kuzo52.github.io/pulse-crm/",
    live: true,
    category: "saas",
  },
  {
    id: "kuzospy",
    title: "KuzoSpy",
    type: "Telegram Mini App",
    summary:
      "Игре нужен запуск там, где уже есть аудитория, — в\u00A0Telegram. Без\u00A0установки и\u00A0регистрации люди начинают партию за\u00A0секунды. Продукт растёт за\u00A0счёт привычной среды, а\u00A0не\u00A0за\u00A0счёт рекламы приложения.",
    demoUrl: "https://kuzo52.github.io/kuzospy/",
    live: true,
    category: "mini-apps",
  },
  {
    id: "kuzocards",
    title: "KuzoCards",
    type: "Telegram Mini App",
    summary:
      "Карточной механике нужен быстрый вход из\u00A0бота без\u00A0лишних экранов. Пользователь открывает Mini\u00A0App и\u00A0сразу играет. Формат удерживает внимание внутри мессенджера и\u00A0упрощает возврат к\u00A0продукту.",
    demoUrl: "https://kuzo52.github.io/KuzoCards/",
    live: true,
    category: "mini-apps",
  },
  {
    id: "kuzomusic",
    title: "KuzoMusic",
    type: "Telegram-бот",
    summary:
      "Людям нужен поиск музыки без\u00A0перехода в\u00A0отдельные сервисы. Бот находит трек и\u00A0ставит его в\u00A0профиль прямо в\u00A0Telegram. Это экономит шаги и\u00A0даёт привычный сценарий «спросил — получил».",
    demoUrl: "https://t.me/kuzomusicbot",
    live: true,
    category: "mini-apps",
  },
];

export const principles = [
  {
    title: "Чистота",
    text: "Воздух, иерархия и\u00A0ясный смысл. На\u00A0экране только то, что ведёт к\u00A0действию.",
  },
  {
    title: "Темп",
    text: "Мягкий вход, точный отклик, без\u00A0визуального шума. Интерфейс ощущается живым.",
  },
  {
    title: "Результат",
    text: "Сайт должен помогать бизнесу: быстрее заявки, яснее оффер, выше доверие.",
  },
] as const;

export const contact = {
  telegram: "https://t.me/kuzoceo",
  telegramHandle: "@kuzoceo",
} as const;

export const nav = [
  { href: "#works", label: "Работы" },
  { href: "#approach", label: "Как я работаю" },
  { href: "#contact", label: "Контакт" },
] as const;

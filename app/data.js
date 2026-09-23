// Все личные данные лежат тут одним местом — легко поменять без правки компонентов.

export const profile = {
  name: "Расул",
  role: "ИП · 4 курс КБТУ",
  tagline: "Автоматизирую бизнес-процессы: боты, сайты и всё, что экономит людям время.",
  avatarUrl: "/about-me/avatar.jpg", // lives in public/, prefixed with basePath from next.config.mjs
};

export const about = {
  text: `Меня зовут Расул. Я ИП и учусь на 4 курсе КБТУ. Занимаюсь
  автоматизацией бизнес-процессов — создаю Telegram-ботов, сайты и другие
  инструменты, которые помогают бизнесу меньше делать руками. Параллельно
  прокачиваю фронтенд на React/Next.js, чтобы собирать интерфейсы под свои
  проекты самому, от и до.`,
  skills: ["Автоматизация бизнеса", "Telegram-боты", "Next.js / React", "JavaScript", "Git / GitHub"],
};

export const contacts = [
  {
    label: "GitHub",
    value: "@yanekissayabully",
    href: "https://github.com/yanekissayabully",
    icon: "🐙",
  },
  {
    label: "Instagram",
    value: "@guccikastryulya",
    href: "https://instagram.com/guccikastryulya",
    icon: "📸",
  },
  {
    label: "Telegram",
    value: "@prettyxuetty",
    href: "https://t.me/prettyxuetty",
    icon: "✈️",
  },
  {
    label: "Address",
    value: "Planet Earth 🌍",
    href: null,
    icon: "📍",
  },
];

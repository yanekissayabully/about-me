# About Me — Расул

Self-promotional SPA на Next.js (App Router, статический экспорт), задеплоено на GitHub Pages.

**Live:** https://yanekissayabully.github.io/about-me/

## Стек

- Next.js (App Router, `output: "export"` — статический сайт, без сервера)
- Чистый CSS (CSS Modules), без UI-библиотек
- Деплой через GitHub Actions → GitHub Pages

## Структура

- `app/page.js` — собирает страницу из компонентов
- `app/components/Hero.jsx` — имя, фото, короткий tagline
- `app/components/About.jsx` — секция About Me + навыки
- `app/components/Contact.jsx` — безопасные контакты (без телефона/адреса)
- `app/components/Footer.jsx` — подвал
- `app/data.js` — весь текстовый контент в одном месте

## Запуск локально

```bash
npm install
npm run dev
```

Откроется на `http://localhost:3000/about-me/` (basePath настроен под GitHub Pages).

## Сборка

```bash
npm run build
```

Статика собирается в `out/` — её же публикует GitHub Actions на каждый пуш в `main`.

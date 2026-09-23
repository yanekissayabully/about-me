import "./globals.css";

export const metadata = {
  title: "Расул — About Me",
  description: "Личная страница-визитка: About Me, навыки и контакты.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

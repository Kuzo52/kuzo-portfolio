import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kuzo — frontend-разработчик, Москва",
  description:
    "Делаю интерфейсы, которые выглядят дорого и работают быстро. Лендинги, SaaS и Telegram Mini Apps.",
  authors: [{ name: "Kuzo" }],
  openGraph: {
    title: "Kuzo — frontend-разработчик, Москва",
    description:
      "Интерфейсы, которые выглядят дорого и работают быстро. Москва.",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0908",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-text">{children}</body>
    </html>
  );
}

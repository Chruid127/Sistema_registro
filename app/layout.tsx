import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeSwitcherHost } from "./components/theme-switcher-host";
import "./globals.css";

const themeScript = `
  (() => {
    const storageKey = "ozsford-theme-mode";
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const getSystemTheme = () => (mediaQuery.matches ? "dark" : "light");
    const savedMode = localStorage.getItem(storageKey);
    const mode =
      savedMode === "light" || savedMode === "dark" || savedMode === "system"
        ? savedMode
        : "system";
    const theme = mode === "system" ? getSystemTheme() : mode;

    root.dataset.themeMode = mode;
    root.dataset.theme = theme;
  })();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ozsford Security",
  description:
    "Sistema de gestion de personal y control de vehiculos asignados para colaboradores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
        <ThemeSwitcherHost />
      </body>
    </html>
  );
}

import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = "https://schachklub-simmering.vercel.app";

export const metadata: Metadata = {
  verification: { google: "VEvzVKTitK_WmreqXG0kIlRSKzm0RIerTJ0BJ_f129c" },
  title: "1. Simmeringer Schachklub - Wien",
  description: "Der 1. Simmeringer Schachklub lädt ein! Spiele Schach in Wien 1110, Simmering. Jeden Dienstag ab 15:30 im Cafe Michelle.",
  openGraph: {
    title: "1. Simmeringer Schachklub - Wien",
    description: "Spiele Schach in Wien 1110, Simmering. Jeden Dienstag ab 15:30 im Cafe Michelle.",
    url: baseUrl,
    type: "website",
    images: [
      {
        url: `${baseUrl}/vereinslogo.jpg`,
        width: 1200,
        height: 630,
        alt: "1. Simmeringer Schachklub Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1. Simmeringer Schachklub - Wien",
    description: "Spiele Schach in Wien 1110, Simmering. Jeden Dienstag ab 15:30 im Cafe Michelle.",
    images: [`${baseUrl}/vereinslogo.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

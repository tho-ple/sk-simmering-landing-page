import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaChessKnight } from "react-icons/fa";
import { SiLichess, SiChessdotcom } from "react-icons/si";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1. Simmeringer Schachklub - Wien",
  description: "Der 1. Simmeringer Schachklub lädt ein! Spiele Schach in Wien 1110, Simmering. Jeden Dienstag ab 15:30 im Cafe Michelle.",
  openGraph: {
    title: "1. Simmeringer Schachklub - Wien",
    description: "Spiele Schach in Wien 1110, Simmering. Jeden Dienstag ab 15:30 im Cafe Michelle.",
    url: "https://schachklub-simmering.vercel.app",
    type: "website",
    images: [
      {
        url: "https://schachklub-simmering.vercel.app/vereinslogo.jpg",
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
    images: ["https://schachklub-simmering.vercel.app/vereinslogo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        {children}
        <footer className="flex justify-center items-center mt-10 py-4 border-t border-gray-300 dark:border-gray-700">
          <a href="https://www.chess.com/club/1-simmeringer-schachklub/join" target="_blank" rel="noopener noreferrer" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-green-600">
            <SiChessdotcom size={28} />
          </a>
          <a href="https://lichess.org/team/1-simmeringer-schachklub" target="_blank" rel="noopener noreferrer" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-blue-600">
            <SiLichess size={28} />
          </a>
        </footer>
      </body>
    </html>
  );
}

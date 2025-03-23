import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { SiLichess, SiChessdotcom } from "react-icons/si";

// Load base URL from environment variables
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://schachklub-simmering.vercel.app";

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
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <header className="flex justify p-4">
          <Image
            src="/vereinslogo.jpg"
            alt="1. Simmeringer Schachklub Logo"
            width={80}
            height={80}
            className="rounded-full shadow-md"
          />
        </header>
        {children}
        <footer className="flex flex-col justify-center items-center mt-10 py-6 border-t border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-gray-800 shadow-md">
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">Trete unseren Online-Schachclubs bei:</p>
          <div className="flex space-x-6">
            <a href="https://www.chess.com/club/1-simmeringer-schachklub/join" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 transition-transform transform hover:scale-110">
              <SiChessdotcom size={28} className="mr-2" /> Chess.com Club
            </a>
            <a href="https://lichess.org/team/1-simmeringer-schachklub" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-transform transform hover:scale-110">
              <SiLichess size={28} className="mr-2" /> Lichess Team
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

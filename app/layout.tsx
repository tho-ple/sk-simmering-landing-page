import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { SiLichess, SiChessdotcom } from "react-icons/si";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <div className="flex flex-col min-h-screen">
          <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 shadow-md">
            <div className="flex items-center space-x-4">
              <Image src="/vereinslogo.jpg" alt="1. Simmeringer Schachklub Logo" width={60} height={60} className="rounded-full" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">1. Simmeringer Schachklub</span>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li><Link href="/club-info" className="hover:text-blue-600">Verein</Link></li>
                <li><Link href="/events" className="hover:text-blue-600">Events</Link></li>
                <li><Link href="/online-clubs" className="hover:text-blue-600">Online-Schachclubs</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600">Kontakt</Link></li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow p-6 max-w-4xl mx-auto">{children}</main>
          <footer className="flex flex-col justify-center items-center mt-10 py-6 border-t border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-gray-800 shadow-md">
            <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} 1. Simmeringer Schachklub</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

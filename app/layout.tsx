"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 shadow-md">
          {/* Logo + Club Name */}
          <div className="flex items-center space-x-4">
            <Image src="/vereinslogo.jpg" alt="1. Simmeringer Schachklub Logo" width={50} height={50} className="rounded-full" />
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white hidden md:block">
              1. Simmeringer Schachklub
            </h1>
          </div>

          {/* Burger Menu Button */}
          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          {/* Navigation */}
          <nav
            className={`absolute top-16 left-0 w-full bg-gray-200 dark:bg-gray-800 p-6 shadow-md transition-all duration-300 
            md:relative md:top-0 md:w-auto md:bg-transparent md:p-0 md:shadow-none 
            ${menuOpen ? "block" : "hidden md:block"}`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <Link href="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/club-info" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                  Verein
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/online-clubs" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                  Online-Schachclubs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="p-6 max-w-4xl mx-auto">{children}</main>

        <footer className="flex flex-col justify-center items-center mt-10 py-6 border-t border-gray-300 dark:border-gray-700 text-center bg-gray-200 dark:bg-gray-800 shadow-md">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} 1. Simmeringer Schachklub</p>
        </footer>
      </body>
    </html>
  );
}

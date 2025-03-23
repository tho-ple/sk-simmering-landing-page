import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://schachklub-simmering.vercel.app";

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

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://schachklub-simmering.vercel.app";

  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() }, // Home
    { url: `${baseUrl}/club-info`, lastModified: new Date().toISOString() }, // Verein
    { url: `${baseUrl}/events`, lastModified: new Date().toISOString() }, // Events
    { url: `${baseUrl}/online-clubs`, lastModified: new Date().toISOString() }, // Online-Schachclubs
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() }, // Kontakt
  ];
}

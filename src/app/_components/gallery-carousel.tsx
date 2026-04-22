"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GalleryImage } from "@/interfaces/gallery-image";

type Props = {
  images: GalleryImage[];
};

export function GalleryCarousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [paused, images.length]);

  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);

  if (images.length === 0) return null;

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] md:aspect-[16/9]">
        <Image
          key={images[currentIndex].src}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
          priority={currentIndex === 0}
        />

        {/* Gradient overlay for bottom controls */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Prev button */}
        {images.length > 1 && (
          <button
            onClick={prev}
            aria-label="Vorheriges Bild"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={next}
            aria-label="Nächstes Bild"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Bild ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors duration-150 ${
                  i === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* "Alle Fotos ansehen" link */}
        <div className="absolute bottom-3 right-4">
          <Link
            href="/gallery"
            className="inline-block bg-black/70 hover:bg-black/90 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-150"
          >
            Alle Fotos ansehen →
          </Link>
        </div>
      </div>
    </div>
  );
}

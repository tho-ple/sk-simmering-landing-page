import { Metadata } from "next";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { GalleryGrid } from "@/app/_components/gallery-grid";
import { getAllGalleryImages } from "@/lib/api";

export const metadata: Metadata = {
  title: "Galerie | 1. Simmeringer Schachklub",
};

export default function GalleryPage() {
  const images = getAllGalleryImages();

  return (
    <main>
      <Container>
        <Header />
        <section className="mb-32">
          <h1 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            Galerie
          </h1>
          {images.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              Noch keine Bilder vorhanden.
            </p>
          ) : (
            <GalleryGrid images={images} />
          )}
        </section>
      </Container>
    </main>
  );
}

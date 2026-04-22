import Image from "next/image";
import { GalleryImage } from "@/interfaces/gallery-image";

type Props = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img) => (
        <div
          key={img.filename}
          className="relative aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-100 dark:bg-gray-800"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}

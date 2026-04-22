import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Vereinsabend } from "@/app/_components/vereinsabend";
import { Kontakt } from "@/app/_components/contact";
import { MoreStories } from "@/app/_components/more-stories";
import { GalleryCarousel } from "@/app/_components/gallery-carousel";
import { getRecentPosts, getCarouselGalleryImages } from "@/lib/api";

export default function Index() {
  const recentPosts = getRecentPosts();
  const carouselImages = getCarouselGalleryImages(5);

  return (
    <main>
      <Container>
        <Intro/>
        <div className="flex flex-col items-center space-y-16 py-16">
          <Vereinsabend />
          <Kontakt />
          {carouselImages.length > 0 && (
            <section className="w-full max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold tracking-tight">
                Galerie
              </h2>
              <GalleryCarousel images={carouselImages} />
            </section>
          )}
        </div>
        {recentPosts.length > 0 && <MoreStories posts={recentPosts}/>}
      </Container>
    </main>
  );
}

import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Vereinsabend } from "@/app/_components/vereinsabend";
import { Kontakt } from "@/app/_components/contact";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro/>
        <div className="flex flex-col items-center space-y-16 py-16">
          <Vereinsabend />
          <Kontakt />
        </div>
        <MoreStories posts={allPosts}/>
      </Container>
    </main>
  );
}

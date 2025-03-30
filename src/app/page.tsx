import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Vereinsabend } from "@/app/_components/vereinsabend";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro/>
        <Vereinsabend />
        <MoreStories posts={allPosts}/>
      </Container>
    </main>
  );
}

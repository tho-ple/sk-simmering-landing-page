import ChessClubLogo from "@/app/_components/chess-logo"

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <ChessClubLogo/>
      <h1 className="text-5xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
        1. Simmeringer Schachverein
      </h1>
    </section>
  );
}

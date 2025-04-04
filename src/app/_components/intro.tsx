import ChessClubImageLogo from "@/app/_components/chess-club-logo-image"

export function Intro() {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center justify-between mt-8 mb-12">
      <div className="flex items-center space-x-6"> {/* was space-x-4 */}
        <div className="hidden md:block">
          <ChessClubImageLogo />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight animate-fade-in">
          1. Simmeringer Schachklub
        </h1>
      </div>

    </section>
  );
}

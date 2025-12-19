import Image from "next/image";

export default function ChessClubImageLogo() {
  return (
    <div className="w-16 h-16 relative rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/vereinslogo_pferd.jpg" // <-- Update this to your actual image path
        alt="Chess Club Logo"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

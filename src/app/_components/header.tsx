import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline">
        1. Simmeringer Schachverein
      </Link>
    </h2>
  );
};

export default Header;

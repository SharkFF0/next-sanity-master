import Link from "next/link";

export default function Navbar() {
    return (
      
        <header className="flex items-center justify-between py-4 pl-6">
          <Link
          href="/"
          className="text-4xl font-bold text-gray-800"
          >
            Felix Falldalen
          </Link>

          <div className="flex items-center pr-[100px] gap-12 text-xl font-semibold text-gray-800">
            <Link
            href="/projects"
            className="hover:underline"
            >
              Prosjekter
            </Link>

            <Link
            href="/about"
            className="hover:underline"
            >
              Om meg
            </Link>

            <Link
            href="/contact-me"
            className="hover:underline"
            >
              Kontakt meg

            </Link>


            
          </div>

        </header>
  );
}
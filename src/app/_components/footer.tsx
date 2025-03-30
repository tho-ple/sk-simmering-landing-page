import { SiLichess, SiChessdotcom } from "react-icons/si";

export function Footer() {
  return (
<footer className="bg-gray-200 dark:bg-gray-800 py-8 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Branding & Social Links */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Online Klubs</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm mt-2">
              Tritt unseren Online-Schachclubs bei und spiele mit uns weltweit.
            </p>
            {/* Social / Chess Club Links */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://www.chess.com/club/1-simmeringer-schachklub/join"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-transform transform hover:scale-110"
              >
                <SiChessdotcom size={28} />
              </a>
              <a
                href="https://lichess.org/team/1-simmeringer-schachklub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <SiLichess size={28} />
              </a>
            </div>
          </div>

          {/* Right Section: Links */}
          <div className="mt-6 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/about" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300">Über uns</a></li>
              <li><a href="/contact" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300">Kontakt</a></li>
              <li><a href="/privacy" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300">Datenschutz</a></li>
              <li><a href="/terms" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300">AGB</a></li>
              <li><a href="/impressum" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 font-semibold">Impressum</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
        © {new Date().getFullYear()} 1. Simmeringer Schachklub. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>

  );
}

export default Footer;

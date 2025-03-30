import { SiLichess, SiChessdotcom, SiFacebook, SiX, SiInstagram } from "react-icons/si";

export function Footer_Social() {
    return (
        <footer className="bg-gray-200 dark:bg-gray-800 py-12 border-t border-gray-300 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left items-center">
              
              {/* Left Section: Branding & Chess Club Links */}
              <div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">1. Simmeringer Schachklub</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Spiele Schach mit uns online!
                </p>
                <div className="flex justify-center md:justify-start space-x-6 mt-3">
                  <a
                    href="https://www.chess.com/club/1-simmeringer-schachklub/join"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-transform transform hover:scale-110"
                  >
                    <SiChessdotcom size={32} />
                  </a>
                  <a
                    href="https://lichess.org/team/1-simmeringer-schachklub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-transform transform hover:scale-110"
                  >
                    <SiLichess size={32} />
                  </a>
                </div>
              </div>
    
              {/* Right Section: Social Media Links */}
              <div className="flex flex-col items-center md:items-end">
                <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">Folge uns auf</h3>
                <div className="flex space-x-6 mt-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-transform transform hover:scale-110">
                    <SiFacebook size={32} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-110">
                    <SiX size={32} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-transform transform hover:scale-110">
                    <SiInstagram size={32} />
                  </a>
                </div>
              </div>
            </div>
    
            {/* Footer Links */}
            <div className="mt-10 text-center">
              <ul className="flex flex-wrap justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="/about" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300">Über uns</a></li>
                <li><a href="/contact" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300">Kontakt</a></li>
                <li><a href="/privacy" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300">Datenschutz</a></li>
                <li><a href="/terms" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300">AGB</a></li>
                <li><a href="/impressum" className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 font-semibold">Impressum</a></li>
              </ul>
            </div>
    
             {/* Copyright Section */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
        © {new Date().getFullYear()} 1. Simmeringer Schachklub. Alle Rechte vorbehalten.
        </div>
          </div>
        </footer>
      );
    }

export default Footer_Social;

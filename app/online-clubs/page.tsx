
import { SiLichess, SiChessdotcom } from "react-icons/si";

export default function OnlineClubs() {
    return (
      <div>
        <p>Trete unserem Club auf <a href="https://www.chess.com/club/1-simmeringer-schachklub/join" target="_blank">Chess.com</a> oder <a href="https://lichess.org/team/1-simmeringer-schachklub" target="_blank">Lichess</a> bei!</p>
        <div className="flex space-x-6">
            <a href="https://www.chess.com/club/1-simmeringer-schachklub/join" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 transition-transform transform hover:scale-110">
              <SiChessdotcom size={28} className="mr-2" /> Chess.com Club
            </a>
            <a href="https://lichess.org/team/1-simmeringer-schachklub" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-transform transform hover:scale-110">
              <SiLichess size={28} className="mr-2" /> Lichess Team
            </a>
          </div>
      </div>
    );
  }
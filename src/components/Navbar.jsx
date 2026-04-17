import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import home from "../img/Vector (14).png";
import time from "../img/Vector (12).png";
import stat from "../img/ChartLine.png";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-3 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <img src={logo} alt="logo" className="w-auto h-auto max-w-[140px] sm:max-w-none" />

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full sm:w-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-green-800 text-white px-4 py-2 rounded-full flex items-center gap-1 text-sm sm:text-base"
                : "text-gray-600 px-4 py-2 flex items-center gap-1 text-sm sm:text-base"
            }
          >
            <img src={home} alt="home logo" className="w-4 h-4 sm:w-auto sm:h-auto" /> Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              isActive
                ? "bg-green-800 text-white px-4 py-2 rounded-full flex items-center gap-1 text-sm sm:text-base"
                : "text-gray-600 px-4 py-2 flex items-center gap-1 text-sm sm:text-base"
            }
          >
            <img src={time} alt="clock" className="w-4 h-4 sm:w-auto sm:h-auto" /> Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              isActive
                ? "bg-green-800 text-white px-4 py-2 rounded-full flex items-center gap-1 text-sm sm:text-base"
                : "text-gray-600 px-4 py-2 flex items-center gap-1 text-sm sm:text-base"
            }
          >
            <img src={stat} alt="stats" className="w-4 h-4 sm:w-auto sm:h-auto" /> Stats
          </NavLink>
        </div>
      </div>
    </div>
  );
}
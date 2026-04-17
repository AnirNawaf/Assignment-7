import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import home from "../img/Vector (14).png";
import time from "../img/Vector (12).png";
import stat from "../img/ChartLine.png";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-3 py-4 flex justify-between items-center">

        <img src={logo} alt="logo" />

        <div className="flex gap-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
            ? "bg-green-800 text-white px-4 py-2 rounded-full flex items-center gap-1" : "text-gray-600 px-4 py-2 flex items-center gap-1"
            }
          >
            <img src={home} alt="home logo" /> Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              isActive
            ? "bg-green-800 text-white px-4 py-2 rounded-full flex items-center gap-1" : "text-gray-600 px-4 py-2 flex items-center gap-1"
            }
          >
            <img src={time} alt="clock" /> Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              isActive
            ? "bg-green-800 text-white px-4 py-2 rounded-full flex items-center gap-1" : "text-gray-600 px-4 py-2 flex items-center gap-1"
            }
          >
            <img src={stat} alt="stats" /> Stats
          </NavLink>

        </div>
      </div>
    </div>
  );
}
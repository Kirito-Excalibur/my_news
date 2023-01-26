import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-gray-200 pt-2 items-center h-[90px] flex gap-10 shadow-md mb-10">
      <img className="w-[100px] " src="/logo-no-background.svg" alt="" />
      <ul className="flex gap-5">
        <Link to={`/`}>
          <li className="hover:font-bold transition-all">HOME</li>
        </Link>

        <Link to={`/sports`}>
          <li className="hover:font-bold transition-all">SPORTS</li>
        </Link>
        <Link to={`/entertainment`}>
          <li className="hover:font-bold transition-all">ENTERTAINMENT</li>
        </Link>
        <Link to={`/crime`}>
          <li className="hover:font-bold transition-all">CRIME</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;

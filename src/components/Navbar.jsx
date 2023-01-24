import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-gray-200 pt-2 items-center h-[90px] flex gap-10 shadow-md mb-10">
      <img className="w-[100px] " src="/logo-no-background.svg" alt="" />
      <ul className="flex gap-5">
        <Link to={`/${" "}`}>
          <li className="hover:font-bold transition-all">HOME</li>
        </Link>

        <Link to={`/${"&q=sports"}`}>
          <li className="hover:font-bold transition-all">SPORTS</li>
        </Link>

        <a href="">
          <li className="hover:font-bold transition-all">ENTERTAINMENT</li>
        </a>
        <a href="">
          <li className="hover:font-bold transition-all">CRIME</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;

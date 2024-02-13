import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-between h-auto p-1 m-1">
      <div className="block">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="flex justify-evenly w-auto"></div>
    </nav>
  );
}
export default Header;

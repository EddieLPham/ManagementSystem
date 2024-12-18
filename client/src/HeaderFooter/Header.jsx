import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="Header">
      <div className="header-tab">
        <NavLink to="/">Home</NavLink>
      </div>
    </nav>
  );
}
export default Header;

import React from "react";
import { Link, NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div className="SideBar">
      <ul className="sidebar-list">
        <li className="sidebar-link">
          <NavLink to="/user">
            <span>User list</span>
          </NavLink>
        </li>
        <li className="sidebar-link">
          <NavLink to="/booking">
            <span>Schedule</span>
          </NavLink>
        </li>
        <li className="sidebar-link">
          <a href="#">
            <span>TBD..</span>
          </a>
        </li>
        <li className="sidebar-link">
          <a href="#">
            <span>TBD..</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;

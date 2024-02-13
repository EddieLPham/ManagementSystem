import React from "react";
import { Link, NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div className=" m-auto flex-col left-0 w-1/5 bg-white h-screen ">
      <ul className="flex flex-col py-4 space-y-1">
        <li className="px-5">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-500">
              Dashboard
            </div>
          </div>
        </li>
        <li>
          <NavLink
            to="/user"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="ml-2 text-sm tracking-wide truncate">
              User list
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="ml-2 text-sm tracking-wide truncate">
              Schedule
            </span>
          </NavLink>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="ml-2 text-sm tracking-wide truncate">
              Messages
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="ml-2 text-sm tracking-wide truncate">
              Notifications
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;

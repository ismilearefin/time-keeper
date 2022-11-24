import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar">
            <Link to='/' className=" normal-case text-2xl font-bold hidden lg:block  lg:navbar-start ">TimeKeeper</Link>
        <div className="dropdown navbar-start">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div className="navbar-end">
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Dashboard</Link>
            </li>
            <li>
              <Link>
                Blog
              </Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
          </div>
        </div>
        <Link to='/' className="normal-case lg:hidden text-xl navbar-end">TimeKeeper</Link>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal p-0">
        <li>
              <Link>Dashboard</Link>
            </li>
            <li >
              <Link>
                Blog
              </Link>
            </li>
            <li>
              <Link>Login</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Contextprovidor/Contextprovidor";

const Navbar = () => {
  const {user,logout} = useContext(Authcontext);

  function handleDelete(){
    return  logout()
  }


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
              <Link to='/dasboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/blog'>
                Blog
              </Link>
            </li>
            {user ?
            <li>
              <button onClick={handleDelete}>LogOut</button>
            </li>
            :
            <li>
              <Link to='/login'>LogIn</Link>
            </li>
          }
          </ul>
          </div>
        </div>
        <Link to='/' className="normal-case lg:hidden text-xl navbar-center">TimeKeeper</Link>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal p-0">
        <li>
              <Link to='/dasboard'>Dashboard</Link>
            </li>
            <li >
              <Link to='/blog'>
                Blog
              </Link>
            </li>
            {user ?
            <li>
              <button onClick={handleDelete}>LogOut</button>
            </li>
            :
            <li>
            <Link to='/login'>LogIn</Link>
            </li> 
          }
        </ul>
      </div>
      
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
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
    
    </div>
  );
};

export default Navbar;

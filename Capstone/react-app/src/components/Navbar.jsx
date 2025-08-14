import React from "react"; 
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <p className="navbarTitle">My New Pet</p>
      </div>

      <div className="nav-right">
        <div className="dropdown">
          <button className="dropbtn">Find a Pet</button>
          <div className="dropdown-content">
            <Link to="/dogs">Find a Dog</Link>
            <Link to="/cats">Find a Cat</Link>
          </div>
        </div>

        <NavLink to="/pet-advice" className={({ isActive }) => (isActive ? "active" : "")}>
          Pet Advice
        </NavLink>

        <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
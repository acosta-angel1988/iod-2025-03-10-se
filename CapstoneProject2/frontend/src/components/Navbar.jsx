import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

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
            <Link to="/pets/dogs">Find a Dog</Link>
            <Link to="/pets/cats">Find a Cat</Link>
          </div>
        </div>
        <Link to="/pet-advice">Pet Advice</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
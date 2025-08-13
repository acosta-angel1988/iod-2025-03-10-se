import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="nav-left">
        <p>My New Pet</p>
      </div>

      <div className="nav-center">
        <div className="dropdown">
          <button className="dropbtn">Find a Pet</button>
          <div className="dropdown-content">
            <a href="#!">Find a Dog</a>
            <a href="#!">Find a Cat</a>
          </div>
        </div>
      </div>

      <div className="nav-right">
        <ul>
          <li><a href="#!">Sign Up</a></li>
          <li><a href="#!">Login</a></li>
          <li><a className="active" href="#home">Home</a></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
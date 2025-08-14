import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#ff7f50", padding: "10px 20px" }}>
      <h2 style={{ display: "inline", color: "white" }}>MyWebsite</h2>
      <ul style={{ listStyle: "none", display: "inline", marginLeft: "20px" }}>
        <li style={{ display: "inline", margin: "0 10px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        </li>
        <li style={{ display: "inline", margin: "0 10px" }}>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        </li>
        <li style={{ display: "inline", margin: "0 10px" }}>
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
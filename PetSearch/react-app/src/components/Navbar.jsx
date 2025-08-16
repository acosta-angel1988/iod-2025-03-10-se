import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const go = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">🐾 Pet Adoption</Link>
      </div>

      <div className="nav-right">
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setOpen((v) => !v)}>
            Pets ▼
          </button>
          {open && (
            <div className="dropdown-content">
              <button onClick={() => go("/pets/dogs")}>Dogs</button>
              <button onClick={() => go("/pets/cats")}>Cats</button>
            </div>
          )}
        </div>
        <Link to="/pet-advice" className="nav-link">Pet Advice</Link>
      </div>
    </nav>
  );
};

export default Navbar;
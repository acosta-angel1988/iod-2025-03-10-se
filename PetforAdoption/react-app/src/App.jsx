import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import CatPage from "./pages/CatPage";
import DogPage from "./pages/DogPage";

export default function App() {
  return (
    <Router>
      <div
        style={{ maxWidth: 900, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}
      >
        <nav style={{ marginBottom: 30 }}>
          <Link
            to="/cats"
            style={{ marginRight: 20, textDecoration: "none", fontWeight: "bold", color: "#333" }}
          >
            Cats
          </Link>
          <Link to="/dogs" style={{ fontWeight: "bold", textDecoration: "none", color: "#333" }}>
            Dogs
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/cats" replace />} />
          <Route path="/cats" element={<CatPage />} />
          <Route path="/dogs" element={<DogPage />} />
        </Routes>
      </div>
    </Router>
  );
}
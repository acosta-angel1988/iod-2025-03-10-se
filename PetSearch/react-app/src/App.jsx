import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import DogPage from "./components/pages/DogPage";
import CatPage from "./components/pages/CatPage";



function App() {
  return (
    <Router>
      {/* Top Navigation */}
      <Navbar />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets/dogs" element={<DogPage />} />
        <Route path="/pets/cats" element={<CatPage />} />
        {/* Fallback if no route matches */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

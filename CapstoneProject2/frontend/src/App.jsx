import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import DogPage from "./pages/DogPage";
import CatPage from "./pages/CatPage";
import NotFound from "./pages/NotFound";
import PetAdvice from "./pages/PetAdvice";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets/dogs" element={<DogPage />} />
        <Route path="/pets/cats" element={<CatPage />} />
        <Route path="/pet-advice" element={<PetAdvice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
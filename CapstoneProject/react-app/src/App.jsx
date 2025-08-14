import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import DogPage from "./components/pages/DogPage";
import CatPage from "./components/pages/CatPage";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/Navbar";
import PetAdvice from "./components/pages/PetAdvice"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/pet-advice" element={<PetAdvice />} /> {/* new route */}
        <Route path="/pets/dogs" element={<DogPage />} />
        <Route path="/pets/cats" element={<CatPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
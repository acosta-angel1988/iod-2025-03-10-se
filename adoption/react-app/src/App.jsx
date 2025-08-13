import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SearchForm from "./pages/SearchForm";
import DogPage from "./components/DogPage";
import CatPage from "./components/CatPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchForm/>} />
        <Route path="/dogs" element={<DogPage />} />
        <Route path="/cats" element={<CatPage />} />

      </Routes>
    </Router>
  );
}

export default App;
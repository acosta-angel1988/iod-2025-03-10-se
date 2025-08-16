import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchForm.css';
import Slideshow from "./Slideshow";

const SearchForm = () => {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnimal) return alert("Please select an animal type");

    const path = `/pets/${selectedAnimal}s${location ? `?location=${encodeURIComponent(location)}` : ""}`;
    navigate(path);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <h2 className="searchTitle">Ready to adopt a pet?
          <p className="searchP">Let's get started. Search adoptable pets</p>
        </h2>
        <label htmlFor="animal-select">Animal Type:</label>
        <select id="animal-select" value={selectedAnimal} onChange={(e) => setSelectedAnimal(e.target.value)}>
          <option value="" disabled>Select Animal</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>

        <label htmlFor="location-input">Location:</label>
        <input type="text" id="location-input" placeholder="Enter location (optional)" value={location} onChange={(e) => setLocation(e.target.value)} />

        <button type="submit" disabled={!selectedAnimal}>Search</button>
      </form>
      <Slideshow />
    </div>
  );
};

export default SearchForm;
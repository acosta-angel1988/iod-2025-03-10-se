import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnimal) return;
    const path = `/pets/${selectedAnimal}s${location ? `?location=${encodeURIComponent(location)}` : ""}`;
    navigate(path);
  };

  return (
    <div className="search-container container">
      <form className="search-form" onSubmit={handleSubmit} noValidate>
        <div>
          <h2 className="searchTitle">Ready to adopt a pet?</h2>
          <p className="searchP">Let's get started. Search adoptable pets</p>
        </div>

        <div className="form-row">
          <label htmlFor="animal-select">Animal Type</label>
          <select
            id="animal-select"
            value={selectedAnimal}
            onChange={(e) => setSelectedAnimal(e.target.value)}
            required
          >
            <option value="" disabled>Select Animal</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="location-input">Location</label>
          <input
            id="location-input"
            type="text"
            placeholder="City or state (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            autoComplete="off"
          />
        </div>

        <button className="search-button" type="submit" disabled={!selectedAnimal}>
          Search
        </button>
      </form>

      <Slideshow />
    </div>
  );
};

export default SearchForm;
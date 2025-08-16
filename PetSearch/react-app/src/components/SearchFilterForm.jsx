import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";
const SearchForm = () => {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedAnimal) {
      alert("Please select an animal type");
      return;
    }

    // Navigate to correct page with optional location filter
    const path = `/pets/${selectedAnimal}s${
      location ? `?location=${encodeURIComponent(location)}` : ""
    }`;
    navigate(path);
  };

  return (
    <div className="search-container">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="search-form" noValidate>
        <h2 className="searchTitle">
          Ready to adopt a pet?
          <p className="searchP">Let’s get started — search adoptable pets!</p>
        </h2>

        {/* Animal Type Dropdown */}
        <div className="form-group">
          <label htmlFor="animal-select">Animal Type:</label>
          <select
            id="animal-select"
            value={selectedAnimal}
            onChange={(e) => setSelectedAnimal(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Animal
            </option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        {/* Location Input */}
        <div className="form-group">
          <label htmlFor="location-input">Location:</label>
          <input
            id="location-input"
            type="text"
            placeholder="Enter location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* Search Button (disabled until dropdown is chosen) */}
        <button
          type="submit"
          className="search-button"
          disabled={!selectedAnimal}
        >
          Search
        </button>
      </form>

     
    </div>
  );
};

export default SearchForm
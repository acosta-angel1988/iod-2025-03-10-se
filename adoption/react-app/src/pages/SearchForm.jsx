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
    if (location.trim()) {
      navigate(`/${selectedAnimal}s?location=${encodeURIComponent(location)}`);
    } else {
      navigate(`/${selectedAnimal}s`);
    }
  };

  return (
    <div className="searchform-container" style={{ maxWidth: "500px", margin: "auto", padding: "40px" }}>
      <form className="searchform-form" onSubmit={handleSubmit}>
        <label htmlFor="animal-select">Animal Type:</label>
        <select
          id="animal-select"
          className="searchform-select"
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

        <label htmlFor="location-input">Location:</label>
        <input
          id="location-input"
          className="landing-input"
          type="text"
          value={location}
          placeholder="Enter location"
          onChange={(e) => setLocation(e.target.value)}
        />

        <button className="searchform-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [petType, setPetType] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!petType) {
      alert("Please select Dog or Cat");
      return;
    }
    // Navigate to /dogs or /cats and pass location as query param
    navigate(`/${petType.toLowerCase()}s?location=${encodeURIComponent(location)}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Select Pet Type and Location</h1>
      <form onSubmit={handleSubmit}>
        <select
          value={petType}
          onChange={(e) => setPetType(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        >
          <option value="">-- Select Pet Type --</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>

        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: "8px", width: "200px", marginRight: "10px" }}
        />

        <button type="submit" style={{ padding: "8px 16px" }}>
          Search
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
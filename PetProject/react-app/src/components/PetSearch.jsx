import React, { useState } from "react";
import PetFilters from "./PetFilters";
import PetList from "./PetList";

const PetSearch = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    species: "",
    breed: "",
    age: "",
    location: "",
  });

  // Replace with your actual API key
  const API_KEY = "YOUR_API_KEY";
  const API_VERSION = 3;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const fetchPets = async () => {
    setLoading(true);
    setError(null);

    const baseUrl = "https://api.adoptapet.com/search/animals";
    const params = new URLSearchParams({
      key: API_KEY,
      v: API_VERSION,
      output: "json",
    });

    if (filters.species) params.append("species", filters.species);
    if (filters.breed) params.append("breed", filters.breed);
    if (filters.age) params.append("age", filters.age);
    if (filters.location) params.append("location", filters.location);

    try {
      const response = await fetch(`${baseUrl}?${params.toString()}`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setPets(data.pets || []);
    } catch (err) {
      setError(err.message);
      setPets([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Find Adoptable Pets</h2>
      <PetFilters filters={filters} onChange={handleChange} onSearch={fetchPets} />

      {loading && <p>Loading pets...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <PetList pets={pets} />
    </div>
  );
};

export default PetSearch;
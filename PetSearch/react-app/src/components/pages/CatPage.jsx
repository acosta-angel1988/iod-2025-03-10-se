import React, { useEffect, useMemo, useState } from "react";
import SearchFilterForm from "../SearchFilterForm";
import PetList from "../PetList";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

const CatPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

  async function fetchPets() {
    setLoading(true);
    const params = new URLSearchParams();
    if (breed) params.append("breed", breed);
    if (gender) params.append("gender", gender);
    if (color) params.append("color", color);
    if (location) params.append("location", location);

    const res = await fetch(`${API_BASE}/api/pets/cat?${params.toString()}`);
    const data = await res.json();
    setPets(Array.isArray(data) ? data : []);
    setLoading(false);
  }

  useEffect(() => {
    fetchPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breed, gender, color, location]);

  const filteredByName = useMemo(
    () => pets.filter(p => p.name?.toLowerCase().includes(searchTerm.toLowerCase())),
    [pets, searchTerm]
  );

  return (
    <main className="container">
      <h1 className="page-title">Find Your Cat</h1>
      <SearchFilterForm
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        breed={breed} setBreed={setBreed}
        gender={gender} setGender={setGender}
        color={color} setColor={setColor}
        location={location} setLocation={setLocation}
      />
      {loading ? <p style={{ textAlign: "center" }}>Loading cats…</p> : <PetList pets={filteredByName} />}
    </main>
  );
};

export default CatPage;
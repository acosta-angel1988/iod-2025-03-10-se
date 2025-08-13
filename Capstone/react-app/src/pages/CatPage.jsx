import React, { useState } from "react";
import PetList from "../components/PetList";

const sampleCats = [
  {
    id: 1,
    name: "Mittens",
    breed: "Tabby",
    sex: "Female",
    size: "Small",
    location: "New York",
    image: "https://placekitten.com/400/400",
  },
  {
    id: 2,
    name: "Luna",
    breed: "Siamese",
    sex: "Female",
    size: "Small",
    location: "San Francisco",
    image: "https://placekitten.com/401/401",
  },
  {
    id: 3,
    name: "Shadow",
    breed: "Persian",
    sex: "Male",
    size: "Medium",
    location: "Chicago",
    image: "https://placekitten.com/399/399",
  },
];

const CatPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [breedTerm, setBreedTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");

  const filteredCats = sampleCats.filter((cat) => {
    const matchName = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchBreed = breedTerm ? cat.breed.toLowerCase().includes(breedTerm.toLowerCase()) : true;
    const matchLocation = locationTerm ? cat.location.toLowerCase().includes(locationTerm.toLowerCase()) : true;
    return matchName && matchBreed && matchLocation;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Cats for Adoption</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: 10, padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Filter by breed"
          value={breedTerm}
          onChange={(e) => setBreedTerm(e.target.value)}
          style={{ marginRight: 10, padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={locationTerm}
          onChange={(e) => setLocationTerm(e.target.value)}
          style={{ padding: "8px" }}
        />
      </div>

      <PetList pets={filteredCats} />
    </div>
  );
};

export default CatPage;
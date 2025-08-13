import React, { useState } from "react";
import PetList from "../components/PetList";

const sampleDogs = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    sex: "Male",
    size: "Large",
    location: "New York",
    image: "https://placedog.net/400/400?id=1",
  },
  {
    id: 2,
    name: "Bella",
    breed: "Labrador",
    sex: "Female",
    size: "Medium",
    location: "San Francisco",
    image: "https://placedog.net/400/400?id=2",
  },
  {
    id: 3,
    name: "Max",
    breed: "Beagle",
    sex: "Male",
    size: "Medium",
    location: "Chicago",
    image: "https://placedog.net/400/400?id=3",
  },
];

const DogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [breedTerm, setBreedTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");

  const filteredDogs = sampleDogs.filter((dog) => {
    const matchName = dog.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchBreed = breedTerm ? dog.breed.toLowerCase().includes(breedTerm.toLowerCase()) : true;
    const matchLocation = locationTerm ? dog.location.toLowerCase().includes(locationTerm.toLowerCase()) : true;
    return matchName && matchBreed && matchLocation;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Dogs for Adoption</h1>

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

      <PetList pets={filteredDogs} />
    </div>
  );
};

export default DogPage;
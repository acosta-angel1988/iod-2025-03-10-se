import React, { useState, useMemo } from "react";
import SearchFilterForm from "./SearchFilterForm";
import PetList from "./PetList";
import "./PetPage.css";

const PetPage = ({ pets, title }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      const matchesName = pet.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
      const matchesBreed = breed ? pet.breed.toLowerCase().includes(breed.trim().toLowerCase()) : true;
      const matchesGender = gender ? pet.sex.toLowerCase() === gender.toLowerCase() : true;
      const matchesColor = color ? pet.color.toLowerCase().includes(color.trim().toLowerCase()) : true;
      const matchesLocation = location ? pet.location.toLowerCase().includes(location.trim().toLowerCase()) : true;
      return matchesName && matchesBreed && matchesGender && matchesColor && matchesLocation;
    });
  }, [pets, searchTerm, breed, gender, color, location]);

  return (
    <div className="pet-page">
      <h1>{title}</h1>
      <SearchFilterForm
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        breed={breed} setBreed={setBreed}
        gender={gender} setGender={setGender}
        color={color} setColor={setColor}
        location={location} setLocation={setLocation}
      />
      {filteredPets.length > 0 ? <PetList pets={filteredPets} /> : <p>No pets found matching your criteria.</p>}
    </div>
  );
};

export default PetPage;
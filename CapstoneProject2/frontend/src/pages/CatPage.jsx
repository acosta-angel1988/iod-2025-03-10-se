import React, { useState } from "react";
import SearchFilterForm from "../components/SearchFilterForm";
import PetList from "../components/PetList";
import "./CatPage.css";

const petData = [
  { id: 2, name: "Mittens", type: "Cat", breed: "Tabby", sex: "Female", size: "Small", color: "Brown", location: "San Francisco", image: "https://placekitten.com/400/400" },
  { id: 4, name: "Luna", type: "Cat", breed: "Siamese", sex: "Female", size: "Small", color: "Cream", location: "New York", image: "https://placekitten.com/401/401" },
  { id: 5, name: "Shadow", type: "Cat", breed: "Black Shorthair", sex: "Male", size: "Medium", color: "Black", location: "Los Angeles", image: "https://placekitten.com/402/402" },
];

const CatPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

  const filteredCats = petData.filter((pet) => {
    return pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (breed ? pet.breed.toLowerCase().includes(breed.toLowerCase()) : true) &&
      (gender ? pet.sex.toLowerCase() === gender.toLowerCase() : true) &&
      (color ? pet.color.toLowerCase().includes(color.toLowerCase()) : true) &&
      (location ? pet.location.toLowerCase().includes(location.toLowerCase()) : true);
  });

  return (
    <div className="cat-page">
      <h1>Find Your Cat</h1>
      <SearchFilterForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} breed={breed} setBreed={setBreed} gender={gender} setGender={setGender} color={color} setColor={setColor} location={location} setLocation={setLocation} />
      <PetList pets={filteredCats} />
    </div>
  );
};

export default CatPage;
import React, { useState } from "react";
import SearchFilterForm from "../components/SearchFilterForm";
import PetList from "../components/PetList";
import "./DogPage.css";

const petData = [
  { id: 1, name: "Buddy", type: "Dog", breed: "Golden Retriever", sex: "Male", size: "Large", color: "Golden", location: "New York", image: "https://placedog.net/400/400?id=1" },
  { id: 3, name: "Charlie", type: "Dog", breed: "Beagle", sex: "Male", size: "Medium", color: "Brown/White", location: "Chicago", image: "https://placedog.net/400/400?id=2" },
  { id: 6, name: "Bella", type: "Dog", breed: "Labrador", sex: "Female", size: "Large", color: "Black", location: "San Francisco", image: "https://placedog.net/400/400?id=3" },
];

const DogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

  const filteredDogs = petData.filter((pet) => {
    return pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (breed ? pet.breed.toLowerCase().includes(breed.toLowerCase()) : true) &&
      (gender ? pet.sex.toLowerCase() === gender.toLowerCase() : true) &&
      (color ? pet.color.toLowerCase().includes(color.toLowerCase()) : true) &&
      (location ? pet.location.toLowerCase().includes(location.toLowerCase()) : true);
  });

  return (
    <div className="dog-page">
      <h1>Find Your Dog</h1>
      <SearchFilterForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} breed={breed} setBreed={setBreed} gender={gender} setGender={setGender} color={color} setColor={setColor} location={location} setLocation={setLocation} />
      <PetList pets={filteredDogs} />
    </div>
  );
};

export default DogPage;